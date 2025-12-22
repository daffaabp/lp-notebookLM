import React from 'react';

const Footer: React.FC = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <footer className="py-3 bg-gradient-to-br from-teal-700 to-teal-900 text-white border-t-8 border-teal-500 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-2">
          <a 
            href="https://kelasinovatif.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-white/10 hover:bg-white/20 px-4 py-1.5 rounded-full text-teal-200 font-bold border border-teal-500/30 uppercase text-xs tracking-widest transition"
          >
            <i className="fas fa-globe mr-1"></i>kelasinovatif.com
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-xs font-bold text-teal-200 mb-1 uppercase tracking-widest">
          <a
            href="/terms-of-service"
            onClick={(e) => handleLinkClick(e, '/terms-of-service')}
            className="hover:text-orange-400 border-b-2 border-transparent hover:border-orange-400 pb-0.5 transition-colors cursor-pointer"
          >
            TERM OF SERVICE
          </a>
          <a
            href="/privacy-policy"
            onClick={(e) => handleLinkClick(e, '/privacy-policy')}
            className="hover:text-orange-400 border-b-2 border-transparent hover:border-orange-400 pb-0.5 transition-colors cursor-pointer"
          >
            PRIVACY POLICY
          </a>
        </div>
        <p className="text-[10px] text-teal-400/60 max-w-xl mx-auto leading-snug uppercase mt-2">
          &copy; 2025 Kelas Inovatif. NOTEBOOKLM ADALAH MEREK DAGANG DARI GOOGLE LABS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;