import type { ReactNode } from 'react'

interface CreatorsCardProps {
  icon: ReactNode
  title: string
  description: string
}

const CreatorsCard = ({ icon, title, description }: CreatorsCardProps) => {
  return (
    <div className='bg-teal-50 p-6 rounded-md shadow-md flex flex-col items-center border border-orange-400'>
      <div className='text-4xl text-orange-400 mb-3 flex items-center justify-center'>
        {icon}
      </div>

      <h3 className='text-lg font-semibold text-teal-700 mb-2'>
        {title}
      </h3>

      <p className='text-gray-700 text-sm'>
        {description}
      </p>
    </div>
  )
}

export default CreatorsCard
