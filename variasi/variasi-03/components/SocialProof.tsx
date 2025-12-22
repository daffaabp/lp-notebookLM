import React from 'react';

const LogoPlaceholder: React.FC<{ label: string }> = ({ label }) => (
  <div className="h-10 px-4 bg-gray-300 rounded flex items-center justify-center text-gray-600 font-bold text-xs uppercase tracking-wider opacity-60 hover:opacity-100 transition-opacity cursor-default">
    {label}
  </div>
);

const SocialProof: React.FC = () => {
  return (
    <section className="py-6 md:py-8 bg-[#e6e6e6]">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h3 className="text-xl font-bold text-gray-700 mb-6">
          Dipercaya oleh Ribuan Akademisi dari berbagai institusi di Indonesia
        </h3>

        <div className="flex flex-wrap justify-center gap-4">
          <LogoPlaceholder label={<span className="text-black">Universitas Negeri</span>} />
          <LogoPlaceholder label={<span className="text-black">Universitas Swasta</span>} />
          <LogoPlaceholder label={<span className="text-black">Politeknik</span>} />
          <LogoPlaceholder label={<span className="text-black">Instansi Pemerintah</span>} />
        </div>
      </div>
    </section>
  );
};

export default SocialProof;