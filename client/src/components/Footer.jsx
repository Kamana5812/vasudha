import React from 'react';
import { Facebook, Instagram, Youtube, Linkedin, Twitter } from 'lucide-react';

const quickLinks = ['About Us', 'Contact Us', 'Help & Support', 'Careers'];
const popularCities = [
  'Lucknow',
  'Bengaluru',
  'Pune',
  'Hyderabad',
  'Mumbai',
  'Noida',
  'Delhi',
  'Chennai',
];

const socialLinks = [
  { icon: Facebook, label: 'Facebook' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Youtube, label: 'Youtube' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Twitter, label: 'Twitter' },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/vasudha-logo.png"
                alt="Vasudha"
                className="h-10 w-10 object-contain brightness-0 invert"
              />
              <div>
                <h3 className="text-xl font-bold leading-none">Vasudha</h3>
                <p className="text-teal-400 text-xs font-medium">
                  Premium Properties
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Smarter Search • Better Decisions • Brighter Futures
            </p>
            <p className="text-gray-500 text-xs italic">
              "A Place to Belong."
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm mb-5 text-white/90">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 text-sm hover:text-teal-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Cities */}
          <div>
            <h4 className="font-bold text-sm mb-5 text-white/90">
              Popular Cities
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              {popularCities.map((city) => (
                <li key={city}>
                  <a
                    href="#"
                    className="text-gray-400 text-sm hover:text-teal-400 transition-colors"
                  >
                    {city}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-bold text-sm mb-5 text-white/90">Follow Us</h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-teal-500 transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>

            <h4 className="font-bold text-sm mb-3 text-white/90">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>info@vasudha.com</li>
              <li>+91 98765 43210</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © 2026 Vasudha. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-teal-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-teal-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-teal-400 transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}