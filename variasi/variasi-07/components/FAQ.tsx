import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b-2 border-slate-50 pb-6">
            <button 
                className="w-full text-left flex justify-between items-center group cursor-pointer focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h4 className="font-black text-lg md:text-xl text-emerald-900 group-hover:text-emerald-600 transition pr-4">
                    {question}
                </h4>
                {isOpen ? <ChevronUp className="w-6 h-6 text-emerald-500 flex-shrink-0" /> : <ChevronDown className="w-6 h-6 text-slate-400 flex-shrink-0" />}
            </button>
            {isOpen && (
                <p className="text-slate-600 leading-relaxed text-sm mt-4 animate-fadeIn">
                    {answer}
                </p>
            )}
        </div>
    );
};

export const FAQ: React.FC = () => {
    const faqs = [
        {
            question: "Apakah data regulasi internal instansi saya aman?",
            answer: "Sangat aman. Google menjamin data yang Anda unggah ke NotebookLM tidak digunakan untuk melatih model AI publik mereka. Privasi data adalah prioritas utama kami untuk pengguna sektor publik."
        },
        {
            question: "Bagaimana cara mencegah halusinasi AI pada laporan resmi?",
            answer: "NotebookLM bersifat Grounded. Ia hanya menjawab berdasarkan dokumen yang Ibu/Bapak berikan, lengkap dengan sistem sitasi footnote untuk memverifikasi sumber aslinya secara langsung."
        },
        {
            question: "Apakah ini sulit digunakan untuk orang awam?",
            answer: "Tidak sama sekali. Jika Bapak/Ibu bisa menggunakan Google Drive atau WhatsApp, Anda akan sangat mudah menggunakan alat ini. Antarmukanya sangat sederhana dan mendukung Bahasa Indonesia."
        }
    ];

  return (
    <section className="py-24 px-4 bg-white text-left">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-16 uppercase italic underline decoration-yellow-500">
          Pertanyaan Umum (FAQ)
        </h2>
        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
        </div>
      </div>
    </section>
  );
};