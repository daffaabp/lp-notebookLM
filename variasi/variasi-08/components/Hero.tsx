import React from 'react';
import { Calendar, Clock, Video } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <header className="bg-legal-900 text-white pt-24 pb-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gold-500"></div>
      <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
          Menangkan Perkara dengan Akurasi Data: <br className="hidden md:block" />
          <span className="text-gold-500">Analisis Ribuan Dokumen Hukum</span> dalam Hitungan Menit
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 italic mb-10 leading-relaxed">
          Gunakan NotebookLM untuk mendeteksi kontradiksi saksi, membangun timeline bukti digital, 
          dan riset yurisprudensi tanpa risiko halusinasi AI.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-10 text-gold-500 font-semibold text-lg">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span>Sabtu, 27 Desember 2025</span>
          </div>
          <div className="hidden md:block text-gray-600">•</div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>19:00 - 21:00 WIB</span>
          </div>
          <div className="hidden md:block text-gray-600">•</div>
          <div className="flex items-center gap-2">
            <Video className="w-5 h-5" />
            <span>Via Zoom</span>
          </div>
        </div>

        <a 
          href="#register" 
          className="inline-block bg-gold-500 hover:bg-gold-600 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:-translate-y-1 shadow-xl hover:shadow-2xl text-lg"
        >
          Daftar Sekarang
        </a>
      </div>
    </header>
  );
};

export default Hero;