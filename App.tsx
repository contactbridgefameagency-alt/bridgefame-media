
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Services from './components/Services';
import Process from './components/Process';
import CaseStudy from './components/CaseStudy';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-zinc-100 selection:text-zinc-900">
      <Navbar scrolled={scrolled} />
      
      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="trust">
          <Trust />
        </section>

        <section id="about" className="py-24">
          <Problem />
        </section>

        <section id="solution" className="py-24 bg-zinc-900/30">
          <Solution />
        </section>

        <section id="services" className="py-24">
          <Services />
        </section>

        <section id="process" className="py-24 bg-zinc-900/20">
          <Process />
        </section>

        <section id="case-studies" className="py-24">
          <CaseStudy />
        </section>

        <section id="contact" className="py-32 bg-gradient-to-b from-zinc-950 to-[#0a0a0a]">
          <ContactForm />
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
