import React from 'react';
import { AcademicCapIcon, BriefcaseIcon, VideoCameraIcon, PenIcon, ScaleIcon, BulbIcon } from './Icons';

const audiences = [
  {
    icon: AcademicCapIcon,
    title: "Mahasiswa & Akademisi",
    desc: "Percepat pengerjaan skripsi, tesis, dan tinjauan literatur (literature review) tanpa pusing membaca ribuan halaman jurnal satu per satu.",
    accent: "text-blue-600 bg-blue-50"
  },
  {
    icon: BriefcaseIcon,
    title: "Profesional & Bisnis",
    desc: "Ubah notulen rapat, laporan tahunan, dan SOP perusahaan menjadi ringkasan eksekutif instan untuk pengambilan keputusan cepat.",
    accent: "text-indigo-600 bg-indigo-50"
  },
  {
    icon: VideoCameraIcon,
    title: "Content Creator",
    desc: "Riset ide konten lebih dalam dari video YouTube panjang atau buku best-seller, dan temukan angle menarik dalam hitungan detik.",
    accent: "text-red-600 bg-red-50"
  },
  {
    icon: ScaleIcon,
    title: "Legal & Finance",
    desc: "Analisa kontrak hukum yang rumit dan laporan keuangan tebal dengan akurasi tinggi, temukan pasal atau angka krusial otomatis.",
    accent: "text-slate-600 bg-slate-100"
  },
  {
    icon: PenIcon,
    title: "Penulis & Jurnalis",
    desc: "Organisir hasil wawancara, transkrip rekaman, dan referensi riset untuk tulisan artikel atau buku yang lebih berbobot.",
    accent: "text-green-600 bg-green-50"
  },
  {
    icon: BulbIcon,
    title: "Lifelong Learner",
    desc: "Kuasai topik baru (bahasa, sejarah, teknologi) dari berbagai sumber belajar yang Anda kumpulkan dengan jauh lebih efisien.",
    accent: "text-yellow-600 bg-yellow-50"
  }
];

const TargetAudienceSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden px-6">
       {/* Decorative blobs */}
       <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[128px] opacity-20 pointer-events-none"></div>
       <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-[128px] opacity-20 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Siapa yang Membutuhkan NotebookLM?</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            NotebookLM didesain fleksibel untuk siapa saja yang bekerja dengan informasi. Apapun profesi Anda, AI ini beradaptasi dengan kebutuhan Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((item, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-500 transition duration-300 hover:shadow-2xl hover:shadow-blue-900/20 group">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${item.accent}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold group-hover:text-blue-300 transition-colors">{item.title}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm italic">
                ...dan siapapun yang ingin mengubah "Tumpukan Data" menjadi "Pengetahuan Berharga".
            </p>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;