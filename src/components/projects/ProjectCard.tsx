import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Badge from "@/components/ui/Badge";
import type { Project } from "@/types";

const statusVariant: Record<Project["status"], "success" | "default" | "warning" | "muted"> = {
  Live: "success",
  Shipped: "default",
  "In Progress": "warning",
  Concept: "muted",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col rounded-xl border border-white/10 bg-white/5 p-6 hover:border-white/20 hover:bg-white/8 transition-all duration-200">
      <div className="flex items-start justify-between gap-2 mb-4">
        <Badge variant={statusVariant[project.status]}>{project.status}</Badge>
        <div className="flex flex-wrap gap-1 justify-end">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="muted">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <h3 className="text-base font-semibold text-white mb-2">{project.title}</h3>
      <p className="text-sm text-zinc-400 leading-relaxed flex-1">{project.description}</p>

      {project.metrics && (
        <p className="mt-4 text-sm text-zinc-300 font-medium">{project.metrics}</p>
      )}

      {project.link && (
        <div className="mt-5 pt-4 border-t border-white/10">
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors"
          >
            <ExternalLink size={13} />
            View project
          </Link>
        </div>
      )}
    </div>
  );
}
