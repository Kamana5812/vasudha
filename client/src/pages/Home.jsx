import React from 'react';
import { ArrowRight, MapPin, SquareUser, Building2, Home as HomeIcon, Trees, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import EnquiryForm from '../components/EnquiryForm';

export default function Home() {
  // Animation variants for staggered scrolling effects
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-ivory">
      
      {/* 1. HERO SECTION */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-charcoal">
        {/* Background gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal/40 pointer-events-none"></div>

        {/* Framer Motion UI Overlay */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mt-20 pointer-events-none">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 drop-shadow-lg"
          >
            Find a Place That Feels Like Yours.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl font-light mb-10 text-ivory/90 drop-shadow-md"
          >
            Discover thoughtfully selected residential and commercial properties designed around the way India lives, works, and grows.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto"
          >
            <button onClick={() => scrollTo('properties')} className="bg-gradient-to-r from-earthy to-gold text-white px-8 py-4 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg font-semibold shadow-gold/20">
              Explore Properties
            </button>
            <button onClick={() => scrollTo('contact')} className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded-md transition-all duration-300 border border-white/30 text-lg font-medium">
              Talk to an Expert
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. PROPERTY CATEGORIES */}
      <section id="about" className="py-20 bg-ivory">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {[
              { icon: HomeIcon, title: 'Residential', desc: 'Apartments & Villas' },
              { icon: Building2, title: 'Commercial', desc: 'Offices & Retail' },
              { icon: Trees, title: 'Plots', desc: 'Investment Land' },
              { icon: Sparkles, title: 'Luxury', desc: 'Premium Homes' }
            ].map((cat, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center cursor-pointer group">
                <div className="h-16 w-16 bg-ivory rounded-full flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                  <cat.icon className="text-gold" size={32} />
                </div>
                <h3 className="text-xl font-serif font-bold text-charcoal mb-2">{cat.title}</h3>
                <p className="text-gray-500 text-sm">{cat.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. FEATURED PROPERTIES */}
      <section id="properties" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif text-charcoal font-bold mb-4">Featured Properties</h2>
            <p className="text-gray-600">Handpicked spaces worth calling home.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'The Aranya', loc: 'Lucknow, UP', type: '3 & 4 BHK Luxury Residences', price: '₹1.25 Cr onwards', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80' },
              { name: 'The Aangan', loc: 'Jaipur, Rajasthan', type: 'Premium Villas', price: '₹2.10 Cr onwards', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80' },
              { name: 'Vasudha Heights', loc: 'Noida, UP', type: '2 & 3 BHK Apartments', price: '₹85 Lakh onwards', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=735&q=80' }
            ].map((prop, i) => (
              <motion.div 
                key={i} 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.15 } } }}
                className="bg-ivory rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute top-4 left-4 bg-charcoal text-white text-xs font-bold px-4 py-1.5 rounded-md z-10 tracking-wider">FEATURED</div>
                  <img src={prop.img} alt={prop.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-charcoal mb-2">{prop.name}</h3>
                  <p className="flex items-center text-gray-500 text-sm mb-4"><MapPin size={16} className="mr-1 text-earthy" /> {prop.loc}</p>
                  <p className="text-earthy font-medium mb-4">{prop.type}</p>
                  <div className="flex justify-between items-center border-t border-gray-200 pt-4 mt-2">
                    <span className="text-xl font-bold text-charcoal">{prop.price}</span>
                    <button onClick={() => scrollTo('contact')} className="text-gold hover:text-earthy flex items-center gap-1 transition-colors font-medium">
                      Details <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ENQUIRY SECTION */}
      <section id="contact" className="py-24 bg-charcoal text-ivory relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
        
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">Let's find your space.</h2>
            <p className="text-gray-400 mb-10 text-lg md:text-xl font-light">Leave your details below, and our property advisors will get in touch with tailored recommendations for your next home or investment.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-lg">
                <div className="p-3 bg-white/5 rounded-full"><MapPin className="text-gold" size={24} /></div>
                <span>Premium properties across India</span>
              </div>
              <div className="flex items-center gap-4 text-lg">
                <div className="p-3 bg-white/5 rounded-full"><SquareUser className="text-gold" size={24} /></div>
                <span>Expert, transparent guidance</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white text-charcoal p-8 md:p-10 rounded-2xl shadow-2xl"
          >
            <h3 className="text-2xl font-serif font-bold mb-6 border-b border-gray-100 pb-4">Request a Callback</h3>
            <EnquiryForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
}