import React from 'react';

const SocialProof: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto text-center px-4">
        <p className="text-slate-400 uppercase tracking-widest text-sm font-bold mb-8 italic">
          Teknologi ini telah divalidasi oleh institusi global
        </p>
        <div className="flex flex-wrap justify-center gap-12 grayscale opacity-70">
          <span className="text-2xl font-black italic text-slate-600">Stanford HAI</span>
          <span className="text-2xl font-black italic text-slate-600">Nature Biotechnology</span>
          <span className="text-2xl font-black italic text-slate-600">UGM Yogyakarta</span>
          <span className="text-2xl font-black italic text-slate-600">Children's Mercy</span>
        </div>
        <p className="mt-10 text-teal-700 font-semibold px-4 text-sm max-w-3xl mx-auto">
          Berdasarkan riset terbaru, dokter yang berkolaborasi dengan AI menunjukkan peningkatan akurasi keputusan klinis yang signifikan.
        </p>
      </div>
    </section>
  );
};

export default SocialProof;