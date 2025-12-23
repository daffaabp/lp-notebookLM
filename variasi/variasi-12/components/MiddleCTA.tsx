import React from 'react';
<<<<<<< HEAD
import Button from './Button';

const MiddleCTA: React.FC = () => {
  return (
    <section className="py-20 bg-blue-900 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/id/4/1920/600')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Siap Mengubah Inefisiensi Menjadi Inovasi?</h2>
        <Button href="#register" variant="secondary">
          Amankan Slot Anda Sekarang
        </Button>
      </div>
=======

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
        <div className="flex items-center justify-center gap-3 md:gap-6">
          {/* Left Arrow - pointing right to button */}
          <img 
            src="/assets/right-arrow.avif" 
            alt="Arrow pointing to button" 
            className="w-8 h-8 md:w-12 md:h-12 animate-blink"
          />
          
          {/* CTA Button */}
          <a 
            href="#daftar" 
            className="inline-block bg-gold text-dark px-10 py-5 rounded-full font-bold text-xl shadow-xl hover:scale-105 hover:bg-yellow-500 hover:shadow-2xl transition-all duration-300 transform whitespace-nowrap"
          >
            DAFTAR SEKARANG
          </a>
          
          {/* Right Arrow - pointing left to button */}
          <img 
            src="/assets/left-arrow.avif" 
            alt="Arrow pointing to button" 
            className="w-8 h-8 md:w-12 md:h-12 animate-blink"
          />
        </div>
      </div>
      
      <style>{`
        @keyframes blink {
          0%, 100% { 
            opacity: 1; 
            transform: scale(1);
          }
          50% { 
            opacity: 0.4; 
            transform: scale(0.95);
          }
        }
        .animate-blink {
          animation: blink 1.2s ease-in-out infinite;
        }
      `}</style>
>>>>>>> f59101d12568799a1c02434766eccfd7a7cc03ba
    </section>
  );
};

export default MiddleCTA;