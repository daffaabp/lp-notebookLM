import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <section className="py-16 bg-emerald-50 text-center px-4">
      <div className="max-w-3xl mx-auto border-4 border-dashed border-emerald-200 p-10 rounded-3xl group transition hover:border-emerald-400 bg-white/50 backdrop-blur-sm">
        <div className="flex justify-center mb-6">
            <ShieldCheck className="text-emerald-600 w-16 h-16" />
        </div>
        <h3 className="text-2xl font-black text-emerald-900 uppercase">100% GARANSI UANG KEMBALI</h3>
      </div>
    </section>
  );
};