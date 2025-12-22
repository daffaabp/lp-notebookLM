import React, { useState } from 'react';

interface FooterProps {
  onNavigate: (page: 'home' | 'privacy' | 'terms') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Apakah data perusahaan saya aman di NotebookLM?",
      answer: "Sangat aman. Google menjamin bahwa data yang diunggah ke NotebookLM tidak digunakan untuk melatih model AI publik mereka. Khusus versi Enterprise, data tetap berada dalam kontrol residensi data organisasi Anda."
    },
    {
      question: "Apa bedanya dengan ChatGPT?",
      answer: "NotebookLM bersifat \"Berbasis Data Nyata\". Ia tidak akan berhalusinasi mencari data di internet liar, melainkan hanya menjawab berdasarkan sumber internal terpercaya yang ANDA berikan, lengkap dengan sistem sitasi footnote."
    },
    {
      question: "Apakah mendukung dokumen dalam Bahasa Indonesia?",
      answer: "Ya, NotebookLM mendukung penuh input dan output dalam lebih dari 80 bahasa, termasuk Bahasa Indonesia."
    }
  ];

  return (
    <>
      {/* FAQ SECTION */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16 uppercase italic underline decoration-orange-500 underline-offset-8">Pertanyaan Umum (FAQ)</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-2 border-slate-50 rounded-xl overflow-hidden hover:border-slate-100 transition-colors">
                    <button 
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-6 bg-slate-50 flex justify-between items-center group cursor-pointer focus:outline-none"
                    >
                        <h4 className="font-black text-lg md:text-xl text-slate-900 group-hover:text-orange-500 transition-colors pr-8">
                          {faq.question}
                        </h4>
                        <i className={`fas fa-chevron-down text-slate-400 transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}></i>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="p-6 pt-0 bg-slate-50 text-slate-600 leading-relaxed text-sm md:text-base border-t border-slate-200/50">
                        {faq.answer}
                      </div>
                    </div>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 business-gradient text-white border-t-8 border-orange-500 px-4">
          <div className="max-w-6xl mx-auto text-center">
              <h3 className="text-2xl font-black mb-4 italic uppercase tracking-tighter text-blue-400">Kelas Inovatif</h3>
              <p className="text-slate-300 max-w-3xl mx-auto mb-6 text-sm md:text-base leading-relaxed">
                  Platform pembelajaran Artificial Intelligence Nomor 1 di Indonesia bagi para peneliti akademik. 
                  Kami berkomitmen menyediakan edukasi berkualitas tinggi, bebas plagiasi, dan beretika untuk memajukan riset Indonesia.
              </p>
              <a href="https://kelasinovatif.com" target="_blank" rel="noopener noreferrer" className="inline-block mb-10 text-orange-400 font-bold hover:text-orange-300 border-b border-orange-400/50 hover:border-orange-300 transition-colors pb-1">
                  kelasinovatif.com <i className="fas fa-external-link-alt ml-1 text-xs"></i>
              </a>

              <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-xs font-bold text-slate-400 mb-10 uppercase tracking-widest">
                  <button onClick={() => onNavigate('terms')} className="hover:text-orange-500 border-b-2 border-transparent hover:border-orange-500 pb-1 transition-all">Terms of Service</button>
                  <button onClick={() => onNavigate('privacy')} className="hover:text-orange-500 border-b-2 border-transparent hover:border-orange-500 pb-1 transition-all">Privacy Policy</button>
                  <span className="cursor-default opacity-50">GDPR Compliance</span>
              </div>
              <p className="text-[10px] text-slate-600 max-w-2xl mx-auto leading-relaxed uppercase font-medium">
                  &copy; 2025 Webinar Masterclass Intelijen Dokumen Digital. <br className="mb-2 block"/>
                  NotebookLM adalah merek dagang dari Google Labs. Program ini diselenggarakan secara independen oleh Kelas Inovatif.
              </p>
          </div>
      </footer>
    </>
  );
};

export default Footer;