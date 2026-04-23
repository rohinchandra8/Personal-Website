import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Best Guinness Finder",
    slug: "best-guinness",
    description:
      "Find the cheapest (and best) pint near you — bar listings with pricing, ratings, neighbourhood filters, and a Google Maps view.",
    status: "Live",
    tags: ["Consumer", "Maps", "0→1"],
    link: "https://best-guinness.vercel.app",
  },
  {
    title: "AI Swing Coach",
    slug: "ai-swing-coach",
    description:
      "Upload your golf swing video and get Claude-powered frame-by-frame analysis with numbered improvement tips.",
    status: "Live",
    tags: ["AI", "Consumer", "0→1"],
    link: "https://fun-project-olive.vercel.app",
  },
];
