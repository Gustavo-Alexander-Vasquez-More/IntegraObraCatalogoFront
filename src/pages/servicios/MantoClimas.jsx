import React from 'react'
import { Helmet } from 'react-helmet'

export default function MantoClimas() {
  const servicios = [
    {
      titulo: 'Instalación de Equipos',
      descripcion: 'Instalamos aires acondicionados nuevos con puesta en marcha completa y pruebas de funcionamiento.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4' />
        </svg>
      )
    },
    {
      titulo: 'Reparación de Fallas',
      descripcion: 'Diagnosticamos y reparamos cualquier problema en tu equipo de aire acondicionado de manera rápida.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' />
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
        </svg>
      )
    },
    {
      titulo: 'Limpieza Profunda',
      descripcion: 'Realizamos limpieza completa de filtros, serpentines y componentes internos para mejor rendimiento.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' />
        </svg>
      )
    },
    {
      titulo: 'Recarga de Gas',
      descripcion: 'Recargamos el gas refrigerante según las especificaciones del fabricante para óptimo enfriamiento.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 10V3L4 14h7v7l9-11h-7z' />
        </svg>
      )
    },
    {
      titulo: 'Mantenimiento Preventivo',
      descripcion: 'Programas de mantenimiento periódico para evitar fallas y prolongar la vida útil de tu equipo.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' />
        </svg>
      )
    },
    {
      titulo: 'Puesta en Marcha',
      descripcion: 'Configuración inicial y verificación de funcionamiento correcto de equipos nuevos o reparados.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z' />
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
        </svg>
      )
    },
    {
      titulo: 'Detección de Fugas',
      descripcion: 'Localizamos y reparamos fugas de refrigerante con equipos especializados de detección.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
        </svg>
      )
    },
    {
      titulo: 'Cambio de Refacciones',
      descripcion: 'Reemplazamos componentes dañados con refacciones originales o de alta calidad certificadas.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' />
        </svg>
      )
    }
  ]

  const beneficios = [
    {
      titulo: 'Ahorro de Energía',
      descripcion: 'Equipos bien mantenidos consumen menos electricidad',
      icono: '⚡'
    },
    {
      titulo: 'Mayor Durabilidad',
      descripcion: 'Prolonga la vida útil de tu aire acondicionado',
      icono: '🛡️'
    },
    {
      titulo: 'Mejor Clima',
      descripcion: 'Espacios frescos y confortables todo el año',
      icono: '❄️'
    },
    {
      titulo: 'Aire Más Limpio',
      descripcion: 'Filtración efectiva de partículas y alérgenos',
      icono: '🌬️'
    }
  ]

  const tiposEquipos = [
    { nombre: 'Mini Split', descripcion: 'Equipos individuales para espacios específicos' },
    { nombre: 'Multi Split', descripcion: 'Sistemas con múltiples unidades interiores' },
    { nombre: 'Ventana', descripcion: 'Aires compactos para instalación en ventana' },
    { nombre: 'Cassette', descripcion: 'Equipos empotrados en techo falso' },
    { nombre: 'Piso-Techo', descripcion: 'Unidades versátiles montables en piso o techo' },
    { nombre: 'Inverter', descripcion: 'Tecnología de ahorro energético avanzado' }
  ]

  return (
    <div className='bg-white'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Instalación y Mantenimiento de Aires Acondicionados en Mérida | IntegraObra.mx</title>
        <meta name="description" content="Instalación, reparación y mantenimiento de aires acondicionados en Mérida y Yucatán. Técnicos certificados, limpieza profunda, recarga de gas, detección de fugas y refacciones originales. Servicio rápido, garantía y precios justos." />
        <meta name="keywords" content="mantenimiento de climas, instalación de aires acondicionados, reparación de climas, limpieza de aire acondicionado, recarga de gas, técnicos certificados, IntegraObra, Mérida Yucatán, servicio de climas, México" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://integraobra.mx/servicios/instalacion-manto-climas" />
        {/* Open Graph */}
        <meta property="og:locale" content="es_MX" />
        <meta property="og:site_name" content="IntegraObra.mx" />
        <meta property="og:title" content="Instalación y Mantenimiento de Aires Acondicionados en Mérida" />
        <meta property="og:description" content="Instalación, reparación y mantenimiento de aires acondicionados en Mérida y Yucatán. Técnicos certificados, limpieza profunda, recarga de gas, detección de fugas y refacciones originales. Servicio rápido, garantía y precios justos." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://integraobra.mx/servicios/instalacion-manto-climas" />
        <meta property="og:image" content="https://integraobra.mx/climas/banner.webp" />
        <meta property="og:image:alt" content="Técnicos certificados en aires acondicionados Mérida, IntegraObra" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@integraobra" />
        <meta name="twitter:title" content="Instalación y Mantenimiento de Aires Acondicionados en Mérida" />
        <meta name="twitter:description" content="Instalación, reparación y mantenimiento de aires acondicionados en Mérida y Yucatán. Técnicos certificados, limpieza profunda, recarga de gas, detección de fugas y refacciones originales. Servicio rápido, garantía y precios justos." />
        <meta name="twitter:image" content="https://integraobra.mx/climas/banner.webp" />
        <meta name="twitter:image:alt" content="Técnicos certificados en aires acondicionados Mérida, IntegraObra" />
      </Helmet>
      {/* Hero Section */}
      <div className='relative bg-gradient-to-br from-cyan-600 to-blue-600 text-white py-20 overflow-hidden'>
        <div 
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{ backgroundImage: "url('/climas/banner.webp')" }}
        ></div>
        <div className='absolute inset-0 bg-black/40'></div>
        
        <div className='container mx-auto px-4 relative z-10'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-5xl md:text-6xl font-bold mb-6'>
              Instalación y Mantenimiento de <span className='text-[#F48437]'>Climas</span>
            </h1>
            <p className='text-xl md:text-2xl text-cyan-100 mb-8'>
              Espacios frescos y cómodos con servicio profesional y confiable
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a 
                href='/contacto'
                className='bg-[#F48437] hover:bg-[#e07730] text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
              >
                Contactar
              </a>
              <a 
                href='#servicios'
                className='bg-white hover:bg-gray-100 text-cyan-700 font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
              >
                Ver servicios
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Introducción - Texto del jefe */}
      <div className='py-16 bg-gradient-to-b from-white to-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <div className='bg-white p-8 md:p-12 rounded-2xl shadow-xl border-t-4 border-cyan-500'>
              <div className='flex items-start gap-6'>
                <div className='hidden md:block flex-shrink-0'>
                  <div className='bg-gradient-to-br from-cyan-500 to-blue-600 p-4 rounded-xl'>
                    <svg className='w-12 h-12 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' />
                    </svg>
                  </div>
                </div>
                <div>
                  <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>
                    Soluciones Completas en <span className='text-cyan-600'>Climatización</span>
                  </h2>
                  <p className='text-lg text-gray-700 leading-relaxed'>
                    Entre nuestros servicios ofrecemos la <strong>instalación, reparación y mantenimiento de climas</strong>. 
                    Nos encargamos de poner en marcha nuevos equipos, resolver fallas, realizar limpieza profunda, recargar 
                    gas y asegurar que cada sistema funcione de manera eficiente y segura. Nuestro objetivo es brindarle 
                    soluciones rápidas, confiables y de calidad para mantener sus espacios siempre frescos y cómodos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Servicios Grid */}
      <div id='servicios' className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <div className='inline-block mb-4'>
              <span className='bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold'>
                Nuestros Servicios
              </span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
              Servicios <span className='text-cyan-600'>Especializados</span>
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Todo lo que necesitas para mantener tu aire acondicionado funcionando perfectamente
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {servicios.map((servicio, index) => (
              <div 
                key={index}
                className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-cyan-500 group'
              >
                <div className='bg-gradient-to-br from-cyan-500 to-blue-600 text-white p-4 rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform duration-300'>
                  {servicio.icono}
                </div>
                <h3 className='text-xl font-bold text-gray-800 mb-3 group-hover:text-cyan-600 transition-colors'>
                  {servicio.titulo}
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  {servicio.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tipos de Equipos */}
      <div className='py-20 bg-gradient-to-b from-gray-50 to-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
                Trabajamos con <span className='text-cyan-600'>todos los equipos</span>
              </h2>
              <p className='text-xl text-gray-600'>
                Experiencia en todo tipo de sistemas de climatización
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {tiposEquipos.map((tipo, index) => (
                <div 
                  key={index}
                  className='bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-cyan-500'
                >
                  <h3 className='text-xl font-bold text-gray-800 mb-2'>
                    {tipo.nombre}
                  </h3>
                  <p className='text-gray-600'>
                    {tipo.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Beneficios */}
      <div className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
                Beneficios del mantenimiento
              </h2>
              <p className='text-xl text-gray-600'>
                Por qué es importante cuidar tu equipo de aire acondicionado
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {beneficios.map((beneficio, index) => (
                <div 
                  key={index}
                  className='bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2'
                >
                  <div className='text-5xl mb-4'>{beneficio.icono}</div>
                  <h3 className='text-xl font-bold text-gray-800 mb-2'>
                    {beneficio.titulo}
                  </h3>
                  <p className='text-gray-600'>
                    {beneficio.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Galería con Imagen */}
      <div className='py-20 bg-gradient-to-b from-gray-50 to-white'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto'>
            <div>
              <h2 className='text-4xl font-bold text-gray-800 mb-6'>
                Servicio técnico <span className='text-cyan-600'>certificado</span>
              </h2>
              <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
                Contamos con técnicos especializados y certificados en sistemas de climatización. 
                Utilizamos herramientas profesionales y refacciones de calidad para garantizar 
                resultados óptimos en cada servicio.
              </p>
              
              <div className='space-y-4'>
                <div className='flex items-start gap-4 p-4 bg-white rounded-lg shadow-md'>
                  <div className='bg-cyan-500 text-white p-3 rounded-lg flex-shrink-0'>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  </div>
                  <div>
                    <h4 className='font-bold text-gray-800 mb-1'>Técnicos Certificados</h4>
                    <p className='text-gray-600'>Personal capacitado y con experiencia comprobable</p>
                  </div>
                </div>

                <div className='flex items-start gap-4 p-4 bg-white rounded-lg shadow-md'>
                  <div className='bg-cyan-500 text-white p-3 rounded-lg flex-shrink-0'>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  </div>
                  <div>
                    <h4 className='font-bold text-gray-800 mb-1'>Refacciones Originales</h4>
                    <p className='text-gray-600'>Usamos partes de calidad certificada para mayor durabilidad</p>
                  </div>
                </div>

                <div className='flex items-start gap-4 p-4 bg-white rounded-lg shadow-md'>
                  <div className='bg-cyan-500 text-white p-3 rounded-lg flex-shrink-0'>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  </div>
                  <div>
                    <h4 className='font-bold text-gray-800 mb-1'>Garantía por Escrito</h4>
                    <p className='text-gray-600'>Todos nuestros servicios incluyen garantía documentada</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='relative rounded-2xl overflow-hidden shadow-2xl group order-first md:order-last'>
              <img 
                src='/climas/aire.webp' 
                alt='Técnico certificado instalando aire acondicionado en Mérida, Yucatán'
                className='w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-500'
                loading='lazy'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-cyan-900/60 to-transparent'></div>
              <div className='absolute bottom-6 left-6 right-6 text-white'>
                <p className='text-3xl font-bold mb-2'>Trabajo profesional</p>
                <p className='text-cyan-100'>Garantía y calidad asegurada</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className='py-20 bg-gradient-to-br from-cyan-600 to-blue-700 text-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              ¿Necesitas servicio para tu clima?
            </h2>
            <p className='text-xl md:text-2xl text-white mb-8'>
              Contáctanos ahora y recibe atención personalizada
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a 
                href='/contacto'
                className='bg-white hover:bg-gray-100 text-cyan-700 font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
              >
                Más información
              </a>
            </div>
            <div className='mt-8 flex items-center justify-center gap-6 text-white'>
              <div className='flex items-center gap-2'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                </svg>
                <span>Servicio rápido</span>
              </div>
              <div className='flex items-center gap-2'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                </svg>
                <span>Garantía incluida</span>
              </div>
              <div className='flex items-center gap-2'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                </svg>
                <span>Precios justos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
