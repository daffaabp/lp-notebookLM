import React from 'react';

const PrivacyPolicy: React.FC = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={handleBack}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-4 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Kembali
          </button>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Kebijakan Privasi
          </h1>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p>Kelas Inovatif sangat menghargai privasi Anda. Kebijakan ini menjelaskan bagaimana kami mengelola data pribadi Anda sesuai dengan peraturan yang berlaku.</p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Pengumpulan Data</h2>
            <p>Kami mengumpulkan data pribadi berupa Nama, Email, Nomor WhatsApp, dan Institusi saat Anda mengisi formulir pendaftaran. Data ini digunakan semata-mata untuk keperluan administrasi webinar, pengiriman link Zoom, sertifikat, dan materi pembelajaran.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Penggunaan Data</h2>
            <p>Kami menggunakan data Anda untuk:</p>
            <ul className="list-disc ml-8 mt-2 space-y-2">
              <li>Memproses pendaftaran dan verifikasi pembayaran.</li>
              <li>Mengirimkan pengingat jadwal webinar.</li>
              <li>Memberikan informasi terkait produk edukasi lanjutan dari Kelas Inovatif yang relevan dengan minat akademik Anda (Anda dapat berhenti berlangganan kapan saja).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Perlindungan Data</h2>
            <p>Kami tidak akan pernah menjual, menyewakan, atau memberikan data pribadi Anda kepada pihak ketiga manapun di luar kepentingan penyelenggaraan acara ini, kecuali diwajibkan oleh hukum.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Cookie & Tracking</h2>
            <p>Website ini mungkin menggunakan cookie standar Facebook Pixel atau Google Analytics untuk tujuan optimasi iklan dan pengukuran kinerja website, tanpa mengambil data pribadi sensitif Anda secara langsung.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

