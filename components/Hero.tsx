
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-12 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs font-medium text-zinc-400 mb-8 tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          FOR D2C BRANDS SEEKING PREDICTABLE ROAS
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.05] gradient-text">
          Stop Buying Posts. <br className="hidden md:block" />
          Start Building <br className="hidden md:block" />
          <span className="text-white">Influence Engines.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          BridgeFame transforms random creator outreach into high-velocity revenue streams through SKU-based strategy and deep audience psychology mapping.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="group w-full sm:w-auto px-8 py-4 bg-zinc-100 text-zinc-950 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg shadow-white/5">
            Get Creator Strategy
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#case-studies" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-zinc-800 text-zinc-300 rounded-xl font-bold hover:bg-zinc-900 transition-all">
            View Case Studies
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
