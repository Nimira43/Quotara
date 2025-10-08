import { NavLink } from 'react-router'

const Navbar = () => {
  return ( 
    <nav className='bg-main-dark shadow-md sticky top-0 z-50'>
      <div className='max-w-6xl mx-auto px-6 py-4 flex justify-between items-center'>
        <NavLink
          to='/'
          className='flex items-center gap-2'
        >
          <h2 className='text-3xl text-main logo'>Quotara</h2>
        </NavLink>
      </div>
    </nav>
  )
}
 
export default Navbar