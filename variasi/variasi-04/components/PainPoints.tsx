import React from 'react';

const PainPoints: React.FC = () => {
  const painPoints = [
    {
      title: "Insight Penting Terkubur di Lautan Data",
      description: "Keputusan bisnis sering gagal karena insights tersembunyi di ribuan laporan, PDF, atau presentasi—sulit dicari dan mudah terlewat saat dibutuhkan."
    },
    {
      title: "Waktu & Energi Habis untuk Mencari Data",
      description: "Tim strategis harus menghabiskan banyak jam membaca manual, menelusuri file demi file, yang akhirnya memperlambat proses analisa & pengambilan keputusan."
    },
    {
      title: "Risiko Halusinasi & Human Error",
      description: "Tanpa sistem pencarian cerdas, proses menemukan data relevan rentan salah tafsir dan sering menyebabkan keputusan didasarkan pada asumsi, bukan fakta."
    }
  ];

  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 italic text-slate-900">
          Kenapa Eksekutif & Tim Strategis MASIH Sering Terjebak di Tumpukan Data & Dokumen?
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {painPoints.map((point, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-50 border-b-4 border-orange-500"
            >
              <h4 className="font-semibold text-xl md:text-2xl mb-3 text-slate-800">{idx + 1}. {point.title}</h4>
              <p className="text-slate-600 text-base md:text-lg leading-normal">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;

