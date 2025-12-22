import React from 'react';

const SocialProof: React.FC = () => {
  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="container mx-auto px-6 text-center text-slate-500">
        <p className="font-bold mb-8 uppercase tracking-widest text-xs text-slate-400">
          Diadopsi oleh Praktisi Hukum & Firma Terkemuka
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="text-2xl font-serif text-slate-800">Latham & Watkins</span>
          <span className="text-xl font-bold italic font-sans text-slate-700">Mediator Indonesia</span>
          <span className="text-xl font-serif italic font-sans underline decoration-gold decoration-2 underline-offset-4 text-slate-800">LegalTech Journal</span>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;