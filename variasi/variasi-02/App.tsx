import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Solution } from './components/Solution';
import { MidCTA } from './components/MidCTA';
import { Speaker } from './components/Speaker';
import { Testimonials } from './components/Testimonials';
import { RegistrationForm } from './components/RegistrationForm';
import { BonusFasilitas } from './components/BonusFasilitas';
import { Guarantee } from './components/Guarantee';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const scrollToRegister = () => {
    setTimeout(() => {
      const element = document.getElementById('register');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  if (currentPath === '/privacy-policy') {
    return (
      <div className="bg-slate-50 font-sans text-slate-900 min-h-screen">
        <PrivacyPolicy />
        <Footer />
      </div>
    );
  }

  if (currentPath === '/terms-of-service') {
    return (
      <div className="bg-slate-50 font-sans text-slate-900 min-h-screen">
        <TermsOfService />
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-slate-50 font-sans text-slate-900 min-h-screen selection:bg-orange-200 selection:text-orange-900">
      <Hero />
      <PainPoints />
      <Solution />
      <MidCTA onRegisterClick={scrollToRegister} />
      <Speaker />
      <Testimonials />
      <BonusFasilitas />
      <Guarantee />
      <RegistrationForm />
      <FAQ />

      <Footer />
    </div>
  );
};

export default App;