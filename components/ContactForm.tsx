
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend or CRM
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto text-center py-20 animate-in fade-in scale-in duration-500">
        <div className="w-20 h-20 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Strategy Request Received.</h2>
        <p className="text-zinc-400 mb-8">Atharva or one of our strategists will reach out to you within 24 hours to schedule your audit.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-zinc-500 underline hover:text-white transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8">
            Build Your Next <br />
            <span className="text-zinc-500 italic">Campaign.</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-12 max-w-md">
            Stop guessing. Get a battle-tested strategy that bridges your product with the right audience.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-zinc-400">
              <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
              <span>Immediate ROI Audit</span>
            </div>
            <div className="flex items-center gap-4 text-zinc-400">
              <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
              <span>Creator Gap Analysis</span>
            </div>
            <div className="flex items-center gap-4 text-zinc-400">
              <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
              <span>Custom SKU Playbook</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-8 md:p-12 rounded-[2rem] bg-zinc-900/40 border border-zinc-800 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Name</label>
              <input required type="text" placeholder="John Doe" className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-white transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Brand Name</label>
              <input required type="text" placeholder="Your D2C Brand" className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-white transition-colors" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Work Email</label>
            <input required type="email" placeholder="john@brand.com" className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-4 text-white placeholder:text-zinc-700 focus:outline-none focus:border-white transition-colors" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Monthly Budget</label>
              <select className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-white transition-colors">
                <option value="">Select range</option>
                <option value="5k-10k">$5k - $10k</option>
                <option value="10k-25k">$10k - $25k</option>
                <option value="25k-50k">$25k - $50k</option>
                <option value="50k+">$50k+</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Primary Goal</label>
              <select className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-white transition-colors">
                <option value="">Select goal</option>
                <option value="roas">Predictable ROAS</option>
                <option value="launch">New Product Launch</option>
                <option value="awareness">Market Dominance</option>
                <option value="testing">Creator Testing</option>
              </select>
            </div>
          </div>

          <button type="submit" className="w-full py-5 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all transform active:scale-95 shadow-xl shadow-white/5">
            Book My Audit
            <Send className="w-4 h-4" />
          </button>
          
          <p className="text-[10px] text-zinc-600 text-center uppercase tracking-widest mt-4">
            No spam. No fluff. Just high-level strategy.
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
