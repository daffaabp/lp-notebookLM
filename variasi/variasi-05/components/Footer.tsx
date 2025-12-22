import React from 'react';
import { GRADIENT_CLASS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className={`py-16 ${GRADIENT_CLASS} text-white border-t-8 border-orange-600 px-4`}>
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-black mb-8 italic uppercase tracking-tighter text-purple-300">
          Kelas Inovatif
        </h3>
        <p className="text-sm text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
          Webinar ini diselenggarakan oleh <span className="font-bold text-white">Kelas Inovatif</span>. Platform pembelajaran Artificial Intelligence Nomor 1 di Indonesia bagi para peneliti akademik. Kami berkomitmen menyediakan edukasi berkualitas tinggi, bebas plagiasi, dan beretika untuk memajukan riset Indonesia.
          <br />
          <a href="https://kelasinovatif.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline mt-2 inline-block">
            kelasinovatif.com
          </a>
        </p>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-xs font-bold text-purple-200 mb-10 uppercase tracking-widest">
          <a href="/terms-of-service" className="hover:text-orange-400 border-b-2 border-transparent hover:border-orange-400 pb-1 transition-colors">
            Term of Service
          </a>
          <a href="/privacy-policy" className="hover:text-orange-400 border-b-2 border-transparent hover:border-orange-400 pb-1 transition-colors">
            Privacy Policy
          </a>
          <a href="/gdpr" className="hover:text-orange-400 border-b-2 border-transparent hover:border-orange-400 pb-1 transition-colors">
            GDPR Compliance
          </a>
        </div>
        <p className="text-[10px] text-purple-400/60 max-w-2xl mx-auto leading-relaxed uppercase">
          &copy; {new Date().getFullYear()} Kelas Inovatif. All rights reserved. <br />
          NotebookLM adalah merek dagang dari Google Labs. Program ini diselenggarakan secara independen.
        </p>
      </div>
    </footer>
  );
};

export default Footer;