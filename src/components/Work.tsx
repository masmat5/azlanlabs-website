import { ArrowUpRight } from "lucide-react";
import { caseStudies, projects, type Project } from "../content";
import { useReveal } from "../hooks";

function WorkItem({ p, delay }: { p: Project; delay: number }) {
  const ref = useReveal<HTMLElement>(delay);
  const study = caseStudies.find((c) => c.id === p.caseStudy && c.screens.length > 0);
  const href = study ? `#${study.id}` : p.href;
  const external = Boolean(href) && !href!.startsWith("#");
  const label = study ? "See the app" : p.linkLabel ?? (p.href ? "View project" : "Ask for a walkthrough");
  return (
    <article ref={ref} className={`work-item reveal${p.featured ? " work-big" : ""}`}>
      <span className="work-type">{p.type}</span>
      <h3>{p.title}</h3>
      <p>{p.text}</p>
      <span className="work-stack">{p.stack}</span>
      <a
        className="work-link"
        href={href ?? "#contact"}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        aria-label={`${label}: ${p.title}`}
      >
        {label} <ArrowUpRight />
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
