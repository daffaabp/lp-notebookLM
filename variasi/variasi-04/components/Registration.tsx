import React, { useState, useEffect } from 'react';

const Registration: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '', // Renamed from whatsapp to phone
        source: 'lp-4'
    });
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const [timeLeft, setTimeLeft] = useState({
        hours: 2,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                } else if (prev.hours > 0) {
                    return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
                } else {
                    return { hours: 2, minutes: 0, seconds: 0 };
                }
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
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
        <>
            {/* REGISTRATION FORM SECTION */}
            <section id="register" className="py-24 px-4 business-gradient relative">
                <div className="max-w-xl mx-auto bg-white rounded-3xl p-10 shadow-2xl relative overflow-hidden ring-4 ring-white/10" id="registration-form">
                    <div className="absolute top-0 right-0 bg-orange-600 text-white px-8 py-2 rounded-bl-3xl font-black tracking-widest text-xs uppercase shadow-md">
                        Diskon 75% Berakhir Hari Ini
                    </div>

                    {/* 3 Arrow Down with Blink Animation */}
                    <div className="flex justify-center items-center gap-2 mb-4 -mt-2">
                        <img
                            src="/assets/right-arrow.avif"
                            alt="Arrow down"
                            className="w-10 h-7 md:w-14 md:h-9 arrow-blink rotate-90"
                        />
                        <img
                            src="/assets/right-arrow.avif"
                            alt="Arrow down"
                            className="w-10 h-7 md:w-14 md:h-9 arrow-blink rotate-90"
                        />
                    </div>

                    <h2 className="text-3xl font-black text-center mb-4 text-slate-900 tracking-tighter">Formulir Pendaftaran</h2>
                    <p className="text-center text-slate-500 mb-10 font-bold uppercase text-xs tracking-widest italic">Persiapan Strategi Bisnis 2026 Anda Dimulai Di Sini</p>

                    {/* Timer */}
                    <div className="mb-6 bg-red-50 py-2.5 rounded-lg border border-red-200">
                        <div className="text-center text-red-600">
                            <p className="text-xs font-semibold mb-1.5">Diskon Berakhir Dalam:</p>
                            <div className="flex justify-center gap-2">
                                <div className="bg-white border-2 border-red-200 rounded-lg px-3 py-1.5 min-w-[50px]">
                                    <div className="text-lg font-bold text-red-600">{String(timeLeft.hours).padStart(2, '0')}</div>
                                    <div className="text-xs opacity-70">Jam</div>
                                </div>
                                <div className="text-lg font-bold self-center text-red-600">:</div>
                                <div className="bg-white border-2 border-red-200 rounded-lg px-3 py-1.5 min-w-[50px]">
                                    <div className="text-lg font-bold text-red-600">{String(timeLeft.minutes).padStart(2, '0')}</div>
                                    <div className="text-xs opacity-70">Menit</div>
                                </div>
                                <div className="text-lg font-bold self-center text-red-600">:</div>
                                <div className="bg-white border-2 border-red-200 rounded-lg px-3 py-1.5 min-w-[50px]">
                                    <div className="text-lg font-bold text-red-600">{String(timeLeft.seconds).padStart(2, '0')}</div>
                                    <div className="text-xs opacity-70">Detik</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-black text-slate-900 mb-2 uppercase" htmlFor="name">Nama Lengkap & Gelar *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                autoComplete="off"
                                className="w-full border-2 border-slate-100 bg-slate-50 p-4 rounded-xl focus:border-orange-500 outline-none transition shadow-sm text-slate-800"
                                placeholder="Masukkan Nama Anda"
                                required
                                disabled={submitStatus === 'submitting'}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-black text-slate-900 mb-2 uppercase" htmlFor="email">Email Aktif *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                autoComplete="off"
                                className="w-full border-2 border-slate-100 bg-slate-50 p-4 rounded-xl focus:border-orange-500 outline-none transition shadow-sm text-slate-800"
                                placeholder="Masukkan Email Anda"
                                required
                                disabled={submitStatus === 'submitting'}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-black text-slate-900 mb-2 uppercase" htmlFor="whatsapp">Nomor WhatsApp *</label>
                            <input
                                type="tel"
                                id="whatsapp"
                                name="phone" // Changed to phone
                                value={formData.phone}
                                onChange={handleChange}
                                autoComplete="off"
                                className="w-full border-2 border-slate-100 bg-slate-50 p-4 rounded-xl focus:border-orange-500 outline-none transition shadow-sm text-slate-800"
                                placeholder="08xxxxxxxxx"
                                required
                                disabled={submitStatus === 'submitting'}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={submitStatus === 'submitting'}
                            className="w-full bg-green-600 hover:bg-green-500 text-white font-black py-5 rounded-2xl text-xl shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] uppercase tracking-widest flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {submitStatus === 'submitting' ? (
                                <><i className="fas fa-spinner fa-spin mr-2"></i> MEMPROSES...</>
                            ) : (
                                <>
                                    DAFTAR SEKARANG
                                    <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                                </>
                            )}
                        </button>

                        {/* Payment Security */}
                        <div className="mt-3 space-y-2">
                            <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
                                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                <span>Pembayaran 100% Aman & Terjamin</span>
                            </div>
                        </div>
                        <p className="text-center text-xs text-slate-400 mt-3 flex items-center justify-center gap-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                            </svg>
                            Kami menghormati privasi data Anda sesuai standar Google Workspace Enterprise.
                        </p>
                    </form>
                </div>
            </section>

            <style>{`
                @keyframes blink {
                  0%, 100% { opacity: 1; }
                  50% { opacity: 0.2; }
                }
                .arrow-blink {
                  animation: blink 1s infinite;
                }
            `}</style>
        </>
    );
};

export default Registration;