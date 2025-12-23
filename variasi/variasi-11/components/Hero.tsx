import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <header className="bg-white pt-10 pb-20 text-center border-b-[3px] border-primary relative overflow-hidden">
      {/* Logos Section - Positioned at corners with white header */}
      <div className="absolute top-0 left-0 right-0 bg-white py-2 px-4 flex items-center justify-between z-20 shadow-sm">
        <img 
          src="/assets/logo kelas inovatif.avif" 
          alt="Kelas Inovatif" 
          className="h-8 md:h-10 w-auto object-contain"
        />
        <img 
          src="/assets/notebook-logo.avif" 
          alt="NotebookLM" 
          className="h-4 md:h-5 w-auto object-contain"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10" style={{ marginTop: '15px' }}>
        
        <h1 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight max-w-4xl mx-auto">
          Kewalahan bantu anak belajar karena materinya susah atau Ibu sendiri nggak paham? <br />
          <span className="text-secondary font-extrabold">Tenang, ada NotebookLM siap jadi asisten belajar 24 jam!</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          Manfaatkan <strong>NotebookLM</strong> sebagai asisten cerdas 24/7 untuk membantu belajar anak, 
          mengelola kesehatan keluarga, dan memberi Ibu lebih banyak waktu untuk <em>me-time</em>.
        </p>

        <div className="inline-flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 bg-white border border-gray-100 px-8 py-4 rounded-3xl mb-10 shadow-xl shadow-gray-200/50 animate-fade-in-down mx-auto max-w-fit">
            <div className="flex items-center gap-3">
                <div className="bg-pink-50 p-3 rounded-full">
                    <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                    <p className="text-xs text-gray-400 font-bold tracking-wider uppercase">Tanggal</p>
                    <p className="text-gray-800 font-bold text-lg leading-tight">Sabtu, 27 Des 2025</p>
                </div>
            </div>
            
            <div className="hidden md:block w-px h-10 bg-gray-200"></div>
            
            <div className="flex items-center gap-3">
                <div className="bg-teal-50 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-secondary" />
                </div>
                 <div className="text-left">
                    <p className="text-xs text-gray-400 font-bold tracking-wider uppercase">Waktu</p>
                    <p className="text-gray-800 font-bold text-lg leading-tight">19:00 - 21:00 WIB</p>
                </div>
            </div>
        </div>

        {/* Pricing */}
        <div className="mb-6 flex flex-col items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="text-2xl md:text-3xl text-gray-400 line-through">Rp 499.000</span>
            <span className="text-3xl md:text-4xl font-bold text-primary">Rp 129.000</span>
          </div>
          <p className="text-sm text-gray-500">Harga khusus untuk peserta webinar</p>
        </div>

        {/* Bonus Badge */}
        <div className="mb-6 inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-yellow-300 text-yellow-800 px-5 py-2.5 rounded-full shadow-md">
          <svg className="w-5 h-5 text-yellow-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
          </svg>
          <span className="text-sm md:text-base font-bold">Bonus: Akun Pro NotebookLM (Senilai Rp 309.000)</span>
        </div>
        
        <a 
          href="#daftar" 
          className="inline-block bg-gold text-dark px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:scale-105 hover:bg-yellow-500 transition-transform duration-300"
        >
          Daftar Sekarang
        </a>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    </header>
  );
};

export default Hero;