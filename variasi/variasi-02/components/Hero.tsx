import React from 'react';
import { Calendar, Video } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="legal-gradient text-white pt-12 pb-16 px-4 border-b-4 border-orange-500 relative">
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

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h1 className="text-3xl md:text-5xl font-black mb-5 leading-tight tracking-tight">
        Kepala <span className="text-orange-500 italic">"mau pecah"</span> memilah ribuan dokumen hukum & takut ada bukti terlewat? <br />
          Cukup serahkan ke <span className="text-green-300 font-extrabold">NotebookLM</span>, semua jadi ringkas & jelas!
        </h1>
        <p className="text-base md:text-lg text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Biarkan <strong>NotebookLM</strong> yang menelusuri ribuan kontrak, BAP, dan dokumen Anda—jadi ringkasan bukti yang tajam, sitasi jelas, dan Anda tak perlu khawatir ada fakta atau pasal penting yang terlewat.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10">
          <div className="bg-white/10 backdrop-blur-md py-3 px-6 rounded-lg border border-white/20 w-full md:w-auto flex flex-col items-center justify-center min-w-[200px]">
            <span className="text-xs text-slate-400 uppercase tracking-wider mb-1">Investasi</span>
            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-bold text-orange-500">Rp 129.000</span>
              <span className="text-sm line-through text-slate-500 decoration-slate-500/50">Rp 499.000</span>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md py-3 px-6 rounded-lg border border-white/20 w-full md:w-auto flex items-center justify-center md:justify-start gap-4 min-w-[240px]">
             <div className="bg-orange-500/20 p-2 rounded-lg">
                <Calendar className="text-orange-500" size={20} />
             </div>
             <div className="text-left">
                <span className="block text-xs text-slate-400 uppercase tracking-wider mb-1">Ikuti Webinar Pada</span>
                <span className="font-bold text-sm block">Sabtu, 27 Desember 2025</span>
                <span className="text-xs text-slate-300">19.00 - 21.00 WIB</span>
             </div>
          </div>
        </div>

        {/* Bonus Badge */}
        <div className="mb-6 inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/30 to-orange-500/30 border-2 border-yellow-400/60 text-yellow-100 px-5 py-2.5 rounded-lg backdrop-blur-sm shadow-lg">
          <svg className="w-5 h-5 text-yellow-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
          </svg>
          <span className="text-sm md:text-base font-bold">Bonus: Akun Pro NotebookLM 1 Bulan (Senilai Rp 309.000)</span>
        </div>

        <a 
          href="#register" 
          className="group relative inline-flex items-center justify-center bg-orange-600 hover:bg-orange-500 text-white text-lg font-black py-4 px-10 rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] hover:-translate-y-1"
        >
          DAFTAR WEBINAR SEKARANG
        </a>
        <p className="mt-5 text-xs italic text-slate-400 flex items-center justify-center gap-2">
          <Video size={14} />
          Live via Zoom Meeting - Slot Terbatas!
        </p>
      </div>
    </section>
  );
};