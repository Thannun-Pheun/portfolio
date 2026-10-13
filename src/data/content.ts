/* ------------------------------------------------------------------
   All portfolio content lives here, typed.
   Edit text, links, projects, skills — no component changes needed.
   ------------------------------------------------------------------ */

export interface LangColor {
  /** key doubles as data-lang hook for CSS language colours */
  key: string;
  w: number; // percent width of the bar segment
}

export interface Faq {
  k: string;
  v: string;
  url?: string;
}

export interface SkillGroup {
  title: string;
  dot: string; // css class: dot-teal | dot-blue | dot-yellow | dot-purple
  items: string[];
}

export interface ProjectLang {
  key: string;
}

export interface ProjectLink {
  label: string;
  href?: string; // absent => muted "coming soon" chip
}

export interface Project {
  id: string;
  owner: string; // "Thannun-Pheun" or org name
  repo: string; // bold part of the title
  eyebrow?: string;
  desc: string;
  tags: string[];
  langs: ProjectLang[];
  links: ProjectLink[];
  screenshot?: "booking" | "shoeStore" | "myPortfolio";
  featured?: boolean;
}

export interface XpPoint {
  h: string;
  p: string;
}

export interface Experience {
  badge: string;
  role: string;
  org: string;
  orgUrl: string;
  orgNote: string;
  dates: string;
  now?: boolean;
  desc: string;
  points: XpPoint[];
  tags: string[];
  foot: { label: string; href: string };
}

export interface Cert {
  seal: string;
  title: string;
  org: string;
  date: string;
}

/* ---------------------------- profile ---------------------------- */

export const profile = {
  eyebrow: "// Hello, I'm — Battambang, Cambodia",
  name: "Pheun Thannun",
  roleHtml: { plain1: "IT Student & ", accent: "Web Developer", plain2: " — Front-end & MongoDB Back-end" },
  lede:
    "Project Associate at Digital Divide Data, finishing a B.Sc. in IT at Build " +
    "Bright University. I build clean, responsive interfaces up front and " +
    "Node.js-backed APIs behind them.",
  email: "thannunph@gmail.com",
  phone: "+855 15 255 675",
  phoneHref: "+85515255675",
  location: "Battambang Province, Cambodia",
  github: "https://github.com/Thannun-Pheun",
};

export const heroBar: LangColor[] = [
  { key: "JavaScript", w: 52 },
  { key: "Vue", w: 26 },
  { key: "HTML", w: 12 },
  { key: "CSS", w: 10 },
];

export const quickFacts: Faq[] = [
  { k: "based_in", v: "Battambang, Cambodia" },
  { k: "studying", v: "B.Sc. IT — Build Bright University (2023–2026)" },
  { k: "role", v: "Project Associate at Digital Divide Data", url: "https://www.digitaldividedata.com/" },
  { k: "focus", v: "Frontend · Responsive design · Clean UI" },
  { k: "repos", v: "12 public on GitHub", url: "https://github.com/Thannun-Pheun?tab=repositories" },
];

/* ----------------------------- about ------------------------------ */

export const aboutIntro =
  "I'm in the final stretch of a B.Sc. in Information Technology at Build Bright " +
  "University, and I learn fastest by shipping — a booking system for my year-4 " +
  "project, a React storefront, a Vue admin dashboard with a real REST API behind it.";

export const aboutOrgLinks = {
  cfi: { name: "Children's Future International", url: "https://childrensfuture.org/" },
  ddd: { name: "Digital Divide Data", url: "https://www.digitaldividedata.com/" },
};

export const aboutCoordination =
  "Before code, I learned coordination: organising football tournaments and cycling " +
  "events with {cfi} taught me to keep many moving pieces in sync — and I do the same today as a " +
  "Project Associate at {ddd}, supporting delivery on real AI-data projects alongside my front-end and " +
  "back-end web development work.";

export const aboutClosing =
  "What I care about: clean layout, honest performance, responsive by default, " +
  "and interfaces people don't need a manual for.";

/* ----------------------------- skills ----------------------------- */

export const skillBar: LangColor[] = [
  { key: "JavaScript", w: 24 },
  { key: "HTML", w: 17 },
  { key: "CSS", w: 15 },
  { key: "Python", w: 12 },
  { key: "Vue", w: 8 },
  { key: "React", w: 6 },
  { key: "PHP", w: 5 },
  { key: "Java", w: 4 },
  { key: "C#", w: 3 },
  { key: "Flutter", w: 3 },
  { key: "Laravel", w: 3 },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    dot: "dot-teal",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React · TypeScript", "Responsive Design", "UI Layout & Typography", "Tailwind CSS"],
  },
  {
    title: "Programming & Back-end",
    dot: "dot-blue",
    items: ["Python — Advanced cert.", "Node.js", "Express", "MongoDB & Mongoose", "REST API design", "Java", "C#", "PHP", "SQL fundamentals"],
  },
  {
    title: "Tools & Practice",
    dot: "dot-yellow",
    items: ["Git & GitHub", "Vite", "Vue 3 · Element Plus", "React · Vite", "Laravel", "Flutter", "VS Code", "Figma basics"],
  },
  {
    title: "Beyond code",
    dot: "dot-purple",
    items: ["Project coordination", "Team collaboration", "Stakeholder communication", "Event organisation"],
  },
];

/* ---------------------------- projects ---------------------------- */

