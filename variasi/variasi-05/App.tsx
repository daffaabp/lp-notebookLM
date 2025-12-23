import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import SolutionHighlight from './components/SolutionHighlight';
import SpeakerTestimonials from './components/SpeakerTestimonials';
import Testimonials from './components/Testimonials';
import RegistrationForm from './components/RegistrationForm';
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
    <div className="min-h-screen font-sans">
      <Hero />
      <Features />
      <SolutionHighlight />
      <SpeakerTestimonials />
      <Testimonials />
      <RegistrationForm />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;