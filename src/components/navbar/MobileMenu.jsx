import React from 'react'
import InputSearch from './InputSearch'

export default function MobileMenu({ setIsMenuOpen }) {
  return (
    <div className='lg:hidden bg-[#53545B] shadow-lg'>
      <div className='flex flex-col px-4 py-4 space-y-2'>
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
