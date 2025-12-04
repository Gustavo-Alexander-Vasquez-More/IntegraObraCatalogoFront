import React from 'react'

export default function HeroHome() {
  return (
    <div className='relative bg-gradient-to-br from-[#066396] via-[#0578b8] to-[#066396] text-white overflow-hidden'>
      {/* Patrón de fondo decorativo */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl'></div>
        <div className='absolute bottom-20 right-10 w-96 h-96 bg-[#F48437] rounded-full blur-3xl'></div>
      </div>

      {/* Contenido Principal */}
      <div className='relative container mx-auto px-4 py-20 md:py-32'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          
          {/* Lado Izquierdo - Texto y CTAs */}
          <div className='space-y-8 z-10'>
            <div className='inline-block'>
              <span className='bg-[#F48437] text-white px-4 py-2 rounded-full text-sm font-semibold'>
                Líderes en construcción
              </span>
            </div>

            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight'>
              Construimos tus
              <span className='block text-[#F48437]'>sueños en realidad</span>
            </h1>

            <p className='text-xl md:text-2xl text-gray-100 leading-relaxed'>
              Tenemos de experiencia transformando proyectos en obras maestras. 
              Calidad, compromiso y excelencia en cada detalle.
            </p>

            {/* Estadísticas */}
            <div className='grid grid-cols-3 gap-6 py-6'>
              <div className='text-center'>
                <div className='text-4xl font-bold text-[#F48437]'>500+</div>
                <div className='text-sm text-gray-200'>Proyectos</div>
              </div>
              <div className='text-center'>
                <div className='text-4xl font-bold text-[#F48437]'>98%</div>
                <div className='text-sm text-gray-200'>Satisfacción</div>
              </div>
            </div>

            {/* Botones de Acción */}
            <div className='flex flex-col sm:flex-row gap-4'>
              <a 
                href='#cotizacion'
                className='bg-[#F48437] hover:bg-[#e07730] text-white font-bold py-4 px-8 rounded-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center'
              >
                Solicitar cotización
              </a>
              <a 
                href='/contacto'
                className='bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold py-4 px-8 rounded-lg transition duration-300 border-2 border-white/30 hover:border-white/50 text-center'
              >
                Contáctanos
              </a>
            </div>
          </div>

          {/* Lado Derecho - Imagen/Ilustración */}
          <div className='relative hidden md:block'>
            <div className='relative z-10'>
              {/* Card principal con efecto glassmorphism */}
              <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20'>
                <div className='space-y-6'>
                  {/* Icono de construcción grande */}
                  <div className='bg-[#F48437] w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl'>
                    <svg className='w-14 h-14 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' />
                    </svg>
                  </div>

                  {/* Features list */}
                  <div className='space-y-4'>
                    <div className='flex items-center gap-3 bg-white/5 p-4 rounded-lg'>
                      <div className='bg-[#F48437] p-2 rounded-lg'>
                        <svg className='w-5 h-5 text-white' fill='currentColor' viewBox='0 0 20 20'>
                          <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                        </svg>
                      </div>
                      <span className='font-semibold'>Equipos profesionales</span>
                    </div>

                    <div className='flex items-center gap-3 bg-white/5 p-4 rounded-lg'>
                      <div className='bg-[#F48437] p-2 rounded-lg'>
                        <svg className='w-5 h-5 text-white' fill='currentColor' viewBox='0 0 20 20'>
                          <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                        </svg>
                      </div>
                      <span className='font-semibold'>Trabajo de Calidad</span>
                    </div>

                    <div className='flex items-center gap-3 bg-white/5 p-4 rounded-lg'>
                      <div className='bg-[#F48437] p-2 rounded-lg'>
                        <svg className='w-5 h-5 text-white' fill='currentColor' viewBox='0 0 20 20'>
                          <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                        </svg>
                      </div>
                      <span className='font-semibold'>Entrega a tiempo</span>
                    </div>

                    <div className='flex items-center gap-3 bg-white/5 p-4 rounded-lg'>
                      <div className='bg-[#F48437] p-2 rounded-lg'>
                        <svg className='w-5 h-5 text-white' fill='currentColor' viewBox='0 0 20 20'>
                          <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                        </svg>
                      </div>
                      <span className='font-semibold'>Soporte 24/7</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cards decorativas */}
              <div className='absolute -top-6 -right-6 bg-[#F48437] px-6 py-3 rounded-lg shadow-xl animate-bounce'>
                <div className='text-sm font-semibold'>🎯 100% Confiable</div>
              </div>
              
              <div className='absolute -bottom-6 -left-6 bg-white text-[#066396] px-6 py-3 rounded-lg shadow-xl'>
                <div className='text-sm font-semibold'>⚡ Respuesta rápida</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Wave divider en la parte inferior */}
      <div className='absolute bottom-0 left-0 right-0'>
        <svg className='w-full h-20 fill-current text-gray-50' preserveAspectRatio='none' viewBox='0 0 1440 54'>
          <path d='M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z'></path>
        </svg>
      </div>
    </div>
  )
}
