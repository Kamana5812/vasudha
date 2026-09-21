import nodemailer from 'nodemailer';

const validatePhone = (phone) => /^[6-9]\d{9}$/.test(phone);
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const ALLOWED_PROPERTY_TYPES = ['Residential', 'Commercial', 'Plots', 'Luxury'];

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

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
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_PORT == 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    });

    const htmlContent = `
      <div style="font-family: sans-serif; color: #2A2A2A; max-width: 600px; margin: auto;">
        <h2 style="color: #B8860B;">New Property Enquiry — Vasudha</h2>
        <p>A new enquiry has been submitted via the Vasudha website.</p>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Name:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${name}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Email:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${email}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${phone}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>City:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${city}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Property Type:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${propertyType}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Budget:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${budget || 'Not specified'}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Message:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${message}</td></tr>
        </table>
      </div>
    `;

    await transporter.sendMail({
      from: `"Vasudha Website" <${process.env.SMTP_USER}>`,
      to: process.env.COMPANY_EMAIL,
      replyTo: email,
      subject: `New Property Enquiry from ${name}`,
      html: htmlContent
    });

    res.status(200).json({
      success: true,
      message: 'Enquiry submitted successfully. Our property advisor will contact you shortly.'
    });

  } catch (error) {
    console.error('Contact API Error:', error);
    res.status(500).json({ success: false, message: 'Something went wrong. Please try again later.' });
  }
}
