import React from 'react';

const Footer: React.FC = () => {
  return (
<<<<<<< HEAD
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
=======
    <footer className="bg-white border-t border-gray-200 py-10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-500 text-sm mb-2">
          &copy; {new Date().getFullYear()} Kelas Inovatif - Didukung oleh M. Arianto &amp; NotebookLM.
        </p>
        <p className="text-gray-400 text-xs mb-4">
          Semua hak cipta dilindungi.
        </p>
        <div className="flex justify-center gap-6 mt-4 text-sm text-gray-500">
          <a href="?page=privacy-policy" className="hover:text-gray-900 transition-colors">Kebijakan Privasi</a>
          <a href="?page=terms-of-service" className="hover:text-gray-900 transition-colors">Syarat &amp; Ketentuan</a>
>>>>>>> f59101d12568799a1c02434766eccfd7a7cc03ba
        </div>
      </div>
    </footer>
  );
};

export default Footer;