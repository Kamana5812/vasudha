import React from 'react'; // <-- ADD THIS LINE

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div>
          <h3 className="text-2xl font-serif font-bold mb-1">VASUDHA</h3>
          <p className="text-gold font-serif mb-4">वसुधा</p>
          <p className="text-gray-400 italic">“A Place to Belong.”</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-gold transition">Properties</a></li>
            <li><a href="#" className="hover:text-gold transition">About Us</a></li>
            <li><a href="#" className="hover:text-gold transition">Agents</a></li>
            <li><a href="#" className="hover:text-gold transition">Locations</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Legal</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-gold transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gold transition">Terms & Conditions</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Contact</h4>
          <ul className="space-y-2 text-gray-400">
            <li>info@vasudha.com</li>
            <li>+91 98765 43210</li>
            <li>Corporate Office: Mumbai, India</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 text-center text-gray-500 text-sm border-t border-gray-800 pt-8">
        © 2026 Vasudha. All rights reserved.
      </div>
    </footer>
  );
}