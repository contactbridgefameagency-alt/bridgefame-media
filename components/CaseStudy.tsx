
import React from 'react';
import { TrendingUp, Users, Target } from 'lucide-react';

const CaseStudy: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="p-1 md:p-12 rounded-[2.5rem] bg-zinc-900/40 border border-zinc-800/50">
        <div className="flex flex-col lg:flex-row items-center gap-12 p-8">
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold uppercase tracking-widest mb-6">
              Case Study: Skincare Brand
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Dominating the <br /> 
              "Glass Skin" Niche.
            </h2>
            
            <div className="space-y-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">3.8x ROAS</h4>
                  <p className="text-zinc-500 text-sm">Direct-response revenue generated via creator clusters.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">14 Creators Activated</h4>
                  <p className="text-zinc-500 text-sm">Strategic mix of micro-influencers and authority figures.</p>
                </div>
              </div>
            </div>

            <p className="text-zinc-400 italic border-l-2 border-zinc-800 pl-6 mb-10">
              "BridgeFame didn't just find us influencers. They found us our biggest revenue drivers of 2024. Their psychological approach is unmatched."
            </p>
            
            <div className="flex items-center gap-3">
              <img src="https://picsum.photos/40/40" className="w-10 h-10 rounded-full grayscale" alt="Testimonial" />
              <div>
                <p className="text-sm font-bold">Marketing Director</p>
                <p className="text-xs text-zinc-500 uppercase tracking-widest">Premium Skincare D2C</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
             <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-64 bg-zinc-800/50 rounded-2xl overflow-hidden relative">
                    <img src="https://picsum.photos/400/600?random=1" className="w-full h-full object-cover grayscale opacity-50 hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-4 left-4 text-xs font-bold uppercase tracking-widest bg-black/50 px-2 py-1">Hook Test A</div>
                  </div>
                  <div className="h-48 bg-zinc-800/50 rounded-2xl overflow-hidden relative">
                    <img src="https://picsum.photos/400/400?random=2" className="w-full h-full object-cover grayscale opacity-50 hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="h-48 bg-zinc-800/50 rounded-2xl overflow-hidden relative">
                    <img src="https://picsum.photos/400/400?random=3" className="w-full h-full object-cover grayscale opacity-50 hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="h-64 bg-zinc-800/50 rounded-2xl overflow-hidden relative">
                    <img src="https://picsum.photos/400/600?random=4" className="w-full h-full object-cover grayscale opacity-50 hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-4 left-4 text-xs font-bold uppercase tracking-widest bg-black/50 px-2 py-1">Conversion Win</div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
