import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Apa bedanya dengan ChatGPT?",
      answer: "NotebookLM bersifat <strong>grounded</strong>. Ia hanya menjawab berdasarkan sumber yang Anda berikan, memberikan kutipan yang bisa diklik langsung ke halaman asli, sehingga bebas dari fabrikasi data."
    },
    {
      question: "Apakah data penelitian saya aman?",
      answer: "Sangat aman. Google menjamin bahwa data yang diunggah ke NotebookLM tidak digunakan untuk melatih model AI publik mereka."
    },
    {
      question: "Berapa banyak sumber yang bisa saya masukkan?",
      answer: "Versi standar mendukung hingga 50 sumber per notebook, sedangkan versi Plus/Ultra mendukung hingga 300-600 sumber sekaligus."
    },
    {
      question: "Apakah mendukung Bahasa Indonesia?",
      answer: "Ya, NotebookLM mendukung lebih dari 80 bahasa untuk input teks dan output ringkasan, termasuk Bahasa Indonesia."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Pertanyaan Umum (FAQ)</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300"
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none hover:bg-gray-50"
              >
                <span className="font-bold text-lg text-gray-800">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;