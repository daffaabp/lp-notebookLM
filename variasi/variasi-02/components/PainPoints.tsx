import React from 'react';
import { TriangleAlert, ListTodo, Search, Lock } from 'lucide-react';

export const PainPoints: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">
          Mengapa Riset Hukum Manual Adalah <span className="text-red-600">"Musuh"</span> Produktivitas Anda?
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="flex gap-5 group">
            <div className="text-red-500 bg-red-50 w-12 h-12 flex items-center justify-center rounded-xl shrink-0 group-hover:scale-110 transition-transform">
              <TriangleAlert size={24} />
            </div>
            <div>
              <h4 className="font-bold text-xl mb-2 text-slate-900">Risiko Halusinasi Fatal</h4>
              <p className="text-slate-600 leading-relaxed">
                AI biasa sering mengarang kutipan hukum palsu. Satu kesalahan referensi bisa menghancurkan reputasi Anda di depan hakim.
              </p>
            </div>
          </div>
          <div className="flex gap-5 group">
            <div className="text-red-500 bg-red-50 w-12 h-12 flex items-center justify-center rounded-xl shrink-0 group-hover:scale-110 transition-transform">
              <ListTodo size={24} />
            </div>
            <div>
              <h4 className="font-bold text-xl mb-2 text-slate-900">Gunung Dokumen (Overload)</h4>
              <p className="text-slate-600 leading-relaxed">
                Meninjau 1.400+ email atau transkrip persidangan berjam-jam secara manual memicu kelelahan mental dan analisis paralisis.
              </p>
            </div>
          </div>
          <div className="flex gap-5 group">
            <div className="text-red-500 bg-red-50 w-12 h-12 flex items-center justify-center rounded-xl shrink-0 group-hover:scale-110 transition-transform">
              <Search size={24} />
            </div>
            <div>
              <h4 className="font-bold text-xl mb-2 text-slate-900">Detail Kecil Terlewat</h4>
              <p className="text-slate-600 leading-relaxed">
                Sangat mudah kehilangan satu poin bukti krusial di tengah tumpukan PDF 500+ halaman, yang bisa menjadi kunci kemenangan.
              </p>
            </div>
          </div>
          <div className="flex gap-5 group">
            <div className="text-red-500 bg-red-50 w-12 h-12 flex items-center justify-center rounded-xl shrink-0 group-hover:scale-110 transition-transform">
              <Lock size={24} />
            </div>
            <div>
              <h4 className="font-bold text-xl mb-2 text-slate-900">Kekhawatiran Privasi Klien</h4>
              <p className="text-slate-600 leading-relaxed">
                Takut data rahasia klien digunakan untuk melatih model AI publik? Privasi dan kerahasiaan adalah prioritas non-negosiasi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};