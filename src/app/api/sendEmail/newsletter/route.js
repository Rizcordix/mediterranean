import nodemailer from "nodemailer";
import { getNewsletterEmail } from "@/lib/emailTemplates";

export async function POST(req) {
  try {
    const { email } = await req.json();

    console.log("Newsletter Received:", { email });
    console.log("Password loaded:", !!process.env.EMAIL_PASSWORD);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "mediterraneanpublishing@gmail.com",
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Verify the transporter before sending
    await transporter.verify();
    console.log("SMTP Connection verified ✅");

    // Send email to admin
    await transporter.sendMail({
      from: '"Newsletter Subscribed Mediterranean Publishing" <mediterraneanpublishing@gmail.com>',
      to: "mediterraneanpublishing@gmail.com",
      subject: "Mediterranean Publishing Newsletter Subscribed",
      text: `Mediterranean Publishing\nNewsletter Subscribed\n\nEmail: ${email}`,
    });

    // Send confirmation email to user
    const confirmationHtml = getNewsletterEmail({
      email,
    });

    await transporter.sendMail({
      from: '"Mediterranean Publishing" <mediterraneanpublishing@gmail.com>',
      to: email,
      subject: "Welcome to Our Newsletter - Mediterranean Publishing",
      html: confirmationHtml,
    });

    return new Response(JSON.stringify({ message: "Email sent successfully" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Email sending error:", error);
    return new Response(
      JSON.stringify({ message: error.message || "Internal server error" }),
      { status: 500 }
    );
  }
}
