import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors'; // Import cors

// Initialize dotenv for environment variables
dotenv.config();

// Create an Express app
const app = express();
const port = process.env.PORT || 5000;

// Enable CORS for all routes
app.use(cors()); // Allow cross-origin requests

// Middleware to parse JSON and form data
app.use(bodyParser.json());

// Define a route to handle sending email
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Create a transporter using your email service
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Setup email data
    const mailOptions = {
      from: email,
      to: 'sapkotas771@gmail.com', // the recipient email
      subject: `New message from ${name}`,
      text: message,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
