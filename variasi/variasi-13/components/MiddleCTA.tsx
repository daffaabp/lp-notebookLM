import React from 'react';

const MiddleCTA: React.FC = () => {
  return (
    <div className="py-12 bg-blue-900 text-white text-center shadow-inner relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-800 opacity-50 transform skew-y-2 scale-110"></div>
        <div className="relative z-10 px-4">
            <p className="text-xl md:text-3xl font-semibold tracking-wide">
                Siap beralih dari <span className="text-red-300 line-through decoration-2">"Kerja Keras"</span> ke <span className="text-green-300 font-bold">"Kerja Cerdas"</span>?
            </p>
        </div>
    </div>
  );
};

export default MiddleCTA;