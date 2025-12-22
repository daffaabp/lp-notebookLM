import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            
          {/* Pain Points */}
          <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border-l-8 border-red-500 shadow-sm">
            <h3 className="text-2xl font-bold text-red-500 mb-6 flex items-center gap-2">
              <XCircle className="w-8 h-8" />
              Masalah Anda Saat Ini:
            </h3>
            <ul className="space-y-4">
              {[
                'Tenggelam dalam "banjir informasi" saat melakukan riset naskah.',
                'Lelah meringkas transkrip wawancara atau video secara manual berjam-jam.',
                'Takut menggunakan AI karena sering memberikan data palsu (halusinasi).',
                "Writer's Block karena data riset tidak terorganisir dengan baik."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-1.5 w-2 h-2 bg-red-400 rounded-full flex-shrink-0"></span>
                  <span className="text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Gain Points */}
          <div className="bg-slate-50 p-8 md:p-10 rounded-3xl border-l-8 border-green-500 shadow-sm">
            <h3 className="text-2xl font-bold text-green-500 mb-6 flex items-center gap-2">
              <CheckCircle className="w-8 h-8" />
              Hasil Akhir Setelah Webinar:
            </h3>
            <ul className="space-y-4">
              {[
                'Mampu menyintesis 50 sumber riset menjadi satu draf konten dalam hitungan menit.',
                'Memiliki asisten riset pribadi yang hanya menjawab berdasarkan data valid Anda.',
                'Naskah video atau buku selesai 5x lebih cepat dengan standar akurasi jurnalisme.',
                'Sistem kerja yang otomatis membedakan fakta dan opini.'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-1.5 w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></span>
                  <span className="text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;