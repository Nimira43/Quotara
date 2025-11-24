import { Link } from 'react-router'
import type { Project } from '~/types'

const ProjectCard = ({ projects}: {project: Project}) => {
  return ( 
    <Link
      className='block transform transition transition-duration-300 hover:scale-[1.02]'
      to={`/prodjects/${projects.id}`}
    
    >
    
    </Link>
  )
}
 
export default ProjectCard