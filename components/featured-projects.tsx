"use client"

import ProjectCard, { type Project } from "@/components/project-card"
import projectsData from "@/data/projects.json"

interface ProjectsData {
  projects: Project[]
}

const featuredProjects = (projectsData as ProjectsData).projects
  .filter((p) => p.featured)
  .slice(0, 3)

export default function FeaturedProjects() {
  if (!featuredProjects.length) {
    return <div className="text-[color:var(--muted)]">No featured projects yet.</div>
  }

  return (
    <div role="list" className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {featuredProjects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  )
}