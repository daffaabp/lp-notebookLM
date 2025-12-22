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
        <div className="inline-block bg-teal-400/20 text-teal-300 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-teal-400/30">
          Exclusive Webinar: AI for Medical & Clinical Research
        </div>
        <h1 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
          Lelah Membedah Ribuan Jurnal Hingga Mata Berair? Riset Manual Membuka Celah <span className="text-red-400 underline decoration-red-400 italic">Human Error & Bias</span> Fatal.
        </h1>
        <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-3xl mx-auto leading-relaxed">
          Solusinya: <strong>NotebookLM</strong>. AI "Grounded" yang memproses tumpukan PDF medis dan hasil lab Anda menjadi wawasan klinis instan. Akurat, terkini, dan 100% berbasis sumber yang Anda unggah—tanpa menebak-nebak.
        </p>

        {/* Compact Info Card */}
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 inline-flex flex-col sm:flex-row gap-5 items-center justify-center shadow-xl mb-10 max-w-3xl mx-auto">
          <div className="text-center sm:text-right min-w-[140px]">
            <p className="text-teal-200 text-[10px] font-bold uppercase tracking-widest mb-1">Investasi Ilmu</p>
            <div className="flex items-center justify-center sm:justify-end gap-2">
               <span className="text-2xl font-black text-white">Rp 129.000</span>
               <span className="text-xs line-through text-white/50">Rp 499.000</span>
            </div>
          </div>
          
          <div className="h-px w-full sm:w-px sm:h-12 bg-white/20"></div>
          
          <div className="text-center sm:text-left">
            <p className="text-teal-200 text-[10px] font-bold uppercase tracking-widest mb-1">Waktu Pelaksanaan</p>
            <div className="text-white font-bold flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-base">
              <i className="far fa-calendar-check text-teal-300"></i>
              <span>Sabtu, 27 Des 2025 | 19.00 WIB</span>
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