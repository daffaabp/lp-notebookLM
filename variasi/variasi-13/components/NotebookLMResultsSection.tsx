import React, { useEffect, useRef, useState } from 'react';

const NotebookLMResultsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [brokenImages, setBrokenImages] = useState<Record<number, boolean>>({});
  const resumeTimeoutRef = useRef<number | null>(null);
  const touchStartXRef = useRef<number | null>(null);
  const touchDeltaXRef = useRef(0);
  
  // 9 fitur utama NotebookLM berdasarkan gambar
  const features = [
    {
      name: 'Ringkasan Audio',
      description: 'Dengarkan ringkasan dokumen dalam format audio sambil beraktivitas.',
      image: '/result/audio-overview.avif'
    },
    {
      name: 'Ringkasan Video',
      description: 'Ubah dokumen kompleks menjadi video explainer yang mudah dipahami.',
      image: '/result/video-overview.avif'
    },
    {
      name: 'Peta Pikiran',
      description: 'Visualisasikan hubungan antar konsep dengan mind map interaktif.',
      image: '/result/mind-map.avif'
    },
    {
      name: 'Laporan Otomatis',
      description: 'Generate laporan profesional otomatis dari berbagai sumber dokumen.',
      image: '/result/reports.avif'
    },
    {
      name: 'Kartu Flash',
      description: 'Buat kartu flashcard untuk pembelajaran efektif dan menghafal konsep.',
      image: '/result/flashcards.avif'
    },
    {
      name: 'Kuis Interaktif',
      description: 'Uji pemahaman dengan kuis interaktif yang di-generate otomatis.',
      image: '/result/quiz.avif'
    },
    {
      name: 'Infografik',
      description: 'Transform data kompleks menjadi infografik menarik dan mudah dipahami.',
      image: '/result/infographic.avif'
    },
    {
      name: 'Presentasi Slide',
      description: 'Buat slide presentasi profesional dengan sitasi sumber yang akurat.',
      image: '/result/slide-deck.avif'
    },
    {
      name: 'Tabel Data',
      description: 'Ekstrak dan organisasi data dalam format tabel yang rapi.',
      image: '/result/data-table.avif'
    }
  ];

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 5500); // Auto-slide every ~5.5 seconds (lebih nyaman dibaca)

    return () => clearInterval(interval);
  }, [features.length, isPaused]);

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) window.clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  const pauseTemporarily = (ms = 9000) => {
    setIsPaused(true);
    if (resumeTimeoutRef.current) window.clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = window.setTimeout(() => setIsPaused(false), ms);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    pauseTemporarily();
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
    pauseTemporarily();
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
    pauseTemporarily();
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Hasil Sekeren Ini yang Bisa Anda Dapatkan dengan NotebookLM
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dari ratusan halaman dokumen menjadi berbagai format output profesional—semua dalam sekali klik, dengan akurasi 100% berbasis sumber Anda.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          <div
            className="relative overflow-hidden rounded-2xl shadow-2xl bg-white"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Features Container */}
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              onTouchStart={(e) => {
                pauseTemporarily(12000);
                touchStartXRef.current = e.touches[0]?.clientX ?? null;
                touchDeltaXRef.current = 0;
              }}
              onTouchMove={(e) => {
                if (touchStartXRef.current == null) return;
                const x = e.touches[0]?.clientX ?? touchStartXRef.current;
                touchDeltaXRef.current = x - touchStartXRef.current;
              }}
              onTouchEnd={() => {
                const delta = touchDeltaXRef.current;
                touchStartXRef.current = null;
                touchDeltaXRef.current = 0;
                // threshold swipe
                if (Math.abs(delta) < 45) return;
                if (delta > 0) goToPrevious();
                else goToNext();
              }}
            >
            {features.map((feature, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0"
              >
                <div className="max-w-4xl mx-auto">
                  {/* Image Container - Full width tanpa rounded */}
                  <div className="relative overflow-hidden bg-slate-100">
                    {brokenImages[index] ? (
                      <div className="w-full aspect-video bg-slate-100"></div>
                    ) : (
                      <img
                        src={feature.image}
                        alt={feature.name}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                        onError={() => {
                          setBrokenImages((prev) => ({ ...prev, [index]: true }));
                        }}
                      />
                    )}
                  </div>

                  {/* Content - Badge dan Nama sejajar dengan padding */}
                  <div className="mt-6 px-6 md:px-8 text-center pb-8">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                        Fitur #{index + 1}
                      </span>
                      <h3 className="text-lg md:text-xl font-black text-slate-900">
                        {feature.name}
                      </h3>
                    </div>
                    <p className="text-slate-600 text-base md:text-base max-w-2xl mx-auto">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows - Turunkan lagi sedikit */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 md:left-4 top-[55%] -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-xl transition-all hover:scale-110 z-20 border-2 border-gray-200 hover:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-200"
            aria-label="Previous feature"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 md:right-4 top-[55%] -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-xl transition-all hover:scale-110 z-20 border-2 border-gray-200 hover:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-200"
            aria-label="Next feature"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicator Dots (seamless like variasi-03) */}
        <div className="flex justify-center gap-2 mt-6">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'bg-blue-600 w-8 h-3'
                  : 'bg-slate-300 w-3 h-3 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation chips (no big boxes) */}
        <div className="max-w-4xl mx-auto mt-4">
          <p className="text-xs text-gray-500 mt-2 text-center">
            Tips: tekan tombol panah di kiri/kanan untuk pindah fitur.
          </p>
        </div>
        </div>
      </div>
    </section>
  );
};

export default NotebookLMResultsSection;

