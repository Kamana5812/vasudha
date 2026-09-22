import React from 'react';
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
      const res = await fetch('/api/contact', {
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
        <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-teal-600 mb-2">Thank you!</h3>
        <p className="text-gray-500">Your enquiry has been received. Our property advisor will contact you shortly.</p>
      </div>
    );
  }

  const inputStyles = "w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/20 transition-colors text-sm";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status.error && <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm">{status.error}</div>}
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
          <input required type="text" name="name" value={formData.name} onChange={handleChange} className={inputStyles} placeholder="John Doe" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone *</label>
          <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputStyles} placeholder="+91 98765 43210" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
          <input required type="email" name="email" value={formData.email} onChange={handleChange} className={inputStyles} placeholder="john@example.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">City *</label>
          <input required type="text" name="city" value={formData.city} onChange={handleChange} className={inputStyles} placeholder="Mumbai" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Property Type</label>
          <select name="propertyType" value={formData.propertyType} onChange={handleChange} className={`${inputStyles} bg-white`}>
            <option>Residential</option>
            <option>Commercial</option>
            <option>Plots</option>
            <option>Luxury</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Budget</label>
          <input type="text" name="budget" placeholder="e.g. ₹1 Cr - ₹2 Cr" value={formData.budget} onChange={handleChange} className={inputStyles} />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
        <textarea required name="message" rows="3" value={formData.message} onChange={handleChange} className={inputStyles} placeholder="Tell us what you're looking for..."></textarea>
      </div>

      <button disabled={status.loading} type="submit" className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3.5 rounded-lg font-bold transition-colors disabled:opacity-50 shadow-lg shadow-teal-500/20">
        {status.loading ? 'Sending...' : 'Send Enquiry'}
      </button>
    </form>
  );
}