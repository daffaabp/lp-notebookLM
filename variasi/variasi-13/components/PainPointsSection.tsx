import React from 'react';
import { BrainIcon, ShieldIcon, TimeIcon } from './Icons';

const PainPointsSection: React.FC = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-16 italic text-gray-800">
        "Saya punya semua datanya, tapi tidak punya waktu untuk membacanya..."
      </h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
          <div className="bg-red-50 p-4 rounded-full mb-6">
            <BrainIcon className="w-12 h-12 text-red-500" />
          </div>
          <h3 className="font-bold text-xl mb-3 text-red-600">Information Overload</h3>
          <p className="text-gray-600 italic leading-relaxed">
            Menghabiskan rata-rata 2,5 jam per hari hanya untuk mencari informasi yang sebenarnya pernah Anda temui sebelumnya.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
           <div className="bg-red-50 p-4 rounded-full mb-6">
             <ShieldIcon className="w-12 h-12 text-red-500" />
           </div>
          <h3 className="font-bold text-xl mb-3 text-red-600">AI Sering "Berbohong"</h3>
          <p className="text-gray-600 italic leading-relaxed">
            Chatbot AI biasa memiliki tingkat halusinasi hingga 40%, sangat berbahaya untuk riset akademik atau keputusan bisnis krusial.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
           <div className="bg-red-50 p-4 rounded-full mb-6">
             <TimeIcon className="w-12 h-12 text-red-500" />
           </div>
          <h3 className="font-bold text-xl mb-3 text-red-600">Analisis Manual Lambat</h3>
          <p className="text-gray-600 italic leading-relaxed">
            Proses sinkronisasi data dari berbagai format (PDF, YouTube, Audio) memakan waktu berhari-hari sebelum bisa mulai menulis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;