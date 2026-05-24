import projectsData from "@/data/projects.json"
import ProjectsGridClient from "@/components/projects-grid-client"
import { type Project } from "@/components/project-card"

interface ProjectsData {
  projects: Project[]
}

export default async function ProjectsGridServer() {
  const projects = (projectsData as ProjectsData).projects
  return <ProjectsGridClient initialProjects={projects} />
}