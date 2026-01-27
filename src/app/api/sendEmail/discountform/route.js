import nodemailer from "nodemailer";
import { getDiscountFormEmail } from "@/lib/emailTemplates";

export async function POST(req) {
  try {
    const { name, email, phone, message, countryCode } = await req.json();

    console.log("Received:", { email, phone, countryCode });
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
      from: '"50% off Discount Form Mediterranean Publishing" <mediterraneanpublishing@gmail.com>',
      to: "mediterraneanpublishing@gmail.com",
      subject: "Mediterranean Publishing 50% off Discount Form Filled",
      text: `Mediterranean Publishing\n50% off Discount Form Filled\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    });

    // Send confirmation email to user
    const confirmationHtml = getDiscountFormEmail({
      name,
      email,
      phone,
      message,
      countryCode,
    });

    await transporter.sendMail({
      from: '"Mediterranean Publishing" <mediterraneanpublishing@gmail.com>',
      to: email,
      subject: "🎉 Your 50% Discount Confirmed - Mediterranean Publishing",
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
