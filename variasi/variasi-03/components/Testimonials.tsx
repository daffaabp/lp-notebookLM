import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">Testimoni Rekan Sejawat</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="p-10 bg-slate-50 rounded-3xl border-l-8 border-teal-500 italic shadow-lg hover:shadow-xl transition-shadow">
            <p className="text-slate-700 text-lg mb-6">
              "Saya mengunggah 11 tahun hasil tes darah dan catatan medis. Podcast yang dihasilkan sangat motivasional dan menarik. Saya bisa melihat perjalanan kesehatan saya dari perspektif pihak ketiga yang objektif."
            </p>
            <p className="font-black text-teal-900">— Peneliti Medis, Spesialis Bariatrik</p>
          </div>
          <div className="p-10 bg-slate-50 rounded-3xl border-l-8 border-teal-500 italic shadow-lg hover:shadow-xl transition-shadow">
            <p className="text-slate-700 text-lg mb-6">
              "Fitur kuis sangat luar biasa. Ia berhasil menemukan perbedaan halus antara model analisis ritme multimodal dalam teks riset saya yang bahkan tidak saya sadari sebelumnya."
            </p>
            <p className="font-black text-teal-900">— Pengajar Ilmu Matematika & Kedokteran</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;