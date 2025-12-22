import React from 'react';

const Guarantee: React.FC = () => {
  return (
    <section className="bg-teal-50 text-center px-4 py-4 md:py-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-0 md:mb-6 flex justify-center">
          <img 
            src="/assets/money back avif.avif" 
            alt="Money Back Guarantee" 
            className="w-48 md:w-80 h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Guarantee;

