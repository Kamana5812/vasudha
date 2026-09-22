import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
  {
    title: 'Buy Home',
    subtitle: 'Apartments, Villas, Houses,\nPlots & more',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Rent',
    subtitle: 'Apartments, Houses,\nPG/Co-living & more',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'New Projects',
    subtitle: 'Under construction &\nReady to move',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Commercial',
    subtitle: 'Offices, Shops, Warehouses,\nLand & more',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
  },
];

export default function ExploreByNeed() {
  return (
    <section className="py-16 bg-light-gray">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-end mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-navy">Explore by Need</h2>
            <p className="text-gray-500 mt-2">
              Find the right property for your lifestyle and goals.
            </p>
          </motion.div>
          <a
            href="#"
            className="hidden md:flex items-center gap-1 text-teal-600 font-semibold text-sm hover:text-teal-700 transition-colors"
          >
            View All <ArrowRight size={16} />
          </a>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="category-card group h-52 md:h-64"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                <h3 className="text-white font-bold text-lg mb-1">
                  {cat.title}
                </h3>
                <p className="text-white/70 text-xs whitespace-pre-line leading-relaxed">
                  {cat.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
