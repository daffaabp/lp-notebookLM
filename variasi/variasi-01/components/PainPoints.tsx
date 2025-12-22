import React from 'react';

const PainPoints: React.FC = () => {
  const points = [
    {
      title: "Analisis Paralisis",
      desc: "Merasa beku saat harus menyintesis puluhan naskah PDF secara bersamaan karena batas kognitif memori kerja manusia yang terbatas.",
    },
    {
      title: "Trauma Halusinasi AI",
      desc: "Takut menggunakan AI konvensional yang sering mengarang kutipan fiktif (halusinasi) yang bisa merusak kredibilitas ilmiah Anda.",
    },
    {
      title: "Kelelahan Mental",
      desc: "Membaca jurnal 30 halaman terasa seperti mendaki Everest secara mental setiap hari, memicu burnout akademik yang nyata.",
    }
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
          Apakah Anda Mengalami <span className="text-red-600">"Information Overload"</span> di Dunia Akademik?
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {points.map((point, idx) => (
            <div key={idx} className="p-5 border-l-4 border-red-500 bg-red-50/50 hover:bg-red-50 transition-colors duration-300 rounded-r-xl shadow-sm hover:shadow-md">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2 text-red-900">{point.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{point.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;