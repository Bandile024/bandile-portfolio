import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

// This is the "backend" of the site: a serverless API route. The
// ContactForm client component POSTs JSON here; this file validates it
// and sends the email server-side, so no email credentials ever reach
// the browser.
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body as Record<string, string>;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Please fill out every field." },
        { status: 400 }
      );
    }
    if (!email.includes("@")) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    await sendEmail({
      subject: `New contact form message: ${subject}`,
      replyTo: email,
      html: `
        <h2>New message from the portfolio contact form</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
