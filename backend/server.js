// server.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`, // Must match SMTP_USER
      replyTo: email, // Visitor's email
      to: process.env.RECEIVER_EMAIL,
      subject,
      text: message,
      html: `<p>${message}</p><p>From: ${name} (${email})</p>`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Nodemailer error:", error);
    res.status(500).json({ error: "Failed to send email. Try again later." });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
