import React, { useState, useRef, useEffect } from 'react';

const NotebookLMResults: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const results = [
    {
      image: '/result/mindmap2.avif',
      title: 'Mind Map Interaktif',
      description: 'Visualisasi konsep penelitian dalam bentuk mind map yang mudah dipahami. Lihat bagaimana ide-ide saling terhubung dan temukan insight tersembunyi dari ribuan jurnal dalam hitungan menit.',
      icon: 'fas fa-project-diagram'
    },
    {
      image: '/result/design-canvas.avif',
      title: 'Design Canvas Kreatif',
      description: 'Buat visualisasi penelitian yang menarik dan profesional. Transformasikan data kompleks menjadi desain yang memukau untuk presentasi atau publikasi Anda.',
      icon: 'fas fa-palette'
    },
    {
      image: '/result/slide-presentasi.avif',
      title: 'Slide Presentasi Otomatis',
      description: 'Generate slide presentasi profesional langsung dari penelitian Anda. Tidak perlu lagi menghabiskan waktu berjam-jam untuk membuat slide—NotebookLM melakukannya untuk Anda.',
      icon: 'fas fa-presentation'
    },
    {
      image: '/result/table.avif',
      title: 'Tabel Analisis Komprehensif',
      description: 'Ekstrak dan analisis data dari berbagai sumber menjadi tabel yang terstruktur. Bandingkan temuan, identifikasi pola, dan buat keputusan berbasis data dengan lebih mudah.',
      icon: 'fas fa-table'
    }
  ];

  // Handle touch events for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      // Swipe left - go to next (loop to 0 if at end)
      setCurrentIndex((prev) => (prev >= results.length - 1 ? 0 : prev + 1));
    }
    if (isRightSwipe) {
      // Swipe right - go to previous (loop to last if at start)
      setCurrentIndex((prev) => (prev === 0 ? results.length - 1 : prev - 1));
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        return results.length - 1;
      }
      return prev - 1;
    });
  };

  const goToNext = () => {
    setCurrentIndex((prev) => {
      if (prev >= results.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  };

  // Calculate max index based on screen size (1 card mobile, 2 cards desktop)
  const maxIndex = results.length - 1;


  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-teal-900 mb-6 uppercase leading-tight">
            Ini Loh, Sekeren Ini Hasil yang Bisa Anda Buat!
          </h2>
          <p className="text-lg md:text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
            Percaya deh, kalau kamu coba bikin sendiri hasilnya ga bakal sebagus ini. Hasil keren NotebookLM ini cukup <span className="font-bold text-teal-700">dalam hitungan menit</span>, bukan jam.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Carousel Wrapper */}
          <div 
            ref={carouselRef}
            className="relative overflow-hidden rounded-2xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * 100}%)` 
              }}
            >
              {results.map((result, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 px-2 md:px-4"
                >
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-slate-100 hover:border-teal-300 transition-all duration-300 hover:shadow-2xl group max-w-2xl mx-auto">
                    {/* Image Container */}
                    <div className="relative overflow-hidden bg-slate-100">
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                      <img 
                        src={result.image}
                        alt={result.title}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Badge */}
                      <div className="absolute top-4 right-4 bg-teal-600 text-white px-4 py-2 rounded-full shadow-lg">
                        <i className={`${result.icon} mr-2`}></i>
                        <span className="font-bold text-sm">{result.title}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8">
                      <div className="text-center">
                        <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3">
                          {result.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                          {result.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 md:left-4 top-[35%] -translate-y-1/2 bg-white/90 hover:bg-white text-teal-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10 border-2 border-teal-200 hover:border-teal-400"
            aria-label="Previous slide"
          >
            <i className="fas fa-chevron-left text-xl"></i>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 md:right-4 top-[35%] -translate-y-1/2 bg-white/90 hover:bg-white text-teal-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10 border-2 border-teal-200 hover:border-teal-400"
            aria-label="Next slide"
          >
            <i className="fas fa-chevron-right text-xl"></i>
          </button>

          {/* Indicator Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {results.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'bg-teal-600 w-8 h-3'
                    : 'bg-slate-300 w-3 h-3 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-4 text-slate-600 text-sm font-semibold">
            <span className="text-teal-600">{currentIndex + 1}</span> / <span className="hidden md:inline">{maxIndex + 1}</span><span className="md:hidden">{results.length}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotebookLMResults;

