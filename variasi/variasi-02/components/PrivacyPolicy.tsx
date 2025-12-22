import React from 'react';

export const PrivacyPolicy: React.FC = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={handleBack}
            className="flex items-center text-slate-600 hover:text-slate-900 mb-4 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Kembali
          </button>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            Kebijakan Privasi
          </h1>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-slate-700 space-y-6 bg-white p-6 rounded-lg shadow-sm">
          <p>Kelas Inovatif menghormati privasi Anda dan berkomitmen untuk melindungi data pribadi yang Anda berikan kepada kami. Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda.</p>
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">1. Informasi yang Kami Kumpulkan</h2>
            <p>Kami mengumpulkan informasi yang Anda berikan secara sukarela saat mendaftar webinar, termasuk nama, email, nomor WhatsApp, dan informasi lain yang diperlukan untuk keperluan administrasi dan komunikasi.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">2. Penggunaan Informasi</h2>
            <p>Informasi yang kami kumpulkan digunakan untuk:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Memproses pendaftaran webinar Anda</li>
              <li>Mengirimkan konfirmasi dan informasi terkait webinar</li>
              <li>Menyediakan materi dan akses ke konten webinar</li>
              <li>Mengirimkan update dan informasi relevan lainnya</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">3. Perlindungan Data</h2>
            <p>Kami menggunakan langkah-langkah keamanan yang wajar untuk melindungi informasi pribadi Anda dari akses, perubahan, pengungkapan, atau penghancuran yang tidak sah. Data Anda tidak akan dibagikan kepada pihak ketiga tanpa persetujuan Anda, kecuali diwajibkan oleh hukum.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">4. Data NotebookLM</h2>
            <p>Kami tidak mengakses, menyimpan, atau menggunakan data yang Anda unggah ke platform NotebookLM. Semua data yang Anda unggah ke NotebookLM tetap berada di bawah kendali penuh Anda dan tunduk pada kebijakan privasi Google Labs.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">5. Cookie dan Teknologi Pelacakan</h2>
            <p>Kami dapat menggunakan cookie dan teknologi pelacakan serupa untuk meningkatkan pengalaman pengguna dan menganalisis penggunaan situs web kami. Anda dapat mengatur browser Anda untuk menolak cookie, namun hal ini dapat mempengaruhi fungsionalitas situs.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">6. Hak Anda</h2>
            <p>Anda berhak untuk mengakses, memperbarui, atau menghapus informasi pribadi Anda kapan saja. Untuk melakukan hal ini, silakan hubungi kami melalui kontak yang tersedia.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">7. Perubahan Kebijakan</h2>
            <p>Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan diberitahukan melalui email atau pemberitahuan di situs web kami.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">8. Kontak</h2>
            <p>Jika Anda memiliki pertanyaan tentang kebijakan privasi ini, silakan hubungi kami di <a href="https://kelasinovatif.com" className="text-orange-600 hover:underline">kelasinovatif.com</a></p>
          </section>
        </div>
      </div>
    </div>
  );
};
