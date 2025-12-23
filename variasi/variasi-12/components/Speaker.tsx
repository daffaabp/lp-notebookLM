import React from 'react';
<<<<<<< HEAD
import SectionTitle from './SectionTitle';

const Speaker: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <SectionTitle>Belajar Langsung dari Ahlinya</SectionTitle>
        
        <div className="max-w-lg mx-auto bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:transform hover:-translate-y-1 transition duration-300">
          <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-blue-100 shadow-sm">
             <img src="https://picsum.photos/id/64/300/300" alt="M. Arianto" className="w-full h-full object-cover" />
          </div>
          
          <h3 className="text-2xl font-bold mb-2 text-gray-900">M. Arianto</h3>
          <p className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-6">AI Engineer dan Researcher</p>
          
          <div className="relative">
            <span className="absolute -top-4 -left-2 text-6xl text-gray-200 font-serif">"</span>
            <p className="text-gray-600 italic leading-relaxed px-4 relative z-10">
              Dengan pengalaman 10+ tahun dan 195+ proyek AI, saya siap membahas tips menguasai AI, teknik penulisan, dan research methodology sebagai AI Engineer, Researcher, dan Mentor profesional.
            </p>
          </div>
=======

const Speaker: React.FC = () => {
  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Mengenal Narasumber</h2>
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100 flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-4xl mx-auto">
        <div className="relative">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary shadow-lg relative z-10">
            <img 
              src="/speaker/arianto.avif" 
              alt="M. Arianto" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-gold text-dark text-xs font-bold px-3 py-1 rounded-full shadow z-20">
            Expert
          </div>
        </div>
        
        <div className="text-center md:text-left flex-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">M. Arianto</h3>
          <p className="text-secondary font-bold mb-4 uppercase tracking-wide text-sm">
            AI Engineer, Researcher, & Mentor Profesional
          </p>
          <p className="text-gray-600 leading-relaxed">
            Dengan pengalaman 10+ tahun dan 195+ proyek AI, saya siap membahas tips menguasai AI, 
            teknik penulisan, dan <em>research methodology</em> sebagai AI Engineer, Researcher, 
            dan Mentor profesional. Misi saya adalah mendemokratisasi kecerdasan buatan untuk 
            semua kalangan, termasuk Ibu rumah tangga.
          </p>
>>>>>>> f59101d12568799a1c02434766eccfd7a7cc03ba
        </div>
      </div>
    </section>
  );
};

export default Speaker;