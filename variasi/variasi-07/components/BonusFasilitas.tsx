import React from 'react';

export const BonusFasilitas: React.FC = () => {
  return (
    <section className="py-8 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-emerald-900 to-emerald-800 rounded-3xl p-6 md:p-8 border-4 border-yellow-400 shadow-2xl">
          
          {/* FASILITAS Section */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 flex-1 bg-emerald-400"></div>
              <span className="bg-emerald-700 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase">FASILITAS</span>
              <div className="h-1 flex-1 bg-emerald-400"></div>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2.5 rounded-full border-2 border-emerald-400/50 hover:border-yellow-400 transition-all">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <span className="text-white font-bold text-sm">E-Sertifikat 12 JP</span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm px-4 py-2.5 rounded-full border-2 border-emerald-400/50 hover:border-yellow-400 transition-all">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-white font-bold text-sm">Grup Eksklusif</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="h-px flex-1 bg-yellow-400"></div>
            <div className="text-yellow-300 font-black text-lg">Rp 799.000</div>
            <div className="h-px flex-1 bg-yellow-400"></div>
          </div>

          {/* BONUS SPESIAL Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 flex-1 bg-yellow-400"></div>
              <span className="bg-yellow-500 text-emerald-950 px-4 py-1.5 rounded-full text-xs font-black uppercase">BONUS SPESIAL</span>
              <div className="h-1 flex-1 bg-yellow-400"></div>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2.5 rounded-full border-2 border-yellow-400/50 hover:border-yellow-300 transition-all">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span className="text-white font-bold text-sm">Ebook Prompting</span>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm px-4 py-2.5 rounded-full border-2 border-yellow-400/50 hover:border-yellow-300 transition-all">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  <span className="text-white font-bold text-sm">NotebookLM Pro</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
