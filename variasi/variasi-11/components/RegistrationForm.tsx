import React, { useState, useEffect } from 'react';
import { CheckCircle, Gift, Clock } from 'lucide-react';

const RegistrationForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Target date: Dec 27, 2025 19:00:00 WIB (UTC+7)
  const targetDate = new Date('2025-12-27T19:00:00+07:00').getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, send data to backend here
  };

  const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center bg-white/20 backdrop-blur-md border border-white/30 rounded-lg p-3 min-w-[70px] md:min-w-[80px]">
      <span className="text-2xl md:text-3xl font-bold font-mono">{value.toString().padStart(2, '0')}</span>
      <span className="text-xs uppercase tracking-wider opacity-80">{label}</span>
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
        <h2 className="text-3xl font-bold mb-2">Daftar Webinar Gratis</h2>
        <p className="text-lg mb-8 opacity-90">Amankan kursi Ibu sebelum kuota penuh!</p>
        
        {/* Countdown Timer */}
        <div className="mb-10">
          <div className="flex items-center justify-center gap-2 mb-3 text-gold font-bold bg-black/20 inline-block px-4 py-1 rounded-full text-sm">
             <Clock className="w-4 h-4" />
             <span>PENDAFTARAN DITUTUP DALAM:</span>
          </div>
          <div className="flex justify-center gap-3 md:gap-4 text-white">
            <TimeUnit value={timeLeft.days} label="Hari" />
            <TimeUnit value={timeLeft.hours} label="Jam" />
            <TimeUnit value={timeLeft.minutes} label="Menit" />
            <TimeUnit value={timeLeft.seconds} label="Detik" />
          </div>
        </div>

        <p className="text-lg mb-6">Khusus pendaftaran hari ini, Ibu akan mendapatkan:</p>
        
        <div className="bg-white/20 backdrop-blur-sm border border-white/40 p-6 rounded-xl mb-10 text-left inline-block w-full max-w-lg">
          <div className="flex items-start mb-3">
             <Gift className="w-6 h-6 mr-3 flex-shrink-0 text-gold" />
             <span><strong>BONUS:</strong> Template Prompt Khusus IRT (Tanya PR, Cek Gizi, & Meal Plan)</span>
          </div>
          <div className="flex items-start">
             <Gift className="w-6 h-6 mr-3 flex-shrink-0 text-gold" />
             <span><strong>BONUS:</strong> E-book Panduan Praktis AI untuk Rumah Tangga</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
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
            Daftar & Klaim Bonus
          </button>
        </form>

        <p className="text-sm mt-8 opacity-90 max-w-lg mx-auto leading-relaxed bg-black/10 p-4 rounded-lg">
          🛡️ <strong>100% Value Guarantee:</strong> Jika dalam 30 menit pertama Ibu merasa webinar ini tidak bermanfaat untuk mempermudah hidup Ibu, silakan tinggalkan ruang Zoom dan Ibu tetap boleh menyimpan bonus materinya.
        </p>
      </div>
    </section>
  );
};

export default RegistrationForm;