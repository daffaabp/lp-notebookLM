import React from 'react';
import { ShieldCheck, Network, CheckCircle2 } from 'lucide-react';

export const Solution: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-emerald-50 border-y border-emerald-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-emerald-900 mb-6 uppercase">
            Solusi: NotebookLM — Integrity Guardian Birokrasi
          </h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            NotebookLM menggunakan metode <strong>Grounded AI</strong> (RAG): Ia hanya menjawab berdasarkan dokumen RESMI yang Anda berikan, menjamin akurasi dan kepatuhan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Main Benefits List */}
          <div className="bg-white p-10 rounded-3xl shadow-xl border-l-8 border-emerald-600">
            <h5 className="font-black text-2xl mb-6 text-emerald-900">Hasil Akhir yang Akan Ibu/Bapak Kuasai:</h5>
            <ul className="space-y-6 font-bold text-slate-800">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-emerald-500 w-6 h-6 flex-shrink-0 mt-1" />
                <span>
                    <strong>Laporan Strategi Instan:</strong> Ubah tumpukan regulasi menjadi draft ringkasan eksekutif dalam hitungan detik.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-emerald-500 w-6 h-6 flex-shrink-0 mt-1" />
                <span>
                    <strong>Otomasi Tabel Data:</strong> Ekstrak data kualitatif dari survei masyarakat menjadi tabel yang siap diekspor ke Google Sheets.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-emerald-500 w-6 h-6 flex-shrink-0 mt-1" />
                <span>
                    <strong>Grounded Q&A:</strong> Dapatkan jawaban akurat dengan sitasi footnote yang merujuk langsung ke halaman asli dokumen.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-emerald-500 w-6 h-6 flex-shrink-0 mt-1" />
                <span>
                    <strong>Audio Briefing Dinas:</strong> Dengarkan ringkasan regulasi baru melalui podcast AI saat perjalanan menuju kantor.
                </span>
              </li>
            </ul>
          </div>

          {/* Secondary Feature Cards */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow flex items-center gap-6 group hover:shadow-lg transition cursor-default">
              <div className="bg-emerald-100 p-4 rounded-xl text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <h6 className="font-black text-lg text-emerald-950">Keamanan Data Negara</h6>
                <p className="text-sm text-slate-500 italic mt-1">Data Anda aman, tidak digunakan untuk melatih model publik Google (Standar Enterprise).</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow flex items-center gap-6 group hover:shadow-lg transition cursor-default">
              <div className="bg-emerald-100 p-4 rounded-xl text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition">
                <Network className="w-8 h-8" />
              </div>
              <div>
                <h6 className="font-black text-lg text-emerald-950">Peta Pikiran (Mind Map)</h6>
                <p className="text-sm text-slate-500 italic mt-1">Visualisasikan hubungan antar aturan dan kebijakan secara otomatis.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};