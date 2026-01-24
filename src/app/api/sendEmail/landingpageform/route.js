import nodemailer from "nodemailer";
import { getLandingPageFormEmail } from "@/lib/emailTemplates";

export async function POST(req) {
  try {
    const { name, email, phone } = await req.json();

    console.log("Landing Page Form Received:", { email, phone });
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
      from: '"Landing Page Form Mediterranean Publishing" <mediterraneanpublishing@gmail.com>',
      to: "mediterraneanpublishing@gmail.com",
      subject: "Mediterranean Publishing Landing Page Form Filled",
      text: `Mediterranean Publishing\nLanding Page Form Filled\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`,
    });

    // Send confirmation email to user
    const confirmationHtml = getLandingPageFormEmail({
      name,
      email,
      phone,
    });

    await transporter.sendMail({
      from: '"Mediterranean Publishing" <mediterraneanpublishing@gmail.com>',
      to: email,
      subject: "Thank You for Your Inquiry - Mediterranean Publishing",
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
