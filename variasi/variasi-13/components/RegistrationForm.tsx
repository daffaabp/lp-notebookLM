import React, { useState, useEffect } from 'react';
import { CheckIcon } from './Icons';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    source: 'lp-13'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // Timer state: Start with 2 hours 15 minutes 0 seconds for urgency simulation
  const [timeLeft, setTimeLeft] = useState(2 * 60 * 60 + 15 * 60); 

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
    setIsSubmitting(true);

    try {
      await loadMidtransScript();

      const apiUrl = import.meta.env.VITE_API_URL || 'https://ujdbqubpdeuhbhrcbhan.supabase.co/functions/v1/submit-registration';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.whatsapp,
          source: formData.source,
          finishUrl: `${window.location.origin}${window.location.pathname}?page=thank-you`,
          affiliateCode: localStorage.getItem('affiliate_ref') || undefined
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
          setIsSubmitting(false);
        }
      });

    } catch (error: any) {
      alert(error.message);
      setIsSubmitting(false);
    }
  };

  return (
    <section id="register" className="py-24 px-6 bg-blue-700 text-white relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div className="max-w-xl mx-auto bg-white text-gray-900 p-8 md:p-10 rounded-2xl shadow-2xl relative z-10">
        
        {isSuccess ? (
            <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckIcon className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Terima Kasih!</h3>
                <p className="text-gray-600 mb-6">Pendaftaran Anda telah diterima. Silakan cek email dan WhatsApp Anda untuk instruksi pembayaran.</p>
                <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-blue-600 font-semibold hover:underline"
                >
                    Daftar lagi untuk teman
                </button>
            </div>
        ) : (
            <>
                <h2 className="text-3xl font-bold mb-2 text-center text-blue-700">Formulir Pendaftaran</h2>
                <p className="text-center mb-6 text-gray-500 italic text-sm">Daftarkan diri Anda untuk mendapatkan akses link Zoom & rekaman webinar.</p>
                
                {/* URGENCY TIMER */}
                <div className="mb-8 bg-red-50 border border-red-200 rounded-lg p-3 flex items-center justify-center space-x-3 text-red-600 animate-pulse">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <div className="text-center">
                        <span className="font-bold text-xs uppercase tracking-wider block">Promo Hemat Berakhir Dalam:</span>
                        <span className="font-mono font-extrabold text-xl tracking-widest leading-none">{formatTime(timeLeft)}</span>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block font-bold mb-1 text-sm text-gray-700">Nama Lengkap</label>
                    <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Masukkan nama sesuai sertifikat" 
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" 
                    required 
                    />
                </div>
                <div>
                    <label className="block font-bold mb-1 text-sm text-gray-700">Alamat Email</label>
                    <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="contoh@email.com" 
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" 
                    required 
                    />
                </div>
                <div>
                    <label className="block font-bold mb-1 text-sm text-gray-700">Nomor WhatsApp</label>
                    <input 
                    type="tel" 
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="0812xxxxxxx" 
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" 
                    required 
                    />
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Total Pembayaran:</span>
                    <span className="font-extrabold text-xl text-blue-700">Rp 129.000</span>
                </div>
                
                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-extrabold py-4 rounded-lg text-xl shadow-md transition transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
                >
                    {isSubmitting ? (
                        <svg className="animate-spin h-5 w-5 text-blue-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    ) : 'BAYAR & DAFTAR SEKARANG'}
                </button>
                </form>
                <p className="text-center text-xs mt-6 text-gray-400 italic">Kami menjamin keamanan data pribadi Anda sesuai UU PDP.</p>
                {localStorage.getItem('affiliate_ref') && (
                  <div className="text-xs text-center text-gray-400 mt-2">
                    Ref: {localStorage.getItem('affiliate_ref')}
                  </div>
                )}
            </>
        )}
      </div>
    </section>
  );
};

export default RegistrationForm;