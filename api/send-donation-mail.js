import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, amount, paymentId } = req.body;

  // Configure your SMTP transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.OWNER_EMAIL,
      pass: process.env.OWNER_EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.OWNER_EMAIL,
    to: process.env.OWNER_EMAIL, // Owner's email
    subject: "New Donation Received",
    text: `You got a donation of Rs ${amount} from ${name} (${email}). Payment ID: ${paymentId}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to send email" });
  }
}