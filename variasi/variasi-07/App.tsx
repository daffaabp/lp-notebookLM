import React from 'react';
import { UrgencyBar } from './components/UrgencyBar';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Solution } from './components/Solution';
import { SocialProof } from './components/SocialProof';
import { MiddleCTA } from './components/MiddleCTA';
import { Testimonials } from './components/Testimonials';
import { Guarantee } from './components/Guarantee';
import { RegistrationForm } from './components/RegistrationForm';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <UrgencyBar />
      <Hero />
      <PainPoints />
      <Solution />
      <SocialProof />
      <MiddleCTA />
      <Testimonials />
      <Guarantee />
      <RegistrationForm />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;