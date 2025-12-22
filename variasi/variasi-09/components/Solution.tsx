import React from 'react';

const Solution: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 leading-tight">
              Ubah Ribuan Halaman Menjadi Wawasan Strategis Instan
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              NotebookLM berfungsi sebagai asisten peneliti virtual yang memahami konteks hukum Anda secara mendalam, memastikan setiap argumen didukung bukti kuat.
            </p>
            <ul className="space-y-6">
              <li className="flex items-start group">
                <div className="bg-gold p-3 rounded-full mr-4 group-hover:scale-110 transition duration-300 text-slate-900 shadow-md flex-shrink-0">
                  <i className="fas fa-quote-right text-sm"></i>
                </div>
                <span className="text-slate-700 leading-relaxed pt-1">
                  <strong className="text-slate-900">Sitasi Sebaris (<em>In-line</em>):</strong> Verifikasi fakta dengan klik langsung ke paragraf PDF asli.
                </span>
              </li>
              <li className="flex items-start group">
                <div className="bg-gold p-3 rounded-full mr-4 group-hover:scale-110 transition duration-300 text-slate-900 shadow-md flex-shrink-0">
                  <i className="fas fa-history text-sm"></i>
                </div>
                <span className="text-slate-700 leading-relaxed pt-1">
                  <strong className="text-slate-900">Timeline Kronologis:</strong> Bangun garis waktu kasus otomatis dari tumpukan korespondensi.
                </span>
              </li>
              <li className="flex items-start group">
                <div className="bg-gold p-3 rounded-full mr-4 group-hover:scale-110 transition duration-300 text-slate-900 shadow-md flex-shrink-0">
                  <i className="fas fa-lock text-sm"></i>
                </div>
                <span className="text-slate-700 leading-relaxed pt-1">
                  <strong className="text-slate-900">Keamanan Enterprise:</strong> Data tidak digunakan untuk latihan AI (via Google Workspace).
                </span>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="bg-slate-900 p-10 rounded-2xl shadow-2xl relative border border-slate-700 transform hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute -top-6 -left-6 bg-gold text-slate-900 font-bold py-3 px-6 rounded shadow-lg transform -rotate-3 uppercase tracking-wider text-sm">
                Impact Score
              </div>
              <div className="text-center pt-4">
                <div className="text-6xl font-black text-gold mb-2 leading-none">60%</div>
                <p className="text-slate-300 text-sm font-bold tracking-widest uppercase">
                  Penghematan Waktu Uji Tuntas
                </p>
              </div>
              <div className="my-8 border-t border-slate-700/50"></div>
              <div className="text-center pb-4">
                <div className="text-6xl font-black text-gold mb-2 leading-none">300+</div>
                <p className="text-slate-300 text-sm font-bold tracking-widest uppercase">
                  Sumber per Notebook
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