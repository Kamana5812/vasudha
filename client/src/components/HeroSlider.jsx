import React, { useState, useEffect, useCallback } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    image: '/hero-slide-1.jpg',
    subtitle: 'Premium Homes. Brighter Futures.',
  },
  {
    image: '/hero-slide-2.jpg',
    subtitle: 'Luxury Villas with Modern Living.',
  },
  {
    image: '/hero-slide-3.jpg',
    subtitle: 'Interiors That Inspire.',
  },
  {
    image: '/hero-slide-4.jpg',
    subtitle: 'Thoughtfully Planned Communities.',
  },
];

const searchTabs = ['Buy', 'Rent', 'New Projects', 'Commercial'];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('Buy');

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="hero" className="relative h-[85vh] min-h-[600px] overflow-hidden">
      {/* Sliding Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
        >
          <img
            src={slide.image}
            alt={slide.subtitle}
            loading={index === 0 ? 'eager' : 'lazy'}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start px-6 md:px-16 lg:px-24 max-w-7xl mx-auto w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <p className="text-white/90 text-lg md:text-xl font-light mb-3 tracking-wide">
              {slides[currentSlide].subtitle}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-2xl">
              Find Your Perfect
              <br />
              Place with{' '}
              <span className="text-teal-300">Vasudha</span>
            </h1>
            <p className="text-white/80 mt-4 text-base md:text-lg max-w-xl font-light">
              Discover verified properties, get AI-powered recommendations,
              compare options and make confident decisions.
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Search Bar */}
        <div className="w-full max-w-4xl mt-2">
          {/* Tabs */}
          <div className="flex bg-white/95 backdrop-blur-md rounded-t-xl border-b border-gray-200">
            {searchTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`search-tab ${activeTab === tab ? 'active' : ''}`}
              >
                {tab === 'Buy' && '🏠 '}
                {tab === 'Rent' && '🔑 '}
                {tab === 'New Projects' && '🏗️ '}
                {tab === 'Commercial' && '🏢 '}
                {tab}
              </button>
            ))}
          </div>

          {/* Search Fields */}
          <div className="bg-white/95 backdrop-blur-md rounded-b-xl p-4 flex flex-col md:flex-row items-center gap-3 shadow-2xl">
            <div className="flex items-center gap-2 flex-1 border border-gray-200 rounded-lg px-4 py-3 w-full md:w-auto">
              <Search size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search city, locality, project or landmark"
                className="flex-1 outline-none text-sm text-gray-700 bg-transparent placeholder:text-gray-400"
              />
            </div>

            <div className="flex gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:flex-none">
                <select className="appearance-none border border-gray-200 rounded-lg px-4 py-3 pr-8 text-sm text-gray-600 bg-white cursor-pointer outline-none w-full">
                  <option>Property Type</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Plot</option>
                  <option>House</option>
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>

              <div className="relative flex-1 md:flex-none">
                <select className="appearance-none border border-gray-200 rounded-lg px-4 py-3 pr-8 text-sm text-gray-600 bg-white cursor-pointer outline-none w-full">
                  <option>BHK</option>
                  <option>1 BHK</option>
                  <option>2 BHK</option>
                  <option>3 BHK</option>
                  <option>4+ BHK</option>
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>

              <div className="relative flex-1 md:flex-none">
                <select className="appearance-none border border-gray-200 rounded-lg px-4 py-3 pr-8 text-sm text-gray-600 bg-white cursor-pointer outline-none w-full">
                  <option>Budget</option>
                  <option>Under ₹50 Lakh</option>
                  <option>₹50L - ₹1 Cr</option>
                  <option>₹1 Cr - ₹2 Cr</option>
                  <option>₹2 Cr+</option>
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2 w-full md:w-auto justify-center shadow-lg shadow-teal-500/20">
              <Search size={18} />
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Slide Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-8 h-3 bg-teal-400'
                : 'w-3 h-3 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
