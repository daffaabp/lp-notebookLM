import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Solution } from './components/Solution';
import { Outcome } from './components/Outcome';
import { Testimonials } from './components/Testimonials';
import { RegistrationForm } from './components/RegistrationForm';
import { Footer } from './components/Footer';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { ShieldCheck } from 'lucide-react';

const App: React.FC = () => {
  const [page, setPage] = useState<'home' | 'privacy' | 'terms'>('home');

  const scrollToRegister = () => {
    setPage('home');
    // Allow state update to propagate then scroll
    setTimeout(() => {
      const element = document.getElementById('register');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  if (page === 'privacy') {
    return (
      <div className="bg-slate-50 font-sans text-slate-900 min-h-screen">
        <PrivacyPolicy onBack={() => setPage('home')} />
        <Footer onNavigate={setPage} />
      </div>
    );
  }

  if (page === 'terms') {
    return (
      <div className="bg-slate-50 font-sans text-slate-900 min-h-screen">
        <TermsOfService onBack={() => setPage('home')} />
        <Footer onNavigate={setPage} />
      </div>
    );
  }

  return (
    <div className="bg-slate-50 font-sans text-slate-900 min-h-screen selection:bg-orange-200 selection:text-orange-900">
      <Hero />
      <PainPoints />
      <Solution />
      <Outcome />
      
      {/* Middle CTA */}
      <section className="py-16 legal-gradient text-white text-center px-4">
        <h3 className="text-2xl font-bold mb-8">Siap Membawa Firma Hukum Anda ke Era Digital?</h3>
        <button onClick={scrollToRegister} className="inline-block bg-orange-600 hover:bg-orange-500 py-4 px-10 rounded-lg font-bold text-lg tracking-wide transition shadow-lg hover:shadow-orange-500/25">
          AMANKAN TEMPAT SAYA SEKARANG
        </button>
      </section>

      {/* Speaker Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <img 
            src="https://picsum.photos/300/300" 
            alt="M. Arianto" 
            className="rounded-2xl shadow-2xl w-64 grayscale hover:grayscale-0 transition duration-500 object-cover" 
          />
          <div>
            <h2 className="text-3xl font-bold mb-2 uppercase text-slate-900">M. Arianto</h2>
            <p className="text-blue-600 font-bold mb-6 text-lg">AI Engineer dan Researcher</p>
            <p className="text-slate-600 leading-relaxed italic border-l-4 border-slate-200 pl-4">
              "Dengan pengalaman 10+ tahun dan 195+ proyek AI, saya siap membahas tips menguasai AI, teknik penulisan, dan research methodology sebagai AI Engineer, Researcher, dan Mentor profesional."
            </p>
          </div>
        </div>
      </section>

      <Testimonials />
      <RegistrationForm />
      
      {/* Guarantee */}
      <section className="py-16 bg-slate-50 text-center border-t border-slate-200">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-5xl text-orange-600 mb-6 flex justify-center">
            <ShieldCheck size={48} />
          </div>
          <h3 className="text-xl font-bold mb-4">100% Money Back Guarantee</h3>
          <p className="text-slate-600 leading-relaxed">
            Jika dalam 1 jam pertama webinar Anda merasa tidak mendapatkan manfaat apapun bagi praktek hukum Anda, 
            kami kembalikan uang Anda 100% tanpa potongan. Tanpa pertanyaan rumit.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 uppercase italic text-slate-900">Pertanyaan Umum (FAQ)</h2>
          <div className="space-y-6">
            <div className="border-b border-slate-100 pb-6">
              <h4 className="font-black text-lg mb-2 decoration-orange-500 decoration-2 underline underline-offset-2">Apakah saya perlu berlangganan NotebookLM Plus?</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Tidak. Fitur dasar NotebookLM sudah sangat kuat dan gratis. Kami akan mengajarkan cara memaksimalkan versi gratis, serta kapan waktu yang tepat untuk beralih ke versi Plus/Enterprise.</p>
            </div>
            <div className="border-b border-slate-100 pb-6">
              <h4 className="font-black text-lg mb-2 decoration-orange-500 decoration-2 underline underline-offset-2">Bagaimana jika saya gaptek?</h4>
              <p className="text-slate-600 text-sm leading-relaxed">NotebookLM didesain dengan antarmuka yang sangat simpel. Jika Anda bisa menggunakan Google Drive, Anda pasti bisa menggunakan alat ini. Kami akan membimbing langkah demi langkah.</p>
            </div>
            <div className="border-b border-slate-100 pb-6">
              <h4 className="font-black text-lg mb-2 decoration-orange-500 decoration-2 underline underline-offset-2">Apakah aman untuk data rahasia klien?</h4>
              <p className="text-slate-600 text-sm leading-relaxed">Sangat aman. Google menjamin data yang diunggah ke NotebookLM tidak digunakan untuk melatih model AI mereka. Kami juga akan membahas kebijakan etika penggunaan AI bagi pengacara.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={setPage} />
    </div>
  );
};

export default App;