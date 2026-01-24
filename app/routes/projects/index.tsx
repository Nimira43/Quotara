import { useState } from 'react'
import type { Project } from '~/types'
import type { Route } from './+types/index'
import ProjectCard from '~/components/ProjectCard'
import Pagination from '~/components/Pagination'
import { AnimatePresence, motion } from 'framer-motion'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Quotara | Projects' },
    { name: 'description', content: 'Project Portfolio.' },
  ]
}

export async function loader({ request }: Route.LoaderArgs): Promise<{projects: Project[]}> {
  const res = await fetch('http://localhost:8000/projects')
  const data = await res.json()

  return {projects: data}
}

const ProjectsPage = ({ loaderData }: Route.ComponentProps) => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 4

  const { projects } = loaderData as {
    projects: Project[]
  }
  
  const categories = ['All', ...new Set(
    projects.map(
      (project) => project.category
    )
  )]

  const filteredProjects = selectedCategory === 'All'
    ? projects 
    : projects.filter(
      (project) => project.category === selectedCategory
    )
  
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)
  const indexOfLast = currentPage * projectsPerPage
  const indexOfFirst = indexOfLast - projectsPerPage
  const currentProjects = filteredProjects.slice(indexOfFirst, indexOfLast)

  return ( 
    <>
      <h2 className='page-title'>Projects</h2>
      <div className='flex flex-wrap gap-2 mt-6 mb-8'>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category)
              setCurrentPage(1)
            }}
            className={`
              uppercase px-3 py-1 border rounded font-medium text-sm cursor-pointer
              ${selectedCategory === category
                ? 'text-white border-2 border-orange-400 bg-orange-400'
                : 'text-orange-400 border-2 border-orange-400 bg-transparent'
              }
            `}
          >
            {category}
          </button> 
        ))}
      </div>
      <AnimatePresence mode='wait'>
        <motion.div
          layout
          className='grid gap-6 sm:grid-cols-2'
        >
          {currentProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
            >
              <ProjectCard 
                project={project}
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>   
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </>
  )
}
 
export default ProjectsPage