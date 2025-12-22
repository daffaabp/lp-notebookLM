import React from 'react';

const Results: React.FC = () => {
  const results = [
    "Pangkas waktu riset pasar & kompetitor hingga 75%.",
    "Bangun \"Second Brain\" korporasi agar pengetahuan tidak hilang.",
    "Generate Slide Deck & Infografis profesional dalam 2 menit.",
    "Verifikasi kebenaran setiap klaim data dengan sumber asli."
  ];

  return (
    <>
      <section className="py-24 px-4 bg-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 italic underline decoration-orange-500 underline-offset-8">
              Hasil Akhir yang Akan Anda Kuasai:
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {results.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-6 bg-slate-50 rounded-xl border-l-4 border-orange-500 hover:bg-orange-50 transition duration-300 shadow-sm hover:shadow-md cursor-default">
                    <div className="bg-orange-100 text-orange-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm shrink-0">
                      {index + 1}
                    </div>
                    <p className="font-bold text-slate-800">{item}</p>
                </div>
              ))}
          </div>
      </section>

      {/* MIDDLE CTA */}
      <div className="py-20 business-gradient text-white text-center px-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-10 leading-snug">
                "Di tahun 2026, aset terpenting perusahaan bukan lagi Big Data, melainkan <span className="text-orange-400">Kecerdasan Berbasis Fakta</span>."
            </h3>
            <a 
                href="#register" 
                className="inline-block bg-orange-600 hover:bg-orange-500 py-4 px-12 rounded-full font-bold text-lg tracking-wide uppercase transition-all shadow-lg hover:shadow-orange-500/50 hover:-translate-y-1"
            >
                Daftar & Dapatkan Harga Akhir Tahun
            </a>
          </div>
      </div>
    </>
  );
};

export default Results;