import React, { useState, useEffect } from 'react';
import { UsersIcon, LoaderIcon } from './Icons';

interface AffiliateStat {
    id: string;
    phone: string;
    totalReferrals: number;
    actualCommission: number;
    pendingCommission: number;
}

interface PendingReferral {
    name: string;
    phone: string;
    affiliatePhone: string;
    joinedAt: string;
    status: string;
}

const AdminPage: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<{ affiliates: AffiliateStat[], pendingReferrals: PendingReferral[] } | null>(null);

    const performLogin = async (u: string, p: string) => {
        setIsLoading(true);
        try {
            const apiUrl = import.meta.env.VITE_API_ADMIN_URL || 'https://ujdbqubpdeuhbhrcbhan.supabase.co/functions/v1/admin';

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
                },
                body: JSON.stringify({ username: u, password: p })
            });

            const result = await response.json();

            if (!response.ok) {
                if (localStorage.getItem('admin_username')) logout();
                throw new Error(result.error || 'Login failed');
            }

            setData(result);
            setIsAuthenticated(true);

        } catch (error: any) {
            console.error(error);
            alert(error.message || 'Login gagal');
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        performLogin(username, password);
        localStorage.setItem('admin_username', username);
        localStorage.setItem('admin_password', password);
    };

    useEffect(() => {
        const savedUser = localStorage.getItem('admin_username');
        const savedPass = localStorage.getItem('admin_password');
        if (savedUser && savedPass) {
            setUsername(savedUser);
            setPassword(savedPass);
            performLogin(savedUser, savedPass);
        }
    }, []);

    const logout = () => {
        setIsAuthenticated(false);
        setData(null);
        setUsername('');
        setPassword('');
        localStorage.removeItem('admin_username');
        localStorage.removeItem('admin_password');
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans">
                <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-900 p-6 rounded-t-2xl -m-8 mb-6 text-white text-center">
                        <h1 className="text-2xl font-bold">Admin Login</h1>
                    </div>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                            <input
                                type="text"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors disabled:opacity-70 flex items-center justify-center"
                        >
                            {isLoading ? (
                                <LoaderIcon className="animate-spin w-5 h-5" />
                            ) : 'Login'}
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-6 font-sans">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
                    <button onClick={logout} className="flex items-center gap-2 px-4 py-2 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Logout
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Affiliates Table */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                        <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-blue-100">
                            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                                <UsersIcon className="w-5 h-5 text-blue-600" />
                                Affiliate Performance
                            </h2>
                            <p className="text-sm text-gray-500 mt-1">Track commissions and payouts.</p>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-gray-50 text-gray-600 font-semibold">
                                    <tr>
                                        <th className="px-6 py-4">Phone</th>
                                        <th className="px-6 py-4 text-center">Referrals</th>
                                        <th className="px-6 py-4 text-right">Pending</th>
                                        <th className="px-6 py-4 text-right">Payout (Actual)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {data?.affiliates.map((aff) => (
                                        <tr key={aff.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 font-medium text-gray-700">{aff.phone}</td>
                                            <td className="px-6 py-4 text-center">{aff.totalReferrals}</td>
                                            <td className="px-6 py-4 text-right text-yellow-600 font-medium">
                                                {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(aff.pendingCommission)}
                                            </td>
                                            <td className="px-6 py-4 text-right text-green-600 font-bold">
                                                {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(aff.actualCommission)}
                                            </td>
                                        </tr>
                                    ))}
                                    {data?.affiliates.length === 0 && (
                                        <tr><td colSpan={4} className="px-6 py-8 text-center text-gray-400">No affiliates found.</td></tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Pending Referrals (Follow Up) */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                        <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-yellow-50 to-yellow-100">
                            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                Follow Up Needed
                            </h2>
                            <p className="text-sm text-gray-500 mt-1">Referrals with pending payments.</p>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-gray-50 text-gray-600 font-semibold">
                                    <tr>
                                        <th className="px-6 py-4">Name</th>
                                        <th className="px-6 py-4">Phone</th>
                                        <th className="px-6 py-4">Affiliate</th>
                                        <th className="px-6 py-4">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {data?.pendingReferrals.map((ref, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 font-medium text-gray-700">{ref.name}</td>
                                            <td className="px-6 py-4">{ref.phone}</td>
                                            <td className="px-6 py-4 text-gray-500">{ref.affiliatePhone}</td>
                                            <td className="px-6 py-4">
                                                <a
                                                    href={`https://wa.me/${ref.phone.replace(/^0/, '62')}?text=Halo Kak ${ref.name}, saya lihat kakak sudah mendaftar tapi belum menyelesaikan pembayaran. Ada kendala yang bisa saya bantu?`}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold hover:bg-green-200 transition-colors"
                                                >
                                                    Follow Up
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                    {data?.pendingReferrals.length === 0 && (
                                        <tr><td colSpan={4} className="px-6 py-8 text-center text-gray-400">No pending referrals.</td></tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;

