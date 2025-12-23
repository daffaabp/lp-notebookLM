import React from 'react';
import { Search, GitGraph, BookOpen } from 'lucide-react';

const Speaker: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-legal-900 mb-12">
          Narasumber Ahli
        </h2>

        <div className="bg-bg-light rounded-2xl p-8 md:p-12 shadow-inner mb-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="relative shrink-0">
            <div className="absolute inset-0 bg-gold-500 rounded-xl transform rotate-3"></div>
            <img 
              src="https://picsum.photos/300/300?grayscale" 
              alt="M. Arianto" 
              className="relative w-48 h-48 md:w-56 md:h-56 object-cover rounded-xl border-4 border-white shadow-lg"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold text-legal-900 mb-2">M. Arianto</h3>
            <p className="text-gold-600 font-bold mb-4 tracking-wide uppercase text-sm">AI Engineer, Researcher, & Mentor Profesional</p>
            <p className="text-gray-700 leading-relaxed">
              Dengan pengalaman 10+ tahun dan 195+ proyek AI, saya siap membahas tips menguasai AI, 
              teknik penulisan, dan research methodology sebagai AI Engineer, Researcher, dan Mentor profesional.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-serif font-bold text-center mb-10 text-legal-900">Apa yang Akan Anda Pelajari?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <Search className="w-10 h-10 text-gold-500 mb-4" />
              <h4 className="font-bold text-lg mb-2">Analisis Berkas Perkara</h4>
              <p className="text-gray-600 text-sm">Teknik mendeteksi kontradiksi pernyataan saksi dengan presisi tinggi.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <GitGraph className="w-10 h-10 text-gold-500 mb-4" />
              <h4 className="font-bold text-lg mb-2">Mind Map Otomatis</h4>
              <p className="text-gray-600 text-sm">Visualisasi hubungan antar tokoh dan bukti hukum secara otomatis.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <BookOpen className="w-10 h-10 text-gold-500 mb-4" />
              <h4 className="font-bold text-lg mb-2">Legal Research</h4>
              <p className="text-gray-600 text-sm">Cara menyusun naskah akademik dan draf regulasi berbasis bukti.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speaker;