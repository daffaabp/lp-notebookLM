import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <footer className="bg-dark text-slate-400 py-16 text-center text-sm">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-6">
          <a 
            href="https://kelasinovatif.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block text-white hover:text-secondary transition-colors mb-4"
          >
            <i className="fas fa-globe mr-1"></i>kelasinovatif.com
          </a>
        </div>
        
        <div className="flex justify-center gap-6 mb-8">
          <a 
            href="/terms-of-service" 
            onClick={(e) => handleLinkClick(e, '/terms-of-service')}
            className="text-white hover:text-secondary transition-colors cursor-pointer"
          >
            Syarat & Ketentuan
          </a>
          <span className="text-slate-700">|</span>
          <a 
            href="/privacy-policy" 
            onClick={(e) => handleLinkClick(e, '/privacy-policy')}
            className="text-white hover:text-secondary transition-colors cursor-pointer"
          >
            Kebijakan Privasi
          </a>
        </div>
        
        <p className="text-xs text-slate-600 mt-4">
          &copy; {currentYear} Kelas Inovatif. NOTEBOOKLM ADALAH MEREK DAGANG DARI GOOGLE LABS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;