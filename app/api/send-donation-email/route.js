import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, amount, paymentId } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.OWNER_EMAIL,
      pass: process.env.OWNER_EMAIL_PASS,
    },
  });

  // Email to owner
  const mailOptionsOwner = {
    from: process.env.OWNER_EMAIL,
    to: process.env.OWNER_EMAIL,
    subject: "New Donation Received",
    text: `You got a donation of Rs ${amount} from ${name} (${email}). Payment ID: ${paymentId}`,
  };

  const mailOptionsDonator = {
    from: process.env.OWNER_EMAIL,
    to: email,
    subject: "Thank you for your donation!",
    text: `Dear ${name},\n\nThank you for your generous donation of Rs ${amount}.\nYour payment ID is: ${paymentId}.\n\nWe appreciate your support!\n\n- Anmol Cultural Club`,
  };

  try {
    await transporter.sendMail(mailOptionsOwner);
    await transporter.sendMail(mailOptionsDonator);
    return Response.json({ success: true });
  } catch (err) {
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}