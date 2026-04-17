import { BiCodeAlt } from 'react-icons/bi'
import { GoImage } from 'react-icons/go'
import { PiShapes } from 'react-icons/pi'
import CreatorsCard from './CreatorsCard'

const Creators = () => {
  return (
    <section className='mt-12 p-10 flex flex-col md:flex-row items-center gap-8'>
      
      <div className='flex-1 space-y-4 text-center md:text-left'>
        <h2 className='text-3xl font-semibold text-gray-900'>
          How Creators Build on Quotara
        </h2>
        <p className='text-gray-700 leading-relaxed max-w-md'>
          Every project starts with curiosity. Quotara gives developers a place to explore ideas, refine their craft, and share their work with a community that values creativity over perfection.
        </p>
      </div>

      <div className='flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center'>
        <CreatorsCard
          icon={<BiCodeAlt />}
          title='Experiment'
          description='Try new stacks, test ideas, and learn by building — no pressure, no expectations.'
        />

        <CreatorsCard
          icon={<PiShapes />}
          title='Build'
          description='Turn concepts into real projects and grow your skills with every iteration.'
        />

        <CreatorsCard
          icon={<GoImage />}
          title='Share'
          description='Publish your work, inspire others, and connect with people who appreciate the journey.'
        />
      </div>

    </section>
  )
}

export default Creators

