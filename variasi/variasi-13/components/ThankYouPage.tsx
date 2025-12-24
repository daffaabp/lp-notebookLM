import React, { useEffect, useState } from 'react';
import { CheckIcon, LoaderIcon, MailIcon, MessageCircleIcon, PhoneIcon, AlertCircleIcon } from './Icons';

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
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">
                <LoaderIcon className="w-12 h-12 animate-spin text-blue-600 mb-4" />
                <p className="text-lg font-medium">Memverifikasi status pembayaran...</p>
            </div>
        );
    }

    if (status === 'failed') {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 text-gray-800 px-4">
                <AlertCircleIcon className="w-16 h-16 text-red-500 mb-4" />
                <h1 className="text-2xl font-bold mb-2 text-red-700">Akses Ditolak</h1>
                <p className="text-gray-600 mb-6 text-center max-w-md">{message}</p>
                <a href="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                    Kembali ke Beranda
                </a>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800 px-4 relative overflow-hidden">
            <div className="max-w-lg w-full relative z-10 bg-white rounded-2xl shadow-2xl p-8 md:p-10">
                {/* Success Icon */}
                <div className="text-center mb-8">
                    <div className="mx-auto bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                        <CheckIcon className="w-10 h-10 text-green-600" />
                    </div>
                    <h1 className="text-3xl font-bold mb-2 text-gray-900">Pembayaran Berhasil!</h1>
                    <p className="text-gray-600 mb-3">
                        Terima kasih telah mendaftar pada event webinar ini.
                    </p>
                    <p className="text-sm font-semibold text-gray-700 mb-2">
                        📅 Sabtu, 27 Desember 2025
                    </p>
                    <p className="text-sm text-gray-600">
                        ⏰ Pukul 19.00 - 21.00 WIB
                    </p>
                </div>

                {/* Poin 1: Email */}
                <div className="mb-5 text-left">
                    <div className="flex items-start gap-3">
                        <MailIcon className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-1">1. Bukti Pembayaran Dikirim ke Email</h3>
                            <p className="text-sm text-gray-600">
                                Kami telah mengirimkan bukti pembayaran ke email Anda. Silakan cek inbox atau folder spam.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Poin 2: WhatsApp */}
                <div className="mb-5 text-left">
                    <div className="flex items-start gap-3">
                        <MessageCircleIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-1">2. Bergabung Grup WhatsApp</h3>
                            <p className="text-sm text-gray-600">
                                Dapatkan update terkini, materi eksklusif, dan informasi webinar melalui grup WhatsApp peserta.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Poin 3: Customer Service */}
                <div className="mb-8 text-left">
                    <div className="flex items-start gap-3">
                        <PhoneIcon className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-1">3. Tim Akan Menghubungi Anda</h3>
                            <p className="text-sm text-gray-600">
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
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-lg transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                    >
                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                        Gabung Grup WhatsApp Webinar
                    </a>
                </div>

                {/* Transaction ID */}
                <div className="text-center border-t pt-6">
                    <p className="text-xs text-gray-400">
                        ID Transaksi: <span className="font-mono">{new URLSearchParams(window.location.search).get('order_id')}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ThankYouPage;

