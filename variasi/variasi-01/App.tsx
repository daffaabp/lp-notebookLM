import React from 'react';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Solution from './components/Solution';
import MidCTA from './components/MidCTA';
import SocialProof from './components/SocialProof';
import Speaker from './components/Speaker';
import RegistrationForm from './components/RegistrationForm';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <PainPoints />
      <Solution />
      <MidCTA />
      <SocialProof />
      <Speaker />
      <RegistrationForm />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;