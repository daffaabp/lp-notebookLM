import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import Button from './Button';

const RegistrationForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section id="register" className="py-24 bg-gradient-to-br from-blue-900 to-blue-700 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-orange-500 opacity-10 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-xl mx-auto bg-white p-10 md:p-12 rounded-3xl shadow-2xl">
          
          {isSubmitted ? (
            <div className="text-center py-12 animate-fade-in">
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Pendaftaran Berhasil!</h3>
              <p className="text-gray-600 mb-8">Terima kasih, {formData.name}. Link webinar telah dikirim ke {formData.email}.</p>
              <Button onClick={() => setIsSubmitted(false)} variant="primary">
                Daftar Peserta Lain
              </Button>
            </div>
          ) : (
            <>
              <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">Formulir Pendaftaran</h2>
              <p className="text-center text-blue-600 mb-10 font-semibold">
                Webinar Gratis: Sabtu, 10 Desember 2025 | 18:00 WIB
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Nama Lengkap</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Masukkan nama lengkap Anda" 
                    autoComplete="off"
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email Aktif</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Masukkan email Anda" 
                    autoComplete="off"
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-bold text-gray-700 mb-2">Nomor WhatsApp</label>
                  <input 
                    type="tel" 
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="081xxxxxxxx" 
                    autoComplete="off"
                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" 
                    required 
                  />
                </div>
                
                <div className="pt-4">
                  <Button type="submit" fullWidth variant="primary">
                    DAFTAR SEKARANG
                  </Button>
                </div>
              </form>
              <p className="mt-8 text-xs text-center text-gray-400">
                Kami menjaga privasi data Anda sesuai standar Google Workspace.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;