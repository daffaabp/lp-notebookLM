import React from 'react';
import SectionTitle from './SectionTitle';
import { Testimonial } from '../types';

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    content: "NotebookLM memotong waktu persiapan ujian dan belajar saya jadi setengahnya. Jujur, ini hacks pendidikan terbaik!",
    author: "Budi",
    role: "Mahasiswa S3 Manajemen"
  },
  {
    id: 2,
    content: "Sangat terbantu untuk menganalisis dokumen hukum yang panjang. Sitasi sebarisnya membuat saya tenang saat menulis.",
    author: "Siti",
    role: "Mahasiswa Pascasarjana Hukum"
  },
  {
    id: 3,
    content: "Akhirnya riset saya tidak menjadi 'lubang kelinci'. Saya bisa melihat big picture dan detail kecil sekaligus.",
    author: "Ani",
    role: "Peneliti Akademik"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionTitle>Apa Kata Rekan Peneliti Anda?</SectionTitle>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <div key={item.id} className="p-8 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col h-full">
              <div className="flex-grow">
                <div className="text-orange-400 text-4xl font-serif mb-4">“</div>
                <p className="text-gray-700 italic leading-relaxed mb-6">
                  {item.content}
                </p>
              </div>
              <div className="mt-auto border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-900">{item.author}</p>
                <p className="text-sm text-blue-600">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;