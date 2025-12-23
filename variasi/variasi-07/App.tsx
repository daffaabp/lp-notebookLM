import React, { useState, useEffect } from 'react';
import { UrgencyBar } from './components/UrgencyBar';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Solution } from './components/Solution';
import { SocialProof } from './components/SocialProof';
import { MiddleCTA } from './components/MiddleCTA';
import { Testimonials } from './components/Testimonials';
import { Guarantee } from './components/Guarantee';
import { BonusFasilitas } from './components/BonusFasilitas';
import { RegistrationForm } from './components/RegistrationForm';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import FacebookPixel from './components/FacebookPixel';
import ThankYouPage from './components/ThankYouPage';

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

  if (currentPath === '/thank-you' || window.location.search.includes('page=thank-you')) {
    return (
      <>
        <FacebookPixel />
        <ThankYouPage />
      </>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <FacebookPixel />
      <UrgencyBar />
      <Hero />
      <PainPoints />
      <Solution />
      <SocialProof />
      <MiddleCTA />
      <Testimonials />
      <Guarantee />
      <BonusFasilitas />
      <RegistrationForm />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;