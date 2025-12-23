import React, { useState, useRef } from 'react';

const NotebookLMResults: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const results = [
    {
      image: '/results/desain-canvas.avif',
      title: 'Visualisasi Materi Belajar yang Menarik',
      description: 'Buat visualisasi materi pelajaran anak yang menarik dan mudah dipahami. Transformasikan buku tebal menjadi desain visual yang memukau untuk membantu anak lebih cepat memahami pelajaran.',
      icon: 'fas fa-palette'
    },
    {
      image: '/results/mind-map.avif',
      title: 'Mind Map Belajar Interaktif',
      description: 'Buat mind map belajar yang interaktif untuk membantu anak memahami konsep pelajaran dengan lebih mudah. Lihat bagaimana ide-ide saling terhubung dan temukan cara belajar yang lebih efektif dalam hitungan menit.',
      icon: 'fas fa-project-diagram'
    },
    {
      image: '/results/ppt.avif',
      title: 'Slide Presentasi Belajar Otomatis',
      description: 'Generate slide presentasi belajar profesional langsung dari materi anak Anda. Tidak perlu lagi menghabiskan waktu berjam-jam untuk membuat slide—NotebookLM melakukannya untuk Anda dengan penjelasan yang mudah dipahami.',
      icon: 'fas fa-presentation'
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

  const maxIndex = results.length - 1;

  return (
    <section className="py-20 md:py-32 px-4 bg-gradient-to-br from-cream to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-dark mb-6 leading-tight">
            Ini Loh, Sekeren Ini Hasil yang Bisa Ibu Buat! ✨
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Percaya deh, kalau Ibu coba bikin sendiri hasilnya ga bakal sebagus ini. Hasil keren NotebookLM ini cukup <span className="font-bold text-primary">dalam hitungan menit</span>, bukan jam.
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
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100 hover:border-primary transition-all duration-300 hover:shadow-2xl group max-w-2xl mx-auto">
                    {/* Image Container */}
                    <div className="relative overflow-hidden bg-gray-50">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                      <img 
                        src={result.image}
                        alt={result.title}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Badge */}
                      <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full shadow-lg">
                        <i className={`${result.icon} mr-2`}></i>
                        <span className="font-bold text-sm">{result.title}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8">
                      <div className="text-center">
                        <h3 className="text-xl md:text-2xl font-bold text-dark mb-3">
                          {result.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
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
            className="absolute left-2 md:left-4 top-[35%] -translate-y-1/2 bg-white/90 hover:bg-white text-primary p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10 border-2 border-primary/30 hover:border-primary"
            aria-label="Previous slide"
          >
            <i className="fas fa-chevron-left text-xl"></i>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 md:right-4 top-[35%] -translate-y-1/2 bg-white/90 hover:bg-white text-primary p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10 border-2 border-primary/30 hover:border-primary"
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
                    ? 'bg-primary w-8 h-3'
                    : 'bg-gray-300 w-3 h-3 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-4 text-gray-600 text-sm font-semibold">
            <span className="text-primary">{currentIndex + 1}</span> / <span className="hidden md:inline">{maxIndex + 1}</span><span className="md:hidden">{results.length}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotebookLMResults;

