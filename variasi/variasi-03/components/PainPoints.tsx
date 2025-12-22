import React from 'react';

const PainPoints: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">
          Mengapa Riset Medis Manual Membuat Anda "Burnout"?
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              icon: "fa-biohazard",
              title: "Information Deluge (Banjir Data)",
              desc: "Menyintesis data pasien tidak terstruktur dari hasil lab dan jurnal selama bertahun-tahun melampaui batas kognitif memori manusia."
            },
            {
              icon: "fa-brain-circuit",
              title: "Risiko Hallucination Fatal",
              desc: "AI konvensional sering memalsukan interaksi obat atau rekomendasi dosis yang membahayakan keselamatan pasien."
            },
            {
              icon: "fa-hourglass-half",
              title: "Database Lock yang Lamban",
              desc: "Proses pembersihan dan validasi data riset secara manual memakan waktu berbulan-bulan sebelum dapat dipublikasikan."
            },
            {
              icon: "fa-shield-virus",
              title: "Kecemasan Privasi Pasien",
              desc: "Khawatir data medis sensitif digunakan untuk melatih model AI publik tanpa perlindungan standar HIPAA."
            }
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-5 p-6 rounded-xl hover:bg-teal-50 transition border border-transparent hover:border-teal-100 group">
              <div className="bg-red-100 text-red-600 p-4 rounded-full shadow-inner flex-shrink-0 group-hover:scale-110 transition-transform">
                <i className={`fas ${item.icon} text-2xl`}></i>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-3 text-teal-900">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;