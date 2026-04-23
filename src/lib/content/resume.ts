import type { WorkExperience, Education, SkillCategory } from "@/types";

export const workExperience: WorkExperience[] = [
  {
    company: "Acme Corp",
    role: "Senior Product Manager",
    startDate: "Mar 2023",
    endDate: "Present",
    location: "San Francisco, CA",
    bullets: [
      "Led 0→1 launch of checkout redesign, increasing conversion rate by 18% and reducing drop-off by 22%.",
      "Managed roadmap for a $12M ARR product line across 3 squads, aligning engineering, design, and data.",
      "Defined and shipped ML-powered recommendations feature in 2 quarters, driving a 40% increase in DAU engagement.",
      "Partnered with sales to close 3 enterprise deals by translating customer pain into a targeted product roadmap.",
    ],
    skills: ["B2B SaaS", "Roadmapping", "SQL", "A/B Testing"],
  },
  {
    company: "Bright Labs",
    role: "Product Manager",
    startDate: "Jun 2021",
    endDate: "Feb 2023",
    location: "New York, NY",
    bullets: [
      "Owned the mobile app from inception through App Store launch — 50K downloads in the first 60 days.",
      "Ran a discovery sprint with 30+ user interviews to redefine the onboarding flow, cutting time-to-value by 35%.",
      "Coordinated cross-functional sprints using Jira and Notion, consistently delivering on a 2-week cadence.",
    ],
    skills: ["0→1", "Mobile", "User Research", "Agile"],
  },
  {
    company: "Delta Analytics",
    role: "Associate Product Manager",
    startDate: "Aug 2019",
    endDate: "May 2021",
    location: "Chicago, IL",
    bullets: [
      "Supported senior PM on a data analytics dashboard used by 200+ enterprise customers.",
      "Wrote detailed PRDs, ran user acceptance testing, and coordinated with QA and engineering.",
      "Analyzed product usage data in Mixpanel and SQL to surface insights that shaped the Q4 roadmap.",
    ],
    skills: ["Analytics", "PRDs", "Mixpanel", "SQL"],
  },
];

export const education: Education[] = [
  {
    school: "University of Michigan",
    degree: "B.S.",
    major: "Information Science",
    graduationYear: "2019",
    notes: "Focus in Human-Computer Interaction",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Product",
    skills: ["Discovery", "Roadmapping", "PRDs", "OKRs", "A/B Testing", "User Stories"],
  },
  {
    category: "Analytics",
    skills: ["SQL", "Mixpanel", "Amplitude", "Looker", "Python (basic)"],
  },
  {
    category: "Collaboration",
    skills: ["Figma", "Jira", "Confluence", "Notion", "Linear"],
  },
  {
    category: "Domain",
    skills: ["B2B SaaS", "Consumer Mobile", "Payments", "ML Features", "0→1"],
  },
];
