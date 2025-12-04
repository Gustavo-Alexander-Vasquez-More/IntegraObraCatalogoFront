import React from 'react'

export default function InputSearch() {
  return (
    <div className='w-full'>
      <div className='relative group'>
        <input
          aria-label='Buscar'
          placeholder='¿Qué estás buscando?'
          className='w-full rounded-full py-3 px-5 border-0 outline-none transition-all duration-300 ease-in-out focus:shadow-lg focus:ring-4 focus:ring-[#F48437] focus:ring-opacity-20'
          type="text"
        />
      </div>
    </div>
  )
}
