import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface Props {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
        <button onClick={onBack} className="flex items-center text-orange-600 font-bold mb-8 hover:underline">
          <ArrowLeft size={20} className="mr-2" /> Kembali ke Beranda
        </button>
        
        <h1 className="text-3xl font-black mb-8 text-slate-900">Kebijakan Privasi</h1>
        
        <div className="prose prose-slate max-w-none text-slate-600">
          <p className="mb-4">Terakhir diperbarui: Desember 2025</p>
          
          <h3 className="text-xl font-bold text-slate-800 mt-6 mb-2">1. Pendahuluan</h3>
          <p className="mb-4">
            Kelas Inovatif ("kami") menghargai privasi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat Anda mendaftar untuk webinar Masterclass NotebookLM.
          </p>

          <h3 className="text-xl font-bold text-slate-800 mt-6 mb-2">2. Informasi yang Kami Kumpulkan</h3>
          <p className="mb-4">
            Kami mengumpulkan informasi yang Anda berikan secara langsung kepada kami, seperti:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Nama Lengkap</li>
            <li>Alamat Email</li>
            <li>Nomor WhatsApp</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-800 mt-6 mb-2">3. Penggunaan Informasi</h3>
          <p className="mb-4">
            Kami menggunakan informasi tersebut untuk:
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Mengirimkan detail akses webinar (link Zoom).</li>
            <li>Mengirimkan materi, sertifikat, dan rekaman setelah acara.</li>
            <li>Menghubungi Anda melalui WhatsApp untuk pengingat acara.</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-800 mt-6 mb-2">4. Perlindungan Data</h3>
          <p className="mb-4">
            Kami tidak menjual, memperdagangkan, atau menyewakan informasi identitas pribadi Anda kepada pihak lain. Kami menerapkan langkah-langkah keamanan yang sesuai untuk melindungi data Anda.
          </p>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-200 text-center">
            <p className="text-sm text-slate-500">Kelas Inovatif - Platform Edukasi AI Akademik Indonesia</p>
        </div>
      </div>
    </div>
  );
};