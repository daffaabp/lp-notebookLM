import React from 'react';

export const Speaker: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-16 text-center md:text-left">
        <div className="relative flex-shrink-0">
          <div className="absolute -inset-4 bg-emerald-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
          <img 
            src="/speaker/arianto.avif" 
            alt="M. Arianto" 
            className="relative rounded-full w-64 h-64 border-8 border-white shadow-2xl object-cover"
          />
        </div>
        <div>
          <h3 className="text-3xl font-black text-emerald-900 mb-2 uppercase">M. Arianto</h3>
          <p className="text-emerald-600 font-black mb-6 text-lg tracking-widest uppercase">AI Engineer dan Researcher</p>
          <p className="text-slate-600 leading-relaxed italic text-lg">
            "Dengan pengalaman 10+ tahun dan 195+ proyek AI, saya siap membahas tips menguasai AI, teknik penulisan, dan research methodology sebagai AI Engineer, Researcher, dan Mentor profesional."
          </p>
        </div>
      </div>
    </section>
  );
};