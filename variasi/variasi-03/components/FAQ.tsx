import React from 'react';

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

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 uppercase italic underline decoration-orange-500">
          Pertanyaan Umum (FAQ)
        </h2>
        <div className="space-y-6">
          {faqs.map((item, idx) => (
            <div key={idx} className="border-b-2 border-slate-50 pb-6 group">
              <h4 className="font-black text-xl mb-3 text-teal-900 group-hover:text-orange-500 transition cursor-pointer">
                {item.q}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;