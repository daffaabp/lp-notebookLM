import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Apakah saya perlu berlangganan NotebookLM Plus?",
      answer: "Tidak. Fitur dasar NotebookLM sudah sangat kuat dan gratis. Kami akan mengajarkan cara memaksimalkan versi gratis, serta kapan waktu yang tepat untuk beralih ke versi Plus/Enterprise."
    },
    {
      question: "Bagaimana jika saya gaptek?",
      answer: "NotebookLM didesain dengan antarmuka yang sangat simpel. Jika Anda bisa menggunakan Google Drive, Anda pasti bisa menggunakan alat ini. Kami akan membimbing langkah demi langkah."
    },
    {
      question: "Apakah aman untuk data rahasia klien?",
      answer: "Sangat aman. Google menjamin data yang diunggah ke NotebookLM tidak digunakan untuk melatih model AI mereka. Kami juga akan membahas kebijakan etika penggunaan AI bagi pengacara."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-white" style={{ marginTop: '-60px' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 uppercase italic text-slate-900">
          Pertanyaan Umum (FAQ)
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-slate-100 pb-4 group">
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center focus:outline-none"
              >
                <h4 className={`font-black text-lg mb-2 transition-colors duration-200 ${openIndex === index ? 'text-orange-600' : 'text-slate-900 group-hover:text-orange-500'}`}>
                  {faq.question}
                </h4>
                <span className="text-orange-500 ml-4 flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </span>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-slate-600 text-sm leading-relaxed pt-2">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

