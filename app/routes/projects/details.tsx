import type { Route } from './+types'
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
    </>
  )
}
 
export default ProjectDetailsPage