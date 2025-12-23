import React, { useState, useEffect } from 'react';

const RegistrationForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        source: 'lp-9'
    });
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { type, value } = e.target;
        // For phone/tel inputs, check name attribute or type
        if (type === 'tel' || e.target.getAttribute('placeholder')?.includes('08')) {
            setFormData(prev => ({ ...prev, phone: value }));
        } else if (type === 'email') {
            setFormData(prev => ({ ...prev, email: value }));
        } else {
            setFormData(prev => ({ ...prev, name: value }));
        }
    };

    const loadMidtransScript = (): Promise<void> => {
        return new Promise((resolve, reject) => {
            const scriptId = "midtrans-script";
            if (document.getElementById(scriptId)) {
                resolve();
                return;
            }

            const clientKey = import.meta.env.VITE_MIDTRANS_CLIENT_KEY;
            if (!clientKey) {
                console.error("VITE_MIDTRANS_CLIENT_KEY is missing!");
                reject(new Error("Configuration Error: Midtrans Client Key is missing."));
                return;
            }

            const script = document.createElement("script");
            const isSandbox = import.meta.env.VITE_MIDTRANS_SANDBOX === 'true';
            script.src = isSandbox
                ? "https://app.sandbox.midtrans.com/snap/snap.js"
                : "https://app.midtrans.com/snap/snap.js";

            script.id = scriptId;
            script.setAttribute("data-client-key", clientKey);
            script.async = true;
            script.onload = () => resolve();
            script.onerror = () => reject(new Error('Failed to load payment script'));
            document.body.appendChild(script);
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitStatus('submitting');

        try {
            await loadMidtransScript();

            const apiUrl = import.meta.env.VITE_API_URL || 'https://ujdbqubpdeuhbhrcbhan.supabase.co/functions/v1/submit-registration';

            // Track InitiateCheckout
            // @ts-ignore
            if (window.fbq) {
                // @ts-ignore
                window.fbq('track', 'InitiateCheckout', {
                    value: 129000,
                    currency: 'IDR',
                    content_name: 'Webinar Publikasi',
                    num_ids: 1
                });
            }

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    source: formData.source,
                    finishUrl: `${window.location.origin}${window.location.pathname}?page=thank-you`
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Gagal mendaftar');
            }

            // @ts-ignore
            window.snap.pay(data.snapToken, {
                onSuccess: function (result: any) {
                    window.location.href = `${window.location.origin}${window.location.pathname}?page=thank-you&order_id=${data.orderId}`;
                },
                onPending: function (result: any) {
                    alert("Menunggu pembayaran...");
                    console.log(result);
                },
                onError: function (result: any) {
                    alert("Pembayaran gagal!");
                    console.log(result);
                },
                onClose: function () {
                    alert('Anda menutup popup sebelum menyelesaikan pembayaran');
                    setSubmitStatus('idle');
                }
            });

        } catch (error: any) {
            alert(error.message);
            setSubmitStatus('idle');
        }
    };

    return (
        <section id="register" className="py-24 legal-gradient text-white relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:20px_20px]"></div>

            <div className="container mx-auto px-6 max-w-lg relative z-10">
                <div className="bg-white p-12 rounded-lg shadow-2xl text-slate-900">
                    <h2 className="text-3xl font-black text-center mb-4 uppercase tracking-tighter text-slate-800">
                        Formulir Pendaftaran
                    </h2>
                    <p className="text-center text-slate-500 mb-10 text-sm font-medium italic border-b pb-4">
                        Sabtu, 20 Desember 2025 | 19:00 WIB via Google Meet
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-xs font-black uppercase text-slate-500 mb-2">
                                Nama Lengkap
                            </label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Masukkan nama lengkap Anda"
                                autoComplete="off"
                                className="w-full p-4 border-2 border-slate-200 rounded bg-slate-50 focus:bg-white focus:border-gold outline-none transition duration-200 placeholder-slate-300"
                                required
                                disabled={submitStatus === 'submitting'}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-black uppercase text-slate-500 mb-2">
                                Email Aktif
                            </label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Masukkan email Anda"
                                autoComplete="off"
                                className="w-full p-4 border-2 border-slate-200 rounded bg-slate-50 focus:bg-white focus:border-gold outline-none transition duration-200 placeholder-slate-300"
                                required
                                disabled={submitStatus === 'submitting'}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-black uppercase text-slate-500 mb-2">
                                Nomor WhatsApp
                            </label>
                            <input
                                type="tel"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="081xxxxxxxx"
                                autoComplete="off"
                                className="w-full p-4 border-2 border-slate-200 rounded bg-slate-50 focus:bg-white focus:border-gold outline-none transition duration-200 placeholder-slate-300"
                                required
                                disabled={submitStatus === 'submitting'}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={submitStatus === 'submitting'}
                            className="w-full bg-gold hover:bg-gold-hover text-slate-900 font-black py-5 rounded shadow-lg transition duration-300 text-lg uppercase tracking-widest transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                        >
                            {submitStatus === 'submitting' ? (
                                <><i className="fas fa-spinner fa-spin mr-2"></i> MEMPROSES...</>
                            ) : (
                                'DAFTAR SEKARANG'
                            )}
                        </button>
                    </form>
                    <p className="mt-8 text-[10px] text-center text-slate-400 leading-tight">
                        Data Anda dilindungi standar privasi Google Cloud dan tidak akan dibagikan ke pihak ketiga.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default RegistrationForm;