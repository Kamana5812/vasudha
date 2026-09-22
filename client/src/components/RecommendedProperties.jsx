import React from 'react';
import { Heart, ArrowRight, MapPin, Maximize2, BedDouble, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const properties = [
  {
    name: '3 BHK Apartment',
    price: '₹78 Lakh',
    location: 'Gomti Nagar, Lucknow',
    area: '1,450 sq.ft',
    bhk: '3 BHK',
    status: 'Ready to Move',
    verified: true,
    rera: true,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: '4 BHK Villa',
    price: '₹1.8 Cr',
    location: 'Sector 62, Noida',
    area: '2,800 sq.ft',
    bhk: '4 BHK',
    status: 'Ready to Move',
    verified: true,
    rera: true,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: '2 BHK Apartment',
    price: '₹52 Lakh',
    location: 'Whitefield, Bengaluru',
    area: '1,280 sq.ft',
    bhk: '2 BHK',
    status: 'Under Construction',
    verified: true,
    rera: true,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: '4 BHK Independent House',
    price: '₹65 Lakh',
    location: 'Indirapuram, Ghaziabad',
    area: '2,400 sq.ft',
    bhk: '4 BHK',
    status: 'Ready to Move',
    verified: false,
    rera: true,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
  },
];

export default function RecommendedProperties() {
  return (
    <section className="py-16 bg-white">
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
              Recommended For You
            </h2>
            <p className="text-gray-500 mt-2">
              Based on your search history, preferences and location.
            </p>
          </motion.div>
          <a
            href="#"
            className="hidden md:flex items-center gap-1 text-teal-600 font-semibold text-sm hover:text-teal-700 transition-colors"
          >
            View All <ArrowRight size={16} />
          </a>
        </div>

        {/* Property Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((prop, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="property-card"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={prop.image}
                  alt={prop.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {prop.verified && (
                  <div className="absolute top-3 left-3 bg-teal-500 text-white text-[11px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1">
                    <CheckCircle2 size={12} /> Verified
                  </div>
                )}
                <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-white transition-colors shadow-sm">
                  <Heart size={16} className="text-gray-500 hover:text-red-500" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-navy text-base mb-1">
                  {prop.name}
                </h3>
                <p className="text-teal-600 font-bold text-lg mb-2">
                  {prop.price}
                </p>
                <p className="flex items-center gap-1 text-gray-500 text-xs mb-3">
                  <MapPin size={12} /> {prop.location}
                </p>

                {/* Property Details */}
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3 pb-3 border-b border-gray-100">
                  <span className="flex items-center gap-1">
                    <Maximize2 size={12} /> {prop.area}
                  </span>
                  <span className="flex items-center gap-1">
                    <BedDouble size={12} /> {prop.bhk}
                  </span>
                  <span className="text-gray-400">• {prop.status}</span>
                </div>

                {/* Tags & Action */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {prop.rera && (
                      <span className="badge-verified badge-rera">
                        RERA ✓
                      </span>
                    )}
                    {prop.verified && (
                      <span className="badge-verified bg-green-50 text-green-700">
                        ✓ Verified
                      </span>
                    )}
                  </div>
                </div>

                <button className="mt-3 w-full border border-teal-500 text-teal-600 py-2 rounded-lg text-sm font-semibold hover:bg-teal-500 hover:text-white transition-colors flex items-center justify-center gap-1">
                  View Details <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
