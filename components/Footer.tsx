
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-zinc-900 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-20">
          <div className="max-w-xs">
            <div className="text-2xl font-bold tracking-tighter mb-6 flex items-center gap-2">
              <span className="w-6 h-6 bg-white rounded-md flex items-center justify-center">
                <div className="w-3 h-3 bg-black rounded-sm transform rotate-45"></div>
              </span>
              BRIDGEFAME
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Premium influencer marketing for brands who value strategy over vanity. We bridge the gap between creators and commerce.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white">Agency</h4>
              <nav className="flex flex-col gap-3 text-sm text-zinc-500">
                <a href="#about" className="hover:text-white transition-colors">Our Edge</a>
                <a href="#services" className="hover:text-white transition-colors">Outcomes</a>
                <a href="#process" className="hover:text-white transition-colors">Methodology</a>
              </nav>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white">Contact</h4>
              <div className="flex flex-col gap-3 text-sm text-zinc-500">
                <span>Atharva</span>
                <a href="tel:9909823743" className="hover:text-white transition-colors">9909823743</a>
                <a href="mailto:hello@bridgefamemedia.com" className="hover:text-white transition-colors">Email Us</a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white">Social</h4>
              <nav className="flex flex-col gap-3 text-sm text-zinc-500">
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors">Twitter (X)</a>
              </nav>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-zinc-900 text-[10px] text-zinc-600 uppercase tracking-widest font-bold">
          <div>© {new Date().getFullYear()} BridgeFame Media. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
