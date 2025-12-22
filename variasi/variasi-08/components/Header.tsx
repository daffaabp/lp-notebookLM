import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './Button';

const Header: React.FC = () => {
  return (
    <header className="relative bg-gradient-to-br from-blue-900 to-blue-600 text-white py-24 px-6 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
         <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
         <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-orange-500 blur-3xl"></div>
      </div>

      <div className="container mx-auto text-center max-w-5xl relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight tracking-tight">
          Berhenti Terjebak dalam Tumpukan Jurnal: Selesaikan Tinjauan Pustaka S2/S3 Anda <span className="text-orange-400">60% Lebih Cepat!</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
          Kuasai <strong>NotebookLM</strong>: Asisten Riset AI Pribadi yang Mampu Mengolah 300+ Jurnal dan Menemukan <em>Research Gap</em> Tanpa Halusinasi.
        </p>
        
        <div className="flex flex-col items-center space-y-4">
          <Button href="#register" variant="primary">
            Daftar Webinar Gratis Sekarang <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <p className="text-sm font-medium text-blue-200 bg-blue-900/30 px-4 py-1 rounded-full backdrop-blur-sm border border-blue-500/30">
            🔥 Sesi Terbatas untuk 100 Peneliti Serius.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;