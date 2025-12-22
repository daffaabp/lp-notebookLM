import React from 'react';

const Speaker: React.FC = () => {
  return (
    <section className="py-8 md:py-32 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Card Container with Teal Glow */}
        <div className="bg-white rounded-3xl shadow-2xl p-4 md:p-12 relative overflow-hidden border-2 border-teal-100">
          {/* Teal Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-teal-500/5 pointer-events-none"></div>
          <div className="absolute -inset-1 bg-gradient-to-br from-teal-400/20 to-teal-600/20 rounded-3xl blur-xl opacity-50"></div>
          
          <div className="relative flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-12">
            {/* Photo Container */}
            <div className="relative shrink-0">
              <div className="w-40 h-52 md:w-56 md:h-80 rounded-2xl overflow-hidden border-4 md:border-6 border-white shadow-xl">
                <img 
                  src="/speaker/arianto.avif" 
                  alt="M. Arianto" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-teal-900 mb-2 md:mb-6 uppercase tracking-tight">
                M. ARIANTO
              </h3>
              <p className="text-teal-600 font-black mb-3 md:mb-8 text-xl md:text-2xl lg:text-3xl">
                AI Engineer & Research Expert
              </p>
              <p className="text-slate-600 leading-relaxed italic text-lg md:text-lg lg:text-xl max-w-3xl">
                Narasumber kita kali ini bukan orang sembarangan—beliau sudah lebih dari 10 tahun berkutat di dunia artificial intelligence, membesut 195+ proyek nyata di bidang AI. Di sesi ini, langsung dari ahlinya, kita bakal kupas tuntas trik jitu menguasai AI, teknik penulisan ilmiah, sampai research methodology. Ga kaleng-kaleng, ilmunya beneran daging dan aplikatif!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speaker;