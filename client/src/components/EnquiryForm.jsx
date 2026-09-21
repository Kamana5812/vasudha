import React from 'react'; // <-- ADD THIS LINE
import { useState } from 'react';

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', city: '', propertyType: 'Residential', budget: '', message: ''
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });
    
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await res.json();
      
      if (!res.ok) throw new Error(data.message || 'Something went wrong');
      
      setStatus({ loading: false, success: true, error: null });
      setFormData({ name: '', email: '', phone: '', city: '', propertyType: 'Residential', budget: '', message: '' });
    } catch (err) {
      setStatus({ loading: false, success: false, error: err.message });
    }
  };

  if (status.success) {
    return (
      <div className="text-center py-12">
        <h3 className="text-2xl font-serif text-earthy font-bold mb-2">Thank you!</h3>
        <p className="text-gray-600">Your enquiry has been received. Our property advisor will contact you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status.error && <div className="p-3 bg-red-100 text-red-700 rounded-lg text-sm">{status.error}</div>}
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name *</label>
          <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-gold" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Phone *</label>
          <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-gold" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Email *</label>
          <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-gold" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">City *</label>
          <input required type="text" name="city" value={formData.city} onChange={handleChange} className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-gold" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Property Type</label>
          <select name="propertyType" value={formData.propertyType} onChange={handleChange} className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-gold bg-white">
            <option>Residential</option>
            <option>Commercial</option>
            <option>Plots</option>
            <option>Luxury</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Budget</label>
          <input type="text" name="budget" placeholder="e.g. ₹1 Cr - ₹2 Cr" value={formData.budget} onChange={handleChange} className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-gold" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Message *</label>
        <textarea required name="message" rows="3" value={formData.message} onChange={handleChange} className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-gold"></textarea>
      </div>

      <button disabled={status.loading} type="submit" className="w-full bg-charcoal text-white py-4 rounded-lg font-bold hover:bg-earthy transition-colors disabled:opacity-50">
        {status.loading ? 'Sending...' : 'Send Enquiry'}
      </button>
    </form>
  );
}