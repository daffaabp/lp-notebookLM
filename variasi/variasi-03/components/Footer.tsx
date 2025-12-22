import React from 'react';

interface FooterProps {
  onOpenToS: () => void;
  onOpenPrivacy: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenToS, onOpenPrivacy }) => {
  return (
    <footer className="py-16 bg-gradient-to-br from-teal-700 to-teal-900 text-white border-t-8 border-teal-500 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-black mb-6 italic uppercase tracking-tighter text-white">
          Kelas Inovatif
        </h3>
        <p className="text-teal-100 text-sm max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
          Platform pembelajaran Artificial Intelligence Nomor 1 di Indonesia bagi para peneliti akademik. 
          Kami berkomitmen menyediakan edukasi berkualitas tinggi, bebas plagiasi, dan beretika untuk memajukan riset Indonesia.
        </p>
        <div className="mb-10">
           <a href="https://kelasinovatif.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-white/10 hover:bg-white/20 px-6 py-2 rounded-full text-teal-300 font-bold border border-teal-500/30 transition">
             <i className="fas fa-globe mr-2"></i>kelasinovatif.com
           </a>
        </div>
        
        <div className="flex flex-wrap justify-center gap-10 text-xs font-bold text-teal-200 mb-10 uppercase tracking-widest">
          <button onClick={onOpenToS} className="hover:text-orange-400 border-b-2 border-transparent hover:border-orange-400 pb-1 transition-colors cursor-pointer">
            Term of Service
          </button>
          <button onClick={onOpenPrivacy} className="hover:text-orange-400 border-b-2 border-transparent hover:border-orange-400 pb-1 transition-colors cursor-pointer">
            Privacy Policy
          </button>
        </div>
        
        <p className="text-[10px] text-teal-400/60 max-w-2xl mx-auto leading-relaxed uppercase">
          &copy; 2025 Kelas Inovatif. <br />
          NotebookLM adalah merek dagang dari Google Labs. Webinar ini diselenggarakan oleh Kelas Inovatif untuk tujuan edukasi profesional kesehatan.
        </p>
      </div>
    </footer>
  );
};

export default Footer;