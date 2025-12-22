import React from 'react';
import Header from './components/Header';
import SocialProof from './components/SocialProof';
import PainPoints from './components/PainPoints';
import Solution from './components/Solution';
import MiddleCTA from './components/MiddleCTA';
import Speaker from './components/Speaker';
import Testimonials from './components/Testimonials';
import RegistrationForm from './components/RegistrationForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-gray-900 bg-white selection:bg-orange-200 selection:text-orange-900">
      <Header />
      <SocialProof />
      <PainPoints />
      <Solution />
      <MiddleCTA />
      <Speaker />
      <Testimonials />
      <RegistrationForm />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;