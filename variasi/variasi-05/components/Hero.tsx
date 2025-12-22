import React from 'react';
import { GRADIENT_CLASS } from '../constants';

const Hero: React.FC = () => {
  return (
    <header className={`${GRADIENT_CLASS} text-white pt-16 pb-24 px-4 border-b-8 border-orange-500`}>
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-block bg-purple-500/20 text-purple-300 px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-8 border border-purple-400/30">
          Webinar Eksklusif: AI untuk Industri Kreatif & Penulis
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
          Pusing <span className="text-orange-500 italic">Alur Cerita Berantakan</span> & Lelah Riset Berjam-jam? <br />
          Ubah 15 Jam Riset Jadi 30 Menit dengan <span className="underline decoration-orange-500/50">NotebookLM</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Hentikan kekacauan draf Anda. Gunakan asisten pribadi yang menjaga <span className="font-bold text-white">jalan cerita tetap konsisten</span>, mengelola ribuan halaman riset, dan menyusun naskah yang tervalidasi 100% tanpa halusinasi AI.
        </p>

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 inline-flex flex-col md:flex-row gap-8 items-center shadow-2xl mb-12">
          <div className="text-center md:text-left">
            <p className="text-orange-400 text-sm font-bold uppercase tracking-tighter mb-1">Investasi Ilmu</p>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="text-lg md:text-xl font-bold text-slate-400 line-through decoration-slate-400/80 decoration-2">Rp 499.000</span>
              <span className="text-5xl md:text-6xl font-black text-orange-500">Rp 129.000</span>
            </div>
          </div>
          <div className="h-10 w-px bg-white/20 hidden md:block"></div>
          <div className="text-center md:text-left">
            <p className="text-purple-300 text-sm font-bold uppercase">Sesi Live Zoom</p>
            <span className="text-xl font-bold italic text-white">
              <i className="far fa-calendar-check mr-2"></i>Sabtu, 27 Des 2025 | 19.00 WIB
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <a
            href="#register"
            className="bg-orange-600 text-white text-xl md:text-2xl font-black py-6 px-14 rounded-full shadow-2xl block md:inline-block uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(249,115,22,0.6)]"
          >
            DAFTAR SEKARANG
          </a>
          <p className="text-slate-300 text-sm font-bold italic tracking-wide">
            <i className="fas fa-fire-alt mr-2 text-orange-500"></i>
            Segera Amankan Slot Anda! Promo Terbatas & Harga Bisa Naik Sewaktu-waktu.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Hero;