import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: "Apakah data hukum saya aman?",
    answer: "Google berkomitmen bahwa untuk akun organisasi (Workspace), data tidak digunakan untuk melatih model AI dan tidak ditinjau oleh manusia. Keamanan dan kerahasiaan klien Anda tetap terjaga sesuai standar enterprise."
  },
  {
    question: "Apakah saya butuh kemampuan coding?",
    answer: "Tidak sama sekali. NotebookLM dirancang dengan antarmuka yang sangat intuitif untuk pengguna non-teknis. Anda hanya perlu mengunggah dokumen dan mulai bertanya seperti chatting biasa."
  },
  {
    question: "Apakah ada rekaman webinar?",
    answer: "Ya, semua pendaftar akan mendapatkan akses rekaman eksklusif selamanya. Namun, kami sangat menyarankan hadir secara live untuk memanfaatkan sesi tanya jawab interaktif dengan narasumber."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-serif font-bold text-center text-legal-900 mb-12">
          Pertanyaan Umum (FAQ)
        </h2>
        
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button 
                onClick={() => toggleIndex(index)}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-legal-900 text-lg">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gold-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
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