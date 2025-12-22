import React from 'react';

const PainPoints: React.FC = () => {
  const points = [
    {
      icon: "fa-brain",
      title: "Risiko Kehilangan Ilmu",
      desc: "Pengetahuan penting tim Anda hilang begitu saja saat karyawan kunci atau manajer proyek resign dari perusahaan.",
      delay: "0"
    },
    {
      icon: "fa-exclamation-triangle",
      title: "Halusinasi AI Fatal",
      desc: "Bot AI biasa sering \"mengarang\" data pasar yang salah, membahayakan keputusan eksekutif.",
      delay: "100"
    },
    {
      icon: "fa-search-minus",
      title: "Fragmentasi Informasi",
      desc: "Data penting terkubur di 100+ folder Google Drive, transkrip rapat, dan ribuan email yang tak terbaca.",
      delay: "200"
    }
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 italic text-slate-800">
          Mengapa Strategi Bisnis Anda Berisiko di Era Digital?
        </h2>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {points.map((point, index) => (
            <div 
              key={index} 
              className="p-8 rounded-3xl bg-slate-50 border-b-4 border-red-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-20 flex items-center justify-center mb-6">
                <i className={`fas ${point.icon} text-red-500 text-5xl`}></i>
              </div>
              <h4 className="font-bold text-xl mb-3 text-slate-800">{point.title}</h4>
              <p className="text-slate-600 leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;