import React from 'react';

const MiddleCTA: React.FC = () => {
  return (
    <section className="bg-red-50 py-16 border-y border-red-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
          Berhenti Menjadi "Supermom" yang Kelelahan.<br/>
          <span className="text-primary">Mulailah Menjadi "Smart Mom" yang Bahagia.</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
          Waktu Ibu terlalu berharga untuk habis hanya karena urusan administrasi rumah tangga yang rumit. 
          Biarkan AI yang bekerja keras, supaya Ibu bisa menikmati hasilnya bersama keluarga.
        </p>
        <a 
          href="#daftar" 
          className="inline-block bg-gold text-dark px-10 py-5 rounded-full font-bold text-xl shadow-xl hover:scale-105 hover:bg-yellow-500 hover:shadow-2xl transition-all duration-300 transform"
        >
          Saya Siap Bertransformasi Sekarang 👉
        </a>
      </div>
    </section>
  );
};

export default MiddleCTA;