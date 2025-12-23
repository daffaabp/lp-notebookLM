import React from 'react';
import { AlertTriangle, FileWarning, Unlock } from 'lucide-react';

const Problem: React.FC = () => {
  return (
    <section className="bg-white py-16 border-b-4 border-gold-500">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-legal-900 mb-6">
              Tantangan Praktisi Hukum Modern
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Praktisi hukum sering kali tenggelam dalam tumpukan berkas perkara, korespondensi WhatsApp, dan ribuan email. 
              Menggunakan AI umum berisiko tinggi karena fenomena <strong className="text-red-600 bg-red-50 px-1 rounded">"halusinasi"</strong> yang bisa merusak kredibilitas argumen Anda di persidangan.
            </p>
          </div>

          <div className="flex-1 bg-bg-light p-8 rounded-xl border border-gray-200 shadow-sm w-full">
            <h3 className="text-2xl font-serif font-bold text-gold-600 mb-6">
              Apakah Anda Mengalami Ini?
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FileWarning className="w-6 h-6 text-legal-900 shrink-0 mt-1" />
                <span className="text-gray-700">Sulit menemukan bukti kunci dalam ribuan halaman dokumen.</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-legal-900 shrink-0 mt-1" />
                <span className="text-gray-700">Gagal mendeteksi ketidakkonsistenan fakta antar BAP.</span>
              </li>
              <li className="flex items-start gap-3">
                <Unlock className="w-6 h-6 text-legal-900 shrink-0 mt-1" />
                <span className="text-gray-700">Khawatir data klien bocor jika menggunakan alat AI gratisan.</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Problem;