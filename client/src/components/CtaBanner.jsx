import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CtaBanner() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-teal-700 via-teal-600 to-teal-800 py-10 px-6"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Your Dream Home is Just a Search Away
            </h3>
            <p className="text-teal-100 text-sm md:text-base">
              Join thousands of happy home seekers and start your journey today.
            </p>
          </div>
          <button
            onClick={() => scrollTo('hero')}
            className="bg-white text-teal-700 px-8 py-3.5 rounded-lg font-bold text-sm hover:bg-teal-50 transition-colors flex items-center gap-2 shadow-xl shadow-black/10 whitespace-nowrap"
          >
            Start Searching <ArrowRight size={18} />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
