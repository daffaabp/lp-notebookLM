import React from 'react';
import { BookOpen, Activity, Mic } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-16 container mx-auto px-4">
      <div className="bg-red-50 p-8 rounded-2xl border-l-8 border-primary mb-12 shadow-sm">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Dilema Ibu Rumah Tangga Modern 2025
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Pusing menjelaskan materi sekolah anak yang semakin susah? Bingung menyimpan riwayat kesehatan keluarga yang berantakan di berbagai rumah sakit? Atau lelah harus membaca berlembar-lembar petunjuk rumah tangga? Ibu tidak sendirian. Kelebihan informasi (<em>information overload</em>) sering membuat kita stres dan kehilangan waktu berharga bersama keluarga.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Results Card */}
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center">
            <span className="text-2xl mr-2">✨</span> Hasil Akhir yang Ibu Dapatkan
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <BookOpen className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
              <span>
                <strong>Guru Privat di Rumah:</strong> Sederhanakan buku cetak anak yang tebal menjadi penjelasan mudah hanya dalam hitungan detik.
              </span>
            </li>
            <li className="flex items-start">
              <Activity className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
              <span>
                <strong>Arsip Kesehatan Pintar:</strong> Gabungkan hasil lab dan catatan dokter keluarga untuk deteksi pola kesehatan secara cepat.
              </span>
            </li>
            <li className="flex items-start">
              <Mic className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
              <span>
                <strong>Podcast Sambil Masak:</strong> Ubah materi belajar atau resep panjang menjadi diskusi audio yang asik didengar sambil melakukan pekerjaan rumah.
              </span>
            </li>
          </ul>
        </div>

        {/* Solution Card */}
        <div className="bg-secondary text-white p-8 rounded-2xl shadow-lg transform md:scale-105 transition-transform">
          <h3 className="text-xl font-bold mb-6 flex items-center">
            <span className="text-2xl mr-2">💡</span> Solusinya: NotebookLM
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            NotebookLM adalah alat gratis dari Google yang bertindak seperti "otak kedua".
          </p>
          <p className="text-lg leading-relaxed">
            Ibu cukup unggah foto tugas anak atau dokumen kesehatan, dan AI ini akan menjawab semua pertanyaan Ibu berdasarkan sumber tersebut secara akurat.
          </p>
          <div className="mt-8 text-center">
             <div className="inline-block bg-white/20 backdrop-blur-md rounded-lg px-4 py-2 border border-white/30 text-sm">
                Gratis & Mudah Digunakan
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;