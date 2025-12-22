import React from 'react';

export const SocialProof: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto text-center px-4">
        <p className="text-slate-400 uppercase tracking-widest text-xs md:text-sm font-bold mb-8 italic text-center">
          Teknologi ini telah divalidasi oleh institusi global
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
          <span className="text-xl md:text-2xl font-black italic text-emerald-900 underline decoration-2 decoration-emerald-200">Universitas Gadjah Mada</span>
          <span className="text-xl md:text-2xl font-black italic text-emerald-900 underline decoration-2 decoration-emerald-200">Stanford HAI</span>
          <span className="text-xl md:text-2xl font-black italic text-emerald-900 underline decoration-2 decoration-emerald-200">Google Labs</span>
        </div>
        <p className="mt-10 text-emerald-700 font-semibold text-sm">
          Indonesia adalah salah satu dari 5 besar pengguna AI dunia. Jadilah ASN yang terdepan!
        </p>
      </div>
    </section>
  );
};