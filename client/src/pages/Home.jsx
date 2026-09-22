import React from 'react';
import { MapPin, SquareUser } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroSlider from '../components/HeroSlider';
import FeatureBadges from '../components/FeatureBadges';
import ExploreByNeed from '../components/ExploreByNeed';
import RecommendedProperties from '../components/RecommendedProperties';
import PopularLocations from '../components/PopularLocations';
import WhyTrust from '../components/WhyTrust';
import CtaBanner from '../components/CtaBanner';
import EnquiryForm from '../components/EnquiryForm';

export default function Home() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="bg-white">
      {/* 1. Hero Slider */}
      <HeroSlider />

      {/* 2. Feature Badges */}
      <FeatureBadges />

      {/* 3. Explore by Need */}
      <ExploreByNeed />

      {/* 4. Recommended Properties */}
      <RecommendedProperties />

      {/* 5. Popular Locations */}
      <PopularLocations />

      {/* 6. Why Trust Vasudha */}
      <WhyTrust />

      {/* 7. CTA Banner */}
      <CtaBanner />

      {/* 8. Contact / Enquiry Section */}
      <section
        id="contact"
        className="py-20 bg-light-gray relative overflow-hidden"
      >
        {/* Decorative */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
              Let's find your space.
            </h2>
            <p className="text-gray-500 mb-10 text-lg font-light">
              Leave your details below, and our property advisors will get in
              touch with tailored recommendations for your next home or
              investment.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-teal-50 rounded-xl">
                  <MapPin className="text-teal-600" size={22} />
                </div>
                <span className="text-navy font-medium">
                  Premium properties across India
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-teal-50 rounded-xl">
                  <SquareUser className="text-teal-600" size={22} />
                </div>
                <span className="text-navy font-medium">
                  Expert, transparent guidance
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white text-navy p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold mb-6 border-b border-gray-100 pb-4">
              Request a Callback
            </h3>
            <EnquiryForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
}