import React, { useState } from 'react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 uppercase italic underline decoration-orange-500 underline-offset-8">
          Pertanyaan Umum (FAQ)
        </h2>
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="border-b-2 border-slate-50 pb-6 group">
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center focus:outline-none"
              >
                <h4 className={`font-black text-xl mb-3 transition-colors duration-200 ${openIndex === index ? 'text-orange-600' : 'text-purple-900 group-hover:text-orange-500'}`}>
                  {faq.question}
                </h4>
                <span className="text-purple-300">
                  <i className={`fas ${openIndex === index ? 'fa-minus' : 'fa-plus'}`}></i>
                </span>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                 <p className="text-slate-600 leading-relaxed text-sm italic pr-8">
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

export default FAQ;