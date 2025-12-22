import React from 'react';
import { CheckCircle2, Zap, BookOpen, Mic } from 'lucide-react';

const Solution: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Solusinya: NotebookLM - <span className="text-blue-600">"Thinking Partner"</span> Berbasis Gemini 3
          </h2>
          <p className="text-lg text-gray-600">
            Kami tidak mengajarkan cara menggunakan chatbot biasa. Kami mengajarkan cara membangun <strong>Knowledge Engine</strong> pribadi yang bekerja 100% berdasarkan sumber tepercaya Anda.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-blue-100">
            <h4 className="text-blue-800 font-bold text-2xl mb-8 flex items-center gap-3">
              <Zap className="w-6 h-6 text-yellow-500 fill-current" />
              Hasil Akhir yang Anda Dapatkan:
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                </div>
                <div className="ml-4">
                  <h5 className="font-bold text-gray-900">Kerja Lebih Cepat</h5>
                  <p className="text-gray-600 text-base mt-1">Analisis data dan dokumen jadi jauh lebih singkat, hemat waktu hingga puluhan jam.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                   <BookOpen className="w-6 h-6 text-green-500" />
                </div>
                <div className="ml-4">
                  <h5 className="font-bold text-gray-900">Jawaban Jelas & Akurat</h5>
                  <p className="text-gray-600 text-base mt-1">Dapatkan jawaban lengkap dengan sumber jelas, tanpa takut salah kutip.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Mic className="w-6 h-6 text-green-500" />
                </div>
                <div className="ml-4">
                  <h5 className="font-bold text-gray-900">Hasil Belajar Praktis</h5>
                  <p className="text-gray-600 text-base mt-1">Rangkuman otomatis bisa jadi mind map, flashcard, atau podcast, siap langsung dipakai.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;