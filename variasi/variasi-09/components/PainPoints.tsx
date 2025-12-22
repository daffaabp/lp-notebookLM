import React from 'react';

const PainPoints: React.FC = () => {
  return (
    <section className="py-20 bg-slate-100">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <h2 className="text-3xl font-bold mb-14 text-slate-800 underline decoration-gold decoration-4 underline-offset-8 italic">
          Masalah Utama dalam Manajemen Berkas Hukum
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-white p-8 border-t-4 border-red-500 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 group">
            <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-100 transition-colors">
              <i className="fas fa-search-minus text-red-500 text-3xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">Informasi Terfragmentasi</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Menghabiskan berjam-jam menyisir ribuan halaman berkas penemuan (<em>discovery</em>), kontrak, dan pleidoi hanya untuk menemukan satu pasal kunci.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white p-8 border-t-4 border-red-500 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 group">
             <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-100 transition-colors">
              <i className="fas fa-user-secret text-red-500 text-3xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">Risiko Kebocoran Data</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Kekhawatiran data rahasia klien digunakan untuk melatih model AI publik (<em>hallucination-free environment</em>).
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 border-t-4 border-red-500 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 group">
            <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-100 transition-colors">
               <i className="fas fa-exclamation-triangle text-red-500 text-3xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">AI Sering "Halusinasi"</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              ChatGPT sering memalsukan yurisprudensi. Anda butuh AI yang hanya berbicara berdasarkan bukti yang Anda unggah.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;