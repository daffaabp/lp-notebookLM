import React from 'react';

const Header: React.FC = () => {
  return (
    <>
      {/* HERO SECTION */}
      <header className="business-gradient text-white pt-16 pb-24 px-4 border-b-8 border-orange-500 relative overflow-hidden">
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

        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* HOOK UTAMA */}
          <h1 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
            "Berapa Banyak Keputusan Bisnis yang Gagal Karena <span className="text-orange-500 italic">Data Penting Terkubur</span> di Ribuan Laporan, PDF, & Slide Presentasi?"
          </h1>
          
          <h2 className="text-lg md:text-2xl font-medium text-slate-300 mb-10 max-w-4xl mx-auto leading-relaxed">
            NotebookLM bantu tim Anda temukan insight penting dari laporan dengan cepat, tanpa repot dan tanpa risiko halusinasi.
          </h2>
          
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 inline-flex flex-col md:flex-row gap-8 items-center shadow-2xl mb-8 hover:bg-white/15 transition-all">
            <div className="text-center md:text-left">
              <p className="text-orange-400 text-sm font-bold uppercase tracking-tighter mb-1">Investasi Ilmu</p>
              <div className="flex items-center gap-3">
                <span className="text-2xl md:text-4xl font-black text-slate-400 line-through opacity-70">Rp 499.000</span>
                <span className="text-3xl md:text-4xl font-black text-orange-500">Rp 129.000</span>
              </div>
            </div>
            <div className="h-10 w-px bg-white/20 hidden md:block"></div>
            <div className="text-center md:text-left">
              <p className="text-blue-400 text-sm font-bold uppercase mb-1">Jadwal Live</p>
              <span className="text-lg md:text-xl font-bold italic text-white flex items-center justify-center md:justify-start gap-2">
                <i className="far fa-calendar-check"></i>
                Sabtu, 27 Des 2025 | 19.00 WIB
              </span>
            </div>
          </div>

          {/* Bonus Badge */}
          <div className="mb-8 inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/30 to-orange-500/30 border-2 border-yellow-400/60 text-yellow-100 px-5 py-2.5 rounded-lg backdrop-blur-sm shadow-lg">
            <svg className="w-5 h-5 text-yellow-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
            <span className="text-sm md:text-base font-bold">Bonus: Akun Pro NotebookLM 1 Bulan (Senilai Rp 309.000)</span>
          </div>

          <div className="space-y-4">
            <a 
              href="#register" 
              className="cta-glow bg-orange-600 hover:bg-orange-500 text-white text-lg md:text-2xl font-black py-5 px-10 md:py-6 md:px-14 rounded-full shadow-2xl transition duration-300 block md:inline-block uppercase tracking-wider transform hover:-translate-y-1"
            >
              DAFTAR SEKARANG
            </a>
            <p className="text-slate-400 text-sm italic flex items-center justify-center gap-2">
              <i className="fas fa-shield-alt"></i>
              Sesi Live + Akses Rekaman Seumur Hidup
            </p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;