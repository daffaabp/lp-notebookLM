import React from 'react';

const Speaker: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-16 text-slate-800 uppercase tracking-widest text-sm relative inline-block">
          Presentasi Oleh Pakar
          <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gold"></span>
        </h2>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg border-b-8 border-gold p-10 hover:shadow-2xl transition-shadow duration-300">
          <div className="w-40 h-40 bg-slate-100 rounded-full mx-auto mb-8 border-4 border-white shadow-md flex items-center justify-center overflow-hidden">
             <i className="fas fa-user-tie text-6xl text-slate-300"></i>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2 font-serif">M. Arianto</h3>
          <p className="text-gold font-bold uppercase text-xs tracking-widest mb-6">
            AI Engineer dan Researcher
          </p>
          <p className="text-slate-600 italic leading-relaxed text-sm">
            "Dengan pengalaman 10+ tahun dan 195+ proyek AI, saya siap membahas tips menguasai AI, teknik penulisan, dan research methodology sebagai AI Engineer, Researcher, dan Mentor profesional."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Speaker;