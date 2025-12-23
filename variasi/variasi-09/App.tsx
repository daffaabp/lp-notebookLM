import React, { useState, useEffect } from 'react';
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