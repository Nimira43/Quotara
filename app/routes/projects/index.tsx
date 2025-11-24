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
            />
          </div>
        ))}
      </div>
    </>
  )
}
 
export default ProjectsPage