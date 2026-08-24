"use client";

import { FormEvent, useState } from "react";
import { Loader2, Send } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(json.error || "Something went wrong.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg("Network error — please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="card text-center">
        <h3 className="font-display text-xl font-semibold text-accent">
          Message sent
        </h3>
        <p className="mt-2 text-muted">
          Thanks for reaching out — I&apos;ll get back to you soon.
        </p>
        <button
          className="btn-secondary mt-6"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5">
      <h3 className="font-display text-xl font-semibold">
        Send a query or recommendation
      </h3>

      <div>
        <label htmlFor="name" className="field-label">
          Name
        </label>
        <input id="name" name="name" required className="field-input" />
      </div>

      <div>
        <label htmlFor="email" className="field-label">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="field-input"
        />
      </div>

      <div>
        <label htmlFor="subject" className="field-label">
          Subject
        </label>
        <input id="subject" name="subject" required className="field-input" />
      </div>

      <div>
        <label htmlFor="message" className="field-label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="field-input resize-y"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400">{errorMsg}</p>
      )}

      <button type="submit" disabled={status === "loading"} className="btn-primary w-full justify-center">
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Send size={18} /> Send message
          </>
        )}
      </button>
    </form>
  );
}
