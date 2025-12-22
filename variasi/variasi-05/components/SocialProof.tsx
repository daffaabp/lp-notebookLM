import React from 'react';

const SocialProof: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-slate-400 uppercase tracking-widest text-sm font-bold mb-8 italic">
          Dipercaya oleh 143 Juta Kreator Digital di Indonesia
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 grayscale opacity-70">
          <span className="text-xl md:text-2xl font-black italic text-slate-700">YouTube Creators Indonesia</span>
          <span className="text-xl md:text-2xl font-black italic text-slate-700">Game Dev ID</span>
          <span className="text-xl md:text-2xl font-black italic text-slate-700">Forum Penulis Nusantara</span>
        </div>
        <p className="mt-10 text-purple-700 font-semibold px-4 text-sm">
          "91% Profesional B2B & Kreator setuju webinar adalah metode belajar terbaik saat ini."
        </p>
      </div>
    </section>
  );
};

export default SocialProof;