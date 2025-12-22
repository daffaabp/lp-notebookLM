import React from 'react';

export const Speaker: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <img 
          src="/speaker/arianto.avif" 
          alt="M. Arianto" 
          className="rounded-2xl shadow-2xl w-64 grayscale hover:grayscale-0 transition duration-500 object-cover" 
        />
        <div>
          <h2 className="text-3xl font-bold mb-2 uppercase text-slate-900">M. Arianto</h2>
          <p className="text-blue-600 font-bold mb-6 text-lg">AI Engineer dan Researcher</p>
          <p className="text-slate-600 leading-relaxed italic border-l-4 border-slate-200 pl-4">
            "Dengan pengalaman 10+ tahun dan 195+ proyek AI, saya siap membahas tips menguasai AI, teknik penulisan, dan research methodology sebagai AI Engineer, Researcher, dan Mentor profesional."
          </p>
        </div>
      </div>
    </section>
  );
};

