import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">Apa Kata Rekan Peneliti?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="relative p-10 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <Quote className="absolute top-6 left-6 w-10 h-10 text-blue-100 rotate-180" />
            <div className="relative z-10">
                <p className="text-gray-700 text-lg italic leading-relaxed mb-6">
                "Fitur kuis dan flashcards-nya luar biasa membantu saya persiapan MSRA. Saya bisa membedakan detail-detail halus antar model penelitian tanpa harus mengulang bacaan dari nol."
                </p>
                <div className="flex items-center gap-4">
                    <img src="https://picsum.photos/50/50?random=1" className="w-12 h-12 rounded-full object-cover" alt="Researcher 1" />
                    <div>
                        <p className="font-bold text-blue-900">Dr. Hendra Gunawan</p>
                        <p className="text-sm text-gray-500">Peneliti Senior, Sektor Medis</p>
                    </div>
                </div>
            </div>
          </div>

          <div className="relative p-10 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <Quote className="absolute top-6 left-6 w-10 h-10 text-blue-100 rotate-180" />
            <div className="relative z-10">
                <p className="text-gray-700 text-lg italic leading-relaxed mb-6">
                "Sebagai penderita disleksia, fitur Audio Overview mengubah hidup saya. Saya bisa mendengarkan perdebatan teori di jurnal sambil mengemudi, dan ini jauh lebih inklusif daripada hanya membaca teks linear."
                </p>
                <div className="flex items-center gap-4">
                    <img src="https://picsum.photos/50/50?random=2" className="w-12 h-12 rounded-full object-cover" alt="Researcher 2" />
                    <div>
                        <p className="font-bold text-blue-900">Maya Putri, M.Sc</p>
                        <p className="text-sm text-gray-500">Mahasiswa Pascasarjana, Neurodivergent</p>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;