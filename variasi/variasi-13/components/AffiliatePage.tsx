import React, { useState, useEffect } from 'react';
import { CopyIcon, UsersIcon, CreditCardIcon, LoaderIcon } from './Icons';

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
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans">
                <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl overflow-hidden">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-900 p-6 text-white text-center">
                        <h1 className="text-2xl font-bold">Affiliate Dashboard</h1>
                        <p className="opacity-90 mt-1">Halo, +{phone}</p>
                    </div>

                    <div className="p-8 space-y-8">
                        {/* Link Section */}
                        <div className="space-y-3">
                            <label className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Link Affiliate Anda</label>
                            <div className="flex items-center gap-2 bg-gray-100 p-3 rounded-lg border border-gray-200">
                                <input
                                    readOnly
                                    value={affiliateLink}
                                    className="bg-transparent flex-grow text-sm font-medium focus:outline-none text-gray-600"
                                />
                                <button onClick={copyLink} className="p-2 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors text-blue-600">
                                    <CopyIcon className="w-5 h-5" />
                                </button>
                            </div>
                            <p className="text-xs text-gray-400">Bagikan link ini untuk mendapatkan komisi.</p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex flex-col items-center text-center">
                                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-2">
                                    <UsersIcon className="w-5 h-5" />
                                </div>
                                <span className="text-2xl font-bold text-gray-800">{stats.totalReferrals}</span>
                                <span className="text-xs text-gray-500 font-medium uppercase mt-1">Total Leads</span>
                            </div>

                            <div className="bg-green-50 p-4 rounded-xl border border-green-100 flex flex-col items-center text-center">
                                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2">
                                    <CreditCardIcon className="w-5 h-5" />
                                </div>
                                <span className="text-xl md:text-2xl font-bold text-gray-800">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(stats.actualCommission)}</span>
                                <span className="text-xs text-gray-500 font-medium uppercase mt-1">Komisi Cair</span>
                            </div>

                            <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-100 flex flex-col items-center text-center">
                                <div className="w-10 h-10 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mb-2">
                                    <CreditCardIcon className="w-5 h-5" />
                                </div>
                                <span className="text-xl md:text-2xl font-bold text-gray-800">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(stats.pendingCommission)}</span>
                                <span className="text-xs text-gray-500 font-medium uppercase mt-1">Pending Komisi</span>
                            </div>
                        </div>

                        {/* Pencairan Komisi Info */}
                        <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-4 mt-6">
                            <div className="flex items-start gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        <strong>Tentang Pencairan Komisi:</strong> Tenang, komisi Anda aman dan akan dicairkan! Tim admin Kelas Inovatif akan menghubungi Anda untuk proses pencairan komisi yang sudah terkumpul. Semua komisi yang terlihat di dashboard ini akan kami proses pencairannya.
                                    </p>
                                </div>
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

                        <a href="/" className="block w-full py-2 text-center text-gray-500 hover:text-blue-600 font-medium transition-colors">
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
        <section className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4 font-sans">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl lg:max-w-6xl xl:max-w-7xl overflow-hidden">
                <div className="bg-gradient-to-br from-blue-600 to-blue-900 p-5 md:p-6 text-white text-center">
                    <h4 className="text-2xl md:text-3xl font-bold mb-1">Selamat Datang Affiliator Kelas Inovatif</h4>
                </div>

                <div className="p-8 md:p-10">
                    {/* What is Affiliate - Khusus Alumni */}
                    <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6 mb-6">
                        <h4 className="font-bold text-gray-900 mb-3 text-lg">Apa Itu Program Affiliasi?</h4>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Sebagai alumni Kelas Inovatif, Anda memiliki akses eksklusif untuk menjadi <strong>affiliator</strong> program webinar ini. Dapatkan <strong>komisi</strong> setiap kali seseorang mendaftar melalui link referral unik Anda.
                        </p>
                        <p className="text-gray-600 text-sm italic">
                            Program ini terbuka untuk siapa saja yang ingin berkontribusi memperluas manfaat AI sekaligus mendapatkan peluang penghasilan tambahan—baik Anda akademisi, mahasiswa, profesional, ataupun pegiat teknologi lainnya.
                        </p>
                    </div>

                    {/* How it Works */}
                    <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200 rounded-lg p-6 mb-8">
                        <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            Bagaimana Caranya?
                        </h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">1</div>
                                <div>
                                    <p className="font-semibold text-gray-900">Masukkan Nomor WhatsApp</p>
                                    <p className="text-gray-600 text-sm">Daftar sebagai affiliator dengan nomor WhatsApp Anda di bawah ini</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">2</div>
                                <div>
                                    <p className="font-semibold text-gray-900">Dapatkan Link Unik Anda</p>
                                    <p className="text-gray-600 text-sm">Setelah login, Anda akan mendapatkan link referral personal yang bisa dibagikan</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-yellow-400 text-blue-900 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">3</div>
                                <div>
                                    <p className="font-semibold text-gray-900">Bagikan & Dapatkan Komisi</p>
                                    <p className="text-gray-600 text-sm">Bagikan ke sesama dosen, mahasiswa, atau profesional. Setiap pembayaran berhasil = komisi untuk Anda</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-base font-bold text-gray-900 ml-1">
                                Masukkan Nomor WhatsApp anda untuk bergabung sebagai afiliator
                            </label>
                            <input
                                type="tel"
                                placeholder="Contoh: 08xxxxxxxxx"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                                className="w-full px-5 py-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white text-gray-900 font-medium text-lg"
                            />
                            <p className="text-xs text-gray-500 ml-1 flex items-center gap-1">
                                Pastikan nomor WhatsApp yang Anda masukkan benar
                            </p>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-900 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                            {isLoading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <LoaderIcon className="animate-spin w-5 h-5" /> MEMPROSES...
                                </span>
                            ) : (
                                'MASUK / DAFTAR SEBAGAI AFFILIATOR'
                            )}
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <a href="/" className="text-sm text-gray-500 hover:text-blue-600 transition-colors font-medium">
                            ← Kembali ke Halaman Utama
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AffiliatePage;

