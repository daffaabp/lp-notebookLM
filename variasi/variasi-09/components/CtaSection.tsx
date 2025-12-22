import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-16 bg-gold text-slate-950 text-center shadow-inner relative overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-black mb-8 uppercase tracking-tighter max-w-2xl mx-auto leading-tight">
          Siap Merevolusi Alur Kerja Legal Anda?
        </h2>
        <a 
          href="#register" 
          className="bg-slate-900 text-gold hover:text-white font-extrabold py-4 px-12 rounded hover:bg-slate-800 transition duration-300 shadow-xl inline-block text-lg uppercase tracking-wide transform hover:-translate-y-1"
        >
          Daftar Sekarang - Gratis
        </a>
      </div>
    </section>
  );
};

export default CtaSection;