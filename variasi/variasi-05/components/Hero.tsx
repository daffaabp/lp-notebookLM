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
    <section className="text-center pt-20 pb-10 bg-gradient-to-br from-slate-50 to-slate-200 border-b-4 border-primary px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-6 leading-tight">
          Tinggalkan Cara Lama! Ubah 50+ Sumber Riset Menjadi Naskah Video & Buku Berkualitas dalam 1 Jam!
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
          Gunakan sistem "Grounded AI" 2025 untuk menulis konten edukasi yang akurat, terverifikasi, dan bebas halusinasi—Khusus YouTuber, Podcaster, & Penulis.
        </p>
        
        <div className="inline-flex flex-col md:flex-row items-center gap-4 bg-dark text-white px-6 py-3 rounded-full font-bold text-sm md:text-base mb-8 shadow-lg">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-secondary" />
            <span>Sabtu, 27 Desember 2025</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-slate-500"></div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-secondary" />
            <span>19.00 - 21.00 WIB</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-slate-500"></div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-secondary" />
            <span>Live via Zoom</span>
          </div>
        </div>

        <div className="mb-8">
          <span className="text-slate-400 line-through text-lg block mb-1">Harga Normal: Rp 499.000</span>
          <span className="text-primary font-black text-4xl md:text-5xl">Rp 129.000</span>
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