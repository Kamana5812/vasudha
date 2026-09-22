import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const cities = [
  {
    name: 'Lucknow',
    count: '1,284',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Bengaluru',
    count: '3,911',
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Mumbai',
    count: '4,830',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Delhi',
    count: '2,245',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Pune',
    count: '2,184',
    image: 'https://images.unsplash.com/photo-1572445271230-a78b5944a659?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Hyderabad',
    count: '1,870',
    image: 'https://images.unsplash.com/photo-1603813507806-8e3db1069527?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Noida',
    count: '1,745',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Chennai',
    count: '1,921',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=400&q=80',
  },
];

export default function PopularLocations() {
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
            <h2 className="text-3xl font-bold text-navy">
              Explore Popular Locations
            </h2>
            <p className="text-gray-500 mt-2">
              Discover top cities and localities with the best property options.
            </p>
          </motion.div>
          <a
            href="#"
            className="hidden md:flex items-center gap-1 text-teal-600 font-semibold text-sm hover:text-teal-700 transition-colors"
          >
            View All Cities <ArrowRight size={16} />
          </a>
        </div>

        {/* City Cards - Horizontal Scroll */}
        <div className="flex gap-5 overflow-x-auto scrollbar-hide pb-4">
          {cities.map((city, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="location-card group w-36 md:w-40 h-44 md:h-48 flex-shrink-0"
            >
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h4 className="font-bold text-sm">{city.name}</h4>
                <p className="text-white/70 text-xs">
                  {city.count} properties
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
