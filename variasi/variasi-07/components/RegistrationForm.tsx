import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Terima kasih ${formData.name}. Pendaftaran Anda sedang diproses!`);
  };

  return (
    <section id="register" className="py-24 px-4 bg-gradient-to-br from-emerald-900 to-emerald-800 relative">
      <div className="max-w-xl mx-auto bg-white rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
        {/* Discount Badge */}
        <div className="absolute top-0 right-0 bg-yellow-500 text-emerald-950 px-8 py-2 rounded-bl-3xl font-black tracking-widest text-xs uppercase shadow-md animate-bounce">
          DISKON 75% HANYA HARI INI!
        </div>

        <h2 className="text-3xl font-black text-center mb-4 text-emerald-900 tracking-tighter">Pendaftaran Webinar</h2>
        <p className="text-center text-slate-500 mb-10 font-bold uppercase text-xs tracking-widest italic">
          Bergabunglah dengan Barisan ASN Berbasis AI
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-black text-emerald-900 mb-2 uppercase text-left">Nama Lengkap & NIP/ID *</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-2 border-slate-100 bg-slate-50 p-4 rounded-xl focus:border-yellow-500 outline-none transition shadow-sm focus:ring-2 focus:ring-yellow-200" 
              placeholder="Contoh: Budi Santoso, S.Sos" 
              required 
              autoComplete="off"
            />
          </div>
          <div>
            <label className="block text-sm font-black text-emerald-900 mb-2 uppercase text-left">Nomor WhatsApp *</label>
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border-2 border-slate-100 bg-slate-50 p-4 rounded-xl focus:border-yellow-500 outline-none transition shadow-sm focus:ring-2 focus:ring-yellow-200" 
              placeholder="0812-xxxx-xxxx" 
              required 
              autoComplete="off"
            />
          </div>
          <div>
            <label className="block text-sm font-black text-emerald-900 mb-2 uppercase text-left">Email Aktif *</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-2 border-slate-100 bg-slate-50 p-4 rounded-xl focus:border-yellow-500 outline-none transition shadow-sm focus:ring-2 focus:ring-yellow-200" 
              placeholder="Contoh: budi@dinas.gov.id" 
              required
              autoComplete="off"
            />
          </div>
          
          <div className="bg-emerald-50 p-6 rounded-2xl border-2 border-dashed border-emerald-200">
            <p className="text-xs font-black text-emerald-800 mb-3 uppercase tracking-wider text-left">Keuntungan Peserta:</p>
            <ul className="text-sm space-y-3 text-slate-600 font-medium text-left">
              <li className="flex items-center">
                <CheckCircle2 className="text-emerald-500 mr-2 w-4 h-4" /> Akses Live Webinar & Sesi Tanya Jawab.
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="text-emerald-500 mr-2 w-4 h-4" /> Panduan "AI Second Brain for ASN" (PDF).
              </li>
              <li className="flex items-center">
                <CheckCircle2 className="text-emerald-500 mr-2 w-4 h-4" /> E-Certificate Kemahiran Digital.
              </li>
            </ul>
          </div>

          <button 
            type="submit" 
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-emerald-950 font-black py-5 rounded-2xl text-xl shadow-xl transition-all hover:scale-[1.02] active:scale-95 uppercase tracking-widest"
          >
            DAFTAR SEKARANG
          </button>
          
          <p className="text-center text-[10px] text-slate-400 mt-4 leading-tight italic px-4">
            Dengan mendaftar, Anda menyetujui Ketentuan Layanan & Kebijakan Privasi. Data Anda aman sesuai standar kepatuhan tingkat korporat.
          </p>
        </form>
      </div>
    </section>
  );
};