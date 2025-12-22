import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-gray-900 text-white text-center px-4">
        <div className="max-w-4xl mx-auto">
            <p className="text-2xl font-bold mb-4 tracking-tighter">
                Masterclass<span className="text-blue-500">.</span>
            </p>
            
            <div className="mb-8 text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto">
                <p className="mb-4">
                    Webinar ini diselenggarakan oleh <strong className="text-white">Kelas Inovatif</strong>. 
                    Platform pembelajaran Artificial Intelligence Nomor 1 di Indonesia bagi para peneliti akademik.
                </p>
                <a href="https://kelasinovatif.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                    kelasinovatif.com
                </a>
            </div>

            <div className="w-12 h-1 bg-gray-700 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Webinar Masterclass Riset Digital. Powered by Gemini 3.
            </p>
            <div className="flex justify-center gap-6 mt-6 text-sm text-gray-500">
                <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
        </div>
    </footer>
  );
};

export default Footer;