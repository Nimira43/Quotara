import { NavLink } from 'react-router'
import { BsChatSquareQuote } from "react-icons/bs";

const Navbar = () => {
  return ( 
    <nav className='bg-teal-800 shadow-md sticky top-0 z-50'>
      <div className='max-w-6xl mx-auto px-6 py-4 flex justify-between items-center'>
        <NavLink
          to='/'
          className='flex items-center gap-2'
        >
          <BsChatSquareQuote className='text-3xl text-white' />
          <span className='text-3xl text-white logo pb-1'>Quotara</span>
        </NavLink>
        <div className='hidden md:flex items-center gap-6'>
          <div className='space-x-4 text-sm text-white uppercase font-medium'>
            <NavLink 
              className='nav-link hover-transition'
              to='/'
            >
              Home
            </NavLink>
            <NavLink 
              className='nav-link hover-transition'
              to='/services'
            >
              Services
            </NavLink>
            <NavLink 
              className='nav-link hover-transition'
              to='/blog'
            >
              Blog
            </NavLink>
            <NavLink 
              className='nav-link hover-transition'
              to='/about'
            >
              About
            </NavLink>
            <NavLink 
              className='nav-link hover-transition'
              to='/contact'
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}
 
export default Navbar