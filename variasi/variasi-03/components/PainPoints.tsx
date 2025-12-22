import React from 'react';

const PainPoints: React.FC = () => {
  const painPoints = [
    {
      title: "Review Manual Ribuan Jurnal Medis",
      description: "Membaca dan menganalisis ratusan studi klinis secara manual memakan waktu berhari-hari dan rawan human error."
    },
    {
      title: "Risiko Bias dalam Interpretasi Data",
      description: "Tanpa alat bantu yang tepat, mudah terjebak dalam bias konfirmasi atau melewatkan pola penting dalam data."
    },
    {
      title: "Kesulitan Tracking Perkembangan Riset",
      description: "Informasi terbaru dari berbagai sumber tersebar, sulit diintegrasikan, dan sering terlewat update penting."
    }
  ];

  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-3xl font-bold text-center mb-8 italic text-slate-900">
          Kenapa Peneliti Medis MASIH Sering Terjebak di Tumpukan Jurnal & Data?
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {painPoints.map((point, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-50 border-b-4 border-red-500"
            >
              <h4 className="font-semibold text-xl md:text-2xl mb-3 text-slate-800">{idx + 1}. {point.title}</h4>
              <p className="text-slate-600 text-lg md:text-lg leading-normal">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;

