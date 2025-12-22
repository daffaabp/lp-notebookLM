import React from 'react';
import { Link, History, ShieldCheck } from 'lucide-react';

export const Solution: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-slate-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase italic text-slate-900">
          Solusi: NotebookLM — Integrity Guardian Anda
        </h2>
        <p className="text-lg text-slate-700 mb-16 max-w-3xl mx-auto">
          Bukan chatbot biasa, melainkan asisten yang <strong>Grounded</strong>: Hanya menjawab berdasarkan sumber terpercaya yang ANDA berikan.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-white p-8 rounded-2xl shadow-sm border-b-4 border-blue-600 hover:shadow-md transition-shadow">
            <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Link className="text-blue-600" size={32} />
            </div>
            <h5 className="font-bold text-xl mb-3 text-slate-900">Sitasi Inline Verbatim</h5>
            <p className="text-slate-600 leading-relaxed">
              Setiap jawaban AI menyertakan nomor referensi yang bisa diklik untuk melihat bukti asli di halaman dokumen.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border-b-4 border-blue-600 hover:shadow-md transition-shadow">
            <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <History className="text-blue-600" size={32} />
            </div>
            <h5 className="font-bold text-xl mb-3 text-slate-900">Kronologi Otomatis</h5>
            <p className="text-slate-600 leading-relaxed">
              Ubah ribuan pesan WhatsApp dan email menjadi timeline kejadian yang rapi untuk bukti persidangan dalam hitungan menit.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border-b-4 border-blue-600 hover:shadow-md transition-shadow">
             <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <ShieldCheck className="text-blue-600" size={32} />
            </div>
            <h5 className="font-bold text-xl mb-3 text-slate-900">Privasi Enterprise</h5>
            <p className="text-slate-600 leading-relaxed">
              Pelajari cara mengamankan data klien agar tidak digunakan melatih AI publik melalui akun Workspace yang terproteksi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};