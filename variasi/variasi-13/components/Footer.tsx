import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <footer className="bg-gray-900 text-gray-400 py-16 text-center text-sm px-6">
      <div className="max-w-4xl mx-auto">
        {/* Logos Section */}
        <div className="mb-8 flex items-center justify-center gap-6">
          <a 
            href="https://kelasinovatif.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:opacity-80 transition-opacity"
          >
            <img 
              src="/assets/logo kelas inovatif.avif" 
              alt="Kelas Inovatif" 
              className="h-8 md:h-10 w-auto object-contain"
            />
          </a>
          <a 
            href="https://notebooklm.google.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:opacity-80 transition-opacity bg-white p-2 rounded"
          >
            <img 
              src="/assets/notebook-logo.avif" 
              alt="NotebookLM" 
              className="h-4 md:h-5 w-auto object-contain"
            />
          </a>
        </div>
        
        <div className="mb-6">
          <a 
            href="https://kelasinovatif.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block text-white hover:text-blue-400 transition-colors mb-4"
          >
            kelasinovatif.com
          </a>
        </div>
        
        <div className="flex justify-center gap-6 mb-8">
          <a 
            href="/terms-of-service" 
            onClick={(e) => handleLinkClick(e, '/terms-of-service')}
            className="text-white hover:text-blue-400 transition-colors cursor-pointer"
          >
            Syarat & Ketentuan
          </a>
          <span className="text-gray-700">|</span>
          <a 
            href="/privacy-policy" 
            onClick={(e) => handleLinkClick(e, '/privacy-policy')}
            className="text-white hover:text-blue-400 transition-colors cursor-pointer"
          >
            Kebijakan Privasi
          </a>
        </div>
        
        <p className="text-xs text-gray-600 mt-4">
          &copy; {currentYear} Kelas Inovatif. NOTEBOOKLM ADALAH MEREK DAGANG DARI GOOGLE LABS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;