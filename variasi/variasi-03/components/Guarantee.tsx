import React from 'react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-16 bg-teal-50 text-center px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-6xl text-teal-600 mb-6">
          <i className="fas fa-shield-check"></i>
        </div>
        <h3 className="text-2xl font-black text-teal-900 mb-4 uppercase">100% Risk-Free: Money Back Guarantee</h3>
        <p className="text-slate-600 text-lg leading-relaxed">
          Jika dalam 60 menit pertama webinar Anda merasa teknik ini tidak membantu pekerjaan riset atau manajemen data Anda, kami kembalikan uang Anda 100%. Kami menjamin efisiensi atau uang kembali.
        </p>
      </div>
    </section>
  );
};

export default Guarantee;
