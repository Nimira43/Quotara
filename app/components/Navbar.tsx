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
      </div>
    </nav>
  )
}
 
export default Navbar