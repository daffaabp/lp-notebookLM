import React from 'react';
import { SearchIcon, StackIcon, PresentationIcon, PodcastIcon, TableIcon, ReportIcon } from './Icons';

const features = [
  {
    icon: SearchIcon,
    title: "Deep Research Mendalam",
    description: "Analisa ribuan halaman dari berbagai sumber (PDF, Web, YouTube) sekaligus dengan pemahaman konteks yang sangat dalam.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: StackIcon,
    title: "300 Dokumen → 1 Summary",
    description: "Mampu memproses hingga 50 sumber (total 25 juta kata) dan merangkum 300 dokumen menjadi satu kesimpulan utuh.",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: PresentationIcon,
    title: "Slide Presentasi Otomatis",
    description: "Hanya satu klik untuk mengubah hasil riset Anda menjadi draft slide presentasi yang terstruktur dan interaktif.",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: PodcastIcon,
    title: "Audio Overview (Podcast)",
    description: "Ekstrak poin penting menjadi diskusi audio 2 arah (podcast) yang menarik untuk didengarkan saat bepergian.",
    color: "bg-red-100 text-red-600"
  },
  {
    icon: TableIcon,
    title: "Kalkulasi & Tabel Data",
    description: "NotebookLM secara cerdas mengenali data angka dan menyajikannya dalam tabel perbandingan yang siap dianalisis.",
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: ReportIcon,
    title: "Report & Insight Generator",
    description: "Otomatisasi pembuatan Study Guide, Briefing Doc, Timeline, FAQ, hingga Kuis dari tumpukan materi Anda.",
    color: "bg-indigo-100 text-indigo-600"
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Asisten AI Cerdas untuk <br />Transformasi Dokumen Anda
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            NotebookLM bukan sekadar tempat menyimpan catatan. Ini adalah "Otak Kedua" yang aktif membantu Anda mengolah sumber menjadi ringkasan, insight, dan berbagai format output siap pakai.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white group">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${feature.color} group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;