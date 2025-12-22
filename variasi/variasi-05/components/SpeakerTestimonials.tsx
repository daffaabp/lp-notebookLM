import React from 'react';
import { Quote } from 'lucide-react';

const SpeakerTestimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Speaker */}
          <div className="text-center">
            <div className="relative inline-block mb-6 group">
                <div className="absolute inset-0 bg-secondary rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <img 
                    src="/speaker/arianto.avif" 
                    alt="Arianto, M.I.Kom" 
                    className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-white shadow-xl mx-auto"
                />
            </div>
            <h3 className="text-2xl md:text-5xl lg:text-6xl font-black text-dark mb-1 md:mb-6 uppercase tracking-tight">
              M. ARIANTO
            </h3>
            <p className="text-primary font-black mb-4 md:mb-8 text-xl md:text-2xl lg:text-3xl">
              AI Engineer & Research Expert
            </p>
            <p className="text-slate-600 leading-relaxed italic text-lg md:text-lg lg:text-xl max-w-md md:max-w-3xl mx-auto">
              Narasumber kita kali ini bukan orang sembarangan—beliau sudah lebih dari 10 tahun berkutat di dunia artificial intelligence, membesut 195+ proyek nyata di bidang AI. Di sesi ini, langsung dari ahlinya, kita bakal kupas tuntas trik jitu menguasai AI, teknik penulisan ilmiah, sampai research methodology. Ga kaleng-kaleng, ilmunya beneran daging dan aplikatif!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakerTestimonials;