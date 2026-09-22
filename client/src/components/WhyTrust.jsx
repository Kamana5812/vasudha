import React from 'react';
import {
  ShieldCheck,
  FileCheck2,
  Camera,
  MapPin,
  IndianRupee,
  UserCheck,
} from 'lucide-react';
import { motion } from 'framer-motion';

const trustItems = [
  {
    icon: ShieldCheck,
    title: 'RERA Verified',
    desc: 'Only compliant projects',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
  },
  {
    icon: FileCheck2,
    title: 'Document Check',
    desc: 'Legal & ownership verified',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Camera,
    title: 'Real Photos',
    desc: 'Actual property images',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    icon: MapPin,
    title: 'Location Verified',
    desc: 'On-ground validation',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: IndianRupee,
    title: 'Price Analysis',
    desc: 'Fair market pricing',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    icon: UserCheck,
    title: 'Owner/Builder Identity',
    desc: 'Verified sellers & builders',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
  },
];

export default function WhyTrust() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-navy">
            Why Trust Vasudha?
          </h2>
          <p className="text-gray-500 mt-2">
            Your confidence is our priority.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {trustItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center text-center p-5 rounded-2xl hover:bg-gray-50 transition-colors cursor-pointer group"
            >
              <div
                className={`p-4 rounded-2xl ${item.bg} mb-4 group-hover:scale-110 transition-transform`}
              >
                <item.icon size={28} className={item.color} />
              </div>
              <h4 className="text-sm font-bold text-navy mb-1">
                {item.title}
              </h4>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
