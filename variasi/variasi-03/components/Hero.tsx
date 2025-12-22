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
    <header className="bg-gradient-to-br from-teal-700 to-teal-900 text-white pt-12 pb-16 px-4 border-b-8 border-teal-500">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
          "Mata Mau Copot" Baca Ribuan Jurnal Medis? <br className="hidden md:block" />
          Berhenti Membahayakan Pasien dengan <span className="text-red-400">Riset Kuno!</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-3xl mx-auto leading-relaxed">
          Review manual itu <strong>lambat & rawan bias</strong>. Biarkan <strong>NotebookLM</strong> "membedah" ribuan studi klinis, <span className="text-orange-300 font-semibold">bebas halusinasi</span>, dan tegakkan diagnosa akurat sekarang juga.
        </p>

        {/* Compact Info Card */}
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 inline-flex flex-col sm:flex-row gap-5 items-center justify-center shadow-xl mb-10 max-w-3xl mx-auto">
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