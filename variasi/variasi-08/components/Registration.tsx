import React, { useState, useEffect } from 'react';
import { Gift, ShieldCheck, Check, Clock, Loader2 } from 'lucide-react';

const Registration: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    source: 'lp-10'
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  // State to hold the target time (12 hours from component mount)
  const [targetTime] = useState(() => {
    return new Date().getTime() + 12 * 60 * 60 * 1000; // 12 hours from now
  });

  const calculateTimeLeft = () => {
    const difference = targetTime - new Date().getTime();
    let timeLeft = {
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60))), // Total hours left
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time;
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="register" className="pb-20 pt-10 bg-bg-light relative">
      <div className="absolute top-0 w-full h-1/2 bg-bg-light"></div>
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-legal-900 p-6 md:p-8 text-center text-white relative overflow-hidden">
            {/* Background texture for header */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-2 relative z-10">Registrasi Webinar</h2>
            <p className="opacity-90 mb-6 text-sm md:text-base relative z-10">Investasikan 2 jam untuk efisiensi bertahun-tahun.</p>

            {/* Countdown Timer - Compact & 12 Hours */}
            <div className="flex justify-center items-center gap-2 md:gap-4 relative z-10 mt-4">

              {/* Hours */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20 shadow-lg">
                  <span className="text-xl md:text-3xl font-bold text-gold-500 font-sans">{formatTime(timeLeft.hours)}</span>
                </div>
                <span className="text-[10px] md:text-xs uppercase tracking-wider mt-1 md:mt-2 font-semibold text-gray-400">Jam</span>
              </div>

              <span className="text-xl md:text-2xl font-bold text-gray-500 -mt-5">:</span>

              {/* Minutes */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20 shadow-lg">
                  <span className="text-xl md:text-3xl font-bold text-gold-500 font-sans">{formatTime(timeLeft.minutes)}</span>
                </div>
                <span className="text-[10px] md:text-xs uppercase tracking-wider mt-1 md:mt-2 font-semibold text-gray-400">Menit</span>
              </div>

              <span className="text-xl md:text-2xl font-bold text-gray-500 -mt-5">:</span>

              {/* Seconds */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20 shadow-lg">
                  <span className="text-xl md:text-3xl font-bold text-gold-500 font-sans">{formatTime(timeLeft.seconds)}</span>
                </div>
                <span className="text-[10px] md:text-xs uppercase tracking-wider mt-1 md:mt-2 font-semibold text-gray-400">Detik</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs md:text-sm text-gold-500 animate-pulse">
              <Clock className="w-3 h-3 md:w-4 md:h-4" />
              <span className="font-semibold">Harga Early Bird Berakhir Segera</span>
            </div>

          </div>

          <div className="p-6 md:p-12">

            {/* Bonus Section */}
            <div className="mb-8 pb-8 border-b border-gray-100">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 bg-gold-500/10 p-4 md:p-5 rounded-lg border border-gold-500/20">
                  <div className="flex items-center gap-2 mb-3 text-legal-900 font-bold">
                    <Gift className="w-5 h-5 text-gold-600" />
                    <h4>BONUS EKSKLUSIF:</h4>
                  </div>
                  <ul className="text-sm space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                      <span>E-Book: <em>Prompt Engineering Blueprint</em> Khusus Praktisi Hukum.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                      <span>Template NotebookLM untuk Manajemen Bukti Digital.</span>
                    </li>
                  </ul>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-8 h-8 text-legal-900 shrink-0" />
                    <div>
                      <h5 className="font-bold text-legal-900 text-sm">100% Money-Back Guarantee</h5>
                      <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                        Jika materi webinar tidak memberikan wawasan baru bagi produktivitas hukum Anda, kami kembalikan dana Anda sepenuhnya.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Nama Lengkap & Gelar</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all outline-none"
                  placeholder="Contoh: Budi Santoso, S.H., M.H."
                  required
                  disabled={submitStatus === 'submitting'}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Alamat Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all outline-none"
                  placeholder="nama@email.com"
                  required
                  disabled={submitStatus === 'submitting'}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Nomer HP</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all outline-none"
                  placeholder="0812xxxxxxxxx"
                  required
                  disabled={submitStatus === 'submitting'}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gold-500 hover:bg-gold-600 text-white font-bold py-4 rounded-lg transition-all text-lg shadow-lg hover:shadow-xl mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={submitStatus === 'submitting'}
              >
                {submitStatus === 'submitting' ? (
                  <span className="flex justify-center items-center gap-2">
                    <Loader2 className="animate-spin" /> MEMPROSES...
                  </span>
                ) : (
                  'Daftar & Ambil Bonus Saya'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;