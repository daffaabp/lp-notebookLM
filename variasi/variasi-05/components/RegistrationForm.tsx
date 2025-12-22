import React, { useState } from 'react';
import { GRADIENT_CLASS } from '../constants';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Terima kasih, ${formData.name}! Pendaftaran berhasil. Detail akan dikirim ke ${formData.whatsapp}.`);
  };

  return (
    <section id="register" className={`py-24 px-4 ${GRADIENT_CLASS} relative`}>
      <div className="max-w-xl mx-auto bg-white rounded-3xl p-10 shadow-2xl relative overflow-hidden" id="registration-form">
        <div className="absolute top-0 right-0 bg-orange-600 text-white px-8 py-2 rounded-bl-3xl font-black tracking-widest text-xs uppercase shadow-md">
          HEMAT Rp 370.000 HARI INI
        </div>
        <h2 className="text-3xl font-black text-center mb-4 text-slate-900 tracking-tighter">Formulir Pendaftaran</h2>
        <p className="text-center text-slate-500 mb-10 font-bold uppercase text-xs tracking-widest italic">
          Mulailah Era Menulis Cepat Anda Di Sini
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-black text-slate-900 mb-2 uppercase">Nama Lengkap *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-2 border-slate-100 bg-slate-50 p-4 rounded-xl focus:border-orange-500 outline-none transition shadow-sm text-slate-800"
              placeholder="Contoh: Andi Wijaya"
              required
              autoComplete="off"
            />
          </div>
          <div>
            <label className="block text-sm font-black text-slate-900 mb-2 uppercase">Email Aktif *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-2 border-slate-100 bg-slate-50 p-4 rounded-xl focus:border-orange-500 outline-none transition shadow-sm text-slate-800"
              placeholder="andi@kreator.com"
              required
              autoComplete="off"
            />
          </div>
          <div>
            <label className="block text-sm font-black text-slate-900 mb-2 uppercase">Nomor WhatsApp *</label>
            <input
              type="tel"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              className="w-full border-2 border-slate-100 bg-slate-50 p-4 rounded-xl focus:border-orange-500 outline-none transition shadow-sm text-slate-800"
              placeholder="Contoh: 081234567890"
              required
              autoComplete="off"
            />
          </div>
          
          <div className="bg-purple-50 p-6 rounded-2xl border-2 border-dashed border-purple-200">
            <p className="text-xs font-black text-purple-800 mb-3 uppercase tracking-wider">Yang Akan Kita Pelajari:</p>
            <ul className="text-sm space-y-3 text-slate-600 font-medium">
              <li><i className="fas fa-check-circle text-purple-500 mr-2"></i> Akses Live Zoom & Rekaman (Seumur Hidup).</li>
              <li><i className="fas fa-check-circle text-purple-500 mr-2"></i> E-Book Panduan "Grounded AI for Creators".</li>
              <li><i className="fas fa-check-circle text-purple-500 mr-2"></i> Template Mind-Map untuk Worldbuilding.</li>
            </ul>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-500 text-white font-black py-5 rounded-2xl text-xl shadow-xl transition-all hover:scale-105 active:scale-95 uppercase tracking-widest"
          >
            DAFTAR SEKARANG
          </button>
          <p className="text-center text-[10px] text-slate-400 mt-4 leading-tight italic">
            Dengan mendaftar, Anda menyetujui Ketentuan Layanan & Kebijakan Privasi kami yang menjamin data riset Anda tidak digunakan untuk melatih AI publik.
          </p>
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;