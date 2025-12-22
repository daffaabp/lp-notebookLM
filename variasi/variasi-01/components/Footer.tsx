import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-gray-900 text-white text-center px-4">
        <div className="max-w-4xl mx-auto">
            <p className="text-2xl font-bold mb-4 tracking-tighter">
                Kelas Inovatif<span className="text-blue-500">.</span>
            </p>
            
            <div className="mb-6 text-gray-400 text-sm max-w-2xl mx-auto text-center">
                <p className="mb-2">Platform pembelajaran Artificial Intelligence Nomor 1 di Indonesia bagi para peneliti akademik.</p>
                <a
                    href="https://kelasinovatif.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors font-semibold"
                >
                    &copy; {new Date().getFullYear()} kelasinovatif.com
                </a>
            </div>
            <div className="flex justify-center gap-6 mt-6 text-sm text-gray-500">
                <a href="?page=privacy-policy" className="hover:text-white transition-colors">Kebijakan Privasi</a>
                <a href="?page=terms-of-service" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
            </div>
        </div>
    </footer>
  );
};

export default Footer;