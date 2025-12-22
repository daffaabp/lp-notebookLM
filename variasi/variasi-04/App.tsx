import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PainPoints from './components/PainPoints';
import Solution from './components/Solution';
import { BonusFasilitas } from './components/BonusFasilitas';
import Guarantee from './components/Guarantee';
import Registration from './components/Registration';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import Testimonials from './components/Testimonials';

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
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <PainPoints />
        <Solution />
        <BonusFasilitas />
        <Guarantee />
        <Testimonials />
        <Registration />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;