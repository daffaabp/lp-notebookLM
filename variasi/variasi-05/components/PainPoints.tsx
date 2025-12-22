import React from 'react';
import { PAIN_POINTS } from '../constants';

const PainPoints: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 italic text-slate-900">
          Mengapa Menulis Secara Manual Menghambat Karier Kreatif Kita?
        </h2>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {PAIN_POINTS.map((point, index) => (
            <div key={index} className="p-8 rounded-3xl bg-slate-50 border-b-4 border-red-500 hover:shadow-lg transition-shadow duration-300">
              <i className={`${point.iconClass} text-red-500 text-4xl mb-6`}></i>
              <h4 className="font-bold text-xl mb-3 text-slate-800">{point.title}</h4>
              <p className="text-slate-600">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;