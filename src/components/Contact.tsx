import { useState, type FormEvent } from "react";
import { Clock, Send } from "lucide-react";
import { CONTACT_EMAIL } from "../content";

const NEEDS = ["Mobile app", "Desktop app", "Website", "Node.js backend / API", "Not sure yet"] as const;

export default function Contact() {
  const [msg, setMsg] = useState("");

  // Opens the visitor's email app with the message filled in.
  // Swap for a fetch() to your Node.js endpoint when the backend is ready.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const name = String(d.get("name") ?? "").trim();
    const email = String(d.get("email") ?? "").trim();
    const type = String(d.get("type") ?? "");
    const message = String(d.get("message") ?? "").trim();
    if (!name || !/^\S+@\S+\.\S+$/.test(email) || !message) {
      setMsg("Please add your name, a valid email and a short message.");
      return;
    }
    const subject = encodeURIComponent(`New project: ${type}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nNeed: ${type}\n\n${message}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setMsg(`Opening your email app… if nothing happens, write to ${CONTACT_EMAIL}`);
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
        <label>Your name<input name="name" type="text" autoComplete="name" required /></label>
        <label>Email<input name="email" type="email" autoComplete="email" required /></label>
        <label>What do you need?
          <select name="type">{NEEDS.map((n) => <option key={n}>{n}</option>)}</select>
        </label>
        <label>Tell me about it<textarea name="message" rows={4} required /></label>
        <button className="btn" type="submit">Send message <Send /></button>
        <p className="form-msg" role="status" aria-live="polite">{msg}</p>
      </form>
    </section>
  );
}
