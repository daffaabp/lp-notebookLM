import React, { useState } from 'react';

interface FAQItemProps {
    question: string;
    answer: string;
    citation?: string;
    isOpen: boolean;
    onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, citation, isOpen, onToggle }) => (
    <div className="border-b border-gray-200 pb-4 last:border-0">
        <button
            onClick={onToggle}
            className="w-full text-left font-bold text-lg text-blue-700 flex items-center justify-between gap-4 py-3 hover:text-blue-800 transition-colors"
        >
            <div className="flex items-start gap-2 flex-1">
                <span className="text-blue-400 flex-shrink-0">Q:</span>
                <span>{question}</span>
            </div>
            <svg
                className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
        </button>
        <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
            <p className="text-gray-600 leading-relaxed ml-6 pt-2 pb-2">
                <span className="font-semibold text-gray-400 mr-1">A:</span>
                {answer} 
                {citation && <span className="text-xs text-gray-400 ml-1 block mt-1">{citation}</span>}
            </p>
        </div>
    </div>
);

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Apakah NotebookLM bisa dalam Bahasa Indonesia?",
      answer: "Ya! Per tahun 2025, NotebookLM sudah mendukung input dan output dalam Bahasa Indonesia secara penuh."
    },
    {
      question: "Apa bedanya NotebookLM dengan ChatGPT?",
      answer: "NotebookLM bersifat Source-Grounded. Ia hanya menjawab berdasarkan dokumen yang Anda upload, sedangkan ChatGPT menggunakan pengetahuan umum internet yang sering tidak akurat untuk riset spesifik."
    },
    {
      question: "Apakah saya perlu berlangganan premium?",
      answer: "Webinar ini akan mengajarkan cara memaksimalkan versi GRATIS yang sudah sangat powerfull (hingga 50 sumber per notebook)."
    },
    {
      question: "Bagaimana jika saya berhalangan hadir saat live?",
      answer: "Jangan khawatir, semua pendaftar akan mendapatkan rekaman webinar yang dapat diakses selamanya."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Pertanyaan Umum (FAQ)</h2>
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;