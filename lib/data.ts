// First Salesforce role started Jul 2022. Evaluated at build time; the deploy
// workflow rebuilds monthly so the number stays current.
const CAREER_START = new Date("2022-07-01");
const now = new Date();
export const yearsExperience = Math.max(
  1,
  now.getFullYear() - CAREER_START.getFullYear() - (now.getMonth() < CAREER_START.getMonth() ? 1 : 0),
);

export const profile = {
  name: "Abhinav Saxena",
  role: "Martech Developer",
  tagline:
    "I build scalable, automation-driven customer engagement on Salesforce Marketing Cloud, Data Cloud and Agentforce, with a security-first mindset.",
  location: "India",
  links: {
    linkedin: "https://www.linkedin.com/in/imabhinavsaxena",
    github: "https://github.com/luckyster895",
    medium: "https://medium.com/@luckyster895",
  },
};

export const about = [
  "I'm a results-driven Martech Developer with hands-on expertise in Marketing Cloud Engagement and Data Cloud, currently exploring the Agentic Marketing Cloud platforms (Growth, Advanced and Next).",
  `With over ${yearsExperience} years of experience and multiple Salesforce certifications, I build highly scalable, automation-driven campaigns that use cross-cloud data, advanced SSJS scripting and real-time personalization across email, SMS, WhatsApp and mobile push.`,
  "Before Salesforce, I started in cybersecurity: web application penetration testing, vulnerability assessments and audits. That background still shapes how I design secure integrations.",
];

export const stats = [
  { value: "7X", label: "Salesforce certifications" },
  { value: `${yearsExperience}+`, label: "Years in Martech" },
  { value: "20+", label: "Web app pen-tests" },
  { value: "3", label: "Next-gen MC platforms" },
];

export type Job = {
  when: string;
  title: string;
  org: string;
  note?: string;
  points?: string[];
};

export const journey: Job[] = [
  {
    when: "Aug 2026 – Present",
    title: "Senior Salesforce Developer",
    org: "Cloud for Good",
    note: "Current role, focused on Data Cloud, Agentforce and Marketing Cloud Next.",
    points: [
      "Data Cloud (Data 360): designing data ingestion, identity resolution and segmentation so marketing runs on unified customer profiles.",
      "Agentforce: building AI agents grounded in Data Cloud data to automate support and customer engagement.",
      "Marketing Cloud Next: implementing the next-generation platform and planning migrations from Marketing Cloud Engagement.",
    ],
  },
  {
    when: "Mar 2024 – Aug 2026",
    title: "Marketing & Data Cloud Developer",
    org: "Horizontal Digital",
    note: "Associate Marketing Cloud Developer (Mar 2024 – Feb 2025), then Marketing & Data Cloud Developer (Feb 2025 – Aug 2026).",
    points: [
      "Led end-to-end Data Cloud implementation, enabling unified customer profiles and data activation across marketing channels.",
      "Architected the SFMC + Data Cloud integration for personalized campaign targeting.",
      "Designed data ingestion pipelines, identity resolution and segmentation models.",
      "Worked hands-on with next-generation Marketing Cloud platforms: Growth, Advanced and Next.",
      "Advised clients on Marketing Cloud migration and modernization strategy.",
      "Built a Travel, Tourism & Hospitality solution using Agentforce and WhatsApp for AI-powered support and automated engagement.",
    ],
  },
  {
    when: "Jul 2022 – Mar 2024",
    title: "Trainee Engineer to Engineer",
    org: "ATCS, a Nagarro company",
    points: [
      "Migrated marketing activities with SSJS and the Bulk API.",
      "Implemented WhatsApp APIs with Chat Demographics and SSJS for conversational marketing.",
      "Built custom APIs and a Lead Scoring Model from Send Logs and Data Views.",
      "Applied email best practices: IP warm-up, publication lists, domain exclusions and exclusion scripts.",
      "Led a REST API-based Lead Conversion integration with Salesforce CRM.",
      "Delivered SMS, mobile push and WhatsApp (Meta) campaigns, orchestrated in Journey Builder.",
      "Implemented OTP authentication using a CloudPage and Code Resource.",
      "Integrated Marketing Cloud with Webhooks, Mixpanel and Zoom.",
    ],
  },
  {
    when: "2019 – 2021",
    title: "Cybersecurity roots",
    org: "Internships & research",
    points: [
      "Penetration Testing Intern, Virtually Testing Foundation (Oct – Dec 2021).",
      "Cyber Security Summer Intern, Gurugram Police (Jun – Jul 2021).",
      "Infosec Analyst & Researcher, Cyberops Infosec LLP (Jun – Jul 2019): 20+ web application penetration tests, 3 web audits, 5+ machine audits, vulnerability assessments and threat identification.",
    ],
  },
  {
    when: "2018 – 2022",
    title: "B.Tech, Computer Science",
    org: "JECRC University",
    note: "Earlier: Gyan Vihar School, Information Technology (2015 – 2018).",
  },
];

