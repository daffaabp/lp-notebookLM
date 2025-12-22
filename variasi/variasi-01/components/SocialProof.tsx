import React from 'react';

const SocialProof: React.FC = () => {
  const logos = [
    "MIT Libraries",
    "University of Arizona",
    "Universitas Gadjah Mada",
    "Stanford HAI"
  ];

  return (
    <section className="py-16 bg-white text-center border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-gray-400 uppercase tracking-widest text-sm mb-10 font-bold">
          Telah dipercaya oleh Akademisi di Berbagai Institusi
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {logos.map((logo, index) => (
                <div key={index} className="text-xl md:text-2xl font-bold italic text-gray-700 hover:text-blue-800 cursor-default">
                    {logo}
                </div>
            ))}
        </div>
        <p className="mt-12 text-blue-600 font-medium bg-blue-50 inline-block px-6 py-2 rounded-full text-sm md:text-base">
          ✨ Berdasarkan riset terbaru yang menunjukkan peningkatan retensi belajar hingga 11% bagi pengguna LearnLM.
        </p>
      </div>
    </section>
  );
};

export default SocialProof;