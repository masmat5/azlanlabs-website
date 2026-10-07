import {
  BookOpen, Languages, LayoutDashboard, ListChecks, MessagesSquare, Moon, Package, ShoppingCart, Timer, TriangleAlert, WifiOff,
  type LucideIcon,
} from "lucide-react";
import { caseStudies, type CaseStudyData, type IconName } from "../content";
import { useReveal } from "../hooks";

const ICONS: Record<IconName, LucideIcon> = {
  dashboard: LayoutDashboard, attendance: TriangleAlert, language: Languages, dark: Moon,
  cart: ShoppingCart, ledger: BookOpen, stock: Package, offline: WifiOff,
  questions: ListChecks, mock: Timer, guide: BookOpen, interview: MessagesSquare,
};

function CaseStudy({ study, reverse }: { study: CaseStudyData; reverse: boolean }) {
  const ref = useReveal<HTMLElement>();
  return (
    <section
      ref={ref}
      className={`section case reveal${reverse ? " case-reverse" : ""}`}
      id={study.id}
      aria-labelledby={`${study.id}-title`}
    >
      <div className="case-copy">
        <p className="kicker">Case study</p>
        <h2 id={`${study.id}-title`}>{study.title}</h2>
        <p className="lede">{study.intro}</p>
        <ul className="case-features">
          {study.features.map((f) => {
            const Icon = ICONS[f.icon];
            return (
              <li key={f.title}>
                <Icon aria-hidden="true" />
                <span><b>{f.title}.</b> {f.text}</span>
              </li>
            );
          })}
        </ul>
        {study.note && <p className="case-note">{study.note}</p>}
      </div>

      <div className={`case-shots${study.stagger ? " stagger" : ""}`}>
        {study.screens.map((s) => (
          <img
            key={s.src} src={s.src} alt={s.alt} width={s.width} height={s.height}
            style={{ flex: s.width / s.height }} loading="lazy" decoding="async"
          />
        ))}
      </div>
    </section>
  );
}

export default function CaseStudies() {
  return (
    <>
      {caseStudies
        .filter((c) => c.screens.length > 0)
        .map((c, i) => <CaseStudy key={c.id} study={c} reverse={i % 2 === 1} />)}
    </>
  );
}
