import React from 'react';
import { CalendarCheck, Video } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <header className="bg-gradient-to-br from-emerald-900 to-emerald-800 text-white pt-16 pb-24 px-4 border-b-8 border-yellow-500">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-block bg-yellow-500/20 text-yellow-400 px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-8 border border-yellow-400/30">
          Webinar Eksklusif: Kecerdasan Buatan untuk Birokrasi Pintar
        </div>

        <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
          Mata Lelah & Stres Menatap Ribuan Halaman Regulasi <br className="hidden md:block" /> yang Harus Diringkas Hari Ini Juga? <br />
          <span className="text-yellow-400 underline decoration-wavy italic">Sudahi Penderitaan Administratif Ini Sekarang!</span>
        </h1>

        <p className="text-xl md:text-2xl text-emerald-100 mb-12 max-w-4xl mx-auto leading-relaxed">
          Jangan biarkan tumpukan dokumen merenggut waktu istirahat Anda. Gunakan <strong className="text-white">Google NotebookLM</strong> untuk membaca, membedah, dan menyimpulkan 50+ file PDF Regulasi & Laporan Dinas sekaligus secara instan. Akurat, Aman, dan Tanpa Drama.
        </p>

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 inline-flex flex-col md:flex-row gap-8 items-center shadow-2xl mb-12 text-left">
          <div>
            <p className="text-yellow-400 text-sm font-bold uppercase mb-1">Investasi Ilmu</p>
            <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-white">Rp 129.000</span>
                <span className="text-lg line-through text-emerald-200/60">Rp 499.000</span>
            </div>
          </div>
          <div className="h-10 w-px bg-white/20 hidden md:block"></div>
          <div>
            <p className="text-yellow-400 text-sm font-bold uppercase mb-1">Sesi Live Zoom</p>
            <span className="text-xl font-bold italic text-white flex items-center gap-2">
              <CalendarCheck className="w-5 h-5" />
              Sabtu, 27 Des 2025 | 19.00 WIB
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <a 
            href="#register" 
            className="cta-pulse bg-yellow-500 hover:bg-yellow-600 text-emerald-950 text-2xl font-black py-6 px-14 rounded-full shadow-2xl block md:inline-block uppercase tracking-wider transition-all transform hover:-translate-y-1"
          >
            DAFTAR SEKARANG
          </a>
          <p className="text-emerald-100 text-sm italic flex justify-center items-center gap-2">
            <Video className="w-4 h-4" />
            Sesi Interaktif + Akses Rekaman Seumur Hidup
          </p>
        </div>
      </div>
    </header>
  );
};