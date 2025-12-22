import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import MiddleCTA from './components/MiddleCTA';
import Speaker from './components/Speaker';
import Testimonials from './components/Testimonials';
import Bonus from './components/Bonus';
import RegistrationForm from './components/RegistrationForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page');

    if (page === 'privacy-policy' || page === 'terms-of-service') {
      setCurrentPage(page);
    } else {
      setCurrentPage('home');
    }

    // Listen for popstate (back/forward button)
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const pageParam = params.get('page');
      if (pageParam === 'privacy-policy' || pageParam === 'terms-of-service') {
        setCurrentPage(pageParam);
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle navigation
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="?page="]');
      if (link) {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href) {
          const page = href.split('=')[1];
          window.history.pushState({}, '', href);
          setCurrentPage(page);
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // Render based on current page
  if (currentPage === 'privacy-policy') {
    return <PrivacyPolicy />;
  }

  if (currentPage === 'terms-of-service') {
    return <TermsOfService />;
  }

  return (
    <div className="font-sans text-dark min-h-screen flex flex-col">
      <Hero />
      <main className="flex-grow">
        <ProblemSolution />
        <MiddleCTA />
        <Speaker />
        <Testimonials />
        <Bonus />
        <RegistrationForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;