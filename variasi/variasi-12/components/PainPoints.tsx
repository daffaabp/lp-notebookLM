import React from 'react';
import { BookOpen, Search, Brain, Clock } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { PainPoint } from '../types';

const painPointsData: PainPoint[] = [
  {
    icon: BookOpen,
    title: "Information Overload",
    description: "Menghabiskan rata-rata 2,5 jam per hari hanya untuk mencari informasi yang pernah Anda baca namun lupa lokasinya."
  },
  {
    icon: Search,
    title: "Sulit Menemukan Celah Riset",
    description: "Gagal mengidentifikasi kontradiksi antar penulis karena jumlah literatur yang tidak manusiawi untuk dibaca manual."
  },
  {
    icon: Brain,
    title: "Ketakutan Halusinasi AI",
    description: "Ragu menggunakan AI umum (seperti ChatGPT) yang memiliki tingkat kesalahan data hingga 40% jika tidak diprompt dengan benar."
  },
  {
    icon: Clock,
    title: "Deadline yang Mencekik",
    description: "Fase riset satu bab yang biasanya memakan 15 jam, kini bisa dipangkas menjadi hitungan menit. Jangan biarkan waktu habis."
  }
];

const PainPoints: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>Mengapa Menyusun Tesis atau Disertasi Terasa Begitu Berat?</SectionTitle>
          
          <div className="grid md:grid-cols-2 gap-8">
            {painPointsData.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col items-start">
                <div className="p-3 bg-blue-50 rounded-lg mb-6">
                  <item.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;