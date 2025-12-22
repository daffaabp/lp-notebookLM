import React from 'react';

const Solution: React.FC = () => {
  const benefits = [
    "Pangkas waktu riset pasar & kompetitor hingga 75% lebih cepat.",
    "Bangun \"Second Brain\" korporasi agar pengetahuan tidak hilang.",
    "Otomasi analisis data dari ribuan laporan bisnis.",
    "Visualisasi insight strategis dengan peta konsep interaktif."
  ];

  return (
    <section className="py-20 px-4 bg-slate-100 border-y border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <h2 className="text-2xl font-black text-slate-900 uppercase">
              Solusinya: NotebookLM "Asisten Strategis Korporat" Cerdas Anda
            </h2>
          </div>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Sistem kecerdasan buatan berbasis <strong>Gemini 3</strong> yang bekerja khusus hanya menggunakan dokumen rahasia perusahaan tanpa risiko kebocoran data.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-2xl shadow-xl border-l-8 border-orange-600">
            <h5 className="font-black text-2xl mb-6 text-slate-900 flex items-center gap-3">
              <i className="fas fa-clipboard-check text-orange-600 text-2xl"></i>
              Hasil Nyata yang Akan Anda Kuasai:
            </h5>
            <ul className="space-y-4 font-semibold text-slate-800">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✔</span>
                  <span className="leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-md flex items-start gap-6 hover:shadow-lg transition-shadow border border-slate-100">
              <div className="bg-orange-100 p-4 rounded-xl text-orange-600 shrink-0">
                <i className="fas fa-search text-2xl"></i>
              </div>
              <div>
                <h6 className="font-black text-slate-900 mb-2">Pencarian Cerdas Multi-Dokumen</h6>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Temukan insight, data, atau referensi spesifik dari ribuan dokumen bisnis dalam hitungan detik dengan pencarian semantik yang memahami konteks korporat.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md flex items-start gap-6 hover:shadow-lg transition-shadow border border-slate-100">
              <div className="bg-orange-100 p-4 rounded-xl text-orange-600 shrink-0">
                <i className="fas fa-headphones text-2xl"></i>
              </div>
              <div>
                <h6 className="font-black text-slate-900 mb-2">Audio Briefing Interaktif</h6>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Dengarkan ringkasan laporan bisnis dalam format podcast saat perjalanan atau saat review strategis di waktu senggang.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;

