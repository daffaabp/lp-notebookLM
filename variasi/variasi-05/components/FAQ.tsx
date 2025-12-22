import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FaqItem } from '../types';

const faqData: FaqItem[] = [
  {
    question: "Apakah saya akan mendapatkan rekaman webinar?",
    answer: "Ya, Anda akan mendapatkan akses rekaman seumur hidup dan materi presentasi eksklusif di dalam dashboard peserta."
  },
  {
    question: "Apakah materi ini cocok bagi pemula yang gaptek?",
    answer: "Sangat cocok. Kami menggunakan bahasa Indonesia yang sederhana dan teknis yang mudah dipraktikkan tanpa perlu coding."
  },
  {
    question: "Apakah saya harus berlangganan AI berbayar?",
    answer: "Tidak perlu. Teknik yang kami ajarkan tetap bisa dilakukan menggunakan tools versi gratis yang tersedia."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-dark mb-12">Tanya Jawab (FAQ)</h2>
        
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-all duration-300"
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-primary' : 'text-slate-700'}`}>
                  {item.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
              </button>
              
              <div 
                className={`px-6 transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-slate-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;