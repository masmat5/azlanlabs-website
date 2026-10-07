import { useState, type FormEvent } from "react";
import { Clock, Send } from "lucide-react";
import { CONTACT_EMAIL } from "../content";

const NEEDS = ["Mobile app", "Desktop app", "Website", "Node.js backend / API", "Not sure yet"] as const;

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [msg, setMsg] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const d = new FormData(form);
    const payload = {
      name: String(d.get("name") ?? "").trim(),
      email: String(d.get("email") ?? "").trim(),
      type: String(d.get("type") ?? ""),
      message: String(d.get("message") ?? "").trim(),
      company: String(d.get("company") ?? ""), // honeypot
    };

    if (!payload.name || !/^\S+@\S+\.\S+$/.test(payload.email) || !payload.message) {
      setStatus("error");
      setMsg("Please add your name, a valid email and a short message.");
      return;
    }

    setStatus("sending");
    setMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(data.error ?? "Request failed");
      setStatus("sent");
      setMsg("Thanks! Your message is on its way. I'll reply within a day.");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMsg(`${err instanceof Error ? err.message : "Something went wrong."} You can also email me at ${CONTACT_EMAIL}.`);
    }
  };

  return (
    <section className="section contact" id="contact">
      <div className="contact-copy">
        <p className="kicker">04 / Contact</p>
        <h2>Got an idea? Let's make it real.</h2>
        <p className="lede">Send a few lines about what you want to build. I'll reply within a day with questions, ideas and a rough estimate.</p>
        <p className="note"><Clock /> Based in Pakistan, working with clients worldwide.</p>
      </div>

      <form className="form" onSubmit={onSubmit} noValidate>
        <label>Your name<input name="name" type="text" autoComplete="name" maxLength={100} required /></label>
        <label>Email<input name="email" type="email" autoComplete="email" maxLength={200} required /></label>
        <label>What do you need?
          <select name="type">{NEEDS.map((n) => <option key={n}>{n}</option>)}</select>
        </label>
        <label>Tell me about it<textarea name="message" rows={4} maxLength={5000} required /></label>
        <input className="hp" name="company" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <button className="btn" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"} <Send />
        </button>
        <p className={`form-msg ${status}`} role="status" aria-live="polite">{msg}</p>
      </form>
    </section>
  );
}
