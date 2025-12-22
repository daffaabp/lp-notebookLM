import React from 'react';
import { FileText, Users, Search } from 'lucide-react';

export const PainPoints: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 italic text-emerald-900">
          Mengapa Beban Dokumen Menghambat Kinerja Instansi Anda?
        </h2>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {/* Card 1 */}
          <div className="p-8 rounded-3xl bg-slate-50 border-b-4 border-red-500 group hover:bg-emerald-50 transition duration-300">
            <div className="flex justify-center mb-6">
                <FileText className="text-red-500 w-12 h-12" />
            </div>
            <h4 className="font-bold text-xl mb-3 text-emerald-950">Gunung Dokumen (Information Glut)</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Menyintesis laporan dinas, SOP, dan regulasi yang masif melampaui batas kognitif manusia, memicu kelelahan mental.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-3xl bg-slate-50 border-b-4 border-red-500 group hover:bg-emerald-50 transition duration-300">
            <div className="flex justify-center mb-6">
                <Users className="text-red-500 w-12 h-12" />
            </div>
            <h4 className="font-bold text-xl mb-3 text-emerald-950">Risiko "Brain Drain"</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Pengetahuan krusial hilang saat staf senior pensiun atau mutasi. Institusi kehilangan memori strategisnya.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-3xl bg-slate-50 border-b-4 border-red-500 group hover:bg-emerald-50 transition duration-300">
            <div className="flex justify-center mb-6">
                <Search className="text-red-500 w-12 h-12" />
            </div>
            <h4 className="font-bold text-xl mb-3 text-emerald-950">Inefisiensi Birokrasi</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Waktu berjam-jam terbuang hanya untuk mencari detail kecil dalam ribuan halaman PDF atau transkrip rapat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};