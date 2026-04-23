import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Checkout Redesign",
    slug: "checkout-redesign",
    description:
      "End-to-end redesign of a 3-step checkout into a single-page flow to reduce friction and increase purchase completion.",
    longDescription:
      "Led discovery through launch: ran competitive analysis, 20+ user interviews, and 3 rounds of prototype testing with Figma. Worked with engineering to ship iteratively over 6 weeks.",
    status: "Shipped",
    tags: ["B2B", "Growth", "Conversion"],
    metrics: "+18% conversion · -22% drop-off",
  },
  {
    title: "ML Recommendations Engine",
    slug: "ml-recommendations",
    description:
      "PM lead for a personalized product recommendation feature powered by collaborative filtering and real-time user signals.",
    longDescription:
      "Partnered with a 4-person ML team to define the product spec, success metrics, and rollout plan. Shipped via feature flag across 100% of users over 3 months.",
    status: "Live",
    tags: ["ML", "Consumer", "Personalization"],
    metrics: "+40% DAU engagement · +12% retention",
  },
  {
    title: "Mobile App Launch",
    slug: "mobile-app",
    description:
      "0→1 iOS/Android app built from discovery through App Store launch, targeting small business owners.",
    longDescription:
      "Conducted 30+ discovery interviews, defined MVP scope, and coordinated a 6-person cross-functional team across 4 sprint cycles. Achieved 50K downloads in the first 60 days.",
    status: "Shipped",
    tags: ["0→1", "Mobile", "B2C"],
    metrics: "50K downloads in 60 days · 4.7★ App Store rating",
  },
];
