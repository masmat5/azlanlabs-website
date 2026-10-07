// Edit your content and contact details here.
export const CONTACT_EMAIL = "hello@azlanlabs.com"; // placeholder — replace with your real address

export const specRows = [
  { label: "Mobile", text: "iOS + Android from one Flutter codebase" },
  { label: "Desktop", text: "Windows, macOS and Linux apps" },
  { label: "Web", text: "Fast marketing sites and web apps" },
  { label: "Backend", text: "Node.js, Express, Firebase, Supabase" },
  { label: "Team size", text: "1 — and that's the point" },
] as const;

export const steps = [
  { title: "Free call", text: "We talk about your idea, users and budget. I tell you honestly if it's a good fit." },
  { title: "Fixed scope and price", text: "You get a written plan with features, timeline and a clear price before any work starts." },
  { title: "Build in short cycles", text: "Working builds every week or two. You test real screens, not slide decks." },
  { title: "Launch and support", text: "I publish it, hand over the code and stay available for fixes and the next version." },
] as const;

export interface Project {
  type: string;
  title: string;
  text: string;
  stack: string;
  featured?: boolean;
  /** Live link (store page, demo, case study). If omitted, the card links to the contact form. */
  href?: string;
}

export const projects: Project[] = [
  {
    type: "SaaS · Web + Backend",
    title: "Pharmacy Management System",
    text: "A cloud system for pharmacies to manage stock, sales and staff, sold as a subscription product.",
    stack: "Node.js · Express · Cloud database",
    featured: true,
  },
  { type: "Mobile · Test prep", title: "CivicReady", text: "Practice app that helps people prepare for the Canadian citizenship test.", stack: "Flutter · Supabase" },
  { type: "Mobile · Education", title: "Thal University app", text: "A campus app for students and staff.", stack: "Flutter · Firebase" },
  // TODO: check this description and stack match the real HisabGhar app.
  { type: "Mobile · Finance", title: "HisabGhar", text: "An app for keeping track of accounts, income and expenses.", stack: "Flutter" },
];
