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
  /** Text of the card link. Defaults to "View project" (with href) or "Ask for a walkthrough". */
  linkLabel?: string;
  /** id of a case study in `caseStudies`. The card links to it once the case study has screenshots. */
  caseStudy?: string;
}

export const projects: Project[] = [
  {
    type: "SaaS · Web + Backend",
    title: "Pharmacy Management System",
    text: "A cloud system for pharmacies to manage stock, sales and staff, sold as a subscription product.",
    stack: "Node.js · Express · Cloud database",
    featured: true,
  },
  {
    type: "Mobile · Test prep",
    title: "CivicReady",
    text: "Practice app for the Canadian citizenship test: 500 questions across all 10 topics, mock tests, a study guide and interview practice, in English and French.",
    stack: "Flutter · Supabase",
    caseStudy: "civicready",
  },
  {
    type: "Mobile · Education",
    title: "Thal University app",
    text: "Student and admissions app for Thal University, Bhakkar: grades, attendance, fees, complaints and alerts, in English and Urdu.",
    stack: "Flutter · Firebase", // TODO: confirm the real stack
    caseStudy: "thal",
  },
  {
    type: "Mobile · POS & digital khata",
    title: "Hisaab Ghar",
    text: "A POS and digital khata app for shops: billing, udhaar ledgers, stock and expiry alerts, WhatsApp bills. Works offline.",
    stack: "Flutter", // TODO: confirm the real stack
    caseStudy: "hisaab-ghar",
  },
];

export type IconName =
  | "dashboard" | "attendance" | "language" | "dark"
  | "cart" | "ledger" | "stock" | "offline"
  | "questions" | "mock" | "progress" | "interview";

export interface CaseStudyData {
  id: string;
  title: string;
  intro: string;
  features: { icon: IconName; title: string; text: string }[];
  /** Add images to public/work/ and list them here. A case study with no screens is not shown. */
  screens: { src: string; alt: string; width: number; height: number }[];
  note?: string;
  /** Stagger every second screenshot (looks best with same-size phone screens). */
  stagger?: boolean;
}

const phone = { width: 600, height: 1067 };

export const caseStudies: CaseStudyData[] = [
  {
    id: "thal",
    title: "Thal University app",
    intro:
      "A student and admissions app for Thal University in Bhakkar. Students check results, attendance and fees, raise complaints and get alerts, in their own language.",
    features: [
      { icon: "dashboard", title: "One-screen dashboard", text: "CGPA, attendance, courses, fees and the next class, all on the home screen." },
      { icon: "attendance", title: "Attendance with early warnings", text: "Course-wise records so students see problems before they become one." },
      { icon: "language", title: "English and Urdu", text: "Full right-to-left layout, not just translated labels." },
      { icon: "dark", title: "Dark mode", text: "A complete dark theme for late-night study." },
    ],
    screens: [
      { src: "/work/thal-home.webp", alt: "Thal University app home screen showing CGPA, attendance, enrolled courses, fee status and next class", ...phone },
      { src: "/work/thal-attendance.webp", alt: "Course-wise attendance screen with totals for present and absent classes", ...phone },
      { src: "/work/thal-urdu.webp", alt: "The same home screen in Urdu with a right-to-left layout", ...phone },
      { src: "/work/thal-dark.webp", alt: "Home screen in dark mode", ...phone },
    ],
    note: "Screens show sample student data.",
    stagger: true,
  },
  {
    id: "hisaab-ghar",
    title: "Hisaab Ghar",
    intro:
      "A point-of-sale and digital khata app for shops. Billing, udhaar ledgers and stock live in one place, and it keeps working without internet.",
    features: [
      { icon: "cart", title: "Fast billing", text: "Scan barcodes, take cash, Easypaisa, JazzCash or udhaar, and send the bill on WhatsApp." },
      { icon: "ledger", title: "Digital khata", text: "Every customer's balance, shareable statements, and live totals of what you give and take." },
      { icon: "stock", title: "Stock and expiry alerts", text: "Item counts with warnings for low stock and items close to expiry." },
      { icon: "offline", title: "Works offline", text: "Keep selling when the internet drops." },
    ],
    screens: [
      { src: "/work/hisaab-home.webp", alt: "Hisaab Ghar dashboard in dark mode with today's sales, profit, bills and khata summary", ...phone },
      { src: "/work/hisaab-pos.webp", alt: "POS billing screen with product grid, barcode search and checkout", ...phone },
      { src: "/work/hisaab-khata.webp", alt: "Customer khata screen with outstanding balance and transaction history", ...phone },
      { src: "/work/hisaab-bill.webp", alt: "A printed bill with items, discount, total and udhaar balance", width: 600, height: 1048 },
    ],
    note: "Screens show sample shop data.",
    stagger: true,
  },
  {
    id: "civicready",
    title: "CivicReady",
    intro:
      "A practice app for the Canadian citizenship test, in English and French, with 500 questions across all 10 topics. Built to be studied a few minutes at a time.",
    features: [
      { icon: "questions", title: "Learn from every answer", text: "Each question explains why the correct option is right." },
      { icon: "mock", title: "Timed mock tests", text: "20 questions with a 75% pass mark, like the real test." },
      { icon: "progress", title: "Readiness score", text: "See how ready you are, with focus areas by topic." },
      { icon: "interview", title: "Interview practice", text: "Questions are read aloud and you answer out loud." },
    ],
    screens: [
      { src: "/work/civic-quiz.webp", alt: "CivicReady quiz question with an explanation of the correct answer", ...phone },
      { src: "/work/civic-mock.webp", alt: "Timed mock test screen with a countdown and multiple-choice options", ...phone },
      { src: "/work/civic-progress.webp", alt: "Progress screen showing a readiness score of 82 and focus areas", ...phone },
      { src: "/work/civic-interview.webp", alt: "Interview practice screen with a microphone button", ...phone },
    ],
    stagger: true,
  },
];
