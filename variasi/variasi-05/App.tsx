import React from 'react';
import UrgencyBar from './components/UrgencyBar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Solution from './components/Solution';
import SocialProof from './components/SocialProof';
import Speaker from './components/Speaker';
import Testimonials from './components/Testimonials';
import Guarantee from './components/Guarantee';
import RegistrationForm from './components/RegistrationForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { GRADIENT_CLASS } from './constants';

const App: React.FC = () => {
  return (
    <>
      <UrgencyBar />
      <Hero />
      <PainPoints />
      <Solution />
      <SocialProof />
      
      {/* Middle CTA Section - Simple enough to be inline here or its own component, keeping inline for variety */}
      <div className={`py-16 ${GRADIENT_CLASS} text-white text-center px-4`}>
        <h3 className="text-2xl font-bold mb-8">
          "Jangan Biarkan Ide Anda Menguap karena Kekacauan Riset. Mulailah Menulis dengan Cerdas Kita!"
        </h3>
        <a 
          href="#register" 
          className="bg-orange-600 hover:bg-orange-500 py-4 px-12 rounded-full font-bold text-lg tracking-wide uppercase transition-transform hover:scale-105 inline-block shadow-lg"
        >
          SAYA MAU JADI PENULIS PRODUKTIF
        </a>
      </div>

      <Speaker />
      <Testimonials />
      <Guarantee />
      <RegistrationForm />
      <FAQ />
      <Footer />
    </>
  );
};

export default App;