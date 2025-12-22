import React from 'react';
import { BENEFITS } from '../constants';

const Solution: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-slate-100 border-y border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase">
            Solusinya: NotebookLM — "Rekan Berpikir" Cerdas Anda
          </h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            Sistem kecerdasan buatan berbasis <strong>Gemini 3</strong> yang bekerja khusus hanya menggunakan data dan catatan rahasia milik Anda sendiri.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-3xl shadow-xl border-l-8 border-purple-600">
            <h5 className="font-black text-2xl mb-4 text-purple-900">Hasil Nyata yang Akan Anda Kuasai:</h5>
            <ul className="space-y-4 font-bold text-slate-800">
              {BENEFITS.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span> {benefit.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow flex items-center gap-6 hover:shadow-md transition-shadow">
              <div className="bg-purple-100 p-4 rounded-xl text-purple-600 text-2xl w-16 h-16 flex items-center justify-center shrink-0">
                <i className="fas fa-video"></i>
              </div>
              <div>
                <h6 className="font-black text-slate-900">Video Ringkasan Visual</h6>
                <p className="text-sm text-slate-500 mt-1">Ubah catatan cerita Anda menjadi video presentasi visual instan untuk tim atau pembaca.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow flex items-center gap-6 hover:shadow-md transition-shadow">
              <div className="bg-purple-100 p-4 rounded-xl text-purple-600 text-2xl w-16 h-16 flex items-center justify-center shrink-0">
                <i className="fas fa-microphone-alt"></i>
              </div>
              <div>
                <h6 className="font-black text-slate-900">Audio Interaktif 2.0</h6>
                <p className="text-sm text-slate-500 mt-1">"Ngobrol" langsung dengan dokumen atau karakter cerita Anda melalui percakapan suara dua arah.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;