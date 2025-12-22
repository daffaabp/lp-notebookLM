import React, { useState } from 'react';
import Header from './components/Header';
import PainPoints from './components/PainPoints';
import Solution from './components/Solution';
import Results from './components/Results';
import SocialProof from './components/SocialProof';
import Registration from './components/Registration';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

type Page = 'home' | 'privacy' | 'terms';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'privacy':
        return <PrivacyPolicy onBack={() => handleNavigate('home')} />;
      case 'terms':
        return <TermsOfService onBack={() => handleNavigate('home')} />;
      case 'home':
      default:
        return (
          <>
            <Header />
            <main className="flex-grow">
              <PainPoints />
              <Solution />
              <Results />
              <SocialProof />
              <Registration />
            </main>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {renderContent()}
      {/* Footer is always shown, but navigation behavior handles the view switching */}
      {currentPage === 'home' && <Footer onNavigate={handleNavigate} />}
    </div>
  );
};

export default App;