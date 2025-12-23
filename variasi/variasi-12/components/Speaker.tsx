import React from 'react';
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
        </div>
      </div>
    </section>
  );
};

export default Speaker;