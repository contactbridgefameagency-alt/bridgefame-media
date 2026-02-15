
import React from 'react';
import { TRUST_STATS } from '../constants';

const Trust: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 pb-12 border-b border-zinc-900">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-20">
        {TRUST_STATS.map((stat, idx) => (
          <div key={idx} className="text-center group">
            <div className="text-4xl md:text-5xl font-bold mb-2 text-white group-hover:scale-110 transition-transform duration-300">
              {stat.value}
            </div>
            <div className="text-xs uppercase tracking-widest text-zinc-500 font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center">
        <p className="text-zinc-500 text-xs font-medium uppercase tracking-[0.2em] mb-10">
          Scaling Market Leaders In
        </p>
        <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {/* Fictional/Placeholder logo marks */}
          {['GLOWUP', 'VITADASH', 'SKINREPUBLIC', 'ZENLY', 'PURECARE'].map((brand) => (
            <div key={brand} className="text-2xl font-black tracking-tighter text-zinc-100 font-display">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trust;
