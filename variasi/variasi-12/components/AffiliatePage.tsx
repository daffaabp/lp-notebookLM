import React, { useState, useEffect } from 'react';
import { Loader2, Copy, Share2, Users, CreditCard } from 'lucide-react';

const AffiliatePage: React.FC = () => {
    const [phone, setPhone] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [stats, setStats] = useState<{
        totalReferrals: number;
        successfulReferrals: number;

        actualCommission: number;
        pendingCommission: number;
        affiliateId: string;
        referralsList: Array<{
            name: string;
            phone: string;
            status: string;
            joinedAt: string;
        }>;
    } | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const apiUrl = import.meta.env.VITE_API_AFFILIATE_URL || 'https://ujdbqubpdeuhbhrcbhan.supabase.co/functions/v1/affiliate';

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
                },
                body: JSON.stringify({ phone })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Terjadi kesalahan');
            }

            setStats({
                totalReferrals: data.stats.totalReferrals,
                successfulReferrals: data.stats.successfulReferrals,
                actualCommission: data.stats.actualCommission,
                pendingCommission: data.stats.pendingCommission,
                affiliateId: data.affiliateId,
                referralsList: data.referralsList
            });

            // Persist Login
            localStorage.setItem('affiliate_phone', phone);


        } catch (error: any) {
            alert(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    // Auto-login check
    useEffect(() => {
        const savedPhone = localStorage.getItem('affiliate_phone');
        if (savedPhone) {
            setPhone(savedPhone);
            // Simulate form submission or just fetch function extraction
            // Better to refactor fetch logic
            const fetchStats = async () => {
                setIsLoading(true);
                try {
                    const apiUrl = import.meta.env.VITE_API_AFFILIATE_URL || 'https://ujdbqubpdeuhbhrcbhan.supabase.co/functions/v1/affiliate';
                    const response = await fetch(apiUrl, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
                        },
                        body: JSON.stringify({ phone: savedPhone })
                    });
                    const data = await response.json();
                    if (!response.ok) throw new Error(data.error);

                    setStats({
                        totalReferrals: data.stats.totalReferrals,
                        successfulReferrals: data.stats.successfulReferrals,
                        actualCommission: data.stats.actualCommission,
                        pendingCommission: data.stats.pendingCommission,
                        affiliateId: data.affiliateId,
                        referralsList: data.referralsList
                    });
                } catch (e: any) {
                    console.error("Auto-login failed:", e);
                    // If auto-login fails, maybe clear storage?
                    // localStorage.removeItem('affiliate_phone');
                } finally {
                    setIsLoading(false);
                }
            };
            fetchStats();
        }
    }, []);

    const logout = () => {
        localStorage.removeItem('affiliate_phone');
        setStats(null);
        setPhone('');
    };

    const affiliateLink = `${window.location.origin}${window.location.pathname}?ref=${phone}`;

    const copyLink = () => {
        navigator.clipboard.writeText(affiliateLink);
        alert('Link berhasil disalin!');
    };

    if (stats) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans text-dark">
                <div className="bg-white rounded-3xl shadow-xl w-full max-w-lg overflow-hidden">
                    <div className="bg-primary p-6 text-white text-center">
                        <h1 className="text-2xl font-bold">Affiliate Dashboard</h1>
                        <p className="opacity-90 mt-1">Halo, +{phone}</p>
                    </div>

                    <div className="p-8 space-y-8">
                        {/* Link Section */}
                        <div className="space-y-3">
                            <label className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Link Affiliate Anda</label>
                            <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-xl border border-gray-200">
                                <input
                                    readOnly
                                    value={affiliateLink}
                                    className="bg-transparent flex-grow text-sm font-medium focus:outline-none text-gray-600"
                                />
                                <button onClick={copyLink} className="p-2 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors text-primary">
                                    <Copy size={18} />
                                </button>
                            </div>
                            <p className="text-xs text-gray-400">Bagikan link ini untuk mendapatkan komisi.</p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100 flex flex-col items-center text-center">
                                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-2">
                                    <Users size={20} />
                                </div>
                                <span className="text-2xl font-bold text-gray-800">{stats.totalReferrals}</span>
                                <span className="text-xs text-gray-500 font-medium uppercase mt-1">Total Leads</span>
                            </div>

                            <div className="bg-green-50 p-4 rounded-2xl border border-green-100 flex flex-col items-center text-center">
                                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2">
                                    <CreditCard size={20} />
                                </div>
                                <span className="text-xl md:text-2xl font-bold text-gray-800">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(stats.actualCommission)}</span>
                                <span className="text-xs text-gray-500 font-medium uppercase mt-1">Komisi Cair</span>
                            </div>

                            <div className="bg-yellow-50 p-4 rounded-2xl border border-yellow-100 flex flex-col items-center text-center">
                                <div className="w-10 h-10 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mb-2">
                                    <CreditCard size={20} />
                                </div>
                                <span className="text-xl md:text-2xl font-bold text-gray-800">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(stats.pendingCommission)}</span>
                                <span className="text-xs text-gray-500 font-medium uppercase mt-1">Pending Komisi</span>
                            </div>
                        </div>

                        {/* Referrals List Table */}
                        <div className="mt-8">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">Daftar Referral</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-gray-100 text-gray-600 font-semibold">
                                        <tr>
                                            <th className="px-4 py-3 rounded-tl-lg">Nama</th>
                                            <th className="px-4 py-3">No. HP</th>
                                            <th className="px-4 py-3">Status</th>
                                            <th className="px-4 py-3 rounded-tr-lg">Tanggal</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {stats.referralsList && stats.referralsList.length > 0 ? (
                                            stats.referralsList.map((referral, index) => (
                                                <tr key={index} className="hover:bg-gray-50 transition-colors">
                                                    <td className="px-4 py-3 font-medium text-gray-800">{referral.name}</td>
                                                    <td className="px-4 py-3 text-gray-500">{referral.phone}</td>
                                                    <td className="px-4 py-3">
                                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${referral.status === 'Paid' ? 'bg-green-100 text-green-700' :
                                                            referral.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                                                                'bg-gray-100 text-gray-700'
                                                            }`}>
                                                            {referral.status === 'Paid' ? 'Lunas' :
                                                                referral.status === 'Pending' ? 'Menunggu' : 'Terdaftar'}
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3 text-gray-500">
                                                        {new Date(referral.joinedAt).toLocaleDateString('id-ID', {
                                                            day: 'numeric',
                                                            month: 'short'
                                                        })}
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan={4} className="px-4 py-8 text-center text-gray-400 italic">
                                                    Belum ada referral
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <a href="/" className="block w-full py-2 text-center text-gray-500 hover:text-primary font-medium transition-colors">
                            Kembali ke Halaman Utama
                        </a>
                        <button onClick={logout} className="block w-full py-2 text-center text-red-500 hover:text-red-700 font-medium transition-colors text-sm">
                            Keluar
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <section className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans text-dark">
            <div className="bg-white rounded-3xl shadow-xl w-full max-w-md overflow-hidden">
                <div className="bg-primary p-8 text-white text-center">
                    <h2 className="text-2xl font-bold mb-2">Login Affiliate</h2>
                    <p className="text-white/80 text-sm">Masuk untuk melihat performa affiliate Anda</p>
                </div>

                <div className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 ml-1">Nomor WhatsApp</label>
                            <input
                                type="tel"
                                placeholder="Contoh: 08123456789"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all bg-gray-50 focus:bg-white"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-gold text-dark py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:bg-yellow-400 hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <Loader2 className="animate-spin" /> MEMUAT...
                                </span>
                            ) : (
                                'MASUK / DAFTAR'
                            )}
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <a href="/" className="text-sm text-gray-400 hover:text-primary transition-colors">
                            Kembali ke Halaman Utama
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AffiliatePage;
