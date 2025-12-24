import React from 'react';
import { CheckIcon } from './Icons';

const SolutionSection: React.FC = () => {
  return (
    <section className="py-20 bg-blue-50 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">NotebookLM: Solusi Riset Berbasis Sumber</h2>
          <p className="text-lg text-gray-700 leading-relaxed italic">
          Berbeda dengan ChatGPT yang "tahu segalanya dari internet", NotebookLM hanya bekerja berdasarkan dokumen yang <strong className="text-blue-700">ANDA</strong> berikan, menjamin akurasi mutlak melalui <strong>Source-Grounding</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Benefits List */}
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-8 text-gray-800 border-l-4 border-blue-600 pl-4">Manfaat Nyata yang Akan Anda Dapatkan:</h3>
            <ul className="space-y-6 text-lg">
              <li className="flex items-start">
                <div className="mt-1 mr-4 bg-green-100 p-1 rounded-full">
                    <CheckIcon className="w-5 h-5 text-green-600" />
                </div>
                <span>
                    <strong>Pekerjaan Riset Jadi Kilat:</strong> Tidak perlu lagi baca halaman demi halaman—cukup upload sumber Anda, jawaban lengkap siap dalam hitungan menit.
                </span>
              </li>
              <li className="flex items-start">
                <div className="mt-1 mr-4 bg-green-100 p-1 rounded-full">
                    <CheckIcon className="w-5 h-5 text-green-600" />
                </div>
                <span>
                    <strong>Jawaban Terverifikasi:</strong> Semua ringkasan & insight selalu dilengkapi referensi asli agar Anda mudah cross-check kebenarannya.
                </span>
              </li>
              <li className="flex items-start">
                <div className="mt-1 mr-4 bg-green-100 p-1 rounded-full">
                    <CheckIcon className="w-5 h-5 text-green-600" />
                </div>
                <span>
                    <strong>Hasil Fleksibel Sesuai Kebutuhan:</strong> Satu klik bisa langsung dapat infografis, podcast, atau slide yang siap digunakan untuk presentasi, tugas, atau konten.
                </span>
              </li>
            </ul>
          </div>

          {/* Pricing Card */}
          <div className="order-1 md:order-2 bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 transform md:rotate-1 hover:rotate-0 transition-transform duration-300 relative overflow-hidden">
             <div className="absolute top-0 right-0 bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-bl-lg">
                LIMITED OFFER
             </div>
            <p className="text-center font-bold text-gray-400 uppercase tracking-[0.2em] mb-4 text-sm">Investasi Ilmu</p>
            <div className="text-center">
              <span className="line-through text-2xl font-bold text-red-400 decoration-red-400/50">Rp 499.000</span>
              <div className="text-5xl md:text-6xl font-extrabold text-blue-700 my-4 tracking-tight">Rp 129.000</div>
              <p className="text-sm text-gray-500 mb-8 bg-gray-100 py-2 rounded-lg mx-auto w-fit px-4">
                🔥 Hanya berlaku hingga kuota Zoom terpenuhi.
              </p>
              <a 
                href="#register" 
                className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition-colors shadow-lg text-lg"
              >
                Amankan Kursi Saya
              </a>
            </div>
            <div className="mt-6 text-center text-xs text-gray-400">
               *Akses rekaman tersedia selamanya
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;