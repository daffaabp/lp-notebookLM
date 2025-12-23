import React, { useEffect, useState } from 'react';

const ThankYouPage: React.FC = () => {
    const [status, setStatus] = useState<'loading' | 'success' | 'failed'>('loading');
    const [groupLink, setGroupLink] = useState('');
    const [message, setMessage] = useState('');

    const isVerifying = React.useRef(false);

    useEffect(() => {
        const verifyPayment = async () => {
            if (isVerifying.current) return;
            isVerifying.current = true;

            const params = new URLSearchParams(window.location.search);
            const orderId = params.get('order_id');

            if (!orderId) {
                setStatus('failed');
                setMessage('No Order ID found.');
                return;
            }

            try {
                // UPDATE: Using the new project's verify-payment URL
                const response = await fetch('https://ujdbqubpdeuhbhrcbhan.supabase.co/functions/v1/verify-payment', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
                    },
                    body: JSON.stringify({ orderId })
                });

                const data = await response.json();

                if (data.valid) {
                    setStatus('success');
                    setGroupLink(data.groupLink || 'https://chat.whatsapp.com/BOqKjdH2A4PIHwFwhwPkev');
                    // Track Purchase/CompleteRegistration
                    // @ts-ignore
                    if (window.fbq) {
                        // @ts-ignore
                        window.fbq('track', 'CompleteRegistration', {
                            value: 129000,
                            currency: 'IDR',
                            content_name: 'Webinar Publikasi'
                        });
                        // @ts-ignore
                        window.fbq('track', 'Purchase', {
                            value: 129000,
                            currency: 'IDR',
                            content_name: 'Webinar Publikasi',
                            order_id: orderId
                        });
                    }
                } else {
                    setStatus('failed');
                    setMessage(data.message || 'Payment not verified.');
                }
            } catch (error) {
                console.error(error);
                setStatus('failed');
                setMessage('Failed to verify payment. Please check your connection.');
            }
        };

        verifyPayment();
    }, []);

    if (status === 'loading') {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-slate-800">
                <i className="fas fa-spinner fa-spin text-5xl text-slate-600 mb-4"></i>
                <p className="text-lg font-medium font-serif">Memverifikasi status pembayaran...</p>
            </div>
        );
    }

    if (status === 'failed') {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 text-slate-800 px-4 font-serif">
                <i className="fas fa-exclamation-circle text-6xl text-red-500 mb-4"></i>
                <h1 className="text-2xl font-bold mb-2 text-red-700">Akses Ditolak</h1>
                <p className="text-gray-600 mb-6 text-center max-w-md">{message}</p>
                <a href="/" className="px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors font-sans">
                    Kembali ke Beranda
                </a>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white text-slate-800 px-4 relative overflow-hidden font-serif">

            <div className="max-w-lg w-full relative z-10">
                {/* Success Icon */}
                <div className="text-center mb-8">
                    <div className="mx-auto bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                        <i className="fas fa-check-circle text-5xl text-green-600"></i>
                    </div>
                    <h1 className="text-3xl font-bold mb-2 text-slate-900">Pembayaran Berhasil!</h1>
                    <p className="text-slate-600 mb-3 font-sans">
                        Terima kasih telah mendaftar pada event webinar ini.
                    </p>
                    <p className="text-sm font-semibold text-slate-700 mb-2 font-sans">
                        📅 Sabtu, 27 Desember 2025
                    </p>
                    <p className="text-sm text-slate-600 font-sans">
                        ⏰ Pukul 19.00 - 21.00 WIB
                    </p>
                </div>

                {/* Poin 1: Email */}
                <div className="mb-5 text-left">
                    <div className="flex items-start gap-3">
                        <i className="fas fa-envelope text-xl text-blue-600 mt-0.5 flex-shrink-0"></i>
                        <div>
                            <h3 className="font-semibold text-slate-900 mb-1 font-sans">1. Bukti Pembayaran Dikirim ke Email</h3>
                            <p className="text-sm text-slate-600 font-sans">
                                Kami telah mengirimkan bukti pembayaran ke email Anda. Silakan cek inbox atau folder spam.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Poin 2: WhatsApp */}
                <div className="mb-5 text-left">
                    <div className="flex items-start gap-3">
                        <i className="fab fa-whatsapp text-xl text-green-600 mt-0.5 flex-shrink-0"></i>
                        <div>
                            <h3 className="font-semibold text-slate-900 mb-1 font-sans">2. Bergabung Grup WhatsApp</h3>
                            <p className="text-sm text-slate-600 font-sans">
                                Dapatkan update terkini, materi eksklusif, dan informasi webinar melalui grup WhatsApp peserta.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Poin 3: Customer Service */}
                <div className="mb-8 text-left">
                    <div className="flex items-start gap-3">
                        <i className="fas fa-headset text-xl text-orange-600 mt-0.5 flex-shrink-0"></i>
                        <div>
                            <h3 className="font-semibold text-slate-900 mb-1 font-sans">3. Tim Akan Menghubungi Anda</h3>
                            <p className="text-sm text-slate-600 font-sans">
                                Customer service kami akan menghubungi Anda segera untuk konfirmasi dan informasi selanjutnya.
                            </p>
                        </div>
                    </div>
                </div>

                {/* WhatsApp Button */}
                <div className="text-center mb-6">
                    <a
                        href={groupLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl font-sans"
                    >
                        <i className="fab fa-whatsapp text-xl"></i>
                        Gabung Grup WhatsApp Webinar
                    </a>
                </div>

                {/* Transaction ID */}
                <div className="text-center border-t pt-6">
                    <p className="text-xs text-gray-400 font-sans">
                        ID Transaksi: <span className="font-mono">{new URLSearchParams(window.location.search).get('order_id')}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ThankYouPage;
