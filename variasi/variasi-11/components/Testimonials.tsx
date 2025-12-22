import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Kisah Ibu Lainnya</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="bg-white p-8 rounded-xl shadow-md relative">
                    <Quote className="absolute top-4 left-4 text-green-100 w-12 h-12 -z-0" />
                    <p className="text-gray-600 italic mb-6 relative z-10">
                        "Dulu pusing kalau anak tanya PR matematika, sekarang tinggal upload bab bukunya ke NotebookLM dan saya bisa jelaskan dengan bahasa yang simpel banget!"
                    </p>
                    <div className="flex items-center">
                         <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center text-green-700 font-bold mr-3">R</div>
                         <div>
                             <p className="font-bold text-gray-800">Bunda Ratna</p>
                             <p className="text-xs text-gray-500">IRT & Mom-Blogger</p>
                         </div>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md relative">
                     <Quote className="absolute top-4 left-4 text-green-100 w-12 h-12 -z-0" />
                    <p className="text-gray-600 italic mb-6 relative z-10">
                        "Fitur Audio Overview-nya juara. Saya belajar mengelola keuangan rumah tangga lewat file PDF sambil menyetrika baju. Efisien!"
                    </p>
                    <div className="flex items-center">
                         <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 font-bold mr-3">S</div>
                         <div>
                             <p className="font-bold text-gray-800">Ibu Sari</p>
                             <p className="text-xs text-gray-500">Pengusaha Catering</p>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Testimonials;