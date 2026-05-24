import projectsData from "../public/data/projects.json";
import ProjectCardServer from "@/components/project-card-server";
import type { Project } from "@/components/project-card";

interface ProjectsData {
  projects: Project[];
}

function getFeaturedProjects(): Project[] {
  return (projectsData as ProjectsData).projects
    .filter((p) => p.featured)
    .slice(0, 3);
}

export default async function FeaturedProjectsServer() {
  const projects = getFeaturedProjects();

  if (!projects.length) {
    return (
      <div className="text-[color:var(--muted)]">No featured projects yet.</div>
    );
  }

  return (
    <div
      role="list"
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((p) => (
        <ProjectCardServer key={p.id} project={p} />
      ))}
    </div>
  );
}
