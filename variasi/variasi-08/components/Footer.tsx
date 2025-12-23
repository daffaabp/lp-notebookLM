import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-legal-900 text-white py-10 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm md:text-base opacity-80 mb-2">
          &copy; {new Date().getFullYear()} Kelas Inovatif.
        </p>
        <p className="text-xs text-gray-500 mb-4">
          Seluruh hak cipta dilindungi.
        </p>
        <div className="flex justify-center gap-6 mt-4 text-sm text-gray-400">
          <a href="?page=privacy-policy" className="hover:text-white transition-colors">Kebijakan Privasi</a>
          <a href="?page=terms-of-service" className="hover:text-white transition-colors">Syarat &amp; Ketentuan</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;