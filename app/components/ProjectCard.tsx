import { Link } from 'react-router'
import type { Project } from '~/types'

const ProjectCard = ({ project }: {project: Project}) => {
  return ( 
    <Link
      className='block transform transition transition-duration-300 hover:scale-[1.02]'
      to={`/projects/${project.id}`}
    >
      <div 
        className='bg-teal-50 border border-orange-400 rounded-md overflow-hidden shadow-md transitioning hover:shadow-md h-full flex flex-col'
      >
        <img 
          src={project.image} 
          alt={project.title} 
          className='w-full h-40 object-cover'
        />

        <div className='p-5 flex flex-col flex-1'>
          <h3 className='text-2xl font-medium text-teal-700 mb-2'>
            {project.title}
          </h3>

          <p className='text-sm text-gray-700 mb-2 flex-1'>
            {project.description}
          </p>

          <div className='flex justify-between items-center text-sm text-orange-400 font-semibold uppercase mt-auto'>
            <span>
              {project.category}
              </span>
            <span>
              {new Date(project.date).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>

    </Link>
  )
}
 
export default ProjectCard