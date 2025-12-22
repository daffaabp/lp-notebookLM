import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 underline decoration-gold decoration-4 underline-offset-8 italic text-slate-800">
          Apa Kata Para Profesional?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Testimonial 1 */}
          <div className="p-8 bg-slate-50 rounded-lg border-l-8 border-gold shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-4 text-gold text-2xl"><i className="fas fa-quote-left"></i></div>
            <p className="text-slate-700 italic leading-relaxed mb-6">
              "NotebookLM membantu saya menemukan kontradiksi dalam pernyataan saksi di antara 200 dokumen dalam hitungan detik. Benar-benar game changer!"
            </p>
            <div className="flex items-center">
                <div className="w-10 h-10 bg-slate-300 rounded-full mr-3 flex items-center justify-center text-slate-500 text-xs">BS</div>
                <p className="font-bold text-slate-900 text-sm uppercase">
                — Budi Santoso, Mediator Independen
                </p>
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="p-8 bg-slate-50 rounded-lg border-l-8 border-gold shadow-sm hover:shadow-md transition-shadow">
             <div className="mb-4 text-gold text-2xl"><i className="fas fa-quote-left"></i></div>
            <p className="text-slate-700 italic leading-relaxed mb-6">
              "Sitasi sebarisnya membuat saya tenang. Saya bisa langsung membuktikan kutipan pleidoi berasal dari berkas penemuan yang tepat."
            </p>
            <div className="flex items-center">
                <div className="w-10 h-10 bg-slate-300 rounded-full mr-3 flex items-center justify-center text-slate-500 text-xs">SW</div>
                <p className="font-bold text-slate-900 text-sm uppercase">
                — Sarah Wijaya, Senior Counsel
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;