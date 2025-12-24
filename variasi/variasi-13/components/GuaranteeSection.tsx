import React from 'react';
import { ShieldIcon } from './Icons';

const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-20 px-6 text-center max-w-4xl mx-auto">
      <div className="bg-white p-10 md:p-14 rounded-3xl border-2 border-dashed border-blue-300 shadow-sm relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-50 rounded-full z-0"></div>
        
        <div className="relative z-10">
            <div className="inline-block bg-blue-100 p-4 rounded-full mb-6">
                <ShieldIcon className="w-12 h-12 text-blue-600" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">100% Money Back Guarantee</h2>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;