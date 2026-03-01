import { BiCodeAlt } from 'react-icons/bi'
import { GoImage } from 'react-icons/go'
import { PiShapes } from 'react-icons/pi'

const Preview = () => {
  return (  
    <section className='mt-12 p-10 flex flex-col md:flex-row items-center gap-8 bg-teal-50'>

      <div className='flex-1 space-y-4 text-center md:text-left'>
        <h2 className='text-3xl font-semibold text-gray-900'>
          How Creators Build on Quotara
        </h2>
        <p className='text-gray-700 leading-relaxed max-w-md'>
          Every project starts with curiosity. Quotara gives developers a place to explore ideas, refine their craft, and share their work with a community that values creativity over perfection.
        </p>
      </div>

      <div className='flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center'>

  <div className='bg-white p-6 rounded-xl shadow-md flex flex-col items-center border border-orange-400'>
    <div className='text-4xl text-orange-400 mb-3 flex items-center justify-center'>
      <BiCodeAlt />
    </div>
    <h3 className='font-semibold text-gray-900 mb-2'>Experiment</h3>
    <p className='text-gray-700 text-sm'>
      Try new stacks, test ideas, and learn by building — no pressure, no expectations.
    </p>
  </div>

  <div className='bg-white p-6 rounded-xl shadow-md flex flex-col items-center border border-orange-400'>
    <div className='text-4xl text-orange-400 mb-3 flex items-center justify-center'>
      <PiShapes />
    </div>
    <h3 className='font-semibold text-gray-900 mb-2'>Build</h3>
    <p className='text-gray-700 text-sm'>
      Turn concepts into real projects and grow your skills with every iteration.
    </p>
  </div>

  <div className='bg-white p-6 rounded-xl shadow-md flex flex-col items-center border border-orange-400'>
    <div className='text-4xl text-orange-400 mb-3 flex items-center justify-center'>
      <GoImage />
    </div>
    <h3 className='font-semibold text-gray-900 mb-2'>Share</h3>
    <p className='text-gray-700 text-sm'>
      Publish your work, inspire others, and connect with people who appreciate the journey.
    </p>
  </div>

</div>

    </section>
  )
}

export default Preview
