import React from 'react'

export default function PorqueElegirnos() {
  const razones = [
    {
      id: 1,
      titulo: "Calidad de Servicio",
      descripcion: "Nos destacamos por ir más allá de las expectativas de nuestros clientes, siempre con total transparencia y sin sorpresas desagradables.",
      icono: (
        <svg className='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
        </svg>
      ),
      color: "from-[#F48437] to-[#e07730]"
    },
    {
      id: 2,
      titulo: "Experiencia",
      descripcion: "Poseemos la experiencia necesaria para rentar equipos sin sorpresas inesperadas, respaldados por nuestros técnicos del centro de servicio, quienes se actualizan continuamente.",
      icono: (
        <svg className='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' />
        </svg>
      ),
      color: "from-[#066396] to-[#0578b8]"
    },
    {
      id: 3,
      titulo: "Reputación",
      descripcion: "Nos destacamos por nuestra integridad y por preservar con esmero la reputación que nos respalda. En nuestro centro de servicio, es una norma devolver las piezas dañadas de sus equipos; de lo contrario, el servicio es completamente gratuito.",
      icono: (
        <svg className='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' />
        </svg>
      ),
      color: "from-[#53545B] to-[#3a3b40]"
    }
  ]

  return (
    <div className='bg-gradient-to-b from-gray-50 to-white py-20'>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
            ¿Por qué <span className='text-[#F48437]'>elegirnos</span>?
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Somos tu mejor opción en construcción y servicios especializados
          </p>
        </div>

        {/* Razones Grid */}
        <div className='grid md:grid-cols-3 gap-8 max-w-7xl mx-auto'>
          {razones.map((razon) => (
            <div
              key={razon.id}
              className='group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-transparent overflow-hidden'
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${razon.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              {/* Content */}
              <div className='relative'>
                {/* Icon */}
                <div className='text-[#F48437] mb-6 transform group-hover:scale-110 transition-transform duration-300'>
                  {razon.icono}
                </div>

                {/* Title */}
                <h3 className='text-2xl font-bold text-gray-800 mb-4'>
                  {razon.titulo}
                </h3>

                {/* Description */}
                <p className='text-gray-600 leading-relaxed'>
                  {razon.descripcion}
                </p>
              </div>

              {/* Decorative Element */}
              <div className='absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#F48437]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
