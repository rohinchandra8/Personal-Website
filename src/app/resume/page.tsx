import Link from "next/link";
import { Download } from "lucide-react";
import { workExperience, education, skillCategories } from "@/lib/content/resume";
import ExperienceItem from "@/components/resume/ExperienceItem";
import EducationItem from "@/components/resume/EducationItem";
import Badge from "@/components/ui/Badge";

export const metadata = {
  title: "Resume — Rohin Chandra",
  description: "Work experience, education, and skills.",
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      {/* Header */}
      <div className="flex items-start justify-between mb-12">
        <div>
          <h1 className="text-3xl font-bold text-white">Resume</h1>
        </div>
        <Link
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-zinc-300 hover:border-white/30 hover:text-white transition-colors"
        >
          <Download size={15} />
          PDF
        </Link>
      </div>

      {/* Work Experience */}
      <section className="mb-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-600 mb-2">
          Experience
        </h2>
        <hr className="border-white/10 mb-2" />
        {workExperience.map((item) => (
          <ExperienceItem key={`${item.company}-${item.startDate}`} item={item} />
        ))}
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-600 mb-2">
          Education
        </h2>
        <hr className="border-white/10 mb-2" />
        {education.map((item) => (
          <EducationItem key={item.school} item={item} />
        ))}
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-600 mb-2">
          Skills
        </h2>
        <hr className="border-white/10 mb-4" />
        <div className="space-y-4">
          {skillCategories.map(({ category, skills }) => (
            <div key={category} className="flex flex-col gap-2 sm:flex-row sm:gap-6">
              <span className="w-24 shrink-0 text-sm font-medium text-zinc-500">{category}</span>
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
