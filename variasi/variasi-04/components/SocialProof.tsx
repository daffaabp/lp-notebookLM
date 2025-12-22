import React, { useState, useEffect } from 'react';

const SocialProof: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "NotebookLM membantu tim kreatif kami beralih dari dokumentasi teknis yang membosankan ke perencanaan kreatif hanya dalam hitungan menit.",
      author: "Team Lead, Rivian Innovation Group"
    },
    {
      id: 2,
      text: "Gunakan untuk Client Prep. Sebelum meeting, AI membantu merangkum apa yang klien pedulikan dari semua histori data kami.",
      author: "Senior Business Analyst, Fintech Unicorn ID"
    },
    {
      id: 3,
      text: "Sebagai konsultan strategis, NotebookLM menghemat waktu analisis kompetitor kami dari 3 hari menjadi hanya 2 jam. ROI-nya luar biasa!",
      author: "Strategic Consultant, Digital Transformation Agency"
    },
    {
      id: 4,
      text: "Kami menggunakan NotebookLM untuk riset pasar dan analisis tren. Akurasi datanya sangat tinggi dan selalu ada citation yang bisa diverifikasi.",
      author: "Market Research Director, Tech Innovation Hub"
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
    <>
      {/* SPEAKER SECTION */}
      <section className="py-24 px-4 bg-slate-100">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-16">
              <div className="relative group">
                  <div className="absolute -inset-4 bg-blue-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
                  <img 
                    src="/speaker/arianto.avif" 
                    alt="M. Arianto - AI Engineer" 
                    className="relative rounded-3xl w-64 h-64 object-cover transition duration-500 shadow-2xl border-4 border-white"
                  />
              </div>
              <div className="text-center md:text-left">
                  <h3 className="text-3xl font-black text-slate-900 mb-2 uppercase">M. Arianto</h3>
                  <p className="text-blue-600 font-bold mb-6 text-lg tracking-widest">AI Engineer & Researcher</p>
                  <div className="relative">
                    <i className="fas fa-quote-left text-slate-300 text-4xl absolute -top-4 -left-6 z-0 opacity-50"></i>
                    <p className="text-slate-600 leading-relaxed italic text-lg relative z-10">
                        "Dengan pengalaman 10+ tahun dan 195+ proyek AI, saya siap membahas tips menguasai AI, teknik penulisan, dan research methodology sebagai AI Engineer, Researcher, dan Mentor profesional."
                    </p>
                  </div>
              </div>
          </div>
      </section>

      {/* TESTIMONIALS SLIDER */}
      <section className="py-8 md:py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 md:mb-16 text-slate-900">Testimoni Rekan Sejawat</h2>
          
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
                  className="min-w-full px-2 md:px-4"
                >
                  <div className="p-6 md:p-10 bg-slate-50 rounded-3xl border-l-8 border-teal-500 italic shadow-lg hover:shadow-xl transition-shadow">
                    <p className="text-slate-700 text-lg mb-4 md:mb-6">
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
          <div className="flex justify-center gap-2 mt-4 md:mt-8">
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
          <div className="text-center text-sm text-slate-500 mt-2 md:mt-4">
            {currentIndex + 1} / {testimonials.length}
          </div>
        </div>
      </section>
    </>
  );
};

export default SocialProof;