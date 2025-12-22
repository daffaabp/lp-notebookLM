import React, { useState, useEffect } from 'react';
import { RegistrationForm } from './components/RegistrationForm';
import { BonusFasilitas } from './components/BonusFasilitas';
import { ChatWidget } from './components/ChatWidget';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

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
    <div className="bg-slate-50 font-sans text-slate-900 overflow-x-hidden relative">
      <ChatWidget />
      
      {/* URGENCY BAR */}
      <div className="bg-pink-600 text-white text-center py-2 text-sm font-bold sticky top-0 z-40 px-2 shadow-md">
        🎁 Penawaran Spesial: Harga 129rb Hanya untuk 100 Pendaftar Pertama!
      </div>

      {/* HERO SECTION */}
      <header className="hero-gradient pt-16 pb-24 px-4 border-b-8 border-pink-500">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block bg-pink-200 text-pink-700 px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-8 border border-pink-300">
            Exclusive Masterclass for Smart Moms
          </div>

          <h1 className="text-3xl md:text-6xl font-black mb-8 leading-tight text-[#be185d]">
            Sudah Lelah Jadi "Super Mom"? Masak Belum Kelar, Anak Sudah Teriak Minta Diajarin PR yang Bundanya Sendiri Bingung?
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-slate-700 mb-12 max-w-4xl mx-auto leading-relaxed">
            Stop korbankan kewarasan Bunda. Gunakan <span className="underline decoration-pink-400 decoration-4">NotebookLM</span> sekarang: AI Google yang menyulap materi sekolah rumit jadi <strong>Podcast Santai</strong> yang bisa didengar sambil oseng-oseng di dapur!
          </h2>

          <div className="bg-white p-6 rounded-3xl border border-pink-200 inline-flex flex-col md:flex-row gap-8 items-center shadow-2xl mb-12 text-left transform transition hover:-translate-y-1 duration-300">
            <div>
              <p className="text-pink-600 text-xs font-bold uppercase tracking-tighter">
                Investasi Ilmu
              </p>
              <span className="text-4xl font-black text-[#be185d]">
                Rp 129.000
              </span>
              <span className="text-lg line-through text-slate-400 ml-2">
                Rp 499.000
              </span>
            </div>
            <div className="h-10 w-px bg-pink-200 hidden md:block"></div>
            <div>
              <p className="text-slate-500 text-xs font-bold uppercase">
                Sesi Live Zoom
              </p>
              <span className="text-xl font-bold italic text-slate-800">
                <i className="far fa-calendar-check mr-2 text-pink-500"></i>Sabtu, 27 Des 2025 |
                19.00 WIB
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <a
              href="#register"
              className="cta-glow bg-pink-600 hover:bg-pink-700 text-white text-xl md:text-2xl font-black py-6 px-14 rounded-full shadow-2xl block md:inline-block uppercase tracking-wider transition-all transform hover:scale-105"
            >
              SAYA MAU JADI IBU PINTAR!
            </a>
            <p className="text-slate-500 text-sm italic">
              <i className="fas fa-check-circle mr-2 text-green-500"></i>Garansi Uang Kembali
              100% Tanpa Tanya.
            </p>
          </div>
        </div>
      </header>

      {/* PAIN POINTS SECTION */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 italic text-[#be185d]">
            "Kapan Terakhir Kali Ibu Punya Waktu untuk Diri Sendiri?"
          </h2>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
                { icon: "fa-book-open", title: "Bingung Kurikulum Anak", text: "Istilah CP, ATP, Modul Ajar terasa seperti bahasa asing? Menjadi 'guru pengganti' di rumah terasa sangat melelahkan kognitif." },
                { icon: "fa-trash-alt", title: "Banjir Sampah Informasi", text: "Grup WA penuh rumor dan hoaks kesehatan yang bikin cemas? Sulit membedakan mana fakta dan mana karangan." },
                { icon: "fa-battery-quarter", title: "Beban Mental (Burnout)", text: "Mengurus nutrisi, kesehatan, dan jadwal keluarga sendirian membuat energi Ibu terkuras habis setiap hari." }
            ].map((item, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-pink-50 border-b-4 border-red-400 hover:shadow-lg transition-all duration-300">
                    <i className={`fas ${item.icon} text-red-500 text-4xl mb-6`}></i>
                    <h4 className="font-bold text-xl mb-3">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="py-24 px-4 bg-slate-100 border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#be185d] mb-6 uppercase">
              Solusi: NotebookLM — "Asisten Asuh Digital" Anda
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Bukan chatbot biasa yang suka "halusinasi". NotebookLM adalah
              asisten riset cerdas dari Google yang bekerja 100% berdasarkan
              sumber tepercaya pilihan Ibu.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-xl border-l-8 border-pink-600">
              <h5 className="font-black text-2xl mb-4 text-[#be185d]">
                Hasil Akhir yang Akan Ibu Kuasai:
              </h5>
              <ul className="space-y-4 font-bold text-slate-800 text-lg">
                {[
                    "Multitasking Tanpa Lelah: Ubah materi belajar anak menjadi Podcast.",
                    "Benteng Hoaks Grup WA: Verifikasi info kesehatan dengan sitasi sumber asli.",
                    "Anak Rajin Belajar: Buat kuis dan flashcards otomatis.",
                    "Pusat Pengetahuan Keluarga: Kelola data medis dan resep masakan."
                ].map((item, i) => (
                    <li key={i} className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-xl">✔</span>
                        <span>{item}</span>
                    </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow flex items-center gap-6 group hover:shadow-lg transition transform hover:-translate-x-1">
                <div className="bg-pink-100 p-4 rounded-xl text-pink-600 text-2xl">
                  <i className="fas fa-podcast"></i>
                </div>
                <div>
                  <h6 className="font-black text-xl">Interactive Audio Overview</h6>
                  <p className="text-sm text-slate-500 italic">
                    "Bertanya" langsung pada AI tentang dosis vitamin atau bahan
                    makanan berdasarkan dokumen.
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow flex items-center gap-6 group hover:shadow-lg transition transform hover:-translate-x-1">
                <div className="bg-pink-100 p-4 rounded-xl text-pink-600 text-2xl">
                  <i className="fas fa-magic"></i>
                </div>
                <div>
                  <h6 className="font-black text-xl">Smart Summaries & Quizzes</h6>
                  <p className="text-sm text-slate-500 italic">
                    Sederhanakan materi teknis Kurikulum Merdeka menjadi panduan
                    yang mudah dipahami anak.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF SECTION */}
      <section className="py-16 bg-white border-b border-slate-200 text-center px-4">
        <p className="text-slate-400 uppercase tracking-widest text-sm font-bold mb-8 italic text-center">
          Teknologi ini telah dipercayai oleh Institusi Akademik Dunia
        </p>
        <div className="flex flex-wrap justify-center gap-12 grayscale opacity-70">
          <span className="text-2xl font-black italic text-slate-600">Universitas Gadjah Mada</span>
          <span className="text-2xl font-black italic text-slate-600">Stanford Learning Lab</span>
          <span className="text-2xl font-black italic text-slate-600">Google Labs Initiative</span>
        </div>
        <p className="mt-10 text-pink-700 font-semibold text-sm">
          "Ibu-ibu cerdas akan menghasilkan anak-anak cerdas." — Kutipan
          Inspiratif Pendidikan
        </p>
      </section>

      {/* MIDDLE CTA */}
      <div className="py-16 bg-[#be185d] text-white text-center px-4">
        <h3 className="text-2xl font-bold mb-8 max-w-3xl mx-auto">
          "Jangan Biarkan Beban Mental Mencuri Kebahagiaan Ibu. Mulailah
          Berevolusi dengan AI Hari Ini!"
        </h3>
        <a
          href="#register"
          className="bg-orange-500 hover:bg-orange-600 py-4 px-12 rounded-full font-black text-lg tracking-wide uppercase shadow-lg transition-all inline-block hover:scale-105"
        >
          SAYA MAU DAFTAR WEBINAR SEKARANG
        </a>
      </div>

      {/* SPEAKER SECTION */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-16 text-center md:text-left">
          <div className="relative group">
            <div className="absolute -inset-4 bg-pink-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <img
              src="https://picsum.photos/300/300"
              alt="Education Expert"
              className="relative rounded-full w-64 h-64 border-8 border-white shadow-2xl object-cover"
            />
          </div>
          <div>
            <h3 className="text-3xl font-black text-slate-900 mb-2 uppercase">
              M. Arianto
            </h3>
            <p className="text-pink-600 font-black mb-6 text-lg tracking-widest">
              AI Engineer dan Researcher
            </p>
            <p className="text-slate-600 leading-relaxed italic text-lg">
              "Dengan pengalaman 10+ tahun dan 195+ proyek AI, saya siap membahas tips menguasai AI, teknik penulisan, dan research methodology sebagai AI Engineer, Researcher, dan Mentor profesional."
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="py-24 px-4 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-16 text-slate-800">Kisah Sukses Para "Smart Moms"</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-10 bg-slate-50 rounded-3xl italic border-l-8 border-pink-600 shadow-sm text-left hover:shadow-md transition">
              <p className="text-slate-700 text-lg mb-6">
                "Dulu dampingi anak belajar bisa 2 jam sendiri buat baca bukunya
                dulu. Sekarang tinggal upload PDF, dengerin ringkasannya pas
                lagi cuci piring. Pas anak tanya, saya langsung jadi 'pustakawan
                jenius'!"
              </p>
              <p className="font-black text-slate-900">
                — Ibu Sari, IRT & Alumni Masterclass
              </p>
            </div>
            <div className="p-10 bg-slate-50 rounded-3xl italic border-l-8 border-pink-600 shadow-sm text-left hover:shadow-md transition">
              <p className="text-slate-700 text-lg mb-6">
                "Fitur Audio Overview-nya luar biasa. Saya bisa verifikasi info
                kesehatan di grup WA tanpa harus debat. Tinggal kasih bukti
                aslinya dari NotebookLM. Keluarga jadi lebih tenang dan aman."
              </p>
              <p className="font-black text-slate-900">
                — Ibu Nisa, Domestic CIO
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MONEY BACK GUARANTEE */}
      <section className="py-16 bg-pink-50 text-center px-4">
        <div className="max-w-3xl mx-auto border-4 border-dashed border-pink-200 p-10 rounded-3xl group transition hover:border-pink-400 hover:bg-white">
          <div className="text-6xl text-pink-600 mb-6 group-hover:scale-110 transition duration-300">
            <i className="fas fa-shield-heart"></i>
          </div>
          <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase">
            100% RISK-FREE: MONEY BACK GUARANTEE
          </h3>
        </div>
      </section>

      <BonusFasilitas />

      <RegistrationForm />

      {/* FAQ SECTION */}
      <section className="py-24 px-4 bg-white text-left">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-16 uppercase italic underline decoration-pink-500">
            Pertanyaan Ibu (FAQ)
          </h2>
          <div className="space-y-8">
            <div className="border-b-2 border-slate-50 pb-6 group cursor-pointer">
              <h4 className="font-black text-xl mb-3 text-slate-900 group-hover:text-pink-600 transition flex justify-between items-center">
                Apakah NotebookLM ini sulit digunakan?
                <i className="fas fa-chevron-down text-slate-300 group-hover:text-pink-500"></i>
              </h4>
              <p className="text-slate-600 leading-relaxed text-sm group-hover:block">
                Tidak sama sekali. Jika Ibu bisa menggunakan Google Drive atau
                WhatsApp, Ibu pasti bisa. Antarmukanya sangat simpel, cukup
                upload dan tanya.
              </p>
            </div>
            <div className="border-b-2 border-slate-50 pb-6 group cursor-pointer">
              <h4 className="font-black text-xl mb-3 text-slate-900 group-hover:text-pink-600 transition flex justify-between items-center">
                Apakah aman untuk data pribadi saya?
                <i className="fas fa-chevron-down text-slate-300 group-hover:text-pink-500"></i>
              </h4>
              <p className="text-slate-600 leading-relaxed text-sm group-hover:block">
                Sangat aman. Google menjamin data yang Ibu unggah ke NotebookLM
                tidak digunakan untuk melatih model AI publik mereka.
              </p>
            </div>
            <div className="border-b-2 border-slate-50 pb-6 group cursor-pointer">
              <h4 className="font-black text-xl mb-3 text-slate-900 group-hover:text-pink-600 transition flex justify-between items-center">
                Apakah mendukung Bahasa Indonesia?
                <i className="fas fa-chevron-down text-slate-300 group-hover:text-pink-500"></i>
              </h4>
              <p className="text-slate-600 leading-relaxed text-sm group-hover:block">
                Ya, NotebookLM mendukung penuh input dan output dalam Bahasa
                Indonesia, termasuk fitur suaranya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 bg-slate-900 text-white border-t-8 border-pink-600 px-4">
        <div className="max-w-6xl mx-auto text-center md:text-center">
          <h3 className="text-3xl font-black mb-4 italic uppercase tracking-tighter text-pink-400">
            Kelas Inovatif
          </h3>
          <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto mb-6 text-sm">
            Webinar ini diselenggarakan oleh Kelas Inovatif. Platform pembelajaran Artificial Intelligence Nomor 1 di Indonesia bagi para peneliti akademik. Kami berkomitmen menyediakan edukasi berkualitas tinggi, bebas plagiasi, dan beretika untuk memajukan riset Indonesia.
          </p>
          <a href="https://kelasinovatif.com" target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-white hover:text-pink-400 underline decoration-pink-600 underline-offset-4 mb-10 block transition">
             kelasinovatif.com
          </a>

          <div className="flex flex-wrap justify-center gap-10 text-xs font-bold text-slate-400 mb-10 uppercase tracking-widest">
            <a
              href="/terms-of-service"
              onClick={(e) => handleLinkClick(e, '/terms-of-service')}
              className="hover:text-pink-400 border-b-2 border-transparent hover:border-pink-400 pb-1 transition"
            >
              Terms of Service
            </a>
            <a
              href="/privacy-policy"
              onClick={(e) => handleLinkClick(e, '/privacy-policy')}
              className="hover:text-pink-400 border-b-2 border-transparent hover:border-pink-400 pb-1 transition"
            >
              Privacy Policy
            </a>
            <span className="cursor-default">
              Copyright 2025
            </span>
          </div>
          <p className="text-[10px] text-slate-500 max-w-2xl mx-auto leading-relaxed uppercase">
            &copy; 2025 Kelas Inovatif. Seluruh Hak Cipta Dilindungi.<br />
            NotebookLM adalah merek dagang Google Labs. Program ini
            diselenggarakan secara independen.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;