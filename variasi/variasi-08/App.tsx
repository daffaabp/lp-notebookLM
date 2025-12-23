import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Testimonials from './components/Testimonials';
import Speaker from './components/Speaker';
import Registration from './components/Registration';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import FacebookPixel from './components/FacebookPixel';
import ThankYouPage from './components/ThankYouPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page');

    if (page === 'privacy-policy' || page === 'terms-of-service' || page === 'thank-you') {
      setCurrentPage(page);
    } else {
      setCurrentPage('home');
    }

    // Listen for popstate (back/forward button)
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const pageParam = params.get('page');
      if (pageParam === 'privacy-policy' || pageParam === 'terms-of-service' || pageParam === 'thank-you') {
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

  if (currentPage === 'thank-you') {
    return (
      <>
        <FacebookPixel />
        <ThankYouPage />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-bg-light text-gray-800">
      <FacebookPixel />
      <Hero />
      <Problem />
      <Solution />
      <div className="bg-legal-900 py-16 text-center text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif italic mb-6">
            "Teknologi ini telah membantu memenangkan kasus arbitrase senilai £50,000 hanya dengan analisis dokumen yang cerdas."
          </h2>
          <p className="opacity-80 mb-8">- Berdasarkan Studi Kasus Pengguna NotebookLM</p>
          <a
            href="#register"
            className="inline-block bg-gold-500 hover:bg-gold-600 text-white font-bold py-4 px-8 rounded-lg transition-transform transform hover:-translate-y-1 shadow-lg"
          >
            Daftar Sekarang
          </a>
        </div>
      </div>
      <Speaker />
      <Testimonials />
      <Registration />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;