import type { VercelRequest, VercelResponse } from "@vercel/node";

const NEEDS = ["Mobile app", "Desktop app", "Website", "Node.js backend / API", "Not sure yet"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

/** Strip CR/LF so user input can never inject extra email headers. */
const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ").trim();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    console.error("Contact API: missing environment variables");
    return res.status(500).json({ error: "Server is not configured yet." });
  }

  const body = typeof req.body === "object" && req.body ? req.body : {};
  const name = oneLine(String(body.name ?? ""));
  const email = oneLine(String(body.email ?? ""));
  const type = NEEDS.includes(body.type) ? String(body.type) : "Not sure yet";
  const message = String(body.message ?? "").trim();
  const honeypot = String(body.company ?? ""); // hidden field; real people leave it empty

  // Bots fill the hidden field. Pretend success so they don't retry.
  if (honeypot) return res.status(200).json({ ok: true });

  if (!name || name.length > 100 || !EMAIL_RE.test(email) || email.length > 200 || !message || message.length > 5000) {
    return res.status(400).json({ error: "Please check your name, email and message." });
  }

  const text = `Name: ${name}\nEmail: ${email}\nNeed: ${type}\n\n${message}`;
  const html =
    `<p><b>Name:</b> ${escapeHtml(name)}<br><b>Email:</b> ${escapeHtml(email)}<br><b>Need:</b> ${escapeHtml(type)}</p>` +
    `<p style="white-space:pre-wrap">${escapeHtml(message)}</p>`;

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: `AzlanLabs Website <${CONTACT_FROM_EMAIL}>`,
        to: [CONTACT_TO_EMAIL],
        reply_to: email,
        subject: `New project enquiry: ${type} — ${name}`,
        text,
        html,
      }),
    });
    if (!r.ok) {
      console.error("Resend error", r.status, await r.text());
      return res.status(502).json({ error: "Could not send your message. Please try again." });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Contact API failure", err);
    return res.status(502).json({ error: "Could not send your message. Please try again." });
  }
}
