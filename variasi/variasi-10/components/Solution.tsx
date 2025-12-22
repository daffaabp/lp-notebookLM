import React from 'react';
import { CheckCircle, ShieldCheck, FileText, Mic } from 'lucide-react';

const solutions = [
  {
    icon: CheckCircle,
    title: "Akurasi Berbasis Sumber",
    desc: "AI ini hanya menjawab berdasarkan dokumen yang Anda unggah (source-grounding), meminimalisir halusinasi hingga 87%."
  },
  {
    icon: FileText,
    title: "Sitasi Instan & Verifikatif",
    desc: "Setiap jawaban disertai nomor sitasi yang jika diklik akan langsung menunjukkan kutipan asli dalam PDF Anda."
  },
  {
    icon: ShieldCheck,
    title: "Keamanan Data Perusahaan",
    desc: "Melalui Google Workspace, data Anda tidak akan digunakan untuk melatih model AI global."
  },
  {
    icon: Mic,
    title: "Pemrosesan Multimodal",
    desc: "Ubah tangkapan layar chat, rekaman audio sidang, dan file PDF menjadi wawasan terstruktur secara otomatis."
  }
];

const Solution: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-legal-900">
            Mengapa NotebookLM Adalah <span className="text-gold-500">"Game-Changer"</span> Bagi Anda
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((item, index) => (
            <div key={index} className="bg-bg-light p-6 rounded-lg border-t-4 border-legal-900 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-legal-900/10 rounded-full flex items-center justify-center mb-4 text-legal-900">
                <item.icon className="w-6 h-6" />
              </div>
              <h4 className="font-serif font-bold text-lg mb-3 text-legal-900">{item.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;