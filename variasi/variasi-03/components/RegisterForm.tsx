import React, { useState } from 'react';

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
        setSubmitted(true);
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
        <section id="register" className="py-24 px-4 bg-gradient-to-br from-teal-700 to-teal-900 relative">
             <div className="max-w-xl mx-auto bg-white rounded-3xl p-10 shadow-2xl relative overflow-hidden text-center">
                <div className="text-teal-500 text-6xl mb-6"><i className="fas fa-check-circle"></i></div>
                <h2 className="text-3xl font-black text-teal-900 mb-4">Pendaftaran Berhasil!</h2>
                <p className="text-slate-600 mb-6">Terima kasih, <strong>{formData.name}</strong>. Detail webinar dan tautan pembayaran telah dikirim ke WhatsApp <strong>{formData.whatsapp}</strong> dan Email <strong>{formData.email}</strong>.</p>
                <button onClick={() => setSubmitted(false)} className="text-orange-500 font-bold underline">Daftar peserta lain</button>
             </div>
        </section>
    )
  }

  return (
    <section id="register" className="py-24 px-4 bg-gradient-to-br from-teal-700 to-teal-900 relative">
      <div className="max-w-xl mx-auto bg-white rounded-3xl p-10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-orange-500 text-white px-8 py-2 rounded-bl-3xl font-black tracking-widest text-xs uppercase shadow-md">
          Diskon 75% Hari Ini
        </div>
        <h2 className="text-3xl font-black text-center mb-4 text-teal-900">Daftar Sekarang</h2>
        <p className="text-center text-slate-500 mb-10 font-semibold uppercase text-xs tracking-widest">
          Amankan slot Zoom Anda
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-black text-teal-900 mb-2 uppercase">Nama Lengkap & Gelar Medis *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="off"
              className="w-full border-2 border-slate-100 bg-slate-50 p-4 rounded-xl focus:border-teal-500 outline-none transition shadow-sm"
              placeholder="Contoh: dr. Ahmad Salim, Sp.PD"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-black text-teal-900 mb-2 uppercase">Email Aktif *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="off"
              className="w-full border-2 border-slate-100 bg-slate-50 p-4 rounded-xl focus:border-teal-500 outline-none transition shadow-sm"
              placeholder="ahmad@gmail.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-black text-teal-900 mb-2 uppercase">Nomor WhatsApp *</label>
            <input
              type="tel"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              autoComplete="off"
              className="w-full border-2 border-slate-100 bg-slate-50 p-4 rounded-xl focus:border-teal-500 outline-none transition shadow-sm"
              placeholder="0812xxxxxxx"
              required
            />
          </div>
          <div className="bg-teal-50 p-6 rounded-2xl border-2 border-dashed border-teal-200">
            <p className="text-xs font-bold text-teal-800 mb-3 uppercase tracking-wider">Investasi Anda mencakup:</p>
            <ul className="text-sm space-y-3 text-slate-600 font-medium">
              <li><i className="fas fa-check-circle text-teal-500 mr-2"></i> Akses Live Zoom (27 Des 2025)</li>
              <li><i className="fas fa-check-circle text-teal-500 mr-2"></i> Rekaman Akses Seumur Hidup</li>
              <li><i className="fas fa-check-circle text-teal-500 mr-2"></i> E-Certificate Profesional</li>
            </ul>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-5 rounded-2xl text-xl shadow-xl transition-all hover:scale-105 active:scale-95 uppercase tracking-widest"
          >
            DAFTAR SEKARANG
          </button>
          <p className="text-center text-[10px] text-slate-400 mt-4 leading-tight italic">
            Dengan mendaftar, Anda menyetujui Ketentuan Layanan & Kebijakan Privasi kami yang sesuai dengan standar perlindungan data Google Workspace Enterprise.
          </p>
        </form>
      </div>
    </section>
  );
};

export default RegisterForm;