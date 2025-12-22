import React from 'react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-100 px-4 border-t border-slate-200">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Kisah Sukses Pengguna</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-2xl shadow-sm italic border-l-4 border-orange-500 relative">
            <div className="absolute -top-4 -left-2 text-6xl text-orange-200 font-serif">"</div>
            <p className="mb-6 text-slate-700 relative z-10 leading-relaxed">
              Luar biasa! Kami berhasil menyintesis 1.431 email dan 27 rekaman rapat untuk sidang arbitrase. 
              Lawan kami benar-benar terdiam melihat kecepatan kami menyajikan data bukti.
            </p>
            <div className="flex items-center gap-4 not-italic">
              <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">SL</div>
              <div>
                <span className="font-bold text-slate-900 block">Senior Lawyer</span>
                <span className="text-xs text-slate-500 uppercase tracking-wide">Litigasi Bisnis</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-10 rounded-2xl shadow-sm italic border-l-4 border-orange-500 relative">
             <div className="absolute -top-4 -left-2 text-6xl text-orange-200 font-serif">"</div>
            <p className="mb-6 text-slate-700 relative z-10 leading-relaxed">
              Sebagai praktisi medis yang juga menangani kepatuhan hukum, NotebookLM membantu saya menemukan pola longitudinal dari ribuan catatan medis tanpa pusing.
            </p>
            <div className="flex items-center gap-4 not-italic">
               <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">CO</div>
              <div>
                <span className="font-bold text-slate-900 block">Compliance Officer</span>
                <span className="text-xs text-slate-500 uppercase tracking-wide">Healthcare</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};