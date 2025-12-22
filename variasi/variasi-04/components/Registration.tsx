import React, { useState } from 'react';

const Registration: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Terima kasih, ${formData.name}. Anda akan segera dialihkan ke halaman pembayaran.`);
    };

    return (
        <>
            {/* MONEY BACK GUARANTEE */}
            <section className="py-16 bg-blue-50 text-center px-4">
                <div className="max-w-3xl mx-auto border-4 border-dashed border-blue-200 p-10 rounded-3xl bg-white/50 backdrop-blur-sm">
                    <div className="text-6xl text-blue-600 mb-6 animate-bounce duration-[2000ms]">
                        <i className="fas fa-shield-check"></i>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Garansi Uang Kembali 100% (No Questions Asked)</h3>
                    <p className="text-slate-600 text-lg leading-relaxed font-medium">
                        Jika dalam 60 menit pertama webinar Anda merasa tidak mendapatkan taktik baru untuk meningkatkan produktivitas strategi Anda, kami kembalikan uang Anda 100%. Kami menjamin efisiensi atau uang kembali.
                    </p>
                </div>
            </section>

            {/* REGISTRATION FORM SECTION */}
            <section id="register" className="py-24 px-4 business-gradient relative">
                <div className="max-w-xl mx-auto bg-white rounded-3xl p-10 shadow-2xl relative overflow-hidden ring-4 ring-white/10" id="registration-form">
                    <div className="absolute top-0 right-0 bg-orange-600 text-white px-8 py-2 rounded-bl-3xl font-black tracking-widest text-xs uppercase shadow-md">
                        Diskon 75% Berakhir Hari Ini
                    </div>
                    <h2 className="text-3xl font-black text-center mb-4 text-slate-900 tracking-tighter">Formulir Pendaftaran</h2>
                    <p className="text-center text-slate-500 mb-10 font-bold uppercase text-xs tracking-widest italic">Persiapan Strategi Bisnis 2026 Anda Dimulai Di Sini</p>
                    
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-black text-slate-900 mb-2 uppercase" htmlFor="name">Nama Lengkap & Gelar *</label>
                            <input 
                                type="text" 
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                autoComplete="off"
                                className="w-full border-2 border-slate-100 bg-slate-50 p-4 rounded-xl focus:border-orange-500 outline-none transition shadow-sm text-slate-800" 
                                placeholder="Contoh: Budi Santoso, MBA" 
                                required 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-black text-slate-900 mb-2 uppercase" htmlFor="email">Email Aktif *</label>
                            <input 
                                type="email" 
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                autoComplete="off"
                                className="w-full border-2 border-slate-100 bg-slate-50 p-4 rounded-xl focus:border-orange-500 outline-none transition shadow-sm text-slate-800" 
                                placeholder="budi@gmail.com" 
                                required 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-black text-slate-900 mb-2 uppercase" htmlFor="whatsapp">Nomor WhatsApp *</label>
                            <input 
                                type="tel" 
                                id="whatsapp"
                                name="whatsapp"
                                value={formData.whatsapp}
                                onChange={handleChange}
                                autoComplete="off"
                                className="w-full border-2 border-slate-100 bg-slate-50 p-4 rounded-xl focus:border-orange-500 outline-none transition shadow-sm text-slate-800" 
                                placeholder="08123456789" 
                                required 
                            />
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl border-2 border-dashed border-blue-200">
                            <p className="text-xs font-black text-blue-800 mb-3 uppercase tracking-wider">Benefit Webinar Peserta:</p>
                            <ul className="text-sm space-y-3 text-slate-600 font-medium">
                                <li className="flex items-center"><i className="fas fa-check-circle text-blue-500 mr-2"></i> Akses Live Webinar & Sesi Tanya Jawab (92% Menyukainya!).</li>
                                <li className="flex items-center"><i className="fas fa-check-circle text-blue-500 mr-2"></i> NotebookLM Business Workbook (PDF).</li>
                                <li className="flex items-center"><i className="fas fa-check-circle text-blue-500 mr-2"></i> E-Certificate Kemahiran AI.</li>
                            </ul>
                        </div>
                        <button type="submit" className="w-full bg-orange-600 hover:bg-orange-500 text-white font-black py-5 rounded-2xl text-xl shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] uppercase tracking-widest flex items-center justify-center gap-2 group">
                            DAFTAR SEKARANG
                            <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                        </button>
                        <p className="text-center text-[10px] text-slate-400 mt-4 leading-tight italic">
                            Dengan mendaftar, Anda menyetujui Ketentuan Layanan dan Kebijakan Privasi kami sesuai standar perlindungan data Google Workspace Enterprise.
                        </p>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Registration;