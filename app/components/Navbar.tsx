import { useState } from 'react'
import { NavLink } from 'react-router'
import { BsChatSquareQuote } from 'react-icons/bs'
import { LiaTimesSolid, LiaBarsSolid } from 'react-icons/lia'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const base = 'nav-link hover-transition'
  const active = 'text-orange-500 font-semibold'

  return ( 
    <nav className='bg-teal-800 shadow-md sticky top-0 z-50'>
      <div className='max-w-6xl mx-auto px-6 py-4 flex justify-between items-center'>
        <NavLink
          to='/'
          className='flex items-center gap-2 text-white text-3xl'
        >
          <BsChatSquareQuote />
          <span className='logo pb-1'>Quotara</span>
        </NavLink>
        <div className='hidden md:flex items-center gap-6'>
          <div className='space-x-4 text-sm text-white uppercase font-medium'>
            <NavLink 
              className={({ isActive }) => isActive
                ? active
                : base
              }
              to='/'
            >
              Home
            </NavLink>
            <NavLink 
              className={({ isActive }) => isActive
                ? active
                : base
              }
              to='/services'
            >
              Services
            </NavLink>
            <NavLink 
              className={({ isActive }) => isActive
                ? active
                : base
              }
              to='/blog'
            >
              Blog
            </NavLink>
            <NavLink 
              className={({ isActive }) => isActive
                ? active
                : base
              }
              to='/about'
            >
              About
            </NavLink>
            <NavLink 
              className={({ isActive }) => isActive
                ? active
                : base
              }
              to='/contact'
            >
              Contact
            </NavLink>
          </div>
        </div>

        <div className='md:hidden flex items-center gap-4'>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='text-white text-xl cursor-pointer'
            title='Menu'
          >
            {menuOpen 
              ? <LiaTimesSolid />
              : <LiaBarsSolid /> 
            }
          </button>
        </div>
      </div>
    </nav>
  )
}
 
export default Navbar