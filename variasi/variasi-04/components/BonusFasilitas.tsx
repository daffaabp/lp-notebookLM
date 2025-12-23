import React from 'react';

export const BonusFasilitas: React.FC = () => {
  return (
    <section className="py-8 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 rounded-2xl p-6 md:p-8 border-4 border-orange-500 shadow-xl">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-6 pb-4 border-b-2 border-orange-500 gap-3 md:gap-0">
            <div className="flex gap-3 items-center">
              <span className="bg-blue-500 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase">FASILITAS</span>
              <span className="bg-orange-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase">BONUS</span>
            </div>
            <div className="flex flex-col md:items-end items-center mt-2 md:mt-0">
              <span className="text-yellow-300 font-black text-lg md:text-xl">
                Total Bonus Senilai <span className="underline decoration-orange-400">Rp 799.000</span>
              </span>
              <span className="text-green-400 text-xs font-bold uppercase tracking-widest">GRATIS untuk peserta!</span>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* E-Sertifikat */}
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border-l-4 border-blue-400 hover:border-orange-400 transition-all">
              <div className="flex items-center gap-3">
                <div className="bg-blue-500 p-2 rounded-lg flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-sm">E-Sertifikat 12 JP dan Rekaman Video</h3>
              </div>
            </div>

            {/* Grup Eksklusif */}
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border-l-4 border-blue-400 hover:border-orange-400 transition-all">
              <div className="flex items-center gap-3">
                <div className="bg-blue-500 p-2 rounded-lg flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-sm">Join Grup Eksklusif Peneliti</h3>
              </div>
            </div>

            {/* Ebook */}
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border-l-4 border-orange-400 hover:border-orange-500 transition-all">
              <div className="flex items-center gap-3">
                <div className="bg-orange-600 p-2 rounded-lg flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-sm">Ebook Materi Prompting untuk Penulisan Karya Ilmiah</h3>
              </div>
            </div>

            {/* NotebookLM Pro */}
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border-l-4 border-orange-400 hover:border-orange-500 transition-all">
              <div className="flex items-center gap-3">
                <div className="bg-orange-600 p-2 rounded-lg flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-sm">Akun Pro NotebookLM</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
