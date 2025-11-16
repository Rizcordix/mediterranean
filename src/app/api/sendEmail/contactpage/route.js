import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message, subject } = await req.json();

    console.log("Received:", { email, name });
    console.log("Password loaded:", !!process.env.EMAIL_PASSWORD);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "domyebook@gmail.com",
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Verify the transporter before sending
    await transporter.verify();
    console.log("SMTP Connection verified ✅");

    await transporter.sendMail({
      from: '"Contact Page Form Mediterranean Publishing" <domyebook@gmail.com>',
      to: "domyebook@gmail.com",
      subject: "Mediterranean Publishing Contact Page Form Filled",
      text: `Mediterranean Publishing\nContact Page Form Filled\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}\nSubject: ${subject}`,
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
