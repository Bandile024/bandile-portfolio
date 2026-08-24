"use client";

import { FormEvent, useState } from "react";
import { Loader2, Send } from "lucide-react";
import { serviceOptions } from "@/data/site";

type Status = "idle" | "loading" | "success" | "error";

export default function RequestForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/request", {
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
          Request received
        </h3>
        <p className="mt-2 text-muted">
          Thanks — I&apos;ll review the details and get back to you shortly.
        </p>
        <button className="btn-secondary mt-6" onClick={() => setStatus("idle")}>
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5">
      <div>
        <label htmlFor="name" className="field-label">
          Full name*
        </label>
        <input id="name" name="name" required className="field-input" />
      </div>

      <div>
        <label htmlFor="email" className="field-label">
          Email*
        </label>
        <input id="email" type="email" name="email" required className="field-input" />
      </div>

      <div>
        <label htmlFor="phone" className="field-label">
          Phone number (optional)
        </label>
        <input id="phone" type="tel" name="phone" className="field-input" />
      </div>

      <div>
        <label htmlFor="service" className="field-label">
          Service type*
        </label>
        <select id="service" name="service" required className="field-input">
          <option value="">Select a service</option>
          {serviceOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="details" className="field-label">
          Project details*
        </label>
        <textarea
          id="details"
          name="details"
          rows={5}
          required
          placeholder="Describe your project or requirements…"
          className="field-input resize-y"
        />
      </div>

      <div>
        <label htmlFor="budget" className="field-label">
          Budget range (optional)
        </label>
        <input
          id="budget"
          name="budget"
          placeholder="e.g. R2,000 – R5,000"
          className="field-input"
        />
      </div>

      {status === "error" && <p className="text-sm text-red-400">{errorMsg}</p>}

      <button type="submit" disabled={status === "loading"} className="btn-primary w-full justify-center">
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Submitting…
          </>
        ) : (
          <>
            <Send size={18} /> Submit request
          </>
        )}
      </button>
    </form>
  );
}
