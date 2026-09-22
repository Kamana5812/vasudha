import React from 'react';
import { ShieldCheck, Sparkles, TrendingUp, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: ShieldCheck,
    title: 'Verified Listings',
    desc: 'RERA & Document Check',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
  },
  {
    icon: Sparkles,
    title: 'Smart Recommendations',
    desc: 'AI-Powered',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: TrendingUp,
    title: 'Price Insights',
    desc: 'Real-time Market Data',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    icon: Phone,
    title: 'Direct Contact',
    desc: 'Talk to Owner/Builder',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
];

export default function FeatureBadges() {
  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {features.map((f, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group"
            >
              <div
                className={`p-3 rounded-xl ${f.bg} group-hover:scale-110 transition-transform`}
              >
                <f.icon size={22} className={f.color} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-navy">{f.title}</h4>
                <p className="text-xs text-gray-500">{f.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
