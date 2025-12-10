import type { Route } from './+types/details'
import type { Project } from '~/types'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { Link } from 'react-router'

export async function clientLoader(
  { request, params }: Route.ClientLoaderArgs
): Promise<Project> {
  const res = await fetch(`http://localhost:8000/projects/${params.id}`)

  if (!res.ok) throw new Response('Project not found', { status: 404 })
  
  const project: Project = await res.json()
  return project
}

export function HydrationFallback() {
  return (
    <div>Loading...</div>
  )
}

const ProjectDetailsPage = (
  { loaderData }: Route.ComponentProps
) => {
  const project = loaderData
  
  return ( 
    <>
      <Link
        to='/projects'
        className='flex items-center text-gray-900 hover:text-orange-400 mb-6 transitioning'
      >
        <IoIosArrowRoundBack className='mr-2' />
        Back to Projects
      </Link>
      <div className='grid gap-8 md:grid-cols-2 '>
        <div>
          <img
            src={project.image}
            alt={project.title}
            className='w-full rounded-md shadow-md border border-orange-400'
          />
        </div>
        <div>
          <h1 className='text-3xl font-semibold text-teal-700 mb-4'>
            {project.title}
          </h1>
          <p className='text-orange-400 text-sm mb-4 uppercase font-medium'>
            {new Date(project.date).toLocaleDateString()} | { project.category }
          </p>
          <p className='text-gray-700 mb-6'>
            {project.description}
          </p>
          <a
            href={project.url}
            target='_blank'
            className='inline-block text-white bg-teal-700 hover:bg-orange-400 transitioning px-6 py-2 rounded'
          >
            View Project
          </a>
        </div>
      </div>
    </>
  )
}
 
export default ProjectDetailsPage