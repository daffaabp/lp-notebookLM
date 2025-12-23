import React from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  return (
    <details className="bg-white mb-4 rounded-xl border border-gray-100 shadow-sm overflow-hidden group">
      <summary className="p-6 font-semibold cursor-pointer list-none flex justify-between items-center group-open:bg-gray-50 transition-colors">
        <span>{question}</span>
        <span className="transform group-open:rotate-180 transition-transform duration-200">
           ▼
        </span>
      </summary>
      <div className="p-6 pt-2 text-gray-600 leading-relaxed border-t border-gray-100 animate-fade-in">
        {answer}
      </div>
    </details>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Apakah saya harus jago teknologi?",
      answer: "Tidak sama sekali. Jika Ibu bisa menggunakan WhatsApp dan Google, Ibu pasti bisa menggunakan NotebookLM. Kita akan belajar langkah demi langkah dari nol."
    },
    {
      question: "Apakah data keluarga saya aman?",
      answer: "Ya. Google berkomitmen bahwa untuk akun Workspace dan Personal, data tidak digunakan untuk melatih model AI publik mereka secara default. Kita akan bahas cara menjaga privasi data di webinar."
    },
    {
      question: "Apakah ada rekaman jika saya sibuk mengurus anak?",
      answer: "Tentu, rekaman akan dikirim ke email pendaftar. Namun, Ibu disarankan hadir live untuk sesi Q&A langsung dengan M. Arianto."
    }
  ];

  return (
    <section className="py-16 container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Tanya Jawab (FAQ)</h2>
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;