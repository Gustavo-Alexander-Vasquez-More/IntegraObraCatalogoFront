import React from 'react'
import { Link } from 'react-router-dom'

export default function EnConstruccion() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-[#066396] via-[#0578b8] to-[#066396] flex items-center justify-center px-4'>
      <div className='max-w-4xl w-full'>
        {/* Contenedor principal */}
        <div className='bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 text-center'>
          
          {/* Icono animado */}
          <div className='mb-8 flex justify-center'>
            <div className='relative'>
              {/* Casco de construcción */}
              <div className='w-32 h-32 bg-[#F48437] rounded-full flex items-center justify-center shadow-lg animate-bounce'>
                <svg className='w-16 h-16 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' />
                </svg>
              </div>
              
              {/* Círculos decorativos */}
              <div className='absolute -top-2 -right-2 w-8 h-8 bg-[#066396] rounded-full animate-ping'></div>
              <div className='absolute -bottom-2 -left-2 w-6 h-6 bg-[#F48437] rounded-full animate-pulse'></div>
            </div>
          </div>

          {/* Título */}
          <h1 className='text-4xl md:text-6xl font-bold text-gray-800 mb-4'>
            Página en <span className='text-[#F48437]'>Construcción</span>
          </h1>

          {/* Subtítulo */}
          <p className='text-xl md:text-2xl text-gray-600 mb-8'>
            Estamos trabajando para ofrecerte la mejor experiencia
          </p>

          {/* Descripción */}
          <div className='max-w-2xl mx-auto mb-8'>
            <p className='text-gray-600 leading-relaxed'>
              Nuestro equipo está construyendo esta sección con el mismo cuidado y profesionalismo 
              que ponemos en cada uno de nuestros proyectos. ¡Pronto estará lista!
            </p>
          </div>

          {/* Barra de progreso */}
          <div className='max-w-md mx-auto mb-8'>
            <div className='bg-gray-200 rounded-full h-4 overflow-hidden'>
              <div className='bg-gradient-to-r from-[#F48437] to-[#e07730] h-full rounded-full animate-pulse' style={{ width: '65%' }}></div>
            </div>
            <p className='text-sm text-gray-500 mt-2'>65% completado</p>
          </div>

          {/* Características en construcción */}
          <div className='grid md:grid-cols-3 gap-6 mb-8'>
            <div className='flex flex-col items-center p-4 bg-gray-50 rounded-xl'>
              <svg className='w-10 h-10 text-[#F48437] mb-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
              </svg>
              <h3 className='font-semibold text-gray-800 mb-1'>Diseño Moderno</h3>
              <p className='text-sm text-gray-600'>Interfaz intuitiva</p>
            </div>

            <div className='flex flex-col items-center p-4 bg-gray-50 rounded-xl'>
              <svg className='w-10 h-10 text-[#066396] mb-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 10V3L4 14h7v7l9-11h-7z' />
              </svg>
              <h3 className='font-semibold text-gray-800 mb-1'>Rápida y Eficiente</h3>
              <p className='text-sm text-gray-600'>Optimizada al máximo</p>
            </div>

            <div className='flex flex-col items-center p-4 bg-gray-50 rounded-xl'>
              <svg className='w-10 h-10 text-[#F48437] mb-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' />
              </svg>
              <h3 className='font-semibold text-gray-800 mb-1'>100% Responsive</h3>
              <p className='text-sm text-gray-600'>En todos los dispositivos</p>
            </div>
          </div>

          {/* Botones de acción */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <Link 
              to='/'
              className='bg-[#F48437] hover:bg-[#e07730] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
            >
              Volver al inicio
            </Link>
            <a 
              href='#cotizacion'
              className='bg-[#066396] hover:bg-[#0578b8] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
            >
              Solicitar cotización
            </a>
          </div>

          {/* Información de contacto */}
          <div className='mt-8 pt-8 border-t border-gray-200'>
            <p className='text-gray-600 mb-4'>
              ¿Tienes alguna pregunta? Estamos aquí para ayudarte
            </p>
            <div className='flex flex-wrap justify-center gap-6 text-sm'>
              <a href='tel:+525512345678' className='flex items-center gap-2 text-[#066396] hover:text-[#F48437] transition-colors'>
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                </svg>
                <span className='font-semibold'>55 1234 5678</span>
              </a>
              <a href='mailto:contacto@integraobra.com' className='flex items-center gap-2 text-[#066396] hover:text-[#F48437] transition-colors'>
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                </svg>
                <span className='font-semibold'>contacto@integraobra.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Elementos decorativos flotantes */}
        <div className='absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse'></div>
        <div className='absolute bottom-10 right-10 w-32 h-32 bg-[#F48437]/10 rounded-full blur-xl animate-pulse'></div>
      </div>
    </div>
  )
}
