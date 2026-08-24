// Single source of truth for site content.
// Edit this file to update copy across the whole site — pages import
// from here instead of hard-coding text, which is what makes the site
// "dynamic": change data once, every page that uses it updates.

export const profile = {
  name: "Bandile Ngwenya",
  role: "Data Analytics & AI Engineer Intern",
  tagline:
    "I turn messy data into decisions, and ideas into working AI-powered software.",
  location: "Johannesburg, South Africa",
  email: "bandilengwenya21112002@gmail.com",
  phone: "060 749 1759",
  github: "https://github.com/Bandile024",
  githubUsername: "Bandile024",
  facebook: "https://facebook.com/yourprofile",
  twitter: "https://x.com/Bandile84",
  resumeUrl: "/Bandile-Ngwenya-CV.pdf",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Q&A", href: "/qna" },
  { label: "Contact", href: "/contact" },
];

export const heroStats = [
  { label: "Core stack", value: "Python · SQL · Next.js" },
  { label: "Focus", value: "Data Analytics + AI Engineering" },
  { label: "Based in", value: "Johannesburg, ZA" },
];

export const skillGroups = [
  {
    title: "Data Analytics",
    tools: ["Python (Pandas, NumPy)", "SQL", "Power BI / Excel", "Data Visualization", "Statistical Analysis"],
  },
  {
    title: "AI & Machine Learning",
    tools: ["Scikit-learn", "AI-assisted development", "Prompt Engineering", "Model Evaluation"],
  },
  {
    title: "Web Development",
    tools: ["HTML / CSS / JavaScript", "TypeScript", "React & Next.js", "REST APIs", "Git & GitHub"],
  },
  {
    title: "Tools & Workflow",
    tools: ["VS Code", "Git", "Figma", "Jupyter Notebook", "Browser DevTools"],
  },
];

export const about = {
  intro: `I'm Bandile Ngwenya, a Data Analytics & AI Engineer Intern based in Johannesburg,
  South Africa. My work sits at the intersection of two things I care about: making
  sense of data, and building software that puts that understanding to use.`,
  body: [
    `Day to day, I work with data — cleaning it, analyzing it, and turning it into
    charts, dashboards, and insights that people can actually act on. Alongside
    that, I build web interfaces and tools that make data and AI features usable,
    combining a data analyst's attention to accuracy with a developer's eye for
    good user experience.`,
    `My foundation in HTML, CSS, and JavaScript has grown into hands-on work with
    TypeScript and React/Next.js, and I lean on AI tools deliberately — as a way
    to move faster and learn patterns, not as a replacement for understanding the
    fundamentals. I'm currently deepening my skills through short courses in web
    technologies, data analysis, and applied AI.`,
    `I'm most interested in projects where data, AI, and clean interface design
    meet — internal dashboards, small AI-powered tools, and portfolio-grade web
    apps for individuals and small businesses.`,
  ],
  focusAreas: [
    {
      title: "Data Analysis & Reporting",
      description:
        "Cleaning, exploring, and visualizing data to answer real business questions.",
    },
    {
      title: "AI-Assisted Engineering",
      description:
        "Applying AI tools thoughtfully inside real development workflows, not as a gimmick.",
    },
    {
      title: "Web Development",
      description:
        "Building responsive, accessible, professional sites and small full-stack tools.",
    },
  ],
};

export const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "Custom websites built with modern tools like Next.js and TypeScript, data analysis and reporting, and small AI-powered features or tools. Services include responsive design, dashboards, and light e-commerce or booking-style sites.",
  },
  {
    question: "How can I hire you for a project?",
    answer:
      "The fastest way is the Request a Service form — it captures what you need up front. You're also welcome to email or call directly using the details on the Contact page.",
  },
  {
    question: "What tools do you use?",
    answer:
      "Visual Studio Code, Git/GitHub, Python and SQL for analysis, Figma for design, and Next.js/TypeScript for web builds — plus browser dev tools to keep everything accessible and performant.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on scope, but a standard site or dashboard typically takes 2–4 weeks, with regular check-ins and updates along the way so there are no surprises.",
  },
  {
    question: "Do you offer ongoing maintenance?",
    answer:
      "Yes. I offer maintenance and update packages to keep sites secure, current, and running smoothly after launch.",
  },
];

export const serviceOptions = [
  { value: "website-design", label: "Website Design" },
  { value: "website-development", label: "Website Development" },
  { value: "data-analysis", label: "Data Analysis / Dashboard" },
  { value: "maintenance", label: "Website Maintenance" },
  { value: "consultation", label: "Consultation" },
  { value: "other", label: "Other" },
];
