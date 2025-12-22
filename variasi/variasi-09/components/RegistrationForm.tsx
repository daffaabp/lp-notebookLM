import React from 'react';

const RegistrationForm: React.FC = () => {
  return (
    <section id="register" className="py-24 legal-gradient text-white relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="container mx-auto px-6 max-w-lg relative z-10">
        <div className="bg-white p-12 rounded-lg shadow-2xl text-slate-900">
            <h2 className="text-3xl font-black text-center mb-4 uppercase tracking-tighter text-slate-800">
            Formulir Pendaftaran
            </h2>
            <p className="text-center text-slate-500 mb-10 text-sm font-medium italic border-b pb-4">
            Sabtu, 20 Desember 2025 | 19:00 WIB via Google Meet
            </p>
            <form action="#" className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
                <label className="block text-xs font-black uppercase text-slate-500 mb-2">
                Nama Lengkap
                </label>
                <input 
                type="text" 
                placeholder="Masukkan nama lengkap Anda" 
                autoComplete="off"
                className="w-full p-4 border-2 border-slate-200 rounded bg-slate-50 focus:bg-white focus:border-gold outline-none transition duration-200 placeholder-slate-300" 
                required 
                />
            </div>
            <div>
                <label className="block text-xs font-black uppercase text-slate-500 mb-2">
                Email Aktif
                </label>
                <input 
                type="email" 
                placeholder="Masukkan email Anda" 
                autoComplete="off"
                className="w-full p-4 border-2 border-slate-200 rounded bg-slate-50 focus:bg-white focus:border-gold outline-none transition duration-200 placeholder-slate-300" 
                required 
                />
            </div>
            <div>
                <label className="block text-xs font-black uppercase text-slate-500 mb-2">
                Nomor WhatsApp
                </label>
                <input 
                type="tel" 
                placeholder="081xxxxxxxx" 
                autoComplete="off"
                className="w-full p-4 border-2 border-slate-200 rounded bg-slate-50 focus:bg-white focus:border-gold outline-none transition duration-200 placeholder-slate-300" 
                />
            </div>
            <button 
                type="submit"
                className="w-full bg-gold hover:bg-gold-hover text-slate-900 font-black py-5 rounded shadow-lg transition duration-300 text-lg uppercase tracking-widest transform hover:-translate-y-1"
            >
                DAFTAR SEKARANG
            </button>
            </form>
            <p className="mt-8 text-[10px] text-center text-slate-400 leading-tight">
            Data Anda dilindungi standar privasi Google Cloud dan tidak akan dibagikan ke pihak ketiga.
            </p>
        </div>
        </div>
    </section>
  );
};

export default RegistrationForm;