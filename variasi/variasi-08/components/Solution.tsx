import React from 'react';
import { CheckCircle, Zap, ShieldCheck } from 'lucide-react';

const Solution: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-wrap items-center">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 mb-16 lg:mb-0 pr-0 lg:pr-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">
              Bayangkan Punya "Asisten Jenius" yang Hafal <span className="text-blue-600">25 Juta Kata</span> Riset Anda...
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              NotebookLM bukan sekadar chatbot. Ia adalah ekosistem manajemen pengetahuan proaktif yang bekerja 100% berdasarkan sumber data primer Anda (Grounding).
            </p>
            
            <ul className="space-y-6">
              <li className="flex items-start">
                <ShieldCheck className="w-6 h-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Akurasi Mutlak</h4>
                  <p className="text-gray-600 text-sm">Jawaban disertai sitasi sebaris (*inline citations*) yang bisa diklik langsung ke halaman PDF asli.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Zap className="w-6 h-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Visualisasi Cerdas</h4>
                  <p className="text-gray-600 text-sm">Bangun *Mind Map* interaktif untuk melihat koneksi semantik antar dokumen secara instan.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Audio Deep Dive</h4>
                  <p className="text-gray-600 text-sm">Ubah 50 jurnal menjadi percakapan podcast untuk didengarkan sambil berolahraga.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Stats Box */}
          <div className="w-full lg:w-1/2">
            <div className="bg-blue-50 p-10 rounded-3xl border border-blue-100 shadow-xl relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-400 rounded-full opacity-20 blur-xl"></div>
              
              <h4 className="text-center text-blue-900 font-bold text-2xl mb-8">Hasil Nyata untuk Anda:</h4>
              
              <div className="grid gap-8">
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="text-5xl md:text-6xl font-extrabold text-blue-600 mb-2">60%</div>
                  <p className="text-gray-700 font-medium">Penghematan Waktu Penyusunan Tinjauan Pustaka</p>
                </div>
                
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="text-5xl md:text-6xl font-extrabold text-blue-600 mb-2">94%</div>
                  <p className="text-gray-700 font-medium">Tingkat Akurasi Faktual Dibandingkan AI Lain</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Solution;