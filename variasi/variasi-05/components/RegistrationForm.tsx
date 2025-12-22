import React, { useState, useEffect } from 'react';
import { GRADIENT_CLASS } from '../constants';

const RegistrationForm: React.FC = () => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Terima kasih, ${formData.name}! Pendaftaran berhasil. Detail akan dikirim ke ${formData.whatsapp}.`);
  };

  return (
    <section id="register" className={`py-24 px-4 ${GRADIENT_CLASS} relative`}>
      <div className="max-w-xl mx-auto bg-white rounded-3xl p-10 shadow-2xl relative overflow-hidden" id="registration-form">
        <div className="absolute top-0 right-0 bg-orange-600 text-white px-8 py-2 rounded-bl-3xl font-black tracking-widest text-xs uppercase shadow-md">
          HEMAT Rp 370.000 HARI INI
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
        <p className="text-center text-slate-500 mb-10 font-bold uppercase text-xs tracking-widest italic">
          Mulailah Era Menulis Cepat Anda Di Sini
        </p>

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

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-black text-slate-900 mb-2 uppercase">Nama Lengkap *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-2 border-slate-100 bg-slate-50 p-4 rounded-xl focus:border-orange-500 outline-none transition shadow-sm text-slate-800"
              placeholder="Masukkan Nama Anda"
              required
              autoComplete="off"
            />
          </div>
          <div>
            <label className="block text-sm font-black text-slate-900 mb-2 uppercase">Email Aktif *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-2 border-slate-100 bg-slate-50 p-4 rounded-xl focus:border-orange-500 outline-none transition shadow-sm text-slate-800"
              placeholder="Masukkan Email Anda"
              required
              autoComplete="off"
            />
          </div>
          <div>
            <label className="block text-sm font-black text-slate-900 mb-2 uppercase">Nomor WhatsApp *</label>
            <input
              type="tel"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              className="w-full border-2 border-slate-100 bg-slate-50 p-4 rounded-xl focus:border-orange-500 outline-none transition shadow-sm text-slate-800"
              placeholder="08xxxxxxxxx"
              required
              autoComplete="off"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-500 text-white font-black py-5 rounded-2xl text-xl shadow-xl transition-all hover:scale-105 active:scale-95 uppercase tracking-widest"
          >
            DAFTAR SEKARANG
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

export default RegistrationForm;