import React from 'react';

const PainPoints: React.FC = () => {
  const painPoints = [
    {
      title: "Insight Terkubur di Ribuan PDF & Slide",
      description: "Data penting tersebar di berbagai dokumen, email, dan chat group—sulit ditemukan saat dibutuhkan dan sering terlewat."
    },
    {
      title: "Analisa Manual Mahal & Lambat",
      description: "Review manual laporan bisnis memakan waktu berhari-hari, rawan human error, dan menghabiskan sumber daya tim."
    },
    {
      title: "Pengetahuan Perusahaan Hilang Saat Karyawan Keluar",
      description: "Informasi penting hanya ada di kepala individu, tidak terdokumentasi dengan baik, dan hilang saat terjadi turnover."
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

