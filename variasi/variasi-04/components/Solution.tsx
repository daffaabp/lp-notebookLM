import React from 'react';

const Solution: React.FC = () => {
  const benefits = [
    "Identifikasi insight tersembunyi di tumpukan data bisnis tanpa repot.",
    "Buat repositori pengetahuan tim yang mudah dicari dan berbagi.",
    "Analisa laporan, PDF, dan presentasi secara otomatis & efisien.",
    "Presentasikan insight penting dengan visual yang mudah dipahami."
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
        </div>
      </div>
    </section>
  );
};

export default Solution;

