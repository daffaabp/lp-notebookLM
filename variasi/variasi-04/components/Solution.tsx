import React from 'react';

const Solution: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-slate-100 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

        <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                    Solusi: NotebookLM <br className="hidden md:block"/> 
                    <span className="text-blue-600">Strategic Knowledge Hub 2025</span>
                </h2>
                <p className="text-lg text-slate-700 max-w-3xl mx-auto">
                    Sistem kecerdasan buatan berbasis <strong>Gemini 3</strong> yang membatasi nalarnya hanya pada data TERPERCAYA organisasi Anda.
                </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="bg-white p-10 rounded-3xl shadow-xl border-l-8 border-blue-600 transform transition-transform hover:scale-[1.02]">
                    <h5 className="font-black text-2xl mb-4 text-blue-900">Analisis Strategis Tanpa Ragu</h5>
                    <p className="text-slate-600 leading-relaxed mb-6">
                        Dapatkan jawaban yang disertai <strong>Sitasi Inline Verbatim</strong> <span className="citation-marker" title="Citation Source">2</span>. 
                        Klik angka tersebut untuk melihat tepat di paragraf mana AI menemukan informasinya.
                    </p>
                    <ul className="space-y-4 font-bold text-slate-800">
                        <li className="flex items-start gap-3">
                            <i className="fas fa-check-circle text-green-500 mt-1"></i>
                            <span>Summary Laporan Keuangan Instan.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <i className="fas fa-check-circle text-green-500 mt-1"></i>
                            <span>Gap Analysis Strategi Kompetitor.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <i className="fas fa-check-circle text-green-500 mt-1"></i>
                            <span>Onboarding Karyawan 3x Lebih Cepat.</span>
                        </li>
                    </ul>
                </div>

                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-2xl shadow-lg flex items-center gap-6 hover:shadow-xl transition-shadow border border-slate-100">
                        <div className="bg-blue-100 p-4 rounded-xl text-blue-600 text-2xl h-16 w-16 flex items-center justify-center shrink-0">
                            <i className="fas fa-table"></i>
                        </div>
                        <div>
                            <h6 className="font-black text-lg text-slate-900">Data Tables & Export</h6>
                            <p className="text-sm text-slate-500 mt-1">Ubah transkrip rapat berantakan menjadi tabel tugas di Google Sheets secara otomatis.</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg flex items-center gap-6 hover:shadow-xl transition-shadow border border-slate-100">
                        <div className="bg-blue-100 p-4 rounded-xl text-blue-600 text-2xl h-16 w-16 flex items-center justify-center shrink-0">
                            <i className="fas fa-podcast"></i>
                        </div>
                        <div>
                            <h6 className="font-black text-lg text-slate-900">Audio Overviews 2.0</h6>
                            <p className="text-sm text-slate-500 mt-1">Ubah laporan 100 halaman menjadi podcast 10 menit untuk didengar saat berangkat kantor.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Solution;