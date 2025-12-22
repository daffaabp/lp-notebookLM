import React, { useState } from 'react';
import { Check } from 'lucide-react';

export const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Terima kasih! (Ini adalah form demo)");
  };

  return (
    <section id="register" className="py-24 px-4 bg-white">
      <div className="max-w-xl mx-auto border-2 border-slate-200 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 bg-orange-600 text-white px-6 py-2 rounded-bl-2xl font-bold text-sm shadow-md">
          HEMAT 75%
        </div>
        <h2 className="text-3xl font-black text-center mb-4 text-slate-900">Formulir Pendaftaran</h2>
        <p className="text-center text-slate-500 mb-8 font-medium">Hanya Rp 129.000 untuk transformasi karir Anda.</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-black mb-2 uppercase text-slate-700">Nama Lengkap *</label>
            <input 
              type="text" 
              required
              autoComplete="off"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full border-2 border-slate-200 p-4 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition bg-slate-50" 
              placeholder="Contoh: Budi Santoso" 
            />
          </div>
          <div>
            <label className="block text-sm font-black mb-2 uppercase text-slate-700">Email Aktif *</label>
            <input 
              type="email" 
              required
              autoComplete="off"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full border-2 border-slate-200 p-4 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition bg-slate-50" 
              placeholder="budi@gmail.com" 
            />
          </div>
          <div>
            <label className="block text-sm font-black mb-2 uppercase text-slate-700">Nomor WhatsApp *</label>
            <input 
              type="tel" 
              required
              autoComplete="off"
              value={formData.whatsapp}
              onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
              className="w-full border-2 border-slate-200 p-4 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition bg-slate-50" 
              placeholder="0812xxxxxxx" 
            />
          </div>
          
          <div className="bg-slate-100 p-6 rounded-2xl border-2 border-dashed border-slate-300">
            <p className="text-sm font-bold text-slate-700 mb-3">Rangkuman Acara:</p>
            <ul className="text-xs space-y-2 text-slate-600 font-medium">
              <li className="flex items-center"><Check size={14} className="mr-2 text-green-600" /> Sabtu, 27 Desember 2025 (19.00 - 21.00 WIB)</li>
              <li className="flex items-center"><Check size={14} className="mr-2 text-green-600" /> Materi Digital & E-Certificate</li>
              <li className="flex items-center"><Check size={14} className="mr-2 text-green-600" /> Rekaman Ulang (Lifetime Access)</li>
            </ul>
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-orange-600 hover:bg-orange-500 text-white font-black py-5 rounded-xl text-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest"
          >
            DAFTAR SEKARANG
          </button>
        </form>
      </div>
    </section>
  );
};