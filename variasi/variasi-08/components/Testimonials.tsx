import React from 'react';
import { Quote, Star, CheckCircle } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="bg-bg-light py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-legal-900/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-legal-900 mb-4">
            Bukti Nyata <span className="text-gold-600 italic">(Bukan Hanya Omong Kosong)</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dengarkan apa kata profesional hukum yang telah mentransformasi cara kerja mereka.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative group hover:-translate-y-1 transition-all duration-300">
            <div className="absolute -top-4 right-8 bg-gold-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
              <CheckCircle className="w-3 h-3" /> VERIFIED
            </div>
            
            <div className="flex gap-1 text-gold-500 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>

            <Quote className="w-10 h-10 text-legal-900/10 mb-4" />
            
            <p className="font-serif text-lg text-gray-700 mb-8 leading-relaxed italic relative z-10">
              "NotebookLM sangat membantu dalam menyaring jawaban atas pertanyaan barrister, 
              <span className="bg-gold-500/20 px-1 mx-1 font-semibold text-legal-900 not-italic rounded">memberikan sitasi langsung ke teks sumber</span> 
              yang dapat diklik untuk verifikasi instan."
            </p>
            
            <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-legal-800 to-legal-900 rounded-full flex items-center justify-center text-white font-bold shadow-md shrink-0">
                PH
              </div>
              <div>
                <h4 className="font-bold text-legal-900">Senior Associate</h4>
                <p className="text-sm text-gray-500">Firma Hukum Korporasi, Jakarta</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative group hover:-translate-y-1 transition-all duration-300">
            <div className="absolute -top-4 right-8 bg-gold-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
              <CheckCircle className="w-3 h-3" /> VERIFIED
            </div>

            <div className="flex gap-1 text-gold-500 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>

            <Quote className="w-10 h-10 text-legal-900/10 mb-4" />

            <p className="font-serif text-lg text-gray-700 mb-8 leading-relaxed italic relative z-10">
              "Kemampuan OCR-nya mengenali teks dari tangkapan layar WhatsApp sangat membantu dalam 
              <span className="bg-gold-500/20 px-1 mx-1 font-semibold text-legal-900 not-italic rounded">menyusun kronologi perkara yang kompleks</span> 
              dalam waktu singkat."
            </p>

            <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center text-white font-bold shadow-md shrink-0">
                AL
              </div>
              <div>
                <h4 className="font-bold text-legal-900">Legal Analyst</h4>
                <p className="text-sm text-gray-500">Lembaga Bantuan Hukum</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;