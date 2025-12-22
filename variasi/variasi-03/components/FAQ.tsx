import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "Apakah data medis pasien saya aman di NotebookLM?",
      a: "Sangat aman. Untuk pengguna Google Workspace Enterprise, data interaksi tidak digunakan untuk melatih model bahasa Google dan tidak dapat diakses oleh manusia di Google."
    },
    {
      q: "Bagaimana cara mengatasi halusinasi AI pada data riset?",
      a: "NotebookLM menggunakan teknik RAG (Retrieval-Augmented Generation) yang memaksa model hanya menjawab berdasarkan dokumen yang Anda berikan. Jika info tidak ada, AI akan jujur menyatakan tidak tahu."
    },
    {
      q: "Apakah platform ini mendukung bahasa medis yang rumit?",
      a: "Ya, NotebookLM menggunakan model Gemini 1.5 Pro yang memiliki pemahaman multimodal yang kuat terhadap bagan, gambar teknis, dan terminologi medis di lebih dari 80 bahasa."
    }
  ];

  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleFAQ = (idx: number) => {
    setOpenIndexes((prev) =>
      prev.includes(idx)
        ? prev.filter(i => i !== idx)
        : [...prev, idx]
    );
  };

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 uppercase italic underline decoration-orange-500">
          Pertanyaan Umum (FAQ)
        </h2>
        <div className="space-y-6">
          {faqs.map((item, idx) => {
            const isOpen = openIndexes.includes(idx);
            return (
              <div key={idx} className="border-b-2 border-slate-50 pb-6 group">
                <button
                  className="flex items-center w-full text-left focus:outline-none"
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <h4 className="font-black text-xl mb-3 text-teal-900 group-hover:text-orange-500 transition cursor-pointer flex-1">
                    {item.q}
                  </h4>
                  <span
                    className={`ml-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden
                  >
                    {/* SVG chevron-down icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={28}
                      height={28}
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M6 8l4 4 4-4"
                        stroke="#14b8a6"
                        strokeWidth={2.2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <p
                    id={`faq-answer-${idx}`}
                    className="text-slate-600 leading-relaxed animate-fadeIn"
                  >
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.2s;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-6px);}
          to { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </section>
  );
};

export default FAQ;