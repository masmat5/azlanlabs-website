import { ArrowRight } from "lucide-react";
import { specRows } from "../content";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow"><span className="dot" aria-hidden="true" /> Open for new projects</p>
        <h1>One developer.<br />Your whole product, <em>shipped.</em></h1>
        <p className="lede">
          I build mobile apps, desktop apps, websites and Node.js backends for founders and small teams.
          You talk to the person who writes the code. No agency layers, no hand-offs.
        </p>
        <div className="cta-row">
          <a className="btn" href="#contact">Tell me about your idea <ArrowRight /></a>
          <a className="link-arrow" href="#work">See what I've built</a>
        </div>
      </div>

      <aside className="spec" aria-label="What AzlanLabs builds">
        <div className="spec-head">
          <span>spec-sheet.txt</span>
          <span className="status"><span className="dot" aria-hidden="true" /> replies within 24h</span>
        </div>
        <dl>
          {specRows.map((r) => (
            <div key={r.label}><dt>{r.label}</dt><dd>{r.text}</dd></div>
          ))}
        </dl>
      </aside>
    </section>
  );
}
