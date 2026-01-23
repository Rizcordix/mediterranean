import nodemailer from "nodemailer";
import { getReportFormEmail } from "@/lib/emailTemplates";

export async function POST(req) {
  try {
    const { email, bookTitle, wordCount, description, name } = await req.json();

    console.log("Received:", { email, bookTitle });
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
      from: '"Get Report Form Mediterranean Publishing" <mediterraneanpublishing@gmail.com>',
      to: "mediterraneanpublishing@gmail.com",
      subject: "Mediterranean Publishing Get Report Form Filled",
      text: `Mediterranean Publishing\nGet Report Form Filled\n\nEmail: ${email}\nBookTitle: ${bookTitle}\nWordCount: ${wordCount}\nDescription: ${description}`,
    });

    // Send confirmation email to user
    const confirmationHtml = getReportFormEmail({
      name: name || "Valued Customer",
      email,
      title: bookTitle,
      message: description,
    });

    await transporter.sendMail({
      from: '"Mediterranean Publishing" <mediterraneanpublishing@gmail.com>',
      to: email,
      subject: "Your Book Report Request Has Been Received - Mediterranean Publishing",
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
