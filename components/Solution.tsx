
import React from 'react';
import { Cpu, Target, Layers, Repeat } from 'lucide-react';

const Solution: React.FC = () => {
  const edges = [
    {
      title: "Pre-vetted Creator Clusters",
      desc: "We don't work with solo creators. We activate 'clusters' of 5-10 influencers who share an audience, creating massive social frequency.",
      icon: <Layers className="w-5 h-5" />
    },
    {
      title: "Audience Psychology Mapping",
      desc: "We analyze why your customers buy and match that intent with creators whose authority spans those specific triggers.",
      icon: <Target className="w-5 h-5" />
    },
    {
      title: "SKU-Based Strategy",
      desc: "We don't just market 'your brand'. We build hyper-targeted campaigns for your hero SKUs to ensure inventory turnover.",
      icon: <Cpu className="w-5 h-5" />
    },
    {
      title: "Multi-Creator Testing Model",
      desc: "We treat creators like Facebook Ads. We test hooks, styles, and demographics at small scale before scaling the winners.",
      icon: <Repeat className="w-5 h-5" />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
          The BridgeFame <span className="text-zinc-500">Method.</span>
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
          We combine data-driven precision with high-level creative direction to build influencer campaigns that actually move the needle.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {edges.map((edge, idx) => (
          <div key={idx} className="flex gap-6 p-8 rounded-3xl bg-zinc-950 border border-zinc-900 group hover:border-zinc-700 transition-all">
            <div className="flex-shrink-0 w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center border border-zinc-800 text-white group-hover:bg-white group-hover:text-black transition-all">
              {edge.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">{edge.title}</h3>
              <p className="text-zinc-500 leading-relaxed">
                {edge.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solution;
