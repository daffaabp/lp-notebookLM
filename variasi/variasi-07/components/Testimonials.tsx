import React from 'react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-white border-y border-slate-200">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-16 text-emerald-950">Pengakuan Rekan Sejawat</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="p-10 bg-slate-50 rounded-3xl italic border-l-8 border-yellow-500 shadow-sm text-left hover:shadow-md transition">
            <p className="text-slate-700 text-lg mb-6">
              "Saya mengunggah ribuan halaman regulasi keuangan. NotebookLM membantu saya menemukan pola pergerakan anggaran yang selama ini tersembunyi. Benar-benar mengubah cara saya bekerja sebagai analis kebijakan."
            </p>
            <p className="font-black text-emerald-900 not-italic">— Staf Ahli, Kementrian Keuangan</p>
          </div>
          <div className="p-10 bg-slate-50 rounded-3xl italic border-l-8 border-yellow-500 shadow-sm text-left hover:shadow-md transition">
            <p className="text-slate-700 text-lg mb-6">
              "Dulu membuat ringkasan rapat dinas bisa memakan waktu seharian. Sekarang cukup unggah transkrip Zoom, dan NotebookLM memberikan action items yang tajam. Produktivitas tim kami naik drastis!"
            </p>
            <p className="font-black text-emerald-900 not-italic">— Kasubag Administrasi, Pemprov Jabar</p>
          </div>
        </div>
      </div>
    </section>
  );
};