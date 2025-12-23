import React, { useState, useEffect } from 'react';
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
    <div className="min-h-screen font-sans text-gray-900 bg-white selection:bg-orange-200 selection:text-orange-900">
      <FacebookPixel />
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