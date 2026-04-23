import { projects } from "@/lib/content/projects";
import ProjectCard from "@/components/projects/ProjectCard";

export const metadata = {
  title: "Projects — Rohin Chandra",
  description: "Product case studies and key projects.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
        <p className="mt-2 text-gray-500 max-w-xl">
          A selection of products I&apos;ve led from discovery through launch — including shipped features, 0→1 builds, and growth initiatives.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
