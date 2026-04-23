import Link from "next/link";
import { ExternalLink, FileText } from "lucide-react";
import Badge from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

const statusVariant: Record<Project["status"], "success" | "default" | "warning" | "muted"> = {
  Live: "success",
  Shipped: "default",
  "In Progress": "warning",
  Concept: "muted",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-2 mb-3">
        <Badge variant={statusVariant[project.status]}>{project.status}</Badge>
        <div className="flex flex-wrap gap-1 justify-end">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="muted">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed flex-1">{project.description}</p>

      {project.metrics && (
        <p className={cn("mt-4 text-sm font-medium text-blue-700 italic")}>{project.metrics}</p>
      )}

      {(project.caseStudyLink || project.link) && (
        <div className="mt-5 flex items-center gap-4 pt-4 border-t border-gray-100">
          {project.caseStudyLink && (
            <Link
              href={project.caseStudyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              <FileText size={14} />
              Case Study
            </Link>
          )}
          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              <ExternalLink size={14} />
              View
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
