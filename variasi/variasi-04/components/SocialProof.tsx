import React from 'react';

const SocialProof: React.FC = () => {
  return (
    <>
      {/* SPEAKER SECTION */}
      <section className="py-24 px-4 bg-slate-100">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-16">
              <div className="relative group">
                  <div className="absolute -inset-4 bg-blue-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
                  <img 
                    src="https://picsum.photos/300/300?grayscale" 
                    alt="M. Arianto - AI Engineer" 
                    className="relative rounded-3xl w-64 h-64 object-cover grayscale group-hover:grayscale-0 transition duration-500 shadow-2xl border-4 border-white"
                  />
              </div>
              <div className="text-center md:text-left">
                  <h3 className="text-3xl font-black text-slate-900 mb-2 uppercase">M. Arianto</h3>
                  <p className="text-blue-600 font-bold mb-6 text-lg tracking-widest">AI Engineer & Researcher</p>
                  <div className="relative">
                    <i className="fas fa-quote-left text-slate-300 text-4xl absolute -top-4 -left-6 z-0 opacity-50"></i>
                    <p className="text-slate-600 leading-relaxed italic text-lg relative z-10">
                        "Dengan pengalaman 10+ tahun dan 195+ proyek AI, saya siap membahas tips menguasai AI, teknik penulisan, dan research methodology sebagai AI Engineer, Researcher, dan Mentor profesional."
                    </p>
                  </div>
              </div>
          </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-4 bg-white border-y border-slate-200">
          <div className="max-w-6xl mx-auto">
              <p className="text-center text-slate-400 uppercase tracking-widest text-sm font-bold mb-16 italic">
                  91% Profesional B2B Memilih Webinar Sebagai Konten Pembelajaran Terbaik
              </p>
              <div className="grid md:grid-cols-2 gap-10">
                  <div className="p-10 bg-slate-50 rounded-3xl italic border-l-8 border-orange-600 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex text-orange-400 mb-4 gap-1 text-xs">
                          {[1,2,3,4,5].map(i => <i key={i} className="fas fa-star"></i>)}
                      </div>
                      <p className="text-slate-700 text-lg mb-6">"NotebookLM membantu tim kreatif kami beralih dari dokumentasi teknis yang membosankan ke perencanaan kreatif hanya dalam hitungan menit."</p>
                      <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-slate-300 flex items-center justify-center font-bold text-slate-600">TL</div>
                          <div>
                            <p className="font-black text-slate-900 text-sm">Team Lead</p>
                            <p className="text-xs text-slate-500 font-bold uppercase">Rivian Innovation Group</p>
                          </div>
                      </div>
                  </div>
                  <div className="p-10 bg-slate-50 rounded-3xl italic border-l-8 border-orange-600 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex text-orange-400 mb-4 gap-1 text-xs">
                          {[1,2,3,4,5].map(i => <i key={i} className="fas fa-star"></i>)}
                      </div>
                      <p className="text-slate-700 text-lg mb-6">"Gunakan untuk Client Prep. Sebelum meeting, AI membantu merangkum apa yang klien pedulikan dari semua histori data kami."</p>
                      <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-slate-300 flex items-center justify-center font-bold text-slate-600">SBA</div>
                          <div>
                            <p className="font-black text-slate-900 text-sm">Senior Business Analyst</p>
                            <p className="text-xs text-slate-500 font-bold uppercase">Fintech Unicorn ID</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
};

export default SocialProof;