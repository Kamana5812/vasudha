import React from 'react';
import { useState, useEffect } from 'react';
import { Menu, X, Heart, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Buy', hasDropdown: true },
  { label: 'Rent', hasDropdown: true },
  { label: 'New Projects', hasDropdown: false },
  { label: 'Commercial', hasDropdown: true },
  { label: 'Insights', hasDropdown: true },
];

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
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2"
        >
          <img
            src="/vasudha-logo.png"
            alt="Vasudha"
            className="h-10 w-10 object-contain"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-navy tracking-wide leading-none">
              Vasudha
            </span>
            <span className="text-[10px] text-teal-600 font-medium tracking-wider">
              Premium Properties
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo('hero')}
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors rounded-lg hover:bg-gray-50"
            >
              {link.label}
              {link.hasDropdown && (
                <ChevronDown size={14} className="text-gray-400" />
              )}
            </button>
          ))}
        </div>

        {/* Desktop Right Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Heart size={20} className="text-gray-500" />
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="bg-teal-500 hover:bg-teal-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors shadow-lg shadow-teal-500/20"
          >
            Post Property
          </button>
          <button className="text-sm font-medium text-gray-600 hover:text-teal-600 transition-colors">
            Login / Sign Up
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className="text-gray-700" size={24} />
          ) : (
            <Menu className="text-gray-700" size={24} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white absolute top-full left-0 w-full shadow-xl border-t border-gray-100">
          <div className="flex flex-col p-6 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo('hero')}
                className="text-left px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
            <hr className="my-3 border-gray-100" />
            <button
              onClick={() => scrollTo('contact')}
              className="bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold text-center"
            >
              Post Property
            </button>
            <button className="text-center text-sm font-medium text-gray-600 py-2">
              Login / Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}