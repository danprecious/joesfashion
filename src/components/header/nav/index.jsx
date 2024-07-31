import React from 'react'
import NavLinks from './navLinks';

const NavBar = () => {
  return (
    <div className='px-2 w-[70%] hidden md:block'>
      <NavLinks />
    </div>
  )
}

export default NavBar;