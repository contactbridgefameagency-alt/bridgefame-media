
import React from 'react';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5 sticky top-32">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Built For <span className="text-zinc-500 italic">Scale.</span> <br />
            Our Modular <br />
            Process.
          </h2>
          <p className="text-zinc-400 mb-8 leading-relaxed max-w-sm">
            We operate like your internal marketing team, not an external agency. Deep integration is the only way to drive real results.
          </p>
          <div className="flex gap-4">
            <div className="w-12 h-1 bg-white"></div>
            <div className="w-12 h-1 bg-zinc-800"></div>
            <div className="w-12 h-1 bg-zinc-800"></div>
          </div>
        </div>
        
        <div className="lg:col-span-7 space-y-4">
          {PROCESS_STEPS.map((step, i) => (
            <div key={i} className="group relative p-10 rounded-3xl bg-zinc-900/30 border border-zinc-800/50 hover:bg-zinc-900 transition-all overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/5 group-hover:text-white/10 transition-colors pointer-events-none">
                {step.id}
              </div>
              <div className="relative z-10">
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 block">Step {step.id}</span>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-zinc-400 leading-relaxed max-w-md">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
