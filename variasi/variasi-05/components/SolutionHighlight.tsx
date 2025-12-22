import React from 'react';

const SolutionHighlight: React.FC = () => {
    const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const element = document.getElementById('daftar');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

  return (
    <section className="py-20 bg-white text-center border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-6">
          Solusi Masterclass: Sistem Integrated Knowledge Ecosystem
        </h2>
        <p className="text-xl text-slate-600 mb-10 leading-relaxed">
          Kami mengajarkan Anda cara membangun 'Otak Kedua' digital menggunakan teknologi AI tercanggih yang menjamin setiap klaim naskah Anda memiliki sitasi ke sumber asli.
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
            onClick={scrollToForm}
            className="inline-block bg-secondary text-white font-bold text-xl md:text-base lg:text-lg py-3 md:py-4 px-5 md:px-7 lg:px-8 rounded-xl shadow-lg shadow-orange-500/30 hover:bg-orange-600 hover:shadow-orange-500/50 hover:-translate-y-1 transition-all duration-300 whitespace-nowrap max-w-[90%] md:max-w-none"
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

export default SolutionHighlight;