import React from 'react'; // <-- ADD THIS LINE
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-ivory/95 backdrop-blur-sm shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex flex-col items-start">
          <span className="text-2xl font-serif font-bold tracking-wider text-charcoal">VASUDHA</span>
          <span className="text-sm font-serif text-gold">वसुधा</span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link to="/" className="hover:text-gold transition">Home</Link>
          <Link to="/properties" className="hover:text-gold transition">Properties</Link>
          <Link to="/about" className="hover:text-gold transition">About</Link>
          <Link to="/contact" className="hover:text-gold transition">Contact</Link>
          <button className="bg-charcoal text-ivory px-6 py-2 rounded-full hover:bg-gold transition-colors duration-300">
            Explore Properties
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-ivory absolute top-full left-0 w-full shadow-lg flex flex-col p-6 space-y-4">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/properties" onClick={() => setIsOpen(false)}>Properties</Link>
          <button className="bg-charcoal text-ivory px-6 py-2 rounded-full mt-4">
            Explore Properties
          </button>
        </div>
      )}
    </nav>
  );
}