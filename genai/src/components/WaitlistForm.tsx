import { useState } from "react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const WEBHOOK = "https://example.com/dailyring-waitlist-webhook";

export function WaitlistForm({ id = "waitlist", compact = false }: { id?: string; compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!EMAIL_RE.test(trimmed) || trimmed.length > 255) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    setStatus("loading");
    try {
      await fetch(WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed, source: "dailyring-landing" }),
      });
      setStatus("success");
      setMessage("You're on the list. We'll be in touch soon.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-border bg-card px-5 py-4 text-card-foreground shadow-[var(--shadow-soft)]">
        <p className="font-medium">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="w-full">
      <div className={`flex w-full gap-2 ${compact ? "flex-col sm:flex-row" : "flex-col sm:flex-row"}`}>
        <label htmlFor={`${id}-email`} className="sr-only">Email address</label>
        <input
          id={`${id}-email`}
          type="email"
          required
          maxLength={255}
          autoComplete="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => { setEmail(e.target.value); if (status === "error") setStatus("idle"); }}
          className="flex-1 rounded-full border border-input bg-card px-5 py-3.5 text-base text-foreground placeholder:text-warm-gray/70 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-full bg-primary px-6 py-3.5 text-base font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition hover:opacity-95 active:scale-[0.99] disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : "Join the waitlist"}
        </button>
      </div>
      <p className={`mt-3 text-sm ${status === "error" ? "text-destructive" : "text-warm-gray"}`}>
        {status === "error" ? message : "No spam. Just early access updates."}
      </p>
    </form>
  );
}
