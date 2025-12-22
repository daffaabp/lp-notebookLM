import React from 'react';

export const Footer: React.FC = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <footer className="py-16 legal-gradient text-white border-t-8 border-orange-600 px-4">
      <div className="max-w-5xl mx-auto text-center">
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

        <div className="flex justify-center gap-8 text-sm text-slate-400 my-2 font-medium">
          <a 
            href="/terms-of-service"
            onClick={(e) => handleLinkClick(e, '/terms-of-service')}
            className="hover:text-orange-500 transition-colors underline decoration-dotted underline-offset-4"
          >
            Terms of Service
          </a>
          <a 
            href="/privacy-policy"
            onClick={(e) => handleLinkClick(e, '/privacy-policy')}
            className="hover:text-orange-500 transition-colors underline decoration-dotted underline-offset-4"
          >
            Privacy Policy
          </a>
        </div>
        
        <p className="text-xs text-slate-600 leading-relaxed max-w-lg mx-auto mt-1">
          &copy; 2025 Kelas Inovatif
        </p>
      </div>
    </footer>
  );
};