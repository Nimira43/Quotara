import type { Project } from '~/types'
import type { Route } from './+types/index'

export async function loader({ request }: Route.LoaderArgs): Promise<{projects: Project[]}> {
  const res = await fetch('http://localhost:8000/projects')
  const data = await res.json()

  return {projects: data}
}

const ProjectsPage = ({ loaderData}: Route.ComponentProps) => {
  const { projects } = loaderData as { projects: Project[] }

  return ( 
    <>
      <h2 className='page-title'>Projects</h2>
      <div className='grid gap-6 sm:grid-cols-2'>
        {projects.map((project) => (
          <div 
            key={project.id}
            className='bg-teal-50 border border-orange-400 rounded-md overflow-hidden shadow-sm transitioning hover:shadow-md'
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className='w-full h-40 object-cover'
            />
            <div className='p-5'>
              <h3 className='text-3xl font-medium text-teal-700 mb-1'>{project.title}</h3>
              <p className='text-sm text-gray-900 mb-2'>
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
 
export default ProjectsPage