import React from 'react';
import { CheckCircle } from 'lucide-react';

export const Outcome: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Hasil Akhir yang Akan Anda Kuasai:</h2>
        <div className="space-y-6">
          <div className="flex items-start md:items-center bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-green-400 transition-colors">
            <CheckCircle className="text-green-500 mr-5 shrink-0 mt-1 md:mt-0" size={28} />
            <span className="text-lg text-slate-800">
              <strong>Pangkas Waktu Riset:</strong> Selesaikan analisis kasus 30 jam hanya dalam 3 jam saja.
            </span>
          </div>
          <div className="flex items-start md:items-center bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-green-400 transition-colors">
             <CheckCircle className="text-green-500 mr-5 shrink-0 mt-1 md:mt-0" size={28} />
            <span className="text-lg text-slate-800">
              <strong>Spot the Difference:</strong> Bandingkan klausa kontrak 2024 vs 2025 secara instan.
            </span>
          </div>
          <div className="flex items-start md:items-center bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-green-400 transition-colors">
             <CheckCircle className="text-green-500 mr-5 shrink-0 mt-1 md:mt-0" size={28} />
            <span className="text-lg text-slate-800">
              <strong>Audio Briefing:</strong> Dengar ringkasan kasus dalam format podcast saat perjalanan ke pengadilan.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};