import React from 'react';

const Header: React.FC = () => {
  return (
    <>
      {/* URGENCY BAR */}
      <div className="bg-orange-600 text-white text-center py-2 text-sm font-bold sticky top-0 z-50 shadow-md">
        🔥 Penawaran Akhir Tahun: Slot Zoom Terbatas untuk 100 Peserta Pertama!
      </div>

      {/* HERO SECTION */}
      <header className="business-gradient text-white pt-16 pb-24 px-4 border-b-8 border-orange-500 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-block bg-blue-500/20 text-blue-400 px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-8 border border-blue-400/30">
            Exclusive Corporate Webinar 2025
          </div>
          
          {/* HOOK UTAMA */}
          <h1 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
            "Jujur Saja: Berapa Banyak Insight Mahal yang Akhirnya <span className="text-orange-500 italic">'Menguap'</span> Karena Terkubur di Ribuan PDF, Slide Presentasi & Chat Group?"
          </h1>
          
          <h2 className="text-lg md:text-2xl font-medium text-slate-300 mb-10 max-w-4xl mx-auto leading-relaxed">
            Analisa manual itu <strong>mahal & lelet</strong>. Biarkan <strong className="text-blue-400">NotebookLM</strong> "menambang" tumpukan laporan bisnis Anda, <span className="text-orange-300 font-semibold">bebas halusinasi</span>, dan temukan "harta karun" data sebelum kompetitor.
          </h2>
          
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 inline-flex flex-col md:flex-row gap-8 items-center shadow-2xl mb-12 hover:bg-white/15 transition-all">
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