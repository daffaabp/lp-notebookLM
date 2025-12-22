import React, { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';

export const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: ''
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Terima kasih! (Ini adalah form demo)");
  };

  return (
    <section id="register" className="py-12 px-4 bg-white">
      <div className="max-w-xl mx-auto border-2 border-slate-200 rounded-3xl p-5 md:p-7 shadow-2xl relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 bg-orange-600 text-white px-6 py-2 rounded-bl-2xl font-bold text-sm shadow-md">
          HEMAT 75%
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

        <h2 className="text-2xl md:text-3xl font-black text-center mb-3 text-slate-900">Formulir Pendaftaran</h2>
        
        {/* Harga Coret & Countdown Timer */}
        <div className="mb-5">
          <div className="text-center mb-3">
            <span className="text-sm font-normal text-slate-500">
              <span className="line-through mr-2">Rp 499.000</span>
              <span className="text-orange-600 font-bold text-xl">Rp 129.000</span>
            </span>
          </div>
          {/* Timer */}
          <div className="bg-orange-50 py-2.5 rounded-lg border border-orange-200">
            <div className="text-center text-orange-600">
              <p className="text-xs font-semibold mb-1.5">Diskon Berakhir Dalam:</p>
              <div className="flex justify-center gap-2">
                <div className="bg-white border-2 border-orange-200 rounded-lg px-3 py-1.5 min-w-[50px]">
                  <div className="text-lg font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                  <div className="text-xs opacity-70">Jam</div>
                </div>
                <div className="text-lg font-bold self-center">:</div>
                <div className="bg-white border-2 border-orange-200 rounded-lg px-3 py-1.5 min-w-[50px]">
                  <div className="text-lg font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                  <div className="text-xs opacity-70">Menit</div>
                </div>
                <div className="text-lg font-bold self-center">:</div>
                <div className="bg-white border-2 border-orange-200 rounded-lg px-3 py-1.5 min-w-[50px]">
                  <div className="text-lg font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                  <div className="text-xs opacity-70">Detik</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-black mb-1.5 uppercase text-slate-700">Nama Lengkap *</label>
            <input 
              type="text" 
              required
              autoComplete="off"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full border-2 border-slate-200 p-3 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition bg-slate-50" 
              placeholder="Masukkan Nama Lengkap Anda" 
            />
          </div>
          <div>
            <label className="block text-sm font-black mb-1.5 uppercase text-slate-700">Email Aktif *</label>
            <input 
              type="email" 
              required
              autoComplete="off"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full border-2 border-slate-200 p-3 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition bg-slate-50" 
              placeholder="Masukkan Email Anda" 
            />
          </div>
          <div>
            <label className="block text-sm font-black mb-1.5 uppercase text-slate-700">Nomor WhatsApp *</label>
            <input 
              type="tel" 
              required
              autoComplete="off"
              value={formData.whatsapp}
              onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
              className="w-full border-2 border-slate-200 p-3 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition bg-slate-50" 
              placeholder="0812xxxxxxx" 
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-green-600 hover:bg-green-500 text-white font-black py-4 rounded-xl text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest"
          >
            DAFTAR SEKARANG
          </button>

          {/* Payment Security */}
          <div className="mt-3 space-y-2">
            <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
              <Shield className="w-4 h-4 text-green-600" />
              <span>Pembayaran 100% Aman & Terjamin</span>
            </div>
          </div>
          <p className="text-center text-xs text-slate-400 mt-3 flex items-center justify-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
            </svg>
            Kami menghormati privasi data Anda sesuai standar Google Workspace Enterprise.
          </p>
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
    </section>
  );
};