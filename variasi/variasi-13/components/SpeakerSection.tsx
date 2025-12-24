import React from 'react';

const SpeakerSection: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-16 text-center text-gray-900">Kenali Instruktur Anda</h2>
      
      <div className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
        <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-blue-200 rounded-2xl transform rotate-6"></div>
                <img 
                    src="/speaker/arianto.avif" 
                    alt="M. Arianto" 
                    className="relative w-full h-full object-cover rounded-2xl shadow-lg border-4 border-white transition-all duration-500" 
                />
            </div>
        </div>z
        
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-3xl md:text-4xl font-black mb-2 text-gray-900 uppercase tracking-tight">M. ARIANTO</h3>
          <p className="text-blue-600 font-black mb-6 uppercase tracking-wider text-lg md:text-xl">AI Engineer & Research Expert</p>
          <div className="w-16 h-1 bg-yellow-400 mb-6 mx-auto md:mx-0"></div>
          <p className="text-gray-600 leading-relaxed text-lg italic">
            Narasumber kita kali ini bukan orang sembarangan—beliau sudah lebih dari 10 tahun berkutat di dunia artificial intelligence, membesut 195+ proyek nyata di bidang AI. Di sesi ini, langsung dari ahlinya, kita bakal kupas tuntas trik jitu menguasai AI
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpeakerSection;