import React from 'react';
import { GraduationCap, Library, BookOpen } from 'lucide-react';

const SocialProof: React.FC = () => {
  return (
    <section className="py-10 bg-gray-50 border-b border-gray-200">
      <div className="container mx-auto px-6">
        <p className="text-center text-gray-500 font-bold mb-8 uppercase tracking-widest text-xs">
          Dipercaya oleh Akademisi & Institusi Terkemuka
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-20 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          
          <div className="flex items-center space-x-2 group">
            <GraduationCap className="w-8 h-8 text-blue-800" />
            <span className="text-xl font-bold text-gray-800 group-hover:text-blue-800">Universitas Gadjah Mada</span>
          </div>

          <div className="flex items-center space-x-2 group">
            <Library className="w-8 h-8 text-green-700" />
            <span className="text-xl font-bold text-gray-800 group-hover:text-green-700">IKIP Siliwangi</span>
          </div>

          <div className="flex items-center space-x-2 group">
            <BookOpen className="w-8 h-8 text-orange-600" />
            <span className="text-xl font-bold text-gray-800 group-hover:text-orange-600">OpenStax Partner</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SocialProof;