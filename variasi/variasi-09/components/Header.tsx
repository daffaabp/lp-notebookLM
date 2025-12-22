import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="legal-gradient text-white py-24 px-6 border-b-4 border-gold relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      
      <div className="container mx-auto text-center max-w-4xl relative z-10">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight uppercase tracking-wide text-white drop-shadow-sm">
          Menangkan Kasus Tanpa "Neraka" Administrasi: Temukan Pasal dan Bukti 10x Lebih Cepat!
        </h1>
        <p className="text-lg md:text-xl mb-10 opacity-90 leading-relaxed font-light text-slate-200">
          Kuasai NotebookLM: Asisten Hukum AI Berbasis Dokumen (<em>Source-Grounded</em>) yang Menjamin Akurasi 100% dan Privasi Data Tanpa Risiko Halusinasi AI.
        </p>
        <a 
          href="#register" 
          className="bg-gold hover:bg-gold-hover text-slate-900 font-bold py-5 px-12 rounded shadow-2xl text-xl transition duration-300 inline-flex items-center gap-2 uppercase animate-bounce"
        >
          Amankan Kursi Webinar Gratis <i className="fas fa-gavel text-lg"></i>
        </a>
        <p className="mt-8 text-sm text-slate-400 italic">
          Sesi Khusus: Advokat, Mediator, & Legal Officer.
        </p>
      </div>
    </header>
  );
};

export default Header;