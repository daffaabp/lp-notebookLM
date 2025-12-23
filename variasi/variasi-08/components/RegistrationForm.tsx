import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import Button from './Button';

const RegistrationForm: React.FC = () => {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    source: 'lp-8'
  });

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
    </section>
  );
};

export default RegistrationForm;