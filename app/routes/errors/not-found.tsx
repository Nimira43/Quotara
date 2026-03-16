import { Link } from 'react-router'

const NotFoundPage = () => {
  return ( 
    <div className='flex flex-col items-center justify-center text-center px-6 min-h-[70vh]'>
      <h1 className='text-6xl text-teal-700 mb-4'>404</h1>
      <h2 className='page-title'>Page Not Found</h2>
      <p className='text-gray-700 text-lg max-w-md'>We could not find the page you were looking for.</p>
      <Link 
        to='/'
        className='mt-4 inline-block orange-btn transitioning'
      >
        Home  
      </Link>
    </div>
  )
}
 
export default NotFoundPage