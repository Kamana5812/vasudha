import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import contactRoutes from './routes/contact.js';

dotenv.config({ path: '../.env' }); // Adjust path based on your setup

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json({ limit: '10kb' })); // Restrict payload size
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['POST', 'GET'],
  allowedHeaders: ['Content-Type']
}));

// Rate limiting for API to prevent spam
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 10 requests per windowMs
  message: { success: false, message: 'Too many requests. Please try again later.' }
});

// Routes
app.use('/api/contact', apiLimiter, contactRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Internal server error. Please try again later.'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});