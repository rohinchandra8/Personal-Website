import Link from "next/link";
import { Download } from "lucide-react";
import { workExperience, education, skillCategories } from "@/lib/content/resume";
import ExperienceItem from "@/components/resume/ExperienceItem";
import EducationItem from "@/components/resume/EducationItem";
import Badge from "@/components/ui/Badge";

export const metadata = {
  title: "Resume — Chandra Rohin",
  description: "Work experience, education, and skills.",
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      {/* Header */}
      <div className="flex items-start justify-between mb-12">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Resume</h1>
          <p className="text-gray-500 mt-1">Product Manager · 6+ years experience</p>
        </div>
        <Link
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <Download size={15} />
          PDF
        </Link>
      </div>

      {/* Work Experience */}
      <section className="mb-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
          Experience
        </h2>
        <hr className="border-gray-200 mb-2" />
        {workExperience.map((item) => (
          <ExperienceItem key={`${item.company}-${item.startDate}`} item={item} />
        ))}
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
          Education
        </h2>
        <hr className="border-gray-200 mb-2" />
        {education.map((item) => (
          <EducationItem key={item.school} item={item} />
        ))}
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
          Skills
        </h2>
        <hr className="border-gray-200 mb-4" />
        <div className="space-y-4">
          {skillCategories.map(({ category, skills }) => (
            <div key={category} className="flex flex-col gap-2 sm:flex-row sm:gap-6">
              <span className="w-24 shrink-0 text-sm font-medium text-gray-500">{category}</span>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((skill) => (
                  <Badge key={skill} variant="muted">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
