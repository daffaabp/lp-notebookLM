import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface Props {
  onBack: () => void;
}

export const TermsOfService: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
        <button onClick={onBack} className="flex items-center text-orange-600 font-bold mb-8 hover:underline">
          <ArrowLeft size={20} className="mr-2" /> Kembali ke Beranda
        </button>
        
        <h1 className="text-3xl font-black mb-8 text-slate-900">Syarat dan Ketentuan</h1>
        
        <div className="prose prose-slate max-w-none text-slate-600">
          <p className="mb-4">Terakhir diperbarui: Desember 2025</p>
          
          <h3 className="text-xl font-bold text-slate-800 mt-6 mb-2">1. Pendaftaran & Pembayaran</h3>
          <p className="mb-4">
            Dengan mendaftar webinar Masterclass NotebookLM, Anda setuju untuk membayar biaya pendaftaran sebesar Rp 129.000. Pembayaran bersifat final, kecuali dalam kondisi yang tercakup dalam Garansi Uang Kembali kami.
          </p>

          <h3 className="text-xl font-bold text-slate-800 mt-6 mb-2">2. Garansi Uang Kembali</h3>
          <p className="mb-4">
            Kami memberikan garansi uang kembali 100% jika Anda merasa webinar tidak memberikan manfaat dalam 60 menit pertama sesi berlangsung. Klaim setelah acara selesai tidak berlaku.
          </p>

          <h3 className="text-xl font-bold text-slate-800 mt-6 mb-2">3. Hak Kekayaan Intelektual</h3>
          <p className="mb-4">
            Seluruh materi yang dibagikan dalam webinar ini adalah hak cipta Kelas Inovatif. Anda diperbolehkan menggunakan materi untuk kepentingan pribadi atau internal kantor, namun dilarang keras menjual kembali atau mendistribusikan materi tersebut kepada publik tanpa izin tertulis.
          </p>

          <h3 className="text-xl font-bold text-slate-800 mt-6 mb-2">4. Perubahan Jadwal</h3>
          <p className="mb-4">
            Kelas Inovatif berhak mengubah jadwal webinar jika terjadi keadaan kahar (force majeure). Peserta akan diberitahukan minimal 24 jam sebelum acara jika ada perubahan.
          </p>
        </div>
         <div className="mt-12 pt-8 border-t border-slate-200 text-center">
            <p className="text-sm text-slate-500">Kelas Inovatif - Platform Edukasi AI Akademik Indonesia</p>
        </div>
      </div>
    </div>
  );
};