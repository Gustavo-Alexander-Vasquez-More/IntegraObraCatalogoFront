import React from 'react'
import InputSearch from './InputSearch'

export default function MobileMenu({ setIsMenuOpen }) {
  return (
    <div className='lg:hidden bg-[#53545bf4] shadow-lg fixed inset-0 z-50 overflow-y-auto'>
      {/* Botón de cierre */}
      <button
        className='absolute top-4 right-4 z-50 bg-white/80 text-[#53545B] rounded-full p-3 shadow-xl hover:bg-[#F48437] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#F48437] transition-all duration-200 transform hover:scale-110 backdrop-blur-md border border-[#F48437]/30'
        aria-label='Cerrar menú'
        onClick={() => setIsMenuOpen(false)}
        style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)' }}
      >
        <svg className='w-7 h-7' fill='none' stroke='currentColor' strokeWidth='2.5' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
        </svg>
      </button>
      <div className='flex flex-col px-4 py-4 space-y-2 min-h-screen'>
        {/* Search Bar Mobile */}
        {/* <div className='mb-4'>
          <InputSearch/>
        </div> */}

        {/* Mobile Navigation Links */}
        <a 
          href='/' 
          className='text-white font-semibold py-3 px-4 hover:bg-[#0578b8] rounded transition-colors'
          onClick={() => setIsMenuOpen(false)}
        >
          Inicio
        </a>

        {/* Empresa Dropdown Mobile */}
        <details className='group'>
          <summary className='text-white font-semibold py-3 px-4 hover:bg-[#0578b8] rounded cursor-pointer list-none flex justify-between items-center'>
            Empresa
            <svg className='w-4 h-4 transition-transform group-open:rotate-180' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
            </svg>
          </summary>
          <div className='pl-4 mt-2 space-y-2'>
            <a href='/empresa/sobre-nosotros' className='block text-blue-100 py-2 px-4 hover:bg-[#0578b8] rounded' onClick={() => setIsMenuOpen(false)}>Sobre nosotros</a>
            <a href='/empresa/preguntas-frecuentes' className='block text-blue-100 py-2 px-4 hover:bg-[#0578b8] rounded' onClick={() => setIsMenuOpen(false)}>Preguntas frecuentes</a>
            <a href='/empresa/politica-privacidad' className='block text-blue-100 py-2 px-4 hover:bg-[#0578b8] rounded' onClick={() => setIsMenuOpen(false)}>Política de privacidad</a>
          </div>
        </details>

        {/* Equipos Dropdown Mobile */}
        {/* <details className='group'>
          <summary className='text-white font-semibold py-3 px-4 hover:bg-[#0578b8] rounded cursor-pointer list-none flex justify-between items-center'>
            Equipos
            <svg className='w-4 h-4 transition-transform group-open:rotate-180' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
            </svg>
          </summary>
          <div className='pl-4 mt-2 space-y-2'>
            <a href='/equipos/renta-equipos' className='block text-blue-100 py-2 px-4 hover:bg-[#0578b8] rounded' onClick={() => setIsMenuOpen(false)}>Renta de equipos</a>
            <a href='/equipos/venta-refacciones' className='block text-blue-100 py-2 px-4 hover:bg-[#0578b8] rounded' onClick={() => setIsMenuOpen(false)}>Venta de refacciones</a>
          </div>
        </details> */}

        {/* Servicios Dropdown Mobile */}
        <details className='group'>
          <summary className='text-white font-semibold py-3 px-4 hover:bg-[#0578b8] rounded cursor-pointer list-none flex justify-between items-center'>
            Servicios
            <svg className='w-4 h-4 transition-transform group-open:rotate-180' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
            </svg>
          </summary>
          <div className='pl-4 mt-2 space-y-2'>
            <a className='block text-white font-semibold py-2 hover:bg-[#6b6c70] px-3 rounded' href="/servicios/areas-verdes" onClick={() => setIsMenuOpen(false)}>Mantenimiento de áreas verdes</a>
            <a className='block text-white font-semibold py-2 hover:bg-[#6b6c70] px-3 rounded' href="/servicios/instalacion-manto-climas" onClick={() => setIsMenuOpen(false)}>Instalación de manto y climas</a>
            <a className='block text-white font-semibold py-2 hover:bg-[#6b6c70] px-3 rounded' href="/servicios/tablaroca-empastado" onClick={() => setIsMenuOpen(false)}>Tablaroca y empastado</a>
            <a className='block text-white font-semibold py-2 hover:bg-[#6b6c70] px-3 rounded' href="/servicios/electricidad" onClick={() => setIsMenuOpen(false)}>Electricidad</a>
            <a className='block text-white font-semibold py-2 hover:bg-[#6b6c70] px-3 rounded' href="/servicios/soldadura" onClick={() => setIsMenuOpen(false)}>Soldadura</a>
            <a className='block text-white font-semibold py-2 hover:bg-[#6b6c70] px-3 rounded' href="/servicios/plomeria" onClick={() => setIsMenuOpen(false)}>Plomería</a>
            <a className='block text-white font-semibold py-2 hover:bg-[#6b6c70] px-3 rounded' href="/servicios/cableado-estructurado" onClick={() => setIsMenuOpen(false)}>Cableado y estructurado</a>
            <a className='block text-white font-semibold py-2 hover:bg-[#6b6c70] px-3 rounded' href="/servicios/renta-maquinaria-ligera" onClick={() => setIsMenuOpen(false)}>Renta de maquinaria ligera</a>
            <a className='block text-white font-semibold py-2 hover:bg-[#6b6c70] px-3 rounded' href="/servicios/refacciones" onClick={() => setIsMenuOpen(false)}>Refacciones</a>
          </div>
        </details>

        <a 
          href='/contacto' 
          className='text-white font-semibold py-3 px-4 hover:bg-[#0578b8] rounded transition-colors'
          onClick={() => setIsMenuOpen(false)}
        >
          Contacto
        </a>
      </div>
    </div>
  )
}
