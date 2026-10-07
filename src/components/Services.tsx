import type { ReactNode } from "react";
import { Globe, Monitor, Server, Smartphone } from "lucide-react";
import { useReveal } from "../hooks";

function Card({ className = "", delay = 0, children }: { className?: string; delay?: number; children: ReactNode }) {
  const ref = useReveal<HTMLElement>(delay);
  return <article ref={ref} className={`card reveal ${className}`}>{children}</article>;
}

function Tags({ items }: { items: string[] }) {
  return <ul className="tags">{items.map((t) => <li key={t}>{t}</li>)}</ul>;
}

export default function Services() {
  return (
    <section className="section" id="services">
      <header className="section-head">
        <p className="kicker">01 / Services</p>
        <h2>Four things, done properly.</h2>
      </header>

      <div className="bento">
        <Card className="card-lead">
          <Smartphone className="card-icon" />
          <h3>Mobile apps</h3>
          <p>
            Android and iOS apps built with Flutter. One codebase means a lower bill and faster updates.
            Login, payments, push notifications, offline mode, store submission — all covered.
          </p>
          <Tags items={["Flutter", "Firebase", "App Store & Play Store"]} />
        </Card>

        <Card className="card-dark" delay={70}>
          <Server className="card-icon" />
          <h3>Node.js backends</h3>
          <p>APIs, admin panels and databases that stay fast when your users grow.</p>
          <Tags items={["Express", "Supabase", "REST"]} />
        </Card>

        <Card delay={140}>
          <Monitor className="card-icon" />
          <h3>Desktop apps</h3>
          <p>Windows, macOS and Linux software for internal tools, point-of-sale and dashboards.</p>
          <Tags items={["Windows", "macOS", "Linux"]} />
        </Card>

        <Card className="card-web" delay={70}>
          <Globe className="card-icon" />
          <h3>Websites</h3>
          <p>Clear, quick, search-friendly sites that explain what you do and bring in enquiries. Built to be easy for you to update later.</p>
          <Tags items={["React", "TypeScript", "SEO-ready"]} />
        </Card>
      </div>
    </section>
  );
}
