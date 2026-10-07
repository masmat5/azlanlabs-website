import { steps } from "../content";
import { useReveal } from "../hooks";

function Step({ n, title, text }: { n: number; title: string; text: string }) {
  const ref = useReveal<HTMLLIElement>();
  return (
    <li ref={ref} className="reveal">
      <span className="num">{String(n).padStart(2, "0")}</span>
      <div><h3>{title}</h3><p>{text}</p></div>
    </li>
  );
}

export default function Process() {
  return (
    <section className="section process" id="process">
      <header className="section-head sticky">
        <p className="kicker">02 / How I work</p>
        <h2>Simple, visible, no surprises.</h2>
        <p className="muted">You always know what's done, what's next and what it costs.</p>
      </header>
      <ol className="steps">
        {steps.map((s, i) => <Step key={s.title} n={i + 1} {...s} />)}
      </ol>
    </section>
  );
}
