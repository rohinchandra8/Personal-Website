export interface WorkExperience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  bullets: string[];
  skills: string[];
}

export interface Education {
  school: string;
  degree: string;
  major: string;
  graduationYear: string;
  notes?: string;
}

export interface Project {
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  status: "Live" | "In Progress" | "Shipped" | "Concept";
  tags: string[];
  metrics?: string;
  link?: string;
  caseStudyLink?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}
