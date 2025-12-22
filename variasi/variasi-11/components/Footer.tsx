import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-500 text-sm mb-2">
          &copy; {new Date().getFullYear()} Webinar IRT Cerdas - Didukung oleh M. Arianto &amp; NotebookLM.
        </p>
        <p className="text-gray-400 text-xs mb-4">
          Semua hak cipta dilindungi.
        </p>
        <div className="flex justify-center gap-6 mt-4 text-sm text-gray-500">
          <a href="?page=privacy-policy" className="hover:text-gray-900 transition-colors">Kebijakan Privasi</a>
          <a href="?page=terms-of-service" className="hover:text-gray-900 transition-colors">Syarat &amp; Ketentuan</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;