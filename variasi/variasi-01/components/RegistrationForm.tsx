import React, { useState } from 'react';
import { CheckCircle, Loader2, Shield, AlertCircle } from 'lucide-react';
import UrgencyTimer from './UrgencyTimer';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', // Changed from whatsapp to phone to match API
    source: 'lp-1' // Added source
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success'>('idle');


  const loadMidtransScript = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      const scriptId = "midtrans-script";
      if (document.getElementById(scriptId)) {
        resolve();
        return;
      }
      const isSandbox = import.meta.env.VITE_MIDTRANS_SANDBOX === 'true';
      const script = document.createElement("script");
      script.src = isSandbox
        ? "https://app.sandbox.midtrans.com/snap/snap.js"
        : "https://app.midtrans.com/snap/snap.js";
      script.id = scriptId;
      script.setAttribute("data-client-key", import.meta.env.VITE_MIDTRANS_CLIENT_KEY);
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

      const apiUrl = import.meta.env.VITE_API_URL;
      if (!apiUrl) throw new Error("VITE_API_URL is missing!");

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
          setSubmitStatus('idle'); // Allow retry
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
    <section id="register" className="py-20 px-4 bg-gradient-to-br from-[#1a365d] to-[#2b6cb0] text-white">
      <div className="max-w-xl mx-auto bg-white text-gray-900 p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden">

        {submitStatus === 'success' ? (
          <div className="flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in duration-500">
            {/* This success state is unlikely to be reached here because of redirect, but kept as fallback */}
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Memproses...</h3>
            <p className="text-gray-600 mb-8 text-lg">
              Mohon tunggu sebentar...
            </p>
          </div>
        ) : (
          <>
            {/* 3 Arrow Down with Blink Animation */}
            <div className="flex justify-center items-center gap-2 mb-4 -mt-4">
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

            <h2 className="text-3xl font-bold text-center mb-4">Daftar Sekarang</h2>

            {/* Harga Coret & Countdown Timer */}
            <div className="mb-6">
              <div className="text-center mb-3">
                <span className="text-base font-normal text-gray-500">
                  <span className="line-through mr-2">Rp 499.000</span>
                  <span className="text-red-600 font-bold text-xl">Rp 129.000</span>
                </span>
              </div>
              {/* Timer */}
              <div className="bg-red-50 py-3 rounded-lg border border-red-100">
                <UrgencyTimer variant="on-white" label="Diskon Berakhir Dalam:" />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">Nama Lengkap <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-4 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Masukkan nama lengkap Anda"
                  required
                  autoComplete="off"
                  disabled={submitStatus === 'submitting'}
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">Email Aktif <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-4 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Masukkan email Anda"
                  required
                  autoComplete="off"
                  disabled={submitStatus === 'submitting'}
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">Nomor WhatsApp <span className="text-red-500">*</span></label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-4 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="08xxxxxxxxx"
                  required
                  autoComplete="off"
                  disabled={submitStatus === 'submitting'}
                />
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100">
                <a
                  href="https://api.whatsapp.com/send/?phone=6285712208535&text=Halo%2C%20saya%20ingin%20bertanya%20tentang%20webinar%20ini.&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    // @ts-ignore
                    if (window.fbq) window.fbq('track', 'Contact');
                  }}
                  className="flex justify-center items-center gap-2 text-sm text-green-600 hover:text-green-700 font-semibold mb-4"
                >
                  Butuh bantuan? Chat Admin via WhatsApp
                </a>
              </div>

              <button
                type="submit"
                disabled={submitStatus === 'submitting'}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg text-xl mt-4 shadow-lg hover:shadow-2xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
              >
                {submitStatus === 'submitting' ? (
                  <>
                    <Loader2 className="animate-spin mr-2" /> Memproses...
                  </>
                ) : (
                  "DAFTAR SEKARANG"
                )}
              </button>

              {/* Payment Security & Urgency */}
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span>Pembayaran 100% Aman & Terjamin</span>
                </div>
              </div>
              <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" /></svg>
                Kami menghormati privasi data Anda sesuai standar Google Workspace Enterprise.
              </p>
            </form>
          </>
        )}
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
