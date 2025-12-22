import React, { useState } from 'react';
import { CheckCircle, Loader2, Shield, AlertCircle } from 'lucide-react';
import UrgencyTimer from './UrgencyTimer';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setSubmitStatus('success');
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="register" className="py-20 px-4 bg-gradient-to-br from-[#1a365d] to-[#2b6cb0] text-white">
      <div className="max-w-xl mx-auto bg-white text-gray-900 p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden">
        
        {submitStatus === 'success' ? (
          <div className="flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in duration-500">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Terima Kasih!</h3>
            <p className="text-gray-600 mb-8 text-lg">
              Pendaftaran Anda untuk <span className="font-bold">{formData.name}</span> berhasil diterima. Link webinar telah dikirim ke <span className="font-bold">{formData.email}</span>.
            </p>
            <button 
              onClick={() => {
                setSubmitStatus('idle');
                setFormData({ name: '', email: '', whatsapp: '' });
              }}
              className="text-blue-600 font-semibold hover:underline"
            >
              Daftarkan peserta lain
            </button>
          </div>
        ) : (
          <>
            {/* 3 Arrow Down with Blink Animation */}
            <div className="flex justify-center items-center gap-2 mb-4 -mt-4">
              <img 
                src="/assets/right-arrow.avif"
                alt="Arrow down"
                className="w-10 h-7 md:w-14 md:h-9 arrow-blink rotate-90"
              />
              <img 
                src="/assets/right-arrow.avif"
                alt="Arrow down"
                className="w-10 h-7 md:w-14 md:h-9 arrow-blink rotate-90"
              />
              <img 
                src="/assets/right-arrow.avif"
                alt="Arrow down"
                className="w-10 h-7 md:w-14 md:h-9 arrow-blink rotate-90"
              />
            </div>

            <h2 className="text-3xl font-bold text-center mb-4">Daftar Sekarang</h2>

            {/* Harga Coret & Countdown Timer */}
            <div className="mb-6">
              <div className="text-center mb-3">
                <span className="text-base font-normal text-gray-500">
                  <span className="line-through mr-2">Rp 499.000</span>
                  <span className="text-red-600 font-bold text-xl">Rp 129.000</span>
                </span>
              </div>
              {/* Timer */}
              <div className="bg-red-50 py-3 rounded-lg border border-red-100">
                <UrgencyTimer variant="on-white" label="Diskon Berakhir Dalam:" />
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">Nama Lengkap <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-4 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" 
                  placeholder="Masukkan nama lengkap Anda" 
                  required 
                  autoComplete="off"
                  disabled={submitStatus === 'submitting'}
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">Email Aktif <span className="text-red-500">*</span></label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-4 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" 
                  placeholder="Masukkan email Anda" 
                  required 
                  autoComplete="off"
                  disabled={submitStatus === 'submitting'}
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">Nomor WhatsApp <span className="text-red-500">*</span></label>
                <input 
                  type="tel" 
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-4 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" 
                  placeholder="08xxxxxxxxx" 
                  required 
                  autoComplete="off"
                  disabled={submitStatus === 'submitting'}
                />
              </div>
              <button 
                type="submit" 
                disabled={submitStatus === 'submitting'}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg text-xl mt-4 shadow-lg hover:shadow-2xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
              >
                {submitStatus === 'submitting' ? (
                  <>
                    <Loader2 className="animate-spin mr-2" /> Memproses...
                  </>
                ) : (
                  "DAFTAR SEKARANG"
                )}
              </button>

              {/* Payment Security & Urgency */}
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span>Pembayaran 100% Aman & Terjamin</span>
                </div>
              </div>
              <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
                Kami menghormati privasi data Anda sesuai standar Google Workspace Enterprise.
              </p>
            </form>
          </>
        )}
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }
        .arrow-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </section>
  );
};

export default RegistrationForm;