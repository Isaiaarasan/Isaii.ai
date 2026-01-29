import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import 'dotenv/config';

const app = express();
app.use(cors());
app.use(express.json());

// Create a transporter using Ethereal test credentials (or from .env)
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.ethereal.email",
    port: process.env.SMTP_PORT || 587,
    secure: process.env.SMTP_SECURE === 'true', // Use true for port 465, false for other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

app.post('/send-email', async (req, res) => {
    const { name, phone, email, message } = req.body;

    try {
        const info = await transporter.sendMail({
            from: `"${name}" <${process.env.SMTP_USER || "maddison53@ethereal.email"}>`, // sender address
            to: "user@example.com", // list of receivers
            subject: "New Contact Form Submission - Isaii.ai", // Subject line
            text: `
        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        
        Message:
        ${message}
      `, // plain text body
            html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `, // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Preview only available when sending through an Ethereal account
        if (nodemailer.getTestMessageUrl(info)) {
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        }

        res.status(200).json({ success: true, message: 'Email sent successfully', messageId: info.messageId });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ success: false, message: 'Failed to send email' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