export const projects: Project[] = [
  {
    id: "booking",
    owner: "Thannun-Pheun",
    repo: "Booking_System",
    eyebrow: "Year-4 capstone · full-stack",
    featured: true,
    screenshot: "booking",
    desc:
      "A complete booking platform built with my team: a Vue 3 admin dashboard (Element Plus, Tailwind, Pinia, ECharts for analytics, PDF reports and Bakong KHQR payments in the works) backed by an Express 5 REST API on MongoDB — Mongoose models, JWT + session auth, Redis, Socket.IO realtime updates and Cloudinary uploads. Scheduling logic — including slot-overlap checking — was the hardest and most rewarding part.",
    tags: ["Vue 3", "Pinia", "Element Plus", "Tailwind", "Node.js", "Express", "MongoDB", "Socket.IO"],
    langs: [{ key: "JavaScript" }, { key: "Vue" }, { key: "CSS" }],
    links: [
      { label: "Repository", href: "https://github.com/Thannun-Pheun/Booking_System" },
      { label: "Demo on request" },
    ],
  },
  {
    id: "shoe-store",
    owner: "Thannun-Pheun",
    repo: "shoe-store",
    screenshot: "shoeStore",
    desc:
      "A product storefront built in React: product catalog, component-driven layout and state-based cart interactions — bundled fast with Vite.",
    tags: ["React", "Vite", "JavaScript", "CSS"],
    langs: [{ key: "JavaScript" }, { key: "CSS" }],
    links: [
      { label: "Repository", href: "https://github.com/Thannun-Pheun/shoe-store" },
      { label: "Demo soon" },
    ],
  },
  {
    id: "my-portfolio",
    owner: "Thannun-Pheun",
    repo: "my_portfolio",
    screenshot: "myPortfolio",
    desc:
      "My first self-built portfolio website — Tailwind CSS utility styling with a Vite workflow. The iteration that taught me layout systems, and the direct ancestor of the page you're reading.",
    tags: ["HTML", "Tailwind CSS", "Vite", "JavaScript"],
    langs: [{ key: "JavaScript" }],
    links: [
      { label: "Repository", href: "https://github.com/Thannun-Pheun/my_portfolio" },
      { label: "Live demo", href: "https://thannun-pheun.github.io/my_portfolio/" },
    ],
  },
  {
    id: "js-practice",
    owner: "Thannun-Pheun",
    repo: "JS practice",
    desc:
      "Working notes in public: array & object methods, DOM manipulation and beginner exercises across JS_Method, learn_JS, javascript and Learn_JavaScript — the reps behind the syntax.",
    tags: ["JavaScript", "DOM", "Exercises"],
    langs: [{ key: "JavaScript" }],
    links: [{ label: "Start here", href: "https://github.com/Thannun-Pheun/JS_Method" }],
  },
  {
    id: "foundations",
    owner: "Thannun-Pheun",
    repo: "foundations archive",
    desc:
      "Where the fundamentals were drilled: layout and typography practice in Learn-Web-Design, markup drills in Lrean_HTML, and branch/merge discipline in learn_git & homework_git.",
    tags: ["HTML", "CSS", "Git", "Web Design"],
    langs: [{ key: "HTML" }],
    links: [{ label: "Repository", href: "https://github.com/Thannun-Pheun/Learn-Web-Design" }],
  },
];

/* --------------------------- experience --------------------------- */

export const experiences: Experience[] = [
  {
    badge: "CFI",
    role: "Volunteer",
    org: "Children's Future International (CFI)",
    orgUrl: "https://childrensfuture.org/",
    orgNote: "Battambang",
    dates: "Feb 2025 — Aug 2025",
    desc:
      "Six months with the Battambang organisation supporting around a thousand students — organising sports events and helping look after the children, coordinating schedules, safety and logistics with a volunteer team.",
    points: [
      { h: "Football tournaments", p: "Planning and running youth tournaments end to end." },
      { h: "Cycling events", p: "Route logistics, safety support and day-of coordination." },
      { h: "Childcare support", p: "Looking after children during activities and daily programs." },
      { h: "Team coordination", p: "Keeping volunteers, schedules and supplies in sync." },
    ],
    tags: ["Event organisation", "Teamwork", "Community"],
    foot: { label: "See the organisation's work", href: "https://childrensfuture.org/" },
  },
  {
    badge: "DDD",
    role: "Project Associate",
    org: "Digital Divide Data (DDD)",
    orgUrl: "https://www.digitaldividedata.com/",
    orgNote: "Cambodia",
    dates: "Present",
    now: true,
    desc:
      "My current role at DDD — the AI data services company transforming complex real-world data into production-ready training and validation assets for machine-learning models. I support project coordination and delivery workflows inside professional quality standards, while continuing to build my full-stack craft.",
    points: [
      { h: "Project coordination", p: "Tracking deliverables and keeping workstreams moving." },
      { h: "Quality workflows", p: "Operating within audited, enterprise-grade quality processes." },
      { h: "AI-data delivery", p: "Supporting training-data operations for real ML systems." },
      { h: "Full-stack growth", p: "Applying day-to-day dev skills — like the Vue + Express/MongoDB platform above." },
    ],
    tags: ["Coordination", "Delivery support", "Stakeholder comms"],
    foot: { label: "About Digital Divide Data", href: "https://www.digitaldividedata.com/" },
  },
];

/* --------------------------- education ---------------------------- */

export const education = {
  dates: "2023 — 2026",
  degree: "B.Sc. Information Technology",
  org: "Build Bright University · Battambang Campus",
  desc:
    "Coursework across programming, web development, and systems — capped by a full-stack booking system as my year-4 project.",
  tags: ["Programming", "Web Dev", "Networking", "Databases"],
};

export const certifications: Cert[] = [
  { seal: "PY", title: "Advanced Python", org: "Sahmyook University × NIA · South Korea", date: "Completed July 2025" },
  { seal: "WD", title: "Web Design", org: "Master IT Center", date: "Completed 2023" },
];
