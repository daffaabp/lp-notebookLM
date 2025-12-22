import React from 'react';

const MidCTA: React.FC = () => {
  return (
    <section className="py-16 bg-[#1a365d] text-white text-center px-4 relative overflow-hidden">
       <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <h3 className="text-2xl md:text-3xl font-bold mb-8 italic leading-snug">
          "Riset modern bukan tentang seberapa banyak Anda membaca, <br className="hidden md:block" />
          tapi seberapa cepat Anda menemukan pola."
        </h3>
        <a 
          href="#register" 
          className="inline-block bg-white text-blue-900 font-bold text-lg py-4 px-10 rounded-full shadow-lg hover:bg-blue-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          DAFTAR SEKARANG & HEMAT PULUHAN JAM KERJA!
        </a>
      </div>
    </section>
  );
};

export default MidCTA;