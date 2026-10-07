import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "../content";
import { useReveal } from "../hooks";

function WorkItem({ p, delay }: { p: Project; delay: number }) {
  const ref = useReveal<HTMLElement>(delay);
  const external = Boolean(p.href);
  return (
    <article ref={ref} className={`work-item reveal${p.featured ? " work-big" : ""}`}>
      <span className="work-type">{p.type}</span>
      <h3>{p.title}</h3>
      <p>{p.text}</p>
      <span className="work-stack">{p.stack}</span>
      <a
        className="work-link"
        href={p.href ?? "#contact"}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        aria-label={`${external ? "View" : "Ask for a walkthrough of"} ${p.title}`}
      >
        {external ? "View project" : "Ask for a walkthrough"} <ArrowUpRight />
      </a>
    </article>
  );
}

export default function Work() {
  return (
    <section className="section" id="work">
      <header className="section-head">
        <p className="kicker">03 / Selected work</p>
        <h2>Products I've built and shipped.</h2>
      </header>
      <div className="work">
        {projects.map((p, i) => <WorkItem key={p.title} p={p} delay={i * 70} />)}
      </div>
    </section>
  );
}
