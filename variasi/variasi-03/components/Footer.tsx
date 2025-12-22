import React from 'react';

const Footer: React.FC = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <footer className="py-16 bg-gradient-to-br from-teal-700 to-teal-900 text-white border-t-8 border-teal-500 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-10">
           <a href="https://kelasinovatif.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-white/10 hover:bg-white/20 px-6 py-2 rounded-full text-teal-300 font-bold border border-teal-500/30 transition">
             <i className="fas fa-globe mr-2"></i>kelasinovatif.com
           </a>
        </div>
        
        <div className="flex flex-wrap justify-center gap-10 text-xs font-bold text-teal-200 mb-10 uppercase tracking-widest">
          <a 
            href="/terms-of-service"
            onClick={(e) => handleLinkClick(e, '/terms-of-service')}
            className="hover:text-orange-400 border-b-2 border-transparent hover:border-orange-400 pb-1 transition-colors cursor-pointer"
          >
            Term of Service
          </a>
          <a 
            href="/privacy-policy"
            onClick={(e) => handleLinkClick(e, '/privacy-policy')}
            className="hover:text-orange-400 border-b-2 border-transparent hover:border-orange-400 pb-1 transition-colors cursor-pointer"
          >
            Privacy Policy
          </a>
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