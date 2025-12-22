import React from 'react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="py-16 legal-gradient text-white border-t-8 border-orange-600 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-xl font-bold mb-4 uppercase text-orange-400 tracking-wider">
          Diselenggarakan Oleh
        </h3>
        <h2 className="text-2xl md:text-3xl font-black mb-6">
          Kelas Inovatif
        </h2>
        
        <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8 text-sm md:text-base">
          Platform pembelajaran Artificial Intelligence Nomor 1 di Indonesia bagi para peneliti akademik.
          <br />
          <a href="https://kelasinovatif.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline font-bold mt-2 inline-block">
            kelasinovatif.com
          </a>
        </p>

        <div className="flex justify-center gap-8 text-sm text-slate-400 mb-8 font-medium">
          <button 
            onClick={() => onNavigate('terms')} 
            className="hover:text-orange-500 transition-colors bg-transparent border-none cursor-pointer underline decoration-dotted underline-offset-4"
          >
            Terms of Service
          </button>
          <button 
            onClick={() => onNavigate('privacy')} 
            className="hover:text-orange-500 transition-colors bg-transparent border-none cursor-pointer underline decoration-dotted underline-offset-4"
          >
            Privacy Policy
          </button>
        </div>
        
        <p className="text-xs text-slate-600 leading-relaxed max-w-lg mx-auto">
          &copy; 2025 Kelas Inovatif. Seluruh Hak Cipta Dilindungi. <br />
          NotebookLM adalah merek dagang dari Google Labs. Webinar ini diselenggarakan secara independen untuk tujuan edukasi profesional.
        </p>
      </div>
    </footer>
  );
};