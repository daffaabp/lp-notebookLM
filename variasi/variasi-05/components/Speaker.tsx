import React from 'react';

const Speaker: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-slate-100">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="relative shrink-0">
          <div className="absolute -inset-4 bg-purple-500 rounded-full blur-xl opacity-30"></div>
          <img
            src="/speaker/arianto.avif"
            alt="M. Arianto"
            className="relative rounded-3xl w-64 h-64 object-cover shadow-2xl border-4 border-white"
          />
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-3xl font-black text-slate-900 mb-2 uppercase">M. Arianto</h3>
          <p className="text-purple-600 font-bold mb-6 text-lg tracking-widest">AI Engineer dan Researcher</p>
          <p className="text-slate-600 leading-relaxed italic text-lg">
            "Dengan pengalaman 10+ tahun dan 195+ proyek AI, saya siap membahas tips menguasai AI, teknik penulisan, dan research methodology sebagai AI Engineer, Researcher, dan Mentor profesional."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Speaker;