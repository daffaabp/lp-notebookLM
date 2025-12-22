import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Solution from './components/Solution';
import { MidCTA } from './components/MidCTA';
import SocialProof from './components/SocialProof';
import Speaker from './components/Speaker';
import NotebookLMResults from './components/NotebookLMResults';
import Testimonials from './components/Testimonials';
import Guarantee from './components/Guarantee';
import { BonusFasilitas } from './components/BonusFasilitas';
import RegisterForm from './components/RegisterForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
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
      </div>
    );
  }

  if (currentPath === '/terms-of-service') {
    return (
      <div className="bg-slate-50 font-sans text-slate-900 min-h-screen">
        <TermsOfService />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Hero />
      <PainPoints />
      <Solution />
      <MidCTA onRegisterClick={scrollToRegister} />
      <NotebookLMResults />
      <SocialProof />
      <Speaker />
      <Testimonials />
      <Guarantee />
      <BonusFasilitas />
      <RegisterForm />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;