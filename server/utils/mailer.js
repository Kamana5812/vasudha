import nodemailer from 'nodemailer';

export const sendEnquiryEmail = async (data) => {
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
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Name:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.name}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Email:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.email}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.phone}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>City:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.city}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Property Type:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.propertyType}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Budget:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.budget || 'Not specified'}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Message:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.message}</td></tr>
      </table>
    </div>
  `;

  await transporter.sendMail({
    from: `"Vasudha Website" <${process.env.SMTP_USER}>`,
    to: process.env.COMPANY_EMAIL,
    replyTo: data.email,
    subject: `New Property Enquiry from ${data.name}`,
    html: htmlContent
  });
};