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
      <section className='w-full flex justify-between items-center px-[2%] bg-[#F48437] fixed top-0 left-0 z-40 shadow-lg' style={{minHeight:'64px'}}> 
        <Logo/>
        
        {/* Desktop Navigation */}
        <div className='hidden lg:flex'>
          <NavLinks/>
        </div>
        
        <div className='hidden lg:block w-[15%] text-right'>
          {/* <InputSearch/> */}
          <div className='inline-flex flex-col items-end'>
            <div className='bg-white/10 border border-white rounded-xl px-3 py-2 shadow-sm backdrop-blur-sm transition-colors duration-200 hover:bg-white/20'>
              <a href='tel:+5219995210167' className='inline-flex items-center gap-2 text-white font-bold text-lg'>
                <svg className='w-5 h-5' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm13.707 7.293a1 1 0 00-1.414 0l-2.293 2.293a1 1 0 01-1.414 0l-2.293-2.293a1 1 0 00-1.414 1.414l2.293 2.293a3 3 0 004.242 0l2.293-2.293a1 1 0 000-1.414z' />
                  <path strokeLinecap='round' strokeLinejoin='round' d='M22 16.92V19a2 2 0 01-2 2A17.92 17.92 0 013 5a2 2 0 012-2h2.09a1 1 0 01.95.68l1.2 3.6a1 1 0 01-.23 1.09l-1.27 1.27a16 16 0 006.29 6.29l1.27-1.27a1 1 0 011.09-.23l3.6 1.2a1 1 0 01.68.95z' />
                </svg>
                <span>999 521 0167</span>
              </a>
              <div className='mt-1 text-right'>
                <a href='tel:8000443300' className='text-xs text-white/90 hover:text-white block'>800 044 3300 <span className='ml-1 text-[10px] text-white'>(Línea sin costo)</span></a>
              </div>
            </div>
          </div>
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
      {/* Spacer para evitar que el contenido quede oculto debajo de la navbar fija */}
      <div className='w-full' style={{height:'64px'}}></div>
    </div>
  )
}
