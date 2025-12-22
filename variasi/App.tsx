import React from 'react';

interface Variation {
  id: string;
  name: string;
  description: string;
  buyerPersona: string;
  color: string;
}

const variations: Variation[] = [
  {
    id: 'variasi-01',
    name: 'Variasi 01',
    description: 'Masterclass NotebookLM untuk Academic & Researchers',
    buyerPersona: 'Peneliti & Akademisi',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'variasi-02',
    name: 'Variasi 02',
    description: 'Masterclass NotebookLM: Legal & Compliance',
    buyerPersona: 'Legal & Compliance Professionals',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'variasi-03',
    name: 'Variasi 03',
    description: 'Masterclass NotebookLM untuk Medical Research',
    buyerPersona: 'Medical Researchers',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'variasi-04',
    name: 'Variasi 04',
    description: 'NotebookLM Webinar untuk Corporate Strategy',
    buyerPersona: 'Corporate Strategists',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'variasi-05',
    name: 'Variasi 05',
    description: 'Masterclass NotebookLM untuk Writers & Creators',
    buyerPersona: 'Writers & Content Creators',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'variasi-06',
    description: 'Masterclass NotebookLM: Solusi Ibu Pintar Era Digital',
    buyerPersona: 'Smart Moms / Ibu-ibu',
    name: 'Variasi 06',
    color: 'from-pink-500 to-rose-500'
  },
  {
    id: 'variasi-07',
    name: 'Variasi 07',
    description: 'Masterclass ASN Digital untuk Civil Servants',
    buyerPersona: 'ASN / PNS',
    color: 'from-teal-500 to-cyan-500'
  },
  {
    id: 'variasi-08',
    name: 'Variasi 08',
    description: 'Webinar NotebookLM: Transforming Academic Research',
    buyerPersona: 'Academic Researchers',
    color: 'from-blue-600 to-indigo-600'
  },
  {
    id: 'variasi-09',
    name: 'Variasi 09',
    description: 'Webinar NotebookLM untuk Legal Research & Mediation',
    buyerPersona: 'Legal Professionals',
    color: 'from-violet-500 to-purple-500'
  },
  {
    id: 'variasi-10',
    name: 'Variasi 10',
    description: 'Webinar Legal AI dengan NotebookLM',
    buyerPersona: 'Legal AI Practitioners',
    color: 'from-purple-600 to-pink-600'
  },
  {
    id: 'variasi-11',
    name: 'Variasi 11',
    description: 'Webinar NotebookLM untuk Ibu Rumah Tangga (IRT)',
    buyerPersona: 'Ibu Rumah Tangga',
    color: 'from-rose-500 to-pink-500'
  }
];

const App: React.FC = () => {
  // Determine if we're in development or production
  const isDevelopment = import.meta.env.DEV;
  
  // Get base URL for links
  const getVariationUrl = (variationId: string) => {
    if (isDevelopment) {
      // In development, each variasi runs on different ports
      const portMap: Record<string, number> = {
        'variasi-01': 3001,
        'variasi-02': 3002,
        'variasi-03': 3003,
        'variasi-04': 3004,
        'variasi-05': 3005,
        'variasi-06': 3006,
        'variasi-07': 3007,
        'variasi-08': 3008,
        'variasi-09': 3009,
        'variasi-10': 3010,
        'variasi-11': 3011,
      };
      return `http://localhost:${portMap[variationId] || 3001}`;
    }
    // In production (Vercel), use relative paths
    return `/${variationId}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Landing Page Variations Hub
        </h1>
        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto">
          Pilih landing page sesuai dengan buyer persona Anda. Setiap variasi dirancang khusus untuk target audience yang berbeda.
        </p>
      </header>

      {/* Variations Grid */}
      <main className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {variations.map((variation) => (
            <a
              key={variation.id}
              href={getVariationUrl(variation.id)}
              target={isDevelopment ? "_blank" : "_self"}
              rel={isDevelopment ? "noopener noreferrer" : undefined}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-slate-500 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Gradient Accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${variation.color} rounded-t-2xl`}></div>
              
              {/* Content */}
              <div className="pt-2">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${variation.color} text-white`}>
                    {variation.name}
                  </span>
                  <svg 
                    className="w-5 h-5 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                
                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                  {variation.buyerPersona}
                </h2>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {variation.description}
                </p>
                
                <div className="flex items-center text-slate-500 text-xs font-medium">
                  <span>Klik untuk melihat →</span>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${variation.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
            </a>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center border-t border-slate-700">
        <p className="text-slate-400 text-sm">
          © 2025 Kelas Inovatif. Semua variasi landing page dirancang untuk optimasi konversi sesuai buyer persona.
        </p>
      </footer>
    </div>
  );
};

export default App;