export const skills = [
  {
    title: "Marketing Cloud",
    items: ["SSJS", "AMPscript", "Automation Studio", "Journey Builder", "Contact Builder", "Ad Studio", "Marketing Cloud Connect", "Growth / Advanced / Next"],
  },
  {
    title: "Data & AI",
    items: ["Data Cloud (Data 360)", "Identity resolution", "Segmentation", "Data architecture", "Agentforce", "SQL"],
  },
  {
    title: "Integrations & Channels",
    items: ["REST APIs", "CRM integration", "WhatsApp API", "SMS", "Mobile push", "Email", "Webhooks"],
  },
  {
    title: "Security",
    items: ["Web app pen-testing", "Vulnerability assessment", "Security audits", "Security enhancements"],
  },
];

// Nodes on the animated skill globe (3D and terminal designs).
export const globeSkills = [
  "SSJS",
  "AMPscript",
  "Journey Builder",
  "Data Cloud",
  "Agentforce",
  "SQL",
  "REST APIs",
  "WhatsApp API",
  "Automation Studio",
  "Identity resolution",
  "Segmentation",
  "Webhooks",
  "Pen-testing",
  "MC Next",
];

export const certs = [
  "Marketing Cloud Engagement Developer",
  "Marketing Cloud Engagement Consultant",
  "Marketing Cloud Engagement Administrator",
  "Marketing Cloud Next Consultant",
  "Data 360 Consultant",
  "Marketing Cloud Email Specialist",
  "Salesforce Associate",
];

export const otherLearning = [
  "Introduction to SQL for Data Science",
  "Secure WordPress Sites",
  "End User: Network Security",
];

export const connect = [
  { name: "LinkedIn", desc: "Career updates and professional network.", href: profile.links.linkedin, cta: "Visit" },
  { name: "GitHub", desc: "Code, experiments and portfolio projects.", href: profile.links.github, cta: "Visit" },
  { name: "Medium", desc: "Articles on Salesforce Marketing Cloud and Data Cloud.", href: profile.links.medium, cta: "Read" },
];

export const badges = ["7X Salesforce Certified", "Marketing Cloud", "Data Cloud", "Agentforce", `${yearsExperience}+ Years Experience`];

export const roles = ["Marketing Cloud", "Data Cloud (Data 360)", "Agentforce", "SSJS & AMPscript"];

export const education = [
  { title: "Bachelor of Technology, Computer Science", org: "JECRC University", when: "2018 – 2022" },
  { title: "Information Technology", org: "Gyan Vihar School", when: "2015 – 2018" },
];

export const resumeSummary =
  "Results-driven Salesforce Marketing Cloud, Data 360 and Agentforce Developer with " + yearsExperience + "+ years of hands-on experience in SFMC implementations, Data 360 integrations, Agentforce and Agentic Marketing Cloud platforms (Growth, Advanced and Next). Proficient in SSJS, AMPscript, REST APIs and multi-channel campaign orchestration across email, SMS, WhatsApp and mobile push.";

export const resumeSkills = [
  "SSJS & AMPscript",
  "Data Cloud Implementation",
  "REST APIs",
  "WhatsApp API Integration",
  "Journey Builder",
  "Automation Studio",
  "Contact Builder",
  "Ad Studio",
  "Marketing Cloud Growth / Advanced / Next",
  "Marketing Cloud Connect",
  "CRM Integration",
  "Data Architecture",
  "Reporting & Dashboards",
  "Security Enhancements",
];
