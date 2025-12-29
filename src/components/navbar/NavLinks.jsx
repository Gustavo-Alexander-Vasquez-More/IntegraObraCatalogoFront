import React from 'react'
import EmpresaButton from './buttons/EmpresaButton'
import ServiciosButton from './buttons/ServiciosButton'
import EquiposButton from './buttons/EquiposButton'

export default function NavLinks() {
  return (
    <div className='flex self-stretch'>
        <a className='hover:bg-[#53545B] text-white font-semibold px-5 flex items-center py-[1rem]' href="/">Inicio</a>
        <EmpresaButton/>
        <EquiposButton/>
        <ServiciosButton/>
        <a className='flex items-center text-white font-semibold py-[1rem] px-5 hover:bg-[#53545B]' href="/contacto">Contacto</a>
    </div>
  )
}
