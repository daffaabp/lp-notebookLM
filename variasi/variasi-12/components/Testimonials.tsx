<<<<<<< HEAD
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
=======
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [modalTouchStart, setModalTouchStart] = useState(0);
  const [modalTouchEnd, setModalTouchEnd] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const testimonials = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    src: `/testimonials/testimoni${i + 1}.avif`,
    alt: `Testimoni ${i + 1}`
  }));

  // Swipe detection
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  // Modal swipe handlers
  const onModalTouchStart = (e: React.TouchEvent) => {
    setModalTouchEnd(0);
    setModalTouchStart(e.targetTouches[0].clientX);
  };

  const onModalTouchMove = (e: React.TouchEvent) => {
    setModalTouchEnd(e.targetTouches[0].clientX);
  };

  const onModalTouchEnd = () => {
    if (!modalTouchStart || !modalTouchEnd) return;
    const distance = modalTouchStart - modalTouchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextModal();
    }
    if (isRightSwipe) {
      prevModal();
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const openModal = (index: number) => {
    setModalIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextModal = () => {
    setModalIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevModal = () => {
    setModalIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Keyboard navigation for modal
  useEffect(() => {
    if (!isModalOpen) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevModal();
      if (e.key === 'ArrowRight') nextModal();
      if (e.key === 'Escape') closeModal();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-5 text-gray-900">
          Apa Kata Alumni Kami?
        </h2>
        <p className="text-lg text-center text-gray-700 mb-10 max-w-3xl mx-auto">
          Puluhan Ibu rumah tangga, dosen, dan profesional telah merasakan manfaat dari kelas ini. <span className="text-primary font-semibold">Simak kisah nyata dan hasil belajar mereka berikut!</span>
        </p>

        {/* Slider Container */}
        <div className="relative">
          <div
            ref={sliderRef}
            className="relative overflow-hidden rounded-2xl bg-gray-200 shadow-lg"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Main Image */}
            <div className="relative aspect-[4/3] md:aspect-[16/10]">
              <img
                src={testimonials[currentIndex].src}
                alt={testimonials[currentIndex].alt}
                className="w-full h-full object-contain cursor-pointer transition-opacity duration-300"
                onClick={() => openModal(currentIndex)}
              />
              
              {/* Zoom Icon Overlay */}
              <div
                className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg cursor-pointer transition-all duration-200 hover:scale-110"
                onClick={() => openModal(currentIndex)}
              >
                <Maximize2 className="w-5 h-5 text-gray-700" />
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 z-10"
                aria-label="Previous"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 z-10"
                aria-label="Next"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="mt-6 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  index === currentIndex
                    ? 'border-primary shadow-md scale-105'
                    : 'border-gray-200 hover:border-gray-300 opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={testimonial.src}
                  alt={testimonial.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Slide Counter */}
          <div className="mt-4 text-center text-sm text-gray-500">
            {currentIndex + 1} / {testimonials.length}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          <div
            className="relative max-w-7xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onModalTouchStart}
            onTouchMove={onModalTouchMove}
            onTouchEnd={onModalTouchEnd}
          >
            <img
              src={testimonials[modalIndex].src}
              alt={testimonials[modalIndex].alt}
              className="w-full h-full object-contain max-h-[90vh]"
            />

            {/* Modal Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevModal();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white transition-all duration-200"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextModal();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white transition-all duration-200"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
              {modalIndex + 1} / {testimonials.length}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
>>>>>>> f59101d12568799a1c02434766eccfd7a7cc03ba
    </section>
  );
};

<<<<<<< HEAD
export default Testimonials;
=======
export default Testimonials;
>>>>>>> f59101d12568799a1c02434766eccfd7a7cc03ba
