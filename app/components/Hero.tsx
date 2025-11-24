import { Link } from 'react-router'

const Hero = () => {
  return ( 
    <header className='text-center py-20 px-4 transition-colors duration-300 bg-teal-50'>
      <h2 className='text-4xl text-gray-800 font-medium mb-4'> 
        Welcome to Quotara
      </h2>
      <p className='text-lg text-gray-700 max-w-2xl mx-auto mb-6'>Quotara empowers independent developers to showcase, sell, and thrive—turning coding products into opportunities, connecting creators with buyers, and transforming innovation into income.</p>
      <div className='flex justify-center gap-4'>
        <Link 
          to='/services'
          className='orange-btn transitioning'  
        >
          View Services
        </Link>
        <Link 
          to='/contact'
          className=' outline-btn transitioning'  
        >
          Contact Us
        </Link>
      </div>
    </header>
   )
}
 
export default Hero