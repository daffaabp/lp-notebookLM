import React, { useState } from 'react';

export const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
        setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
      return (
        <section id="register" className="py-24 px-4 bg-[#be185d] relative transition-all">
            <div className="max-w-xl mx-auto bg-white rounded-3xl p-10 shadow-2xl text-center animate-fade-in">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-check text-3xl text-green-600"></i>
                </div>
                <h2 className="text-3xl font-black text-slate-900 mb-4">Terima Kasih, Bunda {formData.name}!</h2>
                <p className="text-slate-600 mb-6">Data pendaftaran telah kami terima. Admin kami akan segera menghubungi nomor WhatsApp <strong>{formData.phone}</strong> untuk detail selanjutnya.</p>
                <button onClick={() => setSubmitted(false)} className="text-pink-600 font-bold hover:underline">Daftar lagi untuk teman?</button>
            </div>
        </section>
      )
  }

  return (
    <section id="register" className="py-24 px-4 bg-[#be185d] relative">
      <div className="max-w-xl mx-auto bg-white rounded-3xl p-10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-orange-500 text-white px-8 py-2 rounded-bl-3xl font-black tracking-widest text-xs uppercase shadow-md animate-bounce">
          DISKON 75% BERAKHIR HARI INI!
        </div>
        <h2 className="text-3xl font-black text-center mb-4 text-slate-900 tracking-tighter">
          Daftar Sekarang
        </h2>
        <p className="text-center text-slate-500 mb-10 font-bold uppercase text-xs tracking-widest italic">
          Persiapan Menuju Ibu Pintar Berbasis AI Dimulai Di Sini
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-black text-slate-900 mb-2 uppercase">
              Nama Lengkap *
            </label>
            <input
              type="text"
              required
              autoComplete="off"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full border-2 border-slate-100 bg-slate-50 p-4 rounded-xl focus:border-pink-500 outline-none transition shadow-sm"
              placeholder="Contoh: Ibu Rini Susanti"
            />
          </div>
          
          <div>
            <label className="block text-sm font-black text-slate-900 mb-2 uppercase">
              Email Aktif *
            </label>
            <input
              type="email"
              required
              autoComplete="off"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full border-2 border-slate-100 bg-slate-50 p-4 rounded-xl focus:border-pink-500 outline-none transition shadow-sm"
              placeholder="Contoh: rini@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-black text-slate-900 mb-2 uppercase">
              Nomor WhatsApp *
            </label>
            <input
              type="tel"
              required
              autoComplete="off"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full border-2 border-slate-100 bg-slate-50 p-4 rounded-xl focus:border-pink-500 outline-none transition shadow-sm"
              placeholder="0812-xxxx-xxxx"
            />
          </div>

          <div className="bg-pink-50 p-6 rounded-2xl border-2 border-dashed border-pink-200">
            <p className="text-xs font-black text-pink-800 mb-3 uppercase tracking-wider">
              Apa yang Ibu Dapatkan:
            </p>
            <ul className="text-sm space-y-3 text-slate-600 font-medium text-left">
              <li>
                <i className="fas fa-check-circle text-pink-500 mr-2"></i> Akses
                LIVE Webinar & Rekaman (Akses Seumur Hidup).
              </li>
              <li>
                <i className="fas fa-check-circle text-pink-500 mr-2"></i> PDF:
                "Cheat Sheet Kurikulum Merdeka untuk Orang Tua".
              </li>
              <li>
                <i className="fas fa-check-circle text-pink-500 mr-2"></i>{' '}
                E-Certificate Kemahiran AI & Grup Pendampingan Belajar.
              </li>
            </ul>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-black py-5 rounded-2xl text-xl shadow-xl transition-all hover:scale-105 active:scale-95 uppercase tracking-widest"
          >
            DAFTAR SEKARANG
          </button>
          <p className="text-center text-[10px] text-slate-400 mt-4 leading-tight italic px-4">
            Dengan mendaftar, Ibu menyetujui Ketentuan Layanan & Kebijakan
            Privasi. Data Ibu aman sesuai standar Google Workspace Enterprise.
          </p>
        </form>
      </div>
    </section>
  );
};