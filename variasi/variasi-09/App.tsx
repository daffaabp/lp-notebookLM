import React from 'react';
import Header from './components/Header';
import SocialProof from './components/SocialProof';
import PainPoints from './components/PainPoints';
import Solution from './components/Solution';
import CtaSection from './components/CtaSection';
import Speaker from './components/Speaker';
import Testimonials from './components/Testimonials';
import RegistrationForm from './components/RegistrationForm';
import Faq from './components/Faq';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <SocialProof />
      <PainPoints />
      <Solution />
      <CtaSection />
      <Speaker />
      <Testimonials />
      <RegistrationForm />
      <Faq />
      <Footer />
    </div>
  );
};

export default App;