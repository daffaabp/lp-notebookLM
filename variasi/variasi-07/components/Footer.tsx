import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-gradient-to-br from-emerald-900 to-emerald-800 text-white border-t-8 border-yellow-500 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-black mb-6 italic uppercase tracking-tighter text-yellow-400">
          Digital Bureaucracy Academy Indonesia
        </h3>
        
        <div className="max-w-3xl mx-auto mb-10 text-emerald-100/80 text-sm leading-relaxed">
            <p className="mb-4">
                Webinar ini diselenggarakan oleh <strong className="text-white">Kelas Inovatif</strong>. 
                Platform pembelajaran Artificial Intelligence Nomor 1 di Indonesia bagi para peneliti akademik. 
                Kami berkomitmen menyediakan edukasi berkualitas tinggi, bebas plagiasi, dan beretika untuk memajukan riset Indonesia.
            </p>
            <a href="https://kelasinovatif.com" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 font-bold underline decoration-yellow-400/50 hover:decoration-yellow-300 transition">
                kelasinovatif.com
            </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-xs font-bold text-emerald-200 mb-10 uppercase tracking-widest">
          <a href="#" className="hover:text-yellow-400 border-b-2 border-transparent hover:border-yellow-400 pb-1 transition">Ketentuan Layanan</a>
          <a href="#" className="hover:text-yellow-400 border-b-2 border-transparent hover:border-yellow-400 pb-1 transition">Kebijakan Privasi</a>
        </div>
        <p className="text-[10px] text-emerald-300/60 max-w-2xl mx-auto leading-relaxed uppercase">
          &copy; 2025 Webinar Masterclass Intelijen Dokumen Digital. <br />
          NotebookLM adalah merek dagang Google Labs. Program ini diselenggarakan secara independen.
        </p>
      </div>
    </footer>
  );
};