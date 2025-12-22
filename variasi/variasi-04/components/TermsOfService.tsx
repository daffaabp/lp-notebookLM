import React from 'react';

export const TermsOfService: React.FC = () => {
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
        
        <h1 className="text-3xl md:text-4xl font-black mb-8 text-slate-900 border-b-4 border-orange-500 pb-4 inline-block">Syarat & Ketentuan</h1>
        
        <div className="space-y-6 text-slate-700 leading-relaxed">
            <p className="text-sm text-slate-500 italic">Terakhir diperbarui: 27 Desember 2024</p>
            
            <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3">1. Pendaftaran</h2>
                <p>
                    Dengan mendaftar webinar ini, Anda setuju untuk memberikan informasi yang akurat dan lengkap. Satu tiket berlaku untuk satu orang peserta.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3">2. Pembayaran & Pengembalian Dana</h2>
                <p>
                    Biaya pendaftaran bersifat final kecuali tercakup dalam "Garansi Uang Kembali" kami. Garansi Uang Kembali berlaku jika Anda mengajukan klaim dalam 60 menit pertama sesi webinar berlangsung jika materi dirasa tidak bermanfaat.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3">3. Hak Kekayaan Intelektual</h2>
                <p>
                    Materi yang dibagikan selama webinar oleh Kelas Inovatif dilindungi oleh hak cipta. Peserta dilarang merekam layar (screen recording) untuk tujuan komersial atau mendistribusikan ulang materi tanpa izin tertulis.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3">4. Etika Forum</h2>
                <p>
                    Kelas Inovatif berhak mengeluarkan peserta yang melakukan ujaran kebencian, spam, atau gangguan selama sesi webinar tanpa pengembalian dana.
                </p>
            </section>
        </div>
      </div>
    </div>
  );
};