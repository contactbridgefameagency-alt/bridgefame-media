
import React from 'react';
import { SERVICES } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Outcome-Driven Systems.</h2>
          <p className="text-zinc-500 text-lg">
            We don't sell 'posts'. We install marketing systems into your brand ecosystem that generate sustainable growth.
          </p>
        </div>
        <a href="#contact" className="text-sm font-bold flex items-center gap-2 group border-b border-white pb-1">
          Explore All Solutions
          <CheckCircle2 className="w-4 h-4" />
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((s, i) => (
          <div key={i} className="flex flex-col h-full p-8 rounded-3xl bg-gradient-to-br from-zinc-900 to-black border border-zinc-800/50 hover:border-white/20 transition-all">
            <div className="mb-6">{s.icon}</div>
            <h3 className="text-xl font-bold mb-3">{s.title}</h3>
            <p className="text-zinc-500 text-sm mb-8 flex-grow leading-relaxed">
              {s.description}
            </p>
            <div className="pt-6 border-t border-zinc-800">
              <span className="text-[10px] uppercase tracking-widest text-zinc-600 block mb-2 font-bold">Key Outcome</span>
              <p className="text-sm font-semibold text-zinc-300">{s.outcome}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
