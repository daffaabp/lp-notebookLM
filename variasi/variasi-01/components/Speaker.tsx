import React from 'react';
import { Award } from 'lucide-react';

const Speaker: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 border border-gray-100">
        <div className="relative">
             <div className="absolute -inset-2 bg-gradient-to-tr from-blue-400 to-purple-400 rounded-full blur opacity-75"></div>
            <img 
            src="https://picsum.photos/300/300?people" 
            alt="Speaker" 
            className="relative rounded-full w-48 h-48 md:w-56 md:h-56 object-cover border-8 border-white shadow-lg"
            />
             <div className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full border-4 border-white">
                <Award className="w-6 h-6" />
             </div>
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-3xl font-bold mb-2 text-gray-900">M. Arianto</h3>
          <p className="text-blue-600 font-bold mb-6 text-lg uppercase tracking-wide">AI Engineer dan Researcher</p>
          <div className="h-1 w-20 bg-blue-200 mx-auto md:mx-0 mb-6 rounded-full"></div>
          <p className="text-gray-600 leading-relaxed italic text-lg">
            "Dengan pengalaman 10+ tahun dan 195+ proyek AI, saya siap membahas tips menguasai AI, teknik penulisan, dan research methodology sebagai AI Engineer, Researcher, dan Mentor profesional."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Speaker;