import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { Loader2 } from 'lucide-react';
import Button from './Button';
=======
import { CheckCircle, Clock, Shield, Loader2 } from 'lucide-react';
>>>>>>> f59101d12568799a1c02434766eccfd7a7cc03ba

const RegistrationForm: React.FC = () => {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
<<<<<<< HEAD
    source: 'lp-8'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

=======
    source: 'lp-12'
  });
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Determine the field name based on placeholder or type if name attribute is missing or generic
    let field = 'name';
    if (e.target.type === 'email') field = 'email';
    else if (e.target.type === 'tel' || e.target.placeholder.includes('WhatsApp')) field = 'phone';
    else field = 'name';

    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  useEffect(() => {
    // Set target date to 2 hours from now
    const setTargetDate = () => {
      const now = new Date();
      const targetDate = new Date(now.getTime() + 2 * 60 * 60 * 1000); // 2 hours from now
      return targetDate.getTime();
    };

    const targetDate = setTargetDate();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

>>>>>>> f59101d12568799a1c02434766eccfd7a7cc03ba
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
<<<<<<< HEAD
          finishUrl: `${window.location.origin}${window.location.pathname}?page=thank-you`
=======
          finishUrl: `${window.location.origin}${window.location.pathname}?page=thank-you`,
          affiliateCode: localStorage.getItem('affiliate_ref') || undefined
>>>>>>> f59101d12568799a1c02434766eccfd7a7cc03ba
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

<<<<<<< HEAD
  return (
    <section id="register" className="py-24 bg-gradient-to-br from-blue-900 to-blue-700 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-orange-500 opacity-10 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-xl mx-auto bg-white p-10 md:p-12 rounded-3xl shadow-2xl">

          <>
            <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">Formulir Pendaftaran</h2>
            <p className="text-center text-blue-600 mb-10 font-semibold">
              Webinar Gratis: Sabtu, 10 Desember 2025 | 18:00 WIB
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Nama Lengkap</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Masukkan nama lengkap Anda"
                  autoComplete="off"
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  required
                  disabled={submitStatus === 'submitting'}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email Aktif</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Masukkan email Anda"
                  autoComplete="off"
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  required
                  disabled={submitStatus === 'submitting'}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">Nomor WhatsApp</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="081xxxxxxxx"
                  autoComplete="off"
                  className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  required
                  disabled={submitStatus === 'submitting'}
                />
              </div>

              <div className="pt-4">
                <Button type="submit" fullWidth variant="primary" disabled={submitStatus === 'submitting'}>
                  {submitStatus === 'submitting' ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="animate-spin" /> MEMPROSES...
                    </span>
                  ) : (
                    'DAFTAR SEKARANG'
                  )}
                </Button>
              </div>
            </form>
            <p className="mt-8 text-xs text-center text-gray-400">
              Kami menjaga privasi data Anda sesuai standar Google Workspace.
            </p>
          </>
        </div>
      </div>
=======
  const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center bg-white/95 backdrop-blur-md border-2 border-red-500 rounded-lg p-3 min-w-[70px] md:min-w-[80px] shadow-lg">
      <span className="text-2xl md:text-3xl font-bold font-mono text-red-600">{value.toString().padStart(2, '0')}</span>
      <span className="text-xs uppercase tracking-wider text-red-600 font-semibold">{label}</span>
    </div>
  );

  return (
    <section id="daftar" className="py-16 container mx-auto px-4">
      <div className="bg-primary text-white p-8 md:p-16 rounded-3xl text-center shadow-xl max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Daftar Webinar</h2>

        {/* Pricing */}
        <div className="mb-6 flex flex-col items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="text-xl md:text-2xl text-white/70 line-through">Rp 499.000</span>
            <span className="text-2xl md:text-3xl font-bold text-gold">Rp 129.000</span>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="mb-10">
          <div className="flex items-center justify-center gap-2 mb-3 text-white font-bold bg-red-600/90 border-2 border-red-500 inline-block px-4 py-1 rounded-full text-sm shadow-lg">
            <Clock className="w-4 h-4" />
            <span>PENDAFTARAN DITUTUP DALAM:</span>
          </div>
          <div className="flex justify-center gap-3 md:gap-4">
            <TimeUnit value={timeLeft.hours} label="Jam" />
            <TimeUnit value={timeLeft.minutes} label="Menit" />
            <TimeUnit value={timeLeft.seconds} label="Detik" />
          </div>
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
          <img
            src="/assets/right-arrow.avif"
            alt="Arrow down"
            className="w-10 h-7 md:w-14 md:h-9 arrow-blink rotate-90"
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto mt-8">
          <input
            type="text"
            placeholder="Nama Lengkap Ibu"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-6 py-4 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-secondary/50 transition-all"
            disabled={submitStatus === 'submitting'}
          />
          <input
            type="email"
            placeholder="Email Aktif"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-6 py-4 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-secondary/50 transition-all"
            disabled={submitStatus === 'submitting'}
          />
          <input
            type="tel"
            placeholder="Nomor WhatsApp"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-6 py-4 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-secondary/50 transition-all"
            disabled={submitStatus === 'submitting'}
          />

          <button
            type="submit"
            disabled={submitStatus === 'submitting'}
            className="w-full bg-gold text-dark py-4 rounded-lg font-bold text-xl shadow-lg hover:bg-yellow-400 hover:scale-105 transition-all duration-300 mt-4 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
          >
            {submitStatus === 'submitting' ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="animate-spin" /> MEMPROSES...
              </span>
            ) : (
              'DAFTAR SEKARANG'
            )}
          </button>

          {/* Payment Security */}
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-center gap-2 text-sm text-white/90">
              <Shield className="w-4 h-4 text-gold" />
              <span>Pembayaran 100% Aman & Terjamin</span>
            </div>
            {localStorage.getItem('affiliate_ref') && (
              <div className="text-xs text-white/70 text-center">
                Ref: {localStorage.getItem('affiliate_ref')}
              </div>
            )}
          </div>
        </form>
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
>>>>>>> f59101d12568799a1c02434766eccfd7a7cc03ba
    </section>
  );
};

export default RegistrationForm;