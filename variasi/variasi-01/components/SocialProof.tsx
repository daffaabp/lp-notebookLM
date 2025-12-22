import React from 'react';
import { Award, TrendingUp } from 'lucide-react';

const SocialProof: React.FC = () => {
  const logos = [
    "MIT Libraries",
    "University of Arizona",
    "Universitas Gadjah Mada",
    "Stanford HAI"
  ];

  return (
    <section className="pt-8 md:pt-12 pb-4 md:pb-6 bg-gradient-to-b from-white via-gray-50/30 to-white text-center relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Premium Header */}
        <div className="mb-6 md:mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full mb-3">
            <Award className="w-4 h-4 text-blue-600" />
            <span className="text-xs md:text-sm font-semibold text-blue-700 uppercase tracking-wider">
              Trusted Worldwide
            </span>
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
            Telah Dipercaya oleh Akademisi di
          </h2>
          <p className="text-base md:text-lg text-gray-600 font-medium">
            Berbagai Institusi Terkemuka
          </p>
        </div>

        {/* Premium Logo Row - Compact */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-0">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl px-4 py-2.5 md:px-5 md:py-3 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all duration-300 hover:-translate-y-0.5"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 group-hover:from-blue-50/40 group-hover:to-purple-50/40 rounded-xl transition-all duration-300"></div>
              
              {/* Logo content */}
              <div className="relative z-10">
                <div className="text-xs md:text-sm font-semibold italic text-gray-600 group-hover:text-blue-800 transition-colors duration-300 whitespace-nowrap">
                  {logo}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default SocialProof;