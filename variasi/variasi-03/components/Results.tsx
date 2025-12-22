import React from 'react';

const Results: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-teal-900 text-white overflow-hidden relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 underline decoration-teal-400 underline-offset-8">
          Hasil Akhir yang Akan Anda Kuasai:
        </h2>
        <div className="space-y-8">
          {[
            {
              icon: "fa-tachometer-alt",
              text: "Proses Informasi 3x Lebih Cepat:",
              sub: "Teknik pembelajaran auditori untuk profesional yang sibuk."
            },
            {
              icon: "fa-shield-alt",
              text: "Verifikasi Kebenaran 100%:",
              sub: "Gunakan tautan inline (deep-link) untuk memeriksa setiap baris klaim AI."
            },
            {
              icon: "fa-dna",
              text: "Pola Longitudinal:",
              sub: "Hubungkan titik data lab pasien selama 10 tahun terakhir secara instan."
            }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition duration-300">
              <i className={`fas ${item.icon} text-teal-400 text-3xl flex-shrink-0`}></i>
              <p className="text-xl leading-relaxed">
                <strong>{item.text}</strong> {item.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;