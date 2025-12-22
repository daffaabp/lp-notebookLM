import React from 'react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-16 bg-purple-50 text-center px-4">
      <div className="max-w-3xl mx-auto border-4 border-dashed border-purple-200 p-10 rounded-3xl bg-white/50">
        <div className="text-6xl text-purple-600 mb-6">
          <i className="fas fa-shield-check"></i>
        </div>
        <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">100% GARANSI UANG KEMBALI</h3>
      </div>
    </section>
  );
};

export default Guarantee;