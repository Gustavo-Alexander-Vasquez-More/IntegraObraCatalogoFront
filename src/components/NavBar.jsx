import React, { useState } from 'react'
import Logo from './navbar/Logo'
import InputSearch from './navbar/InputSearch'
import NavLinks from './navbar/NavLinks'
import MobileMenu from './navbar/MobileMenu'

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='w-full flex flex-col'>
      <section className='w-full flex justify-between items-center px-[2%] bg-[#F48437]'>
        <Logo/>
        
        {/* Desktop Navigation */}
        <div className='hidden lg:flex'>
          <NavLinks/>
        </div>
        
        <div className='hidden lg:block w-[15%] '>
          <InputSearch/>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={toggleMenu}
          className='lg:hidden text-white p-2 hover:bg-[#e07730] rounded transition-colors duration-200'
          aria-label='Toggle menu'
        >
          {isMenuOpen ? (
            // X Icon
            <svg className='w-7 h-7' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
            </svg>
          ) : (
            // Hamburger Icon
            <svg className='w-7 h-7' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          )}
        </button>
      </section>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <MobileMenu setIsMenuOpen={setIsMenuOpen} />
      )}
    </div>
  )
}
