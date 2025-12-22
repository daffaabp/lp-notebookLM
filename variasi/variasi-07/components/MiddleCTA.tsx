import React from 'react';

export const MiddleCTA: React.FC = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-emerald-900 to-emerald-800 text-white text-center px-4">
      <h3 className="text-xl md:text-2xl font-bold mb-8 italic">
        "ASN yang beradaptasi dengan teknologi adalah kunci Indonesia Emas 2045."
      </h3>
      <a 
        href="#register" 
        className="inline-block bg-yellow-500 hover:bg-yellow-600 text-emerald-950 py-4 px-12 rounded-full font-black text-lg tracking-wide uppercase shadow-lg transition-all transform hover:scale-105"
      >
        DAFTAR WEBINAR SEKARANG
      </a>
    </div>
  );
};