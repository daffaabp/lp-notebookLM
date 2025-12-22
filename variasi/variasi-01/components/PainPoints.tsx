import React from 'react';
import { AlertTriangle, Brain, FileWarning } from 'lucide-react';

const PainPoints: React.FC = () => {
  const points = [
    {
      icon: <Brain className="w-8 h-8 text-red-600" />,
      title: "Analisis Paralisis",
      desc: "Merasa beku saat harus menyintesis puluhan naskah PDF secara bersamaan karena batas kognitif memori kerja manusia yang terbatas.",
    },
    {
      icon: <FileWarning className="w-8 h-8 text-red-600" />,
      title: "Trauma Halusinasi AI",
      desc: "Takut menggunakan AI konvensional yang sering mengarang kutipan fiktif (halusinasi) yang bisa merusak kredibilitas ilmiah Anda.",
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-600" />,
      title: "Kelelahan Mental",
      desc: "Membaca jurnal 30 halaman terasa seperti mendaki Everest secara mental setiap hari, memicu burnout akademik yang nyata.",
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          Apakah Anda Mengalami <span className="text-red-600">"Information Overload"</span> di Dunia Akademik?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {points.map((point, idx) => (
            <div key={idx} className="p-8 border-l-4 border-red-500 bg-red-50/50 hover:bg-red-50 transition-colors duration-300 rounded-r-xl shadow-sm hover:shadow-md">
              <div className="mb-4 bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm">
                {point.icon}
              </div>
              <h3 className="font-bold text-xl mb-3 text-red-900">{point.title}</h3>
              <p className="text-gray-700 leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;