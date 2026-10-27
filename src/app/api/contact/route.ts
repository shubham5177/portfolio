import { NextResponse } from "next/server";
import { createMessage } from "@/lib/db";

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

async function sendConfirmationEmail(name: string, email: string, subject: string) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !from) {
    throw new Error("RESEND_API_KEY and CONTACT_FROM_EMAIL must be configured to send contact confirmations.");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [email],
      subject: "Thanks for your message",
      text: `Hi ${name},\n\nThanks for reaching out${subject ? ` about "${subject}"` : ""}. I received your message and will get back to you within a few minutes.\n\nBest,\nShubham`,
      html: `<p>Hi ${escapeHtml(name)},</p><p>Thanks for reaching out${subject ? ` about &quot;${escapeHtml(subject)}&quot;` : ""}. I received your message and will get back to you within a few minutes.</p><p>Best,<br />Shubham</p>`,
    }),
  });

  if (!response.ok) {
    throw new Error(`Resend returned HTTP ${response.status}.`);
  }
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim().toLowerCase();
  const subject = String(body.subject ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !subject || !message) return NextResponse.json({ error: "Fill in all fields." }, { status: 400 });
  if (!/^\S+@\S+\.\S+$/.test(email)) return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  if (message.length > 5000) return NextResponse.json({ error: "Message is too long." }, { status: 400 });

  await createMessage({ name, email, subject, message });

  try {
    await sendConfirmationEmail(name, email, subject);
    return NextResponse.json({ ok: true, emailSent: true });
  } catch (error) {
    console.error("Could not send contact confirmation email:", error);
    return NextResponse.json({ ok: true, emailSent: false });
  }
}
