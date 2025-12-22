import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-white border-y border-slate-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">Kisah Sukses Kreator & Penulis</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {TESTIMONIALS.map((t, index) => (
            <div key={index} className="p-10 bg-slate-50 rounded-3xl italic border-l-8 border-orange-600 shadow-sm hover:bg-slate-100 transition-colors">
              <p className="text-slate-700 text-lg mb-6">"{t.quote}"</p>
              <div>
                 <p className="font-black text-slate-900">— {t.author}</p>
                 <p className="text-sm text-slate-500 font-bold">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;