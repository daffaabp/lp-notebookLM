import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-gray-900 text-gray-400 text-center border-t border-gray-800">
      <div className="container mx-auto px-6 max-w-4xl">
        
        <div className="mb-8">
            <p className="text-lg font-semibold text-white mb-2">
                Webinar ini diselenggarakan oleh <span className="text-blue-400">Kelas Inovatif</span>
            </p>
            <p className="text-gray-400 mb-4 max-w-2xl mx-auto">
                Platform pembelajaran Artificial Intelligence Nomor 1 di Indonesia bagi para peneliti akademik.
            </p>
            <a 
                href="https://kelasinovatif.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-orange-500 hover:text-orange-400 font-bold transition-colors"
            >
                kelasinovatif.com
            </a>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0 text-sm">&copy; 2025 Kelas Inovatif. Seluruh Hak Cipta Dilindungi.</p>
            <div className="flex space-x-6 text-sm">
            <a href="/privacy-policy" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-white transition-colors duration-300">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;