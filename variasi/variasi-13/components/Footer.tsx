import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 bg-gray-900 text-gray-400 text-center text-sm px-6 border-t border-gray-800">
      <div className="max-w-4xl mx-auto">
        <p className="mb-4 font-medium text-gray-300">© 2025 Market NotebookLM Indonesia. Hak Cipta Dilindungi Undang-Undang.</p>
        <div className="space-x-4 mb-6 text-gray-500">
          <a href="#" className="hover:text-white transition duration-300">Terms of Service</a>
          <span>|</span>
          <a href="#" className="hover:text-white transition duration-300">Privacy Policy</a>
        </div>
        <p className="italic text-xs text-gray-600 max-w-lg mx-auto">
          "NotebookLM adalah merek dagang dari Google Labs. Webinar ini diselenggarakan secara independen untuk tujuan edukatif dan tidak berafiliasi langsung dengan Google."
        </p>
      </div>
    </footer>
  );
};

export default Footer;