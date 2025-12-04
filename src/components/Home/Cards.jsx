import React from 'react'
import { Link } from 'react-router-dom'

export default function Cards() {
  const servicios = [
    {
      id: 1,
      titulo: "Equipos en Renta",
      descripcion: "Maquinaria ligera para construcción: demoledores, revolvedoras, vibradoras, andamios y más. Equipos revisados y listos para tu proyecto sin inversión en compra.",
      icono: (
        <svg className='w-16 h-16' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' />
        </svg>
      ),
      link: "/equipos-renta",
      color: "from-[#F48437] to-[#e07730]",
      iconBg: "bg-[#F48437]"
    },
    {
      id: 2,
      titulo: "Venta de Refacciones",
      descripcion: "IntegraRefacciones: repuestos para maquinaria eléctrica y de combustión. Carburadores, bobinas, cebadores y más en stock. Envíos a toda la República Mexicana.",
      icono: (
        <svg className='w-16 h-16' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' />
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
        </svg>
      ),
      link: "/refacciones",
      color: "from-[#066396] to-[#0578b8]",
      iconBg: "bg-[#066396]"
    },
    {
      id: 3,
      titulo: "Otros",
      descripcion: "Electricidad, instalación de climas, tablaroca, soldadura, cableado estructurado y mantenimiento de áreas verdes. Soluciones especializadas para tu proyecto.",
      icono: (
        <svg className='w-16 h-16' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
        </svg>
      ),
      link: "/contacto",
      color: "from-[#53545B] to-[#3a3b40]",
      iconBg: "bg-[#53545B]",
      cta: "Solicitar cotización"
    }
  ]

  return (
    <div className='bg-white py-20'>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
            Nuestros <span className='text-[#F48437]'>Servicios</span>
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Soluciones integrales para tus proyectos de construcción e industria
          </p>
        </div>

        {/* Cards Grid */}
        <div className='grid md:grid-cols-3 gap-8 max-w-7xl mx-auto'>
          {servicios.map((servicio) => (
            <Link
              key={servicio.id}
              to={servicio.link}
              className='group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2'
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${servicio.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

              {/* Card Content */}
              <div className='relative p-8'>
                {/* Icon */}
                <div className={`${servicio.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {servicio.icono}
                </div>

                {/* Title */}
                <h3 className='text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#F48437] transition-colors duration-300'>
                  {servicio.titulo}
                </h3>

                {/* Description */}
                <p className='text-gray-600 leading-relaxed mb-6'>
                  {servicio.descripcion}
                </p>

                {/* CTA Button/Link */}
                <div className='flex items-center gap-2 text-[#066396] font-semibold group-hover:gap-4 transition-all duration-300'>
                  <span>{servicio.cta || "Conocer más"}</span>
                  <svg className='w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M17 8l4 4m0 0l-4 4m4-4H3' />
                  </svg>
                </div>
              </div>

              {/* Bottom Border Accent */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${servicio.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>

              {/* Corner Decoration */}
              <div className='absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <div className='w-12 h-12 border-t-2 border-r-2 border-[#F48437] rounded-tr-lg'></div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className='text-center mt-16'>
          <p className='text-gray-600 mb-6 text-lg'>
            ¿No encuentras lo que buscas?
          </p>
          <a
            href='#cotizacion'
            className='inline-flex items-center gap-2 bg-[#F48437] hover:bg-[#e07730] text-white font-bold py-4 px-8 rounded-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
          >
            <span>Solicitar cotización</span>
            <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
