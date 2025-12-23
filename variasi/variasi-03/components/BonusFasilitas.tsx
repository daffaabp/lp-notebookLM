import React from 'react';

export const BonusFasilitas: React.FC = () => {
  return (
    <section className="py-8 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-teal-800 to-teal-900 rounded-3xl p-6 md:p-8 border-4 border-dashed border-teal-400 shadow-2xl">
          
          {/* FASILITAS Section */}
          <div className="mb-6">
            <div className="text-center mb-6">
              <span className="inline-block bg-teal-500 text-white px-6 py-2 rounded-full text-sm font-black uppercase tracking-wide shadow-lg">
                FASILITAS
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border-2 border-teal-400/50 text-center hover:bg-white/20 transition-all">
                <div className="flex justify-center mb-2">
                  <div className="bg-teal-500 p-3 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-white font-bold text-sm leading-tight">E-Sertifikat 12 JP dan Rekaman Video</h3>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border-2 border-teal-400/50 text-center hover:bg-white/20 transition-all">
                <div className="flex justify-center mb-2">
                  <div className="bg-teal-500 p-3 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-white font-bold text-sm leading-tight">Join Grup Eksklusif Peneliti</h3>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t-2 border-dashed border-teal-400 my-6"></div>

          {/* BONUS SPESIAL Section */}
          <div>
            <div className="text-center mb-4">
              <span className="inline-block bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-black uppercase tracking-wide shadow-lg">
                BONUS SPESIAL
              </span>
            </div>

            <div className="text-center mb-5 bg-orange-500/20 backdrop-blur-sm rounded-xl py-3 border-2 border-dashed border-orange-400">
              <span className="text-yellow-300 font-black text-2xl md:text-3xl">Senilai Rp 799.000</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border-2 border-orange-400/50 text-center hover:bg-white/20 transition-all">
                <div className="flex justify-center mb-2">
                  <div className="bg-orange-500 p-3 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-white font-bold text-sm leading-tight">Ebook Materi Prompting untuk Penulisan Karya Ilmiah</h3>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border-2 border-orange-400/50 text-center hover:bg-white/20 transition-all">
                <div className="flex justify-center mb-2">
                  <div className="bg-orange-500 p-3 rounded-full">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-white font-bold text-sm leading-tight">Akun Pro NotebookLM</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
