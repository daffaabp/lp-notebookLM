import React from 'react';

export const TermsOfService: React.FC = () => {
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
            Syarat & Ketentuan Layanan
          </h1>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-slate-700 space-y-6 bg-white p-6 rounded-lg shadow-sm">
          <p>Selamat datang di Kelas Inovatif. Dengan mendaftar webinar ini, Anda menyetujui syarat dan ketentuan berikut:</p>
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">1. Materi Edukasi</h2>
            <p>Materi yang disampaikan dalam webinar ini bertujuan untuk edukasi dan pengembangan profesional dalam bidang hukum. Hasil akhir (peningkatan produktivitas dan efisiensi kerja) sangat bergantung pada implementasi praktis, konsistensi penggunaan, dan karakteristik kasus yang ditangani. Kami tidak menjamin hasil tertentu, namun kami mengajarkan metodologi terbaik untuk meningkatkan efektivitas praktik hukum Anda.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">2. Kebijakan Pembayaran & Refund</h2>
            <p>Biaya pendaftaran webinar bersifat <strong>Non-Refundable</strong> (tidak dapat dikembalikan) kecuali jika webinar dibatalkan secara sepihak oleh penyelenggara. Pastikan Anda sudah memeriksa jadwal sebelum melakukan pembayaran.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">3. Hak Kekayaan Intelektual</h2>
            <p>Dilarang keras merekam, menyebarluaskan, atau menjual kembali materi presentasi, rekaman video, maupun template yang diberikan dalam webinar ini tanpa izin tertulis dari Kelas Inovatif. Pelanggaran akan diproses sesuai hukum yang berlaku di Indonesia.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">4. Etika Forum</h2>
            <p>Peserta diharapkan menjaga ketertiban selama sesi webinar berlangsung. Penyelenggara berhak mengeluarkan peserta yang melakukan ujaran kebencian, promosi produk lain (spam), atau mengganggu jalannya acara tanpa pengembalian dana.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">5. Kerahasiaan Data Klien</h2>
            <p>Peserta diharapkan untuk tidak membagikan informasi rahasia klien atau kasus sensitif selama sesi webinar. Kami berkomitmen menjaga kerahasiaan, namun peserta bertanggung jawab penuh atas informasi yang mereka bagikan.</p>
          </section>
        </div>
      </div>
    </div>
  );
};
