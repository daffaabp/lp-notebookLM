import React from 'react';

const Speaker: React.FC = () => {
  return (
    <section className="py-16 md:py-32 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24">
        <div className="relative">
          <div className="absolute -inset-4 md:-inset-8 bg-teal-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
          <img 
            src="/speaker/arianto.avif" 
            alt="M. Arianto" 
            className="relative rounded-full w-48 h-48 md:w-72 md:h-72 border-8 md:border-[16px] border-white shadow-2xl object-cover"
          />
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-4xl md:text-6xl font-black text-teal-900 mb-6 uppercase">M. Arianto</h3>
          <p className="text-teal-600 font-black mb-8 md:mb-10 text-2xl md:text-3xl">AI Engineer dan Researcher</p>
          <p className="text-slate-600 leading-relaxed italic text-xl md:text-2xl">
            "Dengan pengalaman 10+ tahun dan 195+ proyek AI, saya siap membahas tips menguasai AI, teknik penulisan, dan research methodology sebagai AI Engineer, Researcher, dan Mentor profesional."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Speaker;