import { Resend } from "resend";

type SendEmailArgs = {
  subject: string;
  html: string;
  replyTo?: string;
};

// Small wrapper so both API routes share one code path. If no API key is
// configured yet, submissions are logged to the server console instead of
// throwing — that keeps the forms usable while you're still setting up
// Resend (see .env.example).
export async function sendEmail({ subject, html, replyTo }: SendEmailArgs) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

  if (!apiKey || !to) {
    console.log("[contact] RESEND_API_KEY or CONTACT_TO_EMAIL not set — logging instead of sending:");
    console.log({ subject, html, replyTo });
    return { delivered: false };
  }

  const resend = new Resend(apiKey);

  await resend.emails.send({
    from,
    to,
    subject,
    html,
    replyTo,
  });

  return { delivered: true };
}
