import React from 'react';
import { GRADIENT_CLASS } from '../constants';

export const BonusFasilitas: React.FC = () => {
  return (
    <section className="py-8 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className={`${GRADIENT_CLASS} rounded-3xl p-6 md:p-8 border-4 border-dashed border-purple-400 shadow-2xl`}>
          
          {/* FASILITAS Section */}
          <div className="mb-6">
            <h2 className="text-white font-black text-xl mb-4 text-center uppercase tracking-wide">FASILITAS</h2>
            
            <div className="space-y-2">
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-3 rounded-lg border-l-4 border-purple-400">
                <svg className="w-5 h-5 text-purple-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-white font-bold text-base">E-Sertifikat 12 JP dan Rekaman Video</h3>
              </div>

              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-3 rounded-lg border-l-4 border-purple-400">
                <svg className="w-5 h-5 text-purple-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-white font-bold text-base">Join Grup Eksklusif Peneliti</h3>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t-2 border-dashed border-purple-400 my-6"></div>

          {/* BONUS SPESIAL Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-white font-black text-xl uppercase tracking-wide">BONUS SPESIAL</h2>
              <span className="text-yellow-300 font-black text-xl md:text-2xl">Rp 799.000</span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-3 rounded-lg border-l-4 border-orange-400">
                <svg className="w-5 h-5 text-orange-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-white font-bold text-base">Ebook Materi Prompting untuk Penulisan Karya Ilmiah</h3>
              </div>

              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-3 rounded-lg border-l-4 border-orange-400">
                <svg className="w-5 h-5 text-orange-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-white font-bold text-base">Akun Pro NotebookLM 1 Bulan</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
