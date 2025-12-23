import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { FAQItem } from '../types';

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Apakah NotebookLM benar-benar gratis?",
    answer: "Ya, Google NotebookLM tersedia gratis dalam mode eksperimen, mendukung hingga 50 sumber per notebook. Ini adalah kesempatan emas untuk peneliti."
  },
  {
    id: 2,
    question: "Bagaimana dengan privasi data riset saya?",
    answer: "Sangat aman. Google menjamin bahwa data yang diunggah di lingkungan Workspace tidak akan digunakan untuk melatih model AI umum atau ditinjau manusia tanpa izin."
  },
  {
    id: 3,
    question: "Bisakah ia membaca video YouTube?",
    answer: "Ya, NotebookLM dapat menarik transkrip dari video YouTube publik untuk dijadikan basis riset Anda. Sangat berguna untuk mengutip kuliah online."
  },
  {
    id: 4,
    question: "Apakah mendukung Bahasa Indonesia?",
    answer: "Ya, baik input sumber maupun hasil analisis sudah mendukung Bahasa Indonesia sepenuhnya. Anda bisa bertanya dalam Bahasa Indonesia meskipun sumbernya Bahasa Inggris."
  }
];

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-3xl">
        <SectionTitle>Pertanyaan Umum (FAQ)</SectionTitle>
        
        <div className="space-y-4">
          {faqData.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <button 
                onClick={() => toggleFAQ(item.id)}
                className="w-full text-left p-6 focus:outline-none flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-gray-900 text-lg">{item.question}</span>
                {openId === item.id ? (
                  <Minus className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-blue-600 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openId === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;