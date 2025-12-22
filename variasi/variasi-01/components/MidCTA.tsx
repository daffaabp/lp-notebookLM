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
        <div className="flex items-center justify-center gap-3 md:gap-6">
          {/* Left Arrow - pointing right to button */}
          <img 
            src="/assets/right-arrow.avif" 
            alt="Arrow pointing to button" 
            className="w-8 h-8 md:w-12 md:h-12 animate-blink"
          />
          
          {/* CTA Button - Smaller width */}
          <a 
            href="#register" 
            className="inline-block bg-white text-blue-900 font-bold text-xl md:text-base lg:text-lg py-3 md:py-4 px-5 md:px-7 lg:px-8 rounded-full shadow-lg hover:bg-blue-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 whitespace-nowrap max-w-[90%] md:max-w-none"
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
    </section>
  );
};

export default MidCTA;