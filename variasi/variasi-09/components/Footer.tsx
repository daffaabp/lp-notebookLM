import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-slate-950 text-slate-400 text-center border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="mb-8 flex justify-center gap-4">
             <i className="fas fa-robot text-slate-700 text-3xl"></i>
        </div>
        
        <h3 className="text-white font-bold text-lg mb-2 uppercase tracking-wider">Kelas Inovatif</h3>
        <p className="max-w-xl mx-auto mb-2 text-sm leading-relaxed">
            Webinar ini diselenggarakan oleh Kelas Inovatif.
        </p>
        <p className="max-w-xl mx-auto mb-6 text-sm leading-relaxed text-slate-500">
            Platform pembelajaran Artificial Intelligence Nomor 1 di Indonesia bagi para peneliti akademik.
        </p>
        
        <div className="mb-10">
            <a href="https://kelasinovatif.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-white transition font-bold border-b border-gold hover:border-white pb-1">
                kelasinovatif.com
            </a>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-center items-center gap-6 text-xs uppercase tracking-widest">
          <p>&copy; 2025 KELAS INOVATIF.</p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="hover:text-white transition duration-300 border-b border-transparent hover:border-gold pb-1 cursor-pointer">Kebijakan Privasi</a>
            <a href="/terms-of-service" className="hover:text-white transition duration-300 border-b border-transparent hover:border-gold pb-1 cursor-pointer">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;