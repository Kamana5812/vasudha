import React from 'react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-ivory/95 backdrop-blur-sm shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex flex-col items-start">
          <span className={`text-2xl font-serif font-bold tracking-wider transition-colors duration-300 ${scrolled ? 'text-charcoal' : 'text-white'}`}>VASUDHA</span>
          <span className="text-sm font-serif text-gold">वसुधा</span>
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <button onClick={() => scrollTo('hero')} className={`hover:text-gold transition ${scrolled ? 'text-charcoal' : 'text-white'}`}>Home</button>
          <button onClick={() => scrollTo('properties')} className={`hover:text-gold transition ${scrolled ? 'text-charcoal' : 'text-white'}`}>Properties</button>
          <button onClick={() => scrollTo('about')} className={`hover:text-gold transition ${scrolled ? 'text-charcoal' : 'text-white'}`}>About</button>
          <button onClick={() => scrollTo('contact')} className={`hover:text-gold transition ${scrolled ? 'text-charcoal' : 'text-white'}`}>Contact</button>
          <button onClick={() => scrollTo('properties')} className="bg-charcoal text-ivory px-6 py-2 rounded-full hover:bg-gold transition-colors duration-300">
            Explore Properties
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className={scrolled ? 'text-charcoal' : 'text-white'} /> : <Menu className={scrolled ? 'text-charcoal' : 'text-white'} />}
        </button>
      </div>
      
      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-ivory absolute top-full left-0 w-full shadow-lg flex flex-col p-6 space-y-4">
          <button onClick={() => scrollTo('hero')} className="text-left">Home</button>
          <button onClick={() => scrollTo('properties')} className="text-left">Properties</button>
          <button onClick={() => scrollTo('about')} className="text-left">About</button>
          <button onClick={() => scrollTo('contact')} className="text-left">Contact</button>
          <button onClick={() => scrollTo('properties')} className="bg-charcoal text-ivory px-6 py-2 rounded-full mt-4">
            Explore Properties
          </button>
        </div>
      )}
    </nav>
  );
}