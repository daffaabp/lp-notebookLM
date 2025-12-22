import React, { useState, useEffect } from 'react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Saya mengunggah 11 tahun hasil tes darah dan catatan medis. Podcast yang dihasilkan sangat motivasional dan menarik. Saya bisa melihat perjalanan kesehatan saya dari perspektif pihak ketiga yang objektif.",
      author: "Peneliti Medis, Spesialis Bariatrik"
    },
    {
      id: 2,
      text: "Fitur kuis sangat luar biasa. Ia berhasil menemukan perbedaan halus antara model analisis ritme multimodal dalam teks riset saya yang bahkan tidak saya sadari sebelumnya.",
      author: "Pengajar Ilmu Matematika & Kedokteran"
    },
    {
      id: 3,
      text: "NotebookLM telah mengubah cara saya melakukan literature review. Dari yang biasanya memakan waktu berhari-hari, sekarang bisa selesai dalam hitungan jam. AI-nya sangat akurat dalam mengidentifikasi temuan kunci dari ratusan jurnal.",
      author: "Dokter Spesialis Kardiologi, Peneliti Klinis"
    },
    {
      id: 4,
      text: "Sebagai dosen yang harus mempersiapkan materi kuliah setiap minggu, NotebookLM membantu saya mengumpulkan dan menganalisis referensi dengan sangat cepat. Fitur summarization-nya sangat membantu untuk memahami inti dari paper-paper kompleks.",
      author: "Dosen Fakultas Kedokteran, Spesialis Neurologi"
    }
  ];

  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">Testimoni Rekan Sejawat</h2>
        
        {/* Slider Container */}
        <div 
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slides */}
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="min-w-full px-4"
              >
                <div className="p-10 bg-slate-50 rounded-3xl border-l-8 border-teal-500 italic shadow-lg hover:shadow-xl transition-shadow">
                  <p className="text-slate-700 text-lg mb-6">
                    "{testimonial.text}"
                  </p>
                  <p className="font-black text-teal-900">— {testimonial.author}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-teal-600 p-3 rounded-full shadow-lg transition-all hover:scale-110 z-10"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-teal-600 p-3 rounded-full shadow-lg transition-all hover:scale-110 z-10"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-teal-500 w-8'
                  : 'bg-teal-200 hover:bg-teal-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="text-center text-sm text-slate-500 mt-4">
          {currentIndex + 1} / {testimonials.length}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;