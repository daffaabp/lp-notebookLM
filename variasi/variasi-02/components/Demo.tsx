import React, { useState } from 'react';
import { Sparkles, Send, Loader2, BookOpen } from 'lucide-react';
import { summarizeLegalConcept } from '../services/geminiService';

export const Demo: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    const result = await summarizeLegalConcept(query);
    setResponse(result);
    setLoading(false);
  };

  return (
    <section className="py-20 px-4 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-bold mb-4">
            <Sparkles size={16} />
            <span>LIVE PREVIEW</span>
          </div>
          <h2 className="text-3xl font-black mb-4">Coba "NotebookLM" Mini</h2>
          <p className="text-slate-600">
            Rasakan bagaimana AI memberikan jawaban yang <span className="font-bold">grounded</span>. 
            (Demo ini menggunakan Gemini Flash untuk simulasi).
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="p-6 bg-slate-800 text-white flex items-center justify-between">
            <h3 className="font-bold flex items-center gap-2">
              <BookOpen size={20} />
              Asisten Riset Hukum
            </h3>
            <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded">Active</span>
          </div>
          
          <div className="p-6 md:p-8 space-y-6">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Contoh: Apa itu Force Majeure dalam kontrak konstruksi?"
                className="w-full pl-4 pr-14 py-4 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition text-slate-700 font-medium"
              />
              <button 
                type="submit" 
                disabled={loading || !query}
                className="absolute right-2 top-2 bottom-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white p-3 rounded-lg transition-colors"
              >
                {loading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
              </button>
            </form>

            {response && (
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 animate-fade-in">
                <div className="prose prose-slate max-w-none">
                  <p className="whitespace-pre-wrap text-slate-700 leading-relaxed">
                    {response}
                  </p>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="inline-block bg-slate-200 text-slate-600 text-xs font-bold px-2 py-1 rounded-full cursor-pointer hover:bg-slate-300 transition">
                    Sumber [1]
                  </span>
                  <span className="inline-block bg-slate-200 text-slate-600 text-xs font-bold px-2 py-1 rounded-full cursor-pointer hover:bg-slate-300 transition">
                    Sumber [2]
                  </span>
                </div>
              </div>
            )}
            
            {!response && !loading && (
              <div className="text-center text-slate-400 py-8">
                <p className="text-sm">Masukkan pertanyaan hukum di atas untuk melihat demonstrasi.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};