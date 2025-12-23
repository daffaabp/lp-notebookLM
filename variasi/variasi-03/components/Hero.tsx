import React from 'react';

const Hero: React.FC = () => {
  const scrollToRegister = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-gradient-to-br from-teal-700 to-teal-900 text-white pt-12 pb-16 px-4 border-b-8 border-teal-500 relative overflow-hidden">
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
        <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
          "Mata Mau Copot" Baca Ribuan Jurnal Medis? <br className="hidden md:block" />
          <span className="text-teal-200 font-extrabold">Pakai NotebookLM, solusi cerdasnya!</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-3xl mx-auto leading-relaxed">
          Kalau Anda dokter, tenaga medis, atau peneliti kesehatan yang kewalahan menelaah tumpukan jurnal, <strong>NotebookLM</strong> siap <span className="text-orange-300 font-semibold">meringkas, memilah, dan mencari bukti ilmiah</span>, konversi 300 dokumen jadi ringkasan video, laporan, bahkan presentasi otomatis, bebas pusing, diagnosa makin akurat!
        </p>

        {/* Compact Info Card */}
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 inline-flex flex-col sm:flex-row gap-5 items-center justify-center shadow-xl mb-6 max-w-3xl mx-auto">
          <div className="text-center sm:text-right min-w-[140px]">
            <p className="text-teal-200 text-[10px] font-bold uppercase tracking-widest mb-1">Investasi Ilmu</p>
            <div className="flex items-center justify-center sm:justify-end gap-2">
               <span className="text-4xl md:text-5xl font-black text-yellow-300 drop-shadow-sm">Rp 129.000</span>
               <span className="text-2xl md:text-3xl line-through text-red-300 font-semibold ml-3">Rp 499.000</span>
            </div>
          </div>
          
          <div className="h-px w-full sm:w-px sm:h-12 bg-white/20"></div>
          
          <div className="text-center sm:text-left">
            <p className="text-teal-200 text-[10px] font-bold uppercase tracking-widest mb-1">Waktu Pelaksanaan</p>
            <div className="text-white font-bold flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-base">
              <i className="far fa-calendar-check text-teal-300"></i>
              <span className="text-base">Sabtu, 27 Des 2025 | 19.00 WIB</span>
            </div>
          </div>
        </div>

        {/* Bonus Badge */}
        <div className="mb-6 inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/25 to-orange-400/25 border-2 border-yellow-300/50 text-yellow-100 px-4 py-2 rounded-full backdrop-blur-sm shadow-lg">
          <svg className="w-5 h-5 text-yellow-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
          </svg>
          <span className="text-sm md:text-base font-bold">Bonus: Akun Pro NotebookLM 1 Bulan (Senilai Rp 309.000)</span>
        </div>

        <div>
          <button 
            onClick={scrollToRegister}
            className="animate-cta-pulse bg-orange-500 hover:bg-orange-600 text-white text-xl font-black py-4 px-10 rounded-full shadow-2xl transition duration-300 block md:inline-block uppercase tracking-wider mx-auto"
          >
            DAFTAR SEKARANG
          </button>
          <p className="mt-5 text-teal-200 text-sm font-medium animate-bounce">
            <i className="fas fa-video mr-2"></i>Live via Zoom Meeting - Slot Sangat Terbatas!
          </p>
        </div>
      </div>
    </header>
  );
};

export default Hero;