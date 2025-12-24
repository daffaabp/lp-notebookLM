import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <header className="relative bg-gradient-to-br from-blue-600 to-blue-900 text-white py-12 md:py-16 px-4 md:px-6 text-center overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
         <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400 rounded-full blur-[100px]"></div>
         <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-6xl font-extrabold mb-4 md:mb-6 leading-tight tracking-tight drop-shadow-sm">
          Terlalu Banyak Bacaan & Data, Waktu Selalu Kurang? <br />
          <span className="text-yellow-300">NotebookLM siap bantu Anda</span> ringkas & pahami cepat!
        </h1>
        
        <p className="text-base md:text-2xl mb-6 md:mb-8 opacity-90 max-w-3xl mx-auto font-normal leading-relaxed">
          Ubah ratusan halaman PDF, Website, Video YouTube, dan Audio menjadi asisten riset cerdas yang 100% akurat dengan NotebookLM.
        </p>
        
        {/* Date & Time Widget Box */}
        <div className="inline-flex flex-col md:flex-row items-stretch md:items-center bg-blue-950/40 backdrop-blur-md border border-blue-400/30 rounded-xl md:rounded-2xl p-1.5 md:p-2 mb-4 md:mb-6 shadow-xl mx-auto hover:border-blue-400/50 transition-colors">
          
          <div className="flex items-center px-4 md:px-6 py-2 md:py-3 min-w-[180px] md:min-w-[200px]">
            <span className="text-2xl md:text-3xl mr-3 md:mr-4 drop-shadow-md">📅</span>
            <div className="text-left">
              <p className="font-bold text-base md:text-lg leading-none text-white">Sabtu, 27</p>
              <p className="text-blue-200 text-xs md:text-sm font-medium mt-0.5 md:mt-1">Desember 2025</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-blue-400/50 to-transparent mx-2 self-stretch"></div>
          <div className="md:hidden h-px w-full bg-gradient-to-r from-transparent via-blue-400/50 to-transparent my-1.5"></div>

          <div className="flex items-center px-4 md:px-6 py-2 md:py-3 min-w-[180px] md:min-w-[200px]">
            <span className="text-2xl md:text-3xl mr-3 md:mr-4 drop-shadow-md">⏰</span>
            <div className="text-left">
              <p className="font-bold text-base md:text-lg leading-none text-white">19.00 -</p>
              <p className="text-blue-200 text-xs md:text-sm font-medium mt-0.5 md:mt-1">21.00 WIB</p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-blue-400/50 to-transparent mx-2 self-stretch"></div>
          <div className="md:hidden h-px w-full bg-gradient-to-r from-transparent via-blue-400/50 to-transparent my-1.5"></div>

          <div className="flex items-center px-4 md:px-6 py-2 md:py-3 min-w-[180px] md:min-w-[200px]">
            <span className="text-2xl md:text-3xl mr-3 md:mr-4 drop-shadow-md">💻</span>
            <div className="text-left">
              <p className="font-bold text-base md:text-lg leading-none text-white">Live Zoom</p>
              <p className="text-blue-200 text-xs md:text-sm font-medium mt-0.5 md:mt-1">Webinar Interaktif</p>
            </div>
          </div>

        </div>

        {/* Pricing Box */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl md:rounded-2xl p-4 md:p-6 mb-4 md:mb-6 max-w-md mx-auto shadow-xl">
          <div className="text-center">
            <p className="text-blue-200 text-xs md:text-sm mb-2 md:mb-3">Investasi Ilmu</p>
            <div className="flex items-center justify-center gap-2 md:gap-3 mb-1 md:mb-2">
              <span className="text-xl md:text-2xl line-through text-blue-200 decoration-2">Rp 149.000</span>
              <span className="text-3xl md:text-5xl font-extrabold text-yellow-300">Rp 129.000</span>
            </div>
            <div className="bg-yellow-400/20 border border-yellow-400/30 rounded-lg p-2 md:p-3 mt-3 md:mt-4">
              <p className="text-yellow-200 text-xs md:text-sm font-semibold">
                🎁 Bonus Eksklusif: Akun NotebookLM Pro
              </p>
              <p className="text-yellow-300 text-xs mt-0.5 md:mt-1">
                Senilai Rp 309.000
              </p>
            </div>
          </div>
        </div>
        
        <a 
          href="#register" 
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-extrabold py-3 md:py-4 px-8 md:px-10 rounded-full text-lg md:text-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 ring-4 ring-yellow-400/30"
        >
          Daftar Sekarang & Hemat 75%!
        </a>
      </div>
    </header>
  );
};

export default HeroSection;