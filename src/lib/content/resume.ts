import type { WorkExperience, Education, SkillCategory } from "@/types";

export const workExperience: WorkExperience[] = [
  {
    company: "Microsoft",
    role: "Product Manager II",
    startDate: "Sep 2024",
    endDate: "Present",
    location: "New York, NY",
    bullets: [],
    products: [
      {
        name: "Viva Glint — Enterprise SaaS HR Product",
        bullets: [
          "Owned core data access and enterprise controls for an HR SaaS platform, driving retention and new market expansion.",
          "Led platform rebranding effort, securing $10M in sales as a result.",
          "Developed features and GTM motion that doubled partner-led sales in 6 months.",
          "Launched GDPR-compliant data deletion controls, avoiding $500K/day in regulatory exposure.",
          "Retained 5 large enterprise customers by shipping improvements to data export functionality.",
          "Unblocked 3 enterprise deals by shipping accessibility improvements required for compliance.",
        ],
      },
      {
        name: "Elastic SAN — Cloud Storage Product",
        bullets: [
          "Owned early growth and customer onboarding journey for a new cloud storage offering.",
          "Built new UI reducing customer onboarding time by 50%.",
          "Drove customer outreach to build sales pipeline to ~$5M for new product.",
        ],
      },
    ],
    skills: ["Enterprise SaaS", "GTM", "GDPR", "Cloud Storage"],
  },
  {
    company: "Microsoft",
    role: "Software Engineer II",
    startDate: "Apr 2022",
    endDate: "Sep 2024",
    location: "New York, NY",
    bullets: [
      "Tech Lead for AI Copilot integration into enterprise SaaS product, used monthly by 25% of customers.",
      "Iterated on user feedback to ship multiple improvements to the Copilot integration.",
      "Tech Lead for feature enabling customers to upload data sets from other Microsoft products.",
      "Tech Lead for feature enabling customers to export survey comments translated into a chosen language.",
    ],
    skills: ["TypeScript", "Angular", "AI/Copilot", "Tech Lead"],
  },
  {
    company: "LinkedIn",
    role: "Software Engineer",
    startDate: "Sep 2021",
    endDate: "Apr 2022",
    location: "New York, NY",
    bullets: [
      "Developed feature allowing customers to preview the platform with demo data instead of real data.",
      "Collaborated closely with product team on PRD development.",
      "Worked with design and QA teams to improve accessibility experience.",
    ],
    skills: ["JavaScript", "Accessibility", "PRDs"],
  },
];

export const education: Education[] = [
  {
    school: "Harvard College",
    degree: "A.B.",
    major: "Computer Science (Secondary: Economics)",
    graduationYear: "2021",
    notes: "GPA: 3.84/4.0 · CS50 Course Assistant · President of South Asian Men's Collective",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Engineering",
    skills: ["JavaScript", "TypeScript", "Angular", "Java", "Python", "SQL", "OCaml"],
  },
  {
    category: "Product",
    skills: ["Figma", "Jira", "Office Suite", "PRDs", "GTM"],
  },
  {
    category: "Languages",
    skills: ["English (Fluent)", "Spanish (Proficient)"],
  },
  {
    category: "Interests",
    skills: ["Golf", "Reading", "Travel", "English Premier League"],
  },
];
