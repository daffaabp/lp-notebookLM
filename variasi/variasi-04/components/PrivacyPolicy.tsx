import React from 'react';

export const PrivacyPolicy: React.FC = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">
        <button 
            onClick={handleBack}
            className="mb-8 flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700 transition-colors"
        >
            <i className="fas fa-arrow-left"></i> Kembali ke Webinar
        </button>
        
        <h1 className="text-3xl md:text-4xl font-black mb-8 text-slate-900 border-b-4 border-orange-500 pb-4 inline-block">Kebijakan Privasi</h1>
        
        <div className="space-y-6 text-slate-700 leading-relaxed">
            <p className="text-sm text-slate-500 italic">Terakhir diperbarui: 27 Desember 2024</p>
            
            <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3">1. Pendahuluan</h2>
                <p>
                    Kelas Inovatif ("kami") berkomitmen untuk melindungi privasi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat Anda mendaftar untuk Webinar NotebookLM kami.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3">2. Informasi yang Kami Kumpulkan</h2>
                <p>Kami mengumpulkan informasi berikut saat Anda mendaftar:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Nama Lengkap dan Gelar Akademik.</li>
                    <li>Alamat Email Aktif.</li>
                    <li>Nomor WhatsApp untuk komunikasi terkait webinar.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3">3. Penggunaan Informasi</h2>
                <p>Informasi Anda digunakan semata-mata untuk:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Mengirimkan tautan Zoom dan materi webinar.</li>
                    <li>Memberikan sertifikat kehadiran (E-Certificate).</li>
                    <li>Menginformasikan pembaruan terkait layanan Kelas Inovatif.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3">4. Keamanan Data</h2>
                <p>
                    Kami menerapkan langkah-langkah keamanan teknis untuk melindungi data Anda. Data Anda tidak akan dijual atau disewakan kepada pihak ketiga tanpa izin Anda.
                </p>
            </section>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-100 text-center">
             <p className="text-slate-500 text-sm">Jika Anda memiliki pertanyaan, hubungi kami di support@kelasinovatif.com</p>
        </div>
      </div>
    </div>
  );
};