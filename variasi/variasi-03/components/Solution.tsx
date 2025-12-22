import React from 'react';

const Solution: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-slate-100 border-y border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-teal-900 mb-6 uppercase">
            Solusi: NotebookLM — Thinking Partner Riset Anda
          </h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Platform kecerdasan buatan berbasis <strong>Gemini 3</strong> yang membatasi nalarnya <em>hanya</em> pada sumber Medis resmi yang Anda unggah.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "fa-file-medical",
              title: "Grounded Q&A Medis",
              desc: "AI hanya menjawab berdasarkan jurnal dan hasil lab yang Anda unggah, bukan rumor internet. Lengkap dengan sitasi verbatim."
            },
            {
              icon: "fa-table",
              title: "Data Tables Otomatis",
              desc: "Ubah naskah riset klinis yang berantakan menjadi tabel terstruktur yang siap diekspor ke Google Sheets dalam hitungan detik."
            },
            {
              icon: "fa-podcast",
              title: "Audio Deep Dive",
              desc: "Ubah artikel medis 50 halaman menjadi ringkasan podcast untuk didengarkan saat perjalanan ke rumah sakit."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-10 rounded-3xl shadow-xl border-t-8 border-teal-500 transform hover:-translate-y-2 transition duration-300">
              <i className={`fas ${item.icon} text-teal-600 text-5xl mb-6`}></i>
              <h5 className="font-black text-xl mb-4 text-teal-900">{item.title}</h5>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;