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
    </>
  )
}
 
export default ProjectsPage