import React from 'react';
import { Calendar, Clock, MapPin, AlertTriangle } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('daftar');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="text-center pt-20 pb-10 bg-gradient-to-br from-slate-50 to-slate-200 border-b-4 border-primary px-4 relative">
      {/* Logos Section - Positioned at corners with white header */}
      <div className="absolute top-0 left-0 right-0 bg-white py-2 px-4 flex items-center justify-between z-20 shadow-sm">
        <img 
          src="/assets/logo kelas inovatif.avif" 
          alt="Kelas Inovatif" 
          className="h-8 md:h-10 w-auto object-contain"
        />
        <img 
          src="/assets/notebook-logo.avif" 
          alt="NotebookLM" 
          className="h-4 md:h-5 w-auto object-contain"
        />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-6 leading-[1.08]">
          Naskah Mandek Karena Harus Telusuri Puluhan Sumber? <span className="text-secondary">NotebookLM</span> Bikin Riset & Nulis Konten Jadi Ide Viral!
        </h3>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-snug">
          Lelah riset harus buka banyak tab & cari info sana-sini? Cukup upload semua referensi, biarkan NotebookLM yang meringkas, merangkum insight penting, bahkan bantu bikin draft naskah hit, kerja lebih praktis, ide viral makin cepat tayang!
        </p>
        
        <div className="mb-6 flex flex-col gap-2 items-center text-center mx-auto w-full max-w-md">
          <div className="flex items-center gap-2 text-primary text-sm justify-center">
            <Calendar className="w-4 h-4" />
            <span>Sabtu, 27 Desember 2025</span>
          </div>
          <div className="flex items-center gap-2 text-primary text-sm justify-center">
            <Clock className="w-4 h-4" />
            <span>19.00 - 21.00 WIB</span>
          </div>
          <div className="flex items-center gap-2 text-primary text-sm justify-center">
            <MapPin className="w-4 h-4" />
            <span>Live via Zoom</span>
          </div>
        </div>

        <div className="mb-6">
          <span className="text-slate-400 line-through text-lg block mb-1">Harga Normal: Rp 499.000</span>
          <span className="text-primary font-black text-4xl md:text-5xl">Rp 129.000</span>
        </div>

        {/* Bonus Badge */}
        <div className="mb-6 inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-yellow-300 text-yellow-800 px-5 py-2.5 rounded-full shadow-md">
          <svg className="w-5 h-5 text-yellow-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
          </svg>
          <span className="text-sm md:text-base font-bold">Bonus: Akun Pro NotebookLM (Senilai Rp 309.000)</span>
        </div>

        <a 
          href="#daftar" 
          onClick={scrollToForm}
          className="inline-block bg-secondary text-white py-4 px-8 rounded-xl text-xl font-extrabold shadow-lg shadow-orange-500/30 hover:-translate-y-1 hover:shadow-orange-500/50 transition-all duration-300"
        >
          SAYA MAU DAFTAR SEKARANG!
        </a>
        
        <p className="flex items-center justify-center gap-2 text-red-600 font-bold mt-6 text-sm md:text-base animate-pulse">
          <AlertTriangle className="w-5 h-5" />
          Sisa 12 slot promo tersedia hari ini!
        </p>
      </div>
    </section>
  );
};

export default Hero;