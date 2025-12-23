import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
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
=======
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
import FacebookPixel from './components/FacebookPixel';
import ThankYouPage from './components/ThankYouPage';
import AffiliatePage from './components/AffiliatePage';
import AdminPage from './components/AdminPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page');

    if (page === 'privacy-policy' || page === 'terms-of-service' || page === 'thank-you' || page === 'affiliate' || page === 'admin') {
      setCurrentPage(page);
    } else {
      // Check for ?affiliate query param (boolean flag)
      if (urlParams.has('affiliate')) {
        setCurrentPage('affiliate');
      } else {
        setCurrentPage('home');
      }
    }

    // Check for ?ref=...
    const ref = urlParams.get('ref');
    if (ref) {
      localStorage.setItem('affiliate_ref', ref);
    }

    // Listen for popstate (back/forward button)
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const pageParam = params.get('page');
      if (pageParam === 'privacy-policy' || pageParam === 'terms-of-service' || pageParam === 'thank-you' || pageParam === 'affiliate' || pageParam === 'admin') {
        setCurrentPage(pageParam);
      } else if (params.has('affiliate')) {
        setCurrentPage('affiliate');
      } else {
        setCurrentPage('home');
      }
>>>>>>> f59101d12568799a1c02434766eccfd7a7cc03ba
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

<<<<<<< HEAD
  if (currentPath === '/thank-you' || window.location.search.includes('page=thank-you')) {
=======
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

  if (currentPage === 'thank-you') {
>>>>>>> f59101d12568799a1c02434766eccfd7a7cc03ba
    return (
      <>
        <FacebookPixel />
        <ThankYouPage />
      </>
    );
  }

<<<<<<< HEAD
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
=======
  if (currentPage === 'affiliate') {
    return <AffiliatePage />;
  }

  if (currentPage === 'admin') {
    return <AdminPage />;
  }

  return (
    <div className="font-sans text-dark min-h-screen flex flex-col">
      <FacebookPixel />
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
>>>>>>> f59101d12568799a1c02434766eccfd7a7cc03ba
      <Footer />
    </div>
  );
};

export default App;