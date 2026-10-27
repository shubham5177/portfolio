"use client";
import { useState } from "react";

export default function ContactForm() {
  const [state, setState] = useState<"idle" | "loading" | "sent">("idle");
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setState("loading");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setState("idle");
        return setError(json.error || "Message not sent. Try again.");
      }

      setEmailSent(json.emailSent === true);
      form.reset();
      setState("sent");
    } catch {
      setState("idle");
      setError("Message not sent. Check your connection and try again.");
    }
  }

  if (state === "sent") {
    return (
      <div className="card text-center">
        <h3 className="text-2xl font-black text-white">Message sent</h3>
        <p className="mt-3 text-slate-400">
          {emailSent
            ? "Thanks for reaching out. A confirmation email is on its way, and I'll get back to you within a few minutes."
            : "Thanks for reaching out. Your message was received, but we couldn't send a confirmation email. I'll still get back to you soon."}
        </p>
        <button onClick={() => setState("idle")} className="btn-ghost mt-6">Send another</button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="name">Your Name</label>
          <input id="name" name="name" required className="field" placeholder="John Doe" />
        </div>
        <div>
          <label className="label" htmlFor="email">Your Email</label>
          <input id="email" name="email" type="email" required className="field" placeholder="john@example.com" />
        </div>
      </div>
      <div>
        <label className="label" htmlFor="subject">Project Subject</label>
        <input id="subject" name="subject" required className="field" placeholder="New website for my startup" />
      </div>
      <div>
        <label className="label" htmlFor="message">Project Details</label>
        <textarea id="message" name="message" required rows={5} className="field resize-none" placeholder="Tell me about your idea, timeline and budget" />
      </div>
      {error && <p role="alert" className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">{error}</p>}
      <button disabled={state === "loading"} className="btn-primary w-full disabled:opacity-60">
        {state === "loading" ? "Sending…" : "Launch Message"}
      </button>
    </form>
  );
}
