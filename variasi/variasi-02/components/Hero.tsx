import React from 'react';
import { Calendar, Video } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="legal-gradient text-white pt-12 pb-16 px-4 border-b-4 border-orange-500">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-block bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-5 backdrop-blur-sm border border-orange-500/30">
          WORKSHOP EKSKLUSIF: AI UNTUK LEGAL & COMPLIANCE
        </div>
        <h1 className="text-3xl md:text-5xl font-black mb-5 leading-tight tracking-tight">
          Masih Sering Merasa <span className="text-orange-500 italic">"Tenggelam"</span> dalam Ribuan Dokumen Kasus & Dihantui Rasa Takut Melewatkan Bukti Kunci?
        </h1>
        <p className="text-base md:text-lg text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Akhiri siklus kelelahan ini. Gunakan <strong>Google NotebookLM</strong> untuk memproses ribuan halaman kontrak, BAP, dan bukti digital menjadi ringkasan strategis ber-sitasi dalam hitungan detik—tanpa risiko halusinasi.
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
                <span className="block text-xs text-slate-400 uppercase tracking-wider mb-1">Waktu Pelaksanaan</span>
                <span className="font-bold text-sm block">Sabtu, 27 Des 2025</span>
                <span className="text-xs text-slate-300">19.00 WIB</span>
             </div>
          </div>
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