import React, { useState, useEffect } from 'react';
import { ShieldCheck, Loader2 } from 'lucide-react';

const RegistrationForm: React.FC = () => {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', // Renamed from whatsapp to phone
    source: 'lp-5'
  });

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
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
    <section id="daftar" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-white text-dark p-8 md:p-14 rounded-3xl max-w-2xl mx-auto shadow-2xl relative overflow-hidden border-2 border-slate-200">
          {/* Arrow Down with Blink Animation */}
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

          <h2 className="text-3xl font-bold text-center mb-4 text-dark">Daftar Sekarang</h2>
          <p className="text-center text-red-600 mb-10 font-bold uppercase text-sm tracking-widest animate-pulse">
            Slot terbatas & cepat penuh — Daftar SEKARANG sebelum kuota habis!
          </p>

          {/* Timer */}
          <div className="mb-6 bg-red-50 py-2.5 rounded-lg border-2 border-red-200">
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

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-dark mb-2 font-medium">Nama Lengkap *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="off"
                placeholder="Masukkan Nama Anda"
                required
                disabled={submitStatus === 'submitting'}
                className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-200 text-dark placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all"
              />
            </div>

            <div>
              <label className="block text-dark mb-2 font-medium">Email Aktif *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="off"
                placeholder="Masukkan Email Anda"
                required
                disabled={submitStatus === 'submitting'}
                className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-200 text-dark placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all"
              />
            </div>

            <div>
              <label className="block text-dark mb-2 font-medium">Nomor WhatsApp *</label>
              <input
                type="tel"
                name="phone" // Renamed from whatsapp to phone
                value={formData.phone}
                onChange={handleChange}
                autoComplete="off"
                placeholder="08xxxxxxxxx"
                required
                disabled={submitStatus === 'submitting'}
                className="w-full p-4 rounded-xl bg-slate-50 border-2 border-slate-200 text-dark placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={submitStatus === 'submitting'}
              className="w-full bg-green-600 hover:bg-green-500 text-white font-black py-5 rounded-2xl text-xl shadow-xl transition-all hover:scale-105 active:scale-95 uppercase tracking-widest flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {submitStatus === 'submitting' ? (
                <><Loader2 className="animate-spin mr-2" /> MEMPROSES...</>
              ) : (
                'DAFTAR SEKARANG'
              )}
            </button>
          </form>

          <div className="text-center mt-8 flex items-center justify-center gap-3 text-slate-700 bg-green-50 p-4 rounded-xl border border-green-200">
            <ShieldCheck className="w-10 h-10 text-green-600 flex-shrink-0" />
            <span className="text-sm md:text-base text-left">
              <strong className="text-dark">100% Money Back Guarantee.</strong><br />
              Tidak puas dengan materinya? Kami kembalikan uang Anda tanpa tanya dalam 7 hari.
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }
        .arrow-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </section>
  );
};

export default RegistrationForm;