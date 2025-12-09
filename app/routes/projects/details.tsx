import type { Route } from './+types'
import type { Project } from '~/types'

export async function ClientLoader({
  request,
  params
}): Promise<Project> {
  const res = await fetch(`http://localhost:8000/project/${params.id}`)
}

const ProjectDetailsPage = () => {
  return ( 
    <>
    </>
  )
}
 
export default ProjectDetailsPage