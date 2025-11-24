import { useState } from 'react'
import { NavLink } from 'react-router'
import { BsChatSquareQuote } from 'react-icons/bs'
import { LiaTimesSolid, LiaBarsSolid } from 'react-icons/lia'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const base = 'nav-link transitioning'
  const active = 'text-orange-400 font-semibold'

  return ( 
    <nav className='bg-teal-700 shadow-md sticky top-0 z-50'>
      <div className='max-w-6xl mx-auto px-6 py-4 flex justify-between items-center'>
        <NavLink
          to='/'
          className='flex items-center gap-2 text-white text-3xl'
        >
          <BsChatSquareQuote className='text-orange-400' />
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
              to='/projects'
            >
              Projects
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
      {
        menuOpen && (
          <div className='menu-open transitioning'>
            <NavLink 
              className={({ isActive }) => isActive
                ? active
                : base
              }
              to='/'
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              className={({ isActive }) => isActive
                ? active
                : base
              }
              to='/projects'
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink 
              className={({ isActive }) => isActive
                ? active
                : base
              }
              to='/blog'
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </NavLink>
            <NavLink 
              className={({ isActive }) => isActive
                ? active
                : base
              }
              to='/about'
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink 
              className={({ isActive }) => isActive
                ? active
                : base
              }
              to='/contact'
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        )
      }
    </nav>
  )
}
 
export default Navbar