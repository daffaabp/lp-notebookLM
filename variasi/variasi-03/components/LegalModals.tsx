import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}></div>
      <div className="bg-white w-full max-w-2xl max-h-[80vh] rounded-2xl shadow-2xl z-10 overflow-hidden flex flex-col animate-[fadeIn_0.2s_ease-out]">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <h3 className="text-xl font-black text-teal-900 uppercase">{title}</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-red-500 transition text-2xl">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="p-8 overflow-y-auto text-slate-600 text-sm leading-relaxed space-y-4">
          {children}
        </div>
        <div className="p-4 border-t border-slate-100 bg-slate-50 text-right">
          <button onClick={onClose} className="bg-teal-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-teal-700 transition">
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

export const PrivacyPolicyModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose} title="Privacy Policy">
    <p><strong>Terakhir Diperbarui: Desember 2025</strong></p>
    <p>Di Kelas Inovatif, kami sangat menghargai privasi Anda. Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda.</p>
    
    <h4 className="font-bold text-slate-900 mt-4">1. Pengumpulan Data</h4>
    <p>Kami mengumpulkan informasi yang Anda berikan saat mendaftar webinar, termasuk nama, email, nomor WhatsApp, dan latar belakang profesional. Data ini digunakan semata-mata untuk administrasi acara dan komunikasi terkait materi pembelajaran.</p>
    
    <h4 className="font-bold text-slate-900 mt-4">2. Penggunaan Data</h4>
    <p>Data Anda tidak akan pernah dijual kepada pihak ketiga. Kami menggunakan data Anda untuk mengirimkan detail akses Zoom, E-Certificate, dan materi pembelajaran lanjutan yang relevan dengan riset medis dan AI.</p>
    
    <h4 className="font-bold text-slate-900 mt-4">3. Keamanan Data</h4>
    <p>Kami menerapkan standar keamanan industri untuk melindungi data Anda. Database kami dilindungi enkripsi dan akses terbatas.</p>
  </Modal>
);

export const ToSModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose} title="Terms of Service">
    <p><strong>Selamat datang di Kelas Inovatif.</strong> Dengan mendaftar webinar ini, Anda menyetujui syarat dan ketentuan berikut:</p>
    
    <h4 className="font-bold text-slate-900 mt-4">1. Pendaftaran & Pembayaran</h4>
    <p>Biaya pendaftaran bersifat non-refundable kecuali jika acara dibatalkan oleh penyelenggara atau sesuai dengan klausa "Money Back Guarantee" yang tertera pada halaman penawaran (60 menit pertama webinar).</p>
    
    <h4 className="font-bold text-slate-900 mt-4">2. Hak Kekayaan Intelektual</h4>
    <p>Seluruh materi webinar, modul, dan rekaman adalah hak cipta Kelas Inovatif. Peserta dilarang menyebarluaskan, menjual kembali, atau merekam ulang materi tanpa izin tertulis.</p>
    
    <h4 className="font-bold text-slate-900 mt-4">3. Etika Pembelajaran</h4>
    <p>Kami menjunjung tinggi integritas akademik. Penggunaan tools AI yang diajarkan bertujuan untuk asistensi riset, bukan untuk fabrikasi data atau plagiarisme.</p>
  </Modal>
);
