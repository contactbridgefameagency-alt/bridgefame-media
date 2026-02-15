
import React from 'react';
import { ShieldX, AlertTriangle, TrendingDown } from 'lucide-react';

const Problem: React.FC = () => {
  const problems = [
    {
      title: "Influencers Don't Convert",
      desc: "Most agencies sell you 'reach' and 'likes' while your checkout page stays silent.",
      icon: <TrendingDown className="text-red-500 w-6 h-6" />
    },
    {
      title: "Random Creator Selection",
      desc: "Picking influencers because of their aesthetic rather than their audience psychology.",
      icon: <AlertTriangle className="text-red-500 w-6 h-6" />
    },
    {
      title: "High Spend, Low ROI",
      desc: "Burning thousands on un-vetted creators with no feedback loop for optimization.",
      icon: <ShieldX className="text-red-500 w-6 h-6" />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row gap-16 items-start">
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            The Influencer Marketing <br />
            <span className="text-zinc-500">Industry Is Broken.</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
            Most brands treat influencer marketing as a lottery. You send products, pay for posts, and pray for sales. That's not a strategy—it's a gamble.
          </p>
          <div className="h-px w-24 bg-zinc-800"></div>
        </div>
        
        <div className="md:w-1/2 grid gap-6">
          {problems.map((p, i) => (
            <div key={i} className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 hover:border-zinc-700 transition-all group">
              <div className="mb-4">{p.icon}</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">{p.title}</h3>
              <p className="text-zinc-500 leading-relaxed text-sm">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Problem;
