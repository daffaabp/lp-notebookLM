import React, { useState, useEffect } from 'react';
import { CheckCircle, Clock, Shield } from 'lucide-react';

const RegistrationForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, send data to backend here
  };

  const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center bg-white/95 backdrop-blur-md border-2 border-red-500 rounded-lg p-3 min-w-[70px] md:min-w-[80px] shadow-lg">
      <span className="text-2xl md:text-3xl font-bold font-mono text-red-600">{value.toString().padStart(2, '0')}</span>
      <span className="text-xs uppercase tracking-wider text-red-600 font-semibold">{label}</span>
    </div>
  );

  if (submitted) {
    return (
      <section id="daftar" className="py-16 container mx-auto px-4">
        <div className="bg-primary text-white p-12 rounded-3xl text-center shadow-xl max-w-3xl mx-auto animate-fade-in">
          <CheckCircle className="w-20 h-20 mx-auto mb-6 text-white" />
          <h2 className="text-3xl font-bold mb-4">Terima Kasih, Ibu!</h2>
          <p className="text-lg mb-8">
            Pendaftaran berhasil. Link Zoom dan Bonus Spesial telah dikirim ke email dan WhatsApp Ibu.
            Sampai jumpa di webinar!
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-white underline opacity-80 hover:opacity-100"
          >
            Daftar lagi untuk teman?
          </button>
        </div>
      </section>
    );
  }

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
            required 
            className="w-full px-6 py-4 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-secondary/50 transition-all"
          />
          <input 
            type="email" 
            placeholder="Email Aktif" 
            required 
            className="w-full px-6 py-4 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-secondary/50 transition-all"
          />
          <input 
            type="tel" 
            placeholder="Nomor WhatsApp" 
            required 
            className="w-full px-6 py-4 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-secondary/50 transition-all"
          />
          
          <button 
            type="submit" 
            className="w-full bg-gold text-dark py-4 rounded-lg font-bold text-xl shadow-lg hover:bg-yellow-400 hover:scale-105 transition-all duration-300 mt-4"
          >
            DAFTAR SEKARANG
          </button>

          {/* Payment Security */}
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-center gap-2 text-sm text-white/90">
              <Shield className="w-4 h-4 text-gold" />
              <span>Pembayaran 100% Aman & Terjamin</span>
            </div>
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
    </section>
  );
};

export default RegistrationForm;