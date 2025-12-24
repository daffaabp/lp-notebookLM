import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import PainPointsSection from './components/PainPointsSection';
import FeaturesSection from './components/FeaturesSection';
import TargetAudienceSection from './components/TargetAudienceSection';
import SolutionSection from './components/SolutionSection';
import NotebookLMResultsSection from './components/NotebookLMResultsSection';
import MiddleCTA from './components/MiddleCTA';
import SpeakerSection from './components/SpeakerSection';
import TestimonialsSection from './components/TestimonialsSection';
import GuaranteeSection from './components/GuaranteeSection';
import RegistrationForm from './components/RegistrationForm';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import AffiliatePage from './components/AffiliatePage';
import AdminPage from './components/AdminPage';
import ThankYouPage from './components/ThankYouPage';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page');

    // Check pathname for terms/privacy
    if (window.location.pathname === '/terms-of-service' || window.location.pathname === '/privacy-policy') {
      setCurrentPath(window.location.pathname);
      return;
    }

    if (page === 'affiliate' || page === 'admin' || page === 'thank-you') {
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
      const path = window.location.pathname;
      if (path === '/terms-of-service' || path === '/privacy-policy') {
        setCurrentPath(path);
        return;
      }

      const params = new URLSearchParams(window.location.search);
      const pageParam = params.get('page');
      if (pageParam === 'affiliate' || pageParam === 'admin' || pageParam === 'thank-you') {
        setCurrentPage(pageParam);
      } else if (params.has('affiliate')) {
        setCurrentPage('affiliate');
      } else {
        setCurrentPage('home');
      }
      setCurrentPath(path);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle navigation
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      if (link) {
        const href = link.getAttribute('href');
        if (href) {
          // Handle pathname navigation (terms/privacy)
          if (href === '/terms-of-service' || href === '/privacy-policy') {
            e.preventDefault();
            window.history.pushState({}, '', href);
            setCurrentPath(href);
            return;
          }
          
          // Handle query param navigation
          if (href.startsWith('?page=')) {
            e.preventDefault();
            const page = href.split('=')[1];
            window.history.pushState({}, '', href);
            setCurrentPage(page);
            setCurrentPath(window.location.pathname);
          }
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // Render based on current path or page
  if (currentPath === '/terms-of-service') {
    return <TermsOfService />;
  }

  if (currentPath === '/privacy-policy') {
    return <PrivacyPolicy />;
  }

  if (currentPage === 'affiliate') {
    return <AffiliatePage />;
  }

  if (currentPage === 'admin') {
    return <AdminPage />;
  }

  if (currentPage === 'thank-you') {
    return <ThankYouPage />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <PainPointsSection />
      <FeaturesSection />
      <TargetAudienceSection />
      <SolutionSection />
      <NotebookLMResultsSection />
      <MiddleCTA />
      <SpeakerSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <RegistrationForm />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default App;