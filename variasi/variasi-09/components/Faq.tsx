import React from 'react';

const Faq: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-16 text-slate-900 italic underline decoration-4 decoration-gold underline-offset-8">
          FAQ (Pertanyaan Umum)
        </h2>
        <div className="space-y-8">
          <div className="group">
            <h3 className="text-lg font-black text-slate-900 mb-3 uppercase tracking-tight group-hover:text-gold-hover transition-colors">
              1. Apakah data hukum yang saya unggah aman?
            </h3>
            <p className="text-slate-600 leading-relaxed border-l-4 border-slate-100 pl-4 group-hover:border-gold transition-colors">
              Sangat aman. Jika menggunakan Google Workspace (Enterprise/Edu), Google menjamin data tidak akan ditinjau manusia atau digunakan untuk melatih model AI publik mereka.
            </p>
          </div>
          <div className="group">
            <h3 className="text-lg font-black text-slate-900 mb-3 uppercase tracking-tight group-hover:text-gold-hover transition-colors">
              2. Bisakah ia membaca dokumen PDF hasil scan?
            </h3>
            <p className="text-slate-600 leading-relaxed border-l-4 border-slate-100 pl-4 group-hover:border-gold transition-colors">
              Ya, NotebookLM memiliki kemampuan OCR internal yang sangat kuat, mampu membaca teks bahkan dalam gambar diagram atau berkas scan pleidoi lama.
            </p>
          </div>
          <div className="group">
            <h3 className="text-lg font-black text-slate-900 mb-3 uppercase tracking-tight group-hover:text-gold-hover transition-colors">
              3. Apa bedanya dengan ChatGPT "Plus"?
            </h3>
            <p className="text-slate-600 leading-relaxed border-l-4 border-slate-100 pl-4 group-hover:border-gold transition-colors">
              ChatGPT bersifat generalis, sedangkan NotebookLM adalah spesialis riset berkas. NotebookLM membatasi basis pengetahuannya hanya pada sumber Anda, sehingga menekan risiko "halusinasi" hukum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;