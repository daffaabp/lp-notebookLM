import React, { useState } from 'react';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Solution from './components/Solution';
import Results from './components/Results';
import SocialProof from './components/SocialProof';
import Speaker from './components/Speaker';
import Testimonials from './components/Testimonials';
import Guarantee from './components/Guarantee';
import RegisterForm from './components/RegisterForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WebinarAssistant from './components/WebinarAssistant';
import { PrivacyPolicyModal, ToSModal } from './components/LegalModals';

const App: React.FC = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showToS, setShowToS] = useState(false);

  return (
    <div className="min-h-screen">
      <Hero />
      <PainPoints />
      <Solution />
      <Results />
      <SocialProof />
      <Speaker />
      <Testimonials />
      <Guarantee />
      <RegisterForm />
      <FAQ />
      <Footer 
        onOpenPrivacy={() => setShowPrivacy(true)} 
        onOpenToS={() => setShowToS(true)} 
      />
      <WebinarAssistant />
      
      {/* Legal Modals */}
      <PrivacyPolicyModal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />
      <ToSModal isOpen={showToS} onClose={() => setShowToS(false)} />
    </div>
  );
};

export default App;