import React from 'react';

export const PainPoints: React.FC = () => {
  const painPoints = [
    {
      title: "Cari Dokumen di Google Drive/Berpindah-pindah Chat WA",
      description: "File penting tercecer di folder, email, atau WhatsApp—bikin repot saat cari atau revisi."
    },
    {
      title: "Draft Gugatan/Replik Bolak-balik Revisi",
      description: "Sering terjadi inkonsistensi & typo karena cek silang dan edit manual antar file."
    },
    {
      title: "Takut Salah Sitasi atau Ada Bukti Tidak Terangkat",
      description: "Takut ada pasal atau bukti penting terlewat, sehingga argumen jadi kurang kuat."
    }
  ];

  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 italic text-slate-900">
          Kenapa Advokat Modern MASIH Sering Terjebak di Tumpukan Berkas & Data?
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {painPoints.map((point, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-50 border-b-4 border-red-500"
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
