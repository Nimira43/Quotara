import { Link } from 'react-router'

const Hero = () => {
  return ( 
    <header className='text-center py-20 px-4 transition-colors duration-300'>
      <h2 className='text-4xl text-gray-800 font-medium mb-4'> 
        Welcome to Quotara
      </h2>
      <p className='text-lg text-gray-700 max-w-2xl mx-auto mb-6'>Compare insurance, energy, and broadband deals in seconds. Save money, dodge confusion, and let Quotara simplify your switching ritual.</p>
      <div className='flex.justify-center gap-4'>
        <Link 
          to='/services'
          className='uppercase bg-orange-400 text-white px-6 py-2 rounded hover:bg-teal-700 transitioning'  
        >
          View Services
        </Link>
      </div>
    </header>
   )
}
 
export default Hero