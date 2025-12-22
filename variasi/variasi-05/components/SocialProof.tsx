import React from 'react';

const SocialProof: React.FC = () => {
  return (
    <div className="py-10 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-6 font-bold text-slate-500 uppercase tracking-wide text-sm">
          Telah Dipercaya Oleh Kreator & Penulis Dari:
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {['KOMPAS', 'YOUTUBE EDU', 'PODCAST ID', 'MEDIA ASIA'].map((brand, index) => (
                <span key={index} className="text-2xl md:text-3xl font-black text-slate-400 select-none">
                    {brand}
                </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SocialProof;