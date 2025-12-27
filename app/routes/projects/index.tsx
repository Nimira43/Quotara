import { useState } from 'react'
import type { Project } from '~/types'
import type { Route } from './+types/index'
import ProjectCard from '~/components/ProjectCard'

export async function loader({ request }: Route.LoaderArgs): Promise<{projects: Project[]}> {
  const res = await fetch('http://localhost:8000/projects')
  const data = await res.json()

  return {projects: data}
}

const ProjectsPage = ({ loaderData}: Route.ComponentProps) => {
  const { projects } = loaderData as { projects: Project[] }
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 2
  const totalPages = Math.ceil(projects.length / projectsPerPage)
  const indexOfLast = currentPage * projectsPerPage
  const indexOfFirst = indexOfLast - projectsPerPage
  const currentProjects = projects.slice(indexOfFirst, indexOfLast)

  const renderPagination = () => (
    <div className='flex justify-center gap-2 mt-8'>
      {Array.from({ length: totalPages }, (_, idx) => (
        <button>
          key={idx + 1}
          className={`px-3 py-1 cursor-pointer rounded ${
            currentPage === idx + 1 
            ? 'text-white border-2 border-orange-400 bg-orange-400'
            : 'text-orange-400 border-2 border-orange-400 bg-transparent'
          }`}
        </button>
      ))}
    </div>
  )

  return ( 
    <>
      <h2 className='page-title'>Projects</h2>
      <div className='grid gap-6 sm:grid-cols-2'>
        {currentProjects.map((project) => (
          <ProjectCard 
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </>
  )
}
 
export default ProjectsPage