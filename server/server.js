import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// ─── CORS — manual headers, most reliable approach ───────────────────────────
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  next();
});

app.use(express.json());

// ─── NODEMAILER ───────────────────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error) => {
  if (error) {
    console.error("❌ SMTP Failed:", error.message);
  } else {
    console.log("✅ SMTP Ready — emails will be sent via Gmail");
  }
});

// ─── HEALTH CHECK ─────────────────────────────────────────────────────────────
app.get("/api/health", (req, res) => {
  res.json({ status: "Server is running!" });
});

// ─── CONTACT ROUTE ────────────────────────────────────────────────────────────
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, error: "All fields are required." });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, error: "Invalid email address." });
  }

  const dateTime = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "short",
  });

  const htmlContent = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8" />
    <style>
      body { font-family: 'Segoe UI', Arial, sans-serif; background: #0a0a0a; margin: 0; padding: 0; }
      .wrapper { max-width: 600px; margin: 0 auto; background: #111; color: #f0f0f0; }
      .header { background: #cc0000; padding: 32px 40px; }
      .header h1 { margin: 0; font-size: 22px; letter-spacing: 0.15em; text-transform: uppercase; color: #fff; }
      .header p { margin: 6px 0 0; font-size: 13px; color: rgba(255,255,255,0.7); letter-spacing: 0.1em; text-transform: uppercase; }
      .body { padding: 36px 40px; }
      .field { margin-bottom: 24px; border-left: 3px solid #cc0000; padding-left: 16px; }
      .field label { display: block; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #999; margin-bottom: 6px; }
      .field p { margin: 0; font-size: 15px; color: #f0f0f0; line-height: 1.6; }
      .message-box { background: #1a1a1a; border: 1px solid #333; border-radius: 4px; padding: 20px; margin-top: 8px; }
      .footer { background: #0a0a0a; padding: 20px 40px; text-align: center; font-size: 11px; color: #555; letter-spacing: 0.1em; text-transform: uppercase; border-top: 1px solid #222; }
    </style>
  </head>
  <body>
    <div class="wrapper">
      <div class="header">
        <h1>New Portfolio Message</h1>
        <p>Contact Form Submission</p>
      </div>
      <div class="body">
        <div class="field">
          <label>Sender Name</label>
          <p>${name.trim()}</p>
        </div>
        <div class="field">
          <label>Sender Email</label>
          <p><a href="mailto:${email}" style="color:#ff4444;text-decoration:none;">${email}</a></p>
        </div>
        <div class="field">
          <label>Subject</label>
          <p>${subject.trim()}</p>
        </div>
        <div class="field">
          <label>Message</label>
          <div class="message-box">
            <p>${message.trim().replace(/\n/g, "<br/>")}</p>
          </div>
        </div>
        <div class="field">
          <label>Received At</label>
          <p>${dateTime} (IST)</p>
        </div>
      </div>
      <div class="footer">shubhdesigns3d@gmail.com &nbsp;·&nbsp; Portfolio Contact System</div>
    </div>
  </body>
  </html>
  `;

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `[Portfolio] ${subject.trim()}`,
      html: htmlContent,
    });

    console.log(`📧 Email sent — From: ${name} <${email}>`);
    return res.status(200).json({ success: true });

  } catch (error) {
    console.error("❌ Email Error:", error.message);
    return res.status(500).json({ success: false, error: "Failed to send email." });
  }
});

// ─── START SERVER ─────────────────────────────────────────────────────────────
// ⚠️ PORT 5000 is used by macOS AirPlay — always use 8080 on Mac
const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

// Catch port-in-use errors so you get a clear message instead of silent crash
server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error(`❌ Port ${PORT} is already in use. Try a different port.`);
  } else {
    console.error("❌ Server error:", err.message);
  }
  process.exit(1);
});