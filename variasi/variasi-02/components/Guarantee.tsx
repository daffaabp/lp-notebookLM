import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <section className="py-5 bg-slate-50 text-center border-t border-slate-200">
      <div className="max-w-xl mx-auto px-4">
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-4 border-2 border-yellow-400 mb-0 flex flex-col items-center justify-center min-h-[220px] md:min-h-[260px]">
          <img 
            src="/assets/money back avif.avif" 
            alt="Money Back Guarantee"
            className="w-full max-w-[170px] md:max-w-[220px] h-auto object-contain mb-2"
            style={{ display: 'block' }}
          />
          <div className="flex items-center justify-center mt-2">
            <ShieldCheck className="text-orange-600 w-4 h-4 mr-1" strokeWidth={2.2} />
            <span className="text-orange-700 font-bold text-sm md:text-base">
              Garansi Uang Kembali 100%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
