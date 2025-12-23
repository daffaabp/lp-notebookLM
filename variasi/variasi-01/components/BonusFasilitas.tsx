import React from 'react';

const BonusFasilitas: React.FC = () => {
  return (
    <section className="py-8 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl p-4 md:p-6 border border-gray-200 shadow-xl">
          
          {/* FASILITAS Section */}
          <div className="mb-4">
            <div className="inline-flex items-center gap-1.5 bg-blue-600 text-white px-3 py-1 rounded-full mb-3">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-bold text-base md:text-sm">FASILITAS</span>
            </div>

            <div className="space-y-2">
              {/* E-Sertifikat 12 JP dan Rekaman Video */}
              <div className="bg-blue-50 rounded-full px-4 py-2.5 border border-blue-100 flex items-center gap-2.5 hover:bg-blue-100 transition-colors">
                <div className="bg-blue-500 rounded-full p-1.5 flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-gray-900 font-bold text-base md:text-sm flex-1">E-Sertifikat 12 JP dan Rekaman Video</h3>
              </div>

              {/* Join Grup Eksklusif Peneliti */}
              <div className="bg-blue-50 rounded-full px-4 py-2.5 border border-blue-100 flex items-center gap-2.5 hover:bg-blue-100 transition-colors">
                <div className="bg-blue-500 rounded-full p-1.5 flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-gray-900 font-bold text-base md:text-sm flex-1">Join Grup Eksklusif Peneliti</h3>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-dashed border-gray-300 my-4"></div>

          {/* BONUS SPESIAL Section */}
          <div>
            <div className="inline-flex items-center gap-1.5 bg-blue-800 text-white px-3 py-1 rounded-full mb-2">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <span className="font-bold text-base md:text-sm">BONUS SPESIAL</span>
            </div>

            {/* Value Proposition */}
            <div className="text-center mb-3">
              <span className="text-gray-600 text-base">Senilai </span>
              <span className="text-orange-600 font-extrabold text-xl md:text-2xl">Rp 799.000</span>
            </div>

            <div className="space-y-2 mb-4">
              {/* Ebook Materi Prompting untuk Penulisan Karya Ilmiah */}
              <div className="bg-blue-50 rounded-full px-4 py-2.5 border border-blue-100 flex items-center gap-2.5 hover:bg-blue-100 transition-colors">
                <div className="bg-blue-500 rounded-full p-1.5 flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-gray-900 font-bold text-base md:text-sm flex-1">Ebook Materi Prompting untuk Penulisan Karya Ilmiah</h3>
              </div>

              {/* Akun Pro NotebookLM */}
              <div className="bg-blue-50 rounded-full px-4 py-2.5 border border-blue-100 flex items-center gap-2.5 hover:bg-blue-100 transition-colors">
                <div className="bg-blue-500 rounded-full p-1.5 flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-gray-900 font-bold text-base md:text-sm flex-1">Akun Pro NotebookLM</h3>
              </div>
            </div>

            {/* Money Back Guarantee */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-4 border-2 border-yellow-400">
              <div className="flex flex-col items-center">
                <img 
                  src="/assets/money back avif.avif" 
                  alt="Money Back Guarantee"
                  className="w-full max-w-[180px] md:max-w-[240px] h-auto object-contain mb-2"
                  style={{ display: 'block' }}
                />
                <h4 className="text-orange-700 font-bold text-sm md:text-base flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                  </svg>
                  Garansi Uang Kembali 100%
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusFasilitas;

