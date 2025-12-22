import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <header className="bg-white pt-10 pb-20 text-center border-b-[3px] border-primary relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        <h1 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight max-w-4xl mx-auto">
          Ubah Tumpukan Tugas Sekolah Anak & Catatan Rumah Menjadi Keteraturan Instan
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