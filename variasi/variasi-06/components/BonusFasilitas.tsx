import React from 'react';

export const BonusFasilitas: React.FC = () => {
  return (
    <section className="py-8 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-pink-700 to-[#be185d] rounded-3xl p-6 md:p-8 border-4 border-pink-400 shadow-2xl">
          
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-pink-500 text-white px-5 py-2 rounded-full mb-2 shadow-lg">
              <span className="font-black text-sm uppercase tracking-wide">FASILITAS & BONUS</span>
            </div>
            <div className="text-yellow-200 font-black text-2xl md:text-3xl mt-3">Senilai Rp 799.000</div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-white/15 backdrop-blur-sm p-3 rounded-xl border-2 border-pink-300/50 text-center hover:bg-white/25 transition-all">
              <div className="bg-pink-500 p-2 rounded-lg inline-block mb-2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-white font-black text-xs leading-tight">E-Sertifikat 12 JP</h3>
            </div>

            <div className="bg-white/15 backdrop-blur-sm p-3 rounded-xl border-2 border-pink-300/50 text-center hover:bg-white/25 transition-all">
              <div className="bg-pink-500 p-2 rounded-lg inline-block mb-2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-white font-black text-xs leading-tight">Grup Eksklusif</h3>
            </div>

            <div className="bg-white/15 backdrop-blur-sm p-3 rounded-xl border-2 border-orange-300/50 text-center hover:bg-white/25 transition-all">
              <div className="bg-orange-500 p-2 rounded-lg inline-block mb-2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-white font-black text-xs leading-tight">Ebook Prompting</h3>
            </div>

            <div className="bg-white/15 backdrop-blur-sm p-3 rounded-xl border-2 border-orange-300/50 text-center hover:bg-white/25 transition-all">
              <div className="bg-orange-500 p-2 rounded-lg inline-block mb-2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-white font-black text-xs leading-tight">NotebookLM Pro</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
