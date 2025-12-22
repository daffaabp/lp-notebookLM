import React from 'react';

export const BonusFasilitas: React.FC = () => {
  return (
    <section className="py-6 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="bg-slate-800 rounded-2xl p-5 md:p-6 border-2 border-dashed border-orange-400">
          
          {/* FASILITAS Section */}
          <div className="mb-5">
            <div className="inline-flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-full mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-bold text-sm uppercase tracking-wide">FASILITAS</span>
            </div>

            <div className="space-y-3">
              {/* E-Sertifikat 12 JP dan Rekaman Video */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-base mb-1">E-Sertifikat 12 JP dan Rekaman Video</h3>
                  <p className="text-slate-300 text-sm">Dapatkan sertifikat resmi dan akses rekaman selamanya.</p>
                </div>
              </div>

              {/* Join Grup Eksklusif Peneliti */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-base mb-1">Join Grup Eksklusif Peneliti</h3>
                  <p className="text-slate-300 text-sm">Akses komunitas eksklusif untuk berbagi dan belajar bersama.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-dashed border-orange-400 my-5"></div>

          {/* BONUS SPESIAL Section */}
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-700 text-white px-4 py-2 rounded-full mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
              <span className="font-bold text-sm uppercase tracking-wide">BONUS SPESIAL</span>
            </div>

            {/* Value Proposition */}
            <div className="text-center mb-4">
              <span className="text-yellow-400 font-black text-xl md:text-2xl">Senilai Rp 799.000</span>
            </div>

            <div className="space-y-3">
              {/* Ebook Materi Prompting untuk Penulisan Karya Ilmiah */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-base mb-1">Ebook Materi Prompting untuk Penulisan Karya Ilmiah</h3>
                  <p className="text-slate-300 text-sm">Panduan lengkap teknik prompting untuk penelitian dan penulisan ilmiah.</p>
                </div>
              </div>

              {/* Akun Pro NotebookLM 1 bulan */}
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-base mb-1">Akun Pro NotebookLM 1 Bulan</h3>
                  <p className="text-slate-300 text-sm">Akses fitur premium NotebookLM selama 1 bulan penuh.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

