import type { Route } from './+types/index'

export async function loader({ request }: Route.LoaderArgs): Promise<any> {

}

const ProjectsPage = () => {
  return ( 
    <>
      <h2 className='text-3xl font-medium text-gray-900 mb-2'>Projects</h2>
    </>
  )
}
 
export default ProjectsPage