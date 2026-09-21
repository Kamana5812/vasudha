import { sendEnquiryEmail } from '../utils/mailer.js';

const validatePhone = (phone) => /^[6-9]\d{9}$/.test(phone);
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const ALLOWED_PROPERTY_TYPES = ['Residential', 'Commercial', 'Plots', 'Luxury'];

export const submitEnquiry = async (req, res) => {
  try {
    const { name, email, phone, city, propertyType, budget, message } = req.body;
    let errors = {};

    // Validation
    if (!name || name.trim().length < 2 || name.trim().length > 100) {
      errors.name = 'Name must be between 2 and 100 characters.';
    }
    if (!email || !validateEmail(email)) {
      errors.email = 'Please provide a valid email address.';
    }
    if (!phone || !validatePhone(phone)) {
      errors.phone = 'Please provide a valid 10-digit Indian phone number.';
    }
    if (!city || city.trim().length < 2 || city.trim().length > 100) {
      errors.city = 'City must be between 2 and 100 characters.';
    }
    if (!propertyType || !ALLOWED_PROPERTY_TYPES.includes(propertyType)) {
      errors.propertyType = 'Invalid property type selected.';
    }
    if (!message || message.trim().length < 10 || message.trim().length > 1000) {
      errors.message = 'Message must be between 10 and 1000 characters.';
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ success: false, message: 'Invalid request.', errors });
    }

    // Send Email
    await sendEnquiryEmail({ name, email, phone, city, propertyType, budget, message });

    res.status(200).json({
      success: true,
      message: 'Enquiry submitted successfully. Our property advisor will contact you shortly.'
    });

  } catch (error) {
    console.error('Contact API Error:', error);
    res.status(500).json({ success: false, message: 'Something went wrong. Please try again later.' });
  }
};