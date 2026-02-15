
import React from 'react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-glass border-b border-zinc-800/50 py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <span className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-black rounded-sm transform rotate-45"></div>
          </span>
          BRIDGEFAME
        </a>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#about" className="hover:text-white transition-colors">Our Edge</a>
          <a href="#services" className="hover:text-white transition-colors">Outcomes</a>
          <a href="#process" className="hover:text-white transition-colors">Methodology</a>
          <a href="#contact" className="px-5 py-2.5 bg-zinc-100 text-zinc-950 rounded-full hover:bg-white transition-all transform hover:scale-105">
            Book a Strategy Call
          </a>
        </div>

        {/* Mobile menu could be added here for a full implementation */}
      </div>
    </nav>
  );
};

export default Navbar;
