import React from 'react';
import Button from './Button';

const MiddleCTA: React.FC = () => {
  return (
    <section className="py-20 bg-blue-900 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/id/4/1920/600')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Siap Mengubah Inefisiensi Menjadi Inovasi?</h2>
        <Button href="#register" variant="secondary">
          Amankan Slot Anda Sekarang
        </Button>
      </div>
    </section>
  );
};

export default MiddleCTA;