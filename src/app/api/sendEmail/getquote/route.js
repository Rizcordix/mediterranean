import nodemailer from "nodemailer";
import { getQuoteFormEmail } from "@/lib/emailTemplates";

export async function POST(req) {
  try {
    const { name,
        email,
        words,
        title,
        category,
        service,
        turnaround,
        customTime, } = await req.json();

    console.log("Received:", { name, email, words, title, category, service, turnaround, customTime });
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
      from: '"Get a Quote Form Mediterranean Publishing" <mediterraneanpublishing@gmail.com>',
      to: "mediterraneanpublishing@gmail.com",
      subject: "Mediterranean Publishing Get a Quote Form Filled",
      text: `Mediterranean Publishing\nGet a Quote Filled\n\nName: ${name}\nEmail: ${email}\nTitle: ${title}\nCategory: ${category}\nService: ${service}\nWord Count: ${words}\nTurnaround: ${turnaround}\nCustom Time: ${customTime}`,
    });

    // Send confirmation email to user
    const confirmationHtml = getQuoteFormEmail({
      name,
      email,
      category,
      service,
      turnaround,
      words,
      title,
    });

    await transporter.sendMail({
      from: '"Mediterranean Publishing" <mediterraneanpublishing@gmail.com>',
      to: email,
      subject: "Your Quote Request is Being Processed - Mediterranean Publishing",
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
