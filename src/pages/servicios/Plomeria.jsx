import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'

export default function Plomeria() {
  useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  const servicios = [
    {
      titulo: 'Reparación de Fugas',
      descripcion: 'Detección y reparación de fugas en tuberías, llaves, tanques y conexiones de agua.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' />
        </svg>
      )
    },
    {
      titulo: 'Instalaciones Hidráulicas',
      descripcion: 'Instalación completa de sistemas de agua potable y drenaje en construcciones nuevas.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' />
        </svg>
      )
    },
    {
      titulo: 'Destapado de Drenaje',
      descripcion: 'Desobstrucción profesional de tuberías, lavabos, WC, coladeras y sistemas de drenaje.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' />
        </svg>
      )
    },
    {
      titulo: 'Instalación de Muebles',
      descripcion: 'Conexión e instalación de lavabos, WC, regaderas, tinas y muebles sanitarios.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' />
        </svg>
      )
    },
    {
      titulo: 'Calentadores y Boilers',
      descripcion: 'Instalación, reparación y mantenimiento de calentadores de agua de gas y eléctricos.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z' />
        </svg>
      )
    },
    {
      titulo: 'Cambio de Tuberías',
      descripcion: 'Sustitución de tuberías viejas o dañadas por nuevas instalaciones modernas y duraderas.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' />
        </svg>
      )
    },
    {
      titulo: 'Hidroneumáticos',
      descripcion: 'Instalación y mantenimiento de sistemas de presión constante de agua.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 10V3L4 14h7v7l9-11h-7z' />
        </svg>
      )
    },
    {
      titulo: 'Mantenimiento Preventivo',
      descripcion: 'Revisiones periódicas para evitar fugas y problemas en instalaciones hidráulicas.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' />
        </svg>
      )
    }
  ]

  const beneficios = [
    {
      titulo: 'Servicio Rápido',
      descripcion: 'Atención inmediata a emergencias',
      icono: '⚡'
    },
    {
      titulo: 'Trabajo Limpio',
      descripcion: 'Dejamos tu espacio ordenado y limpio',
      icono: '✨'
    },
    {
      titulo: 'Con Garantía',
      descripcion: 'Respaldamos nuestro trabajo',
      icono: '🛡️'
    },
    {
      titulo: 'Precios Justos',
      descripcion: 'Cotizaciones transparentes y honestas',
      icono: '💰'
    }
  ]

  const tiposServicios = [
    { nombre: 'Residencial', descripcion: 'Casas, departamentos y condominios' },
    { nombre: 'Comercial', descripcion: 'Oficinas, tiendas y negocios' },
    { nombre: 'Industrial', descripcion: 'Fábricas y naves industriales' },
    { nombre: 'Emergencias', descripcion: 'Atención urgente 24/7' },
    { nombre: 'Remodelaciones', descripcion: 'Adecuaciones y mejoras' },
    { nombre: 'Obra Nueva', descripcion: 'Instalaciones desde cero' }
  ]

  return (
    <div className='bg-white'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Servicio de Plomería en Mérida | Reparaciones e Instalaciones | IntegraObra.mx</title>
        <meta name="description" content="Plomería profesional en Mérida y Yucatán: reparación de fugas, instalaciones hidráulicas, destapado de drenaje, cambio de tuberías, calentadores y mantenimiento. Atención residencial, comercial e industrial. Servicio rápido, garantía y precios justos." />
        <meta name="keywords" content="plomería Mérida, reparación de fugas, instalaciones hidráulicas, destapado de drenaje, cambio de tuberías, calentadores, mantenimiento de plomería, plomeros profesionales, IntegraObra, Mérida Yucatán, servicio de plomería, México" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://integraobra.mx/servicios/plomeria" />
        {/* Open Graph */}
        <meta property="og:locale" content="es_MX" />
        <meta property="og:site_name" content="IntegraObra.mx" />
        <meta property="og:title" content="Servicio de Plomería en Mérida | Reparaciones e Instalaciones" />
        <meta property="og:description" content="Plomería profesional en Mérida y Yucatán: reparación de fugas, instalaciones hidráulicas, destapado de drenaje, cambio de tuberías, calentadores y mantenimiento. Atención residencial, comercial e industrial. Servicio rápido, garantía y precios justos." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://integraobra.mx/servicios/plomeria" />
        <meta property="og:image" content="https://integraobra.mx/plomeria/banner.webp" />
        <meta property="og:image:alt" content="Plomeros profesionales en Mérida, IntegraObra" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@integraobra" />
        <meta name="twitter:title" content="Servicio de Plomería en Mérida | Reparaciones e Instalaciones" />
        <meta name="twitter:description" content="Plomería profesional en Mérida y Yucatán: reparación de fugas, instalaciones hidráulicas, destapado de drenaje, cambio de tuberías, calentadores y mantenimiento. Atención residencial, comercial e industrial. Servicio rápido, garantía y precios justos." />
        <meta name="twitter:image" content="https://integraobra.mx/plomeria/banner.webp" />
        <meta name="twitter:image:alt" content="Plomeros profesionales en Mérida, IntegraObra" />
      </Helmet>
      {/* Hero Section */}
      <div className='relative bg-gray-900 text-white py-20 overflow-hidden'>
        <div 
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{ backgroundImage: "url('/plomeria/banner.webp')" }}
        ></div>
        <div className='absolute inset-0 bg-black/50'></div>
        
        <div className='container mx-auto px-4 relative z-10'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-5xl md:text-6xl font-bold mb-6'>
              Servicio de <span className='text-[#F48437]'>Plomería</span>
            </h1>
            <p className='text-xl md:text-2xl text-white mb-8'>
              Soluciones rápidas y efectivas para todas tus necesidades hidráulicas
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
                className='bg-white hover:bg-gray-100 text-blue-700 font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
              >
                Ver servicios
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Introducción */}
      <div className='py-16 bg-gradient-to-b from-white to-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <div className='bg-white p-8 md:p-12 rounded-2xl shadow-xl border-t-4 border-blue-500'>
              <div className='flex items-start gap-6'>
                <div className='hidden md:block flex-shrink-0'>
                  <div className='bg-gradient-to-br from-blue-500 to-cyan-600 p-4 rounded-xl'>
                    <svg className='w-12 h-12 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' />
                    </svg>
                  </div>
                </div>
                <div>
                  <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>
                    Plomería <span className='text-blue-600'>Profesional</span>
                  </h2>
                  <p className='text-lg text-gray-700 leading-relaxed'>
                    Brindamos servicio de <strong>plomería profesional</strong> para resolver cualquier necesidad: fugas, 
                    instalaciones, reparaciones y mantenimiento en general. Trabajamos rápido, limpio y con garantía, 
                    ofreciendo soluciones efectivas para que tu hogar o negocio funcione sin problemas.
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
              <span className='bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold'>
                Nuestros Servicios
              </span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
              Servicios de <span className='text-blue-600'>Plomería</span>
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Soluciones completas para todas tus necesidades hidráulicas
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {servicios.map((servicio, index) => (
              <div 
                key={index}
                className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-500 group'
              >
                <div className='bg-gradient-to-br from-blue-500 to-cyan-600 text-white p-4 rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform duration-300'>
                  {servicio.icono}
                </div>
                <h3 className='text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors'>
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

      {/* Tipos de Servicios */}
      <div className='py-20 bg-gradient-to-b from-gray-50 to-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
                Atendemos <span className='text-blue-600'>todo tipo de proyectos</span>
              </h2>
              <p className='text-xl text-gray-600'>
                Desde hogares hasta instalaciones comerciales e industriales
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {tiposServicios.map((tipo, index) => (
                <div 
                  key={index}
                  className='bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500'
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
                Por qué elegirnos
              </h2>
              <p className='text-xl text-gray-600'>
                Calidad y confianza en cada servicio
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {beneficios.map((beneficio, index) => (
                <div 
                  key={index}
                  className='bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2'
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

      {/* Proceso de Trabajo */}
      <div className='py-20 bg-gradient-to-b from-gray-50 to-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
                Nuestro <span className='text-blue-600'>Proceso</span>
              </h2>
              <p className='text-xl text-gray-600'>
                Trabajo ordenado y profesional
              </p>
            </div>

            <div className='grid md:grid-cols-4 gap-6'>
              {[
                { paso: '1', titulo: 'Diagnóstico', descripcion: 'Evaluamos el problema y determinamos la solución' },
                { paso: '2', titulo: 'Cotización', descripcion: 'Presupuesto claro y sin sorpresas' },
                { paso: '3', titulo: 'Reparación', descripcion: 'Trabajo rápido y con herramientas adecuadas' },
                { paso: '4', titulo: 'Verificación', descripcion: 'Comprobamos que todo funcione correctamente' }
              ].map((item, index) => (
                <div key={index} className='relative'>
                  <div className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-500'>
                    <div className='text-5xl font-bold text-blue-200 mb-2'>{item.paso}</div>
                    <h3 className='text-xl font-bold text-gray-800 mb-3'>{item.titulo}</h3>
                    <p className='text-gray-600'>{item.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Galería con Imagen */}
      <div className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto'>
            <div className='relative rounded-2xl overflow-hidden shadow-2xl group'>
              <img 
                src='/plomeria/plomero.webp' 
                alt='Plomero profesional certificado de IntegraObra trabajando en Mérida, Yucatán'
                className='w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-500'
                loading='lazy'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent'></div>
              <div className='absolute bottom-6 left-6 right-6 text-white'>
                <p className='text-3xl font-bold mb-2'>Experiencia que cuenta</p>
                <p className='text-blue-100'>Soluciones efectivas garantizadas</p>
              </div>
            </div>

            <div>
              <h2 className='text-4xl font-bold text-gray-800 mb-6'>
                Plomeros <span className='text-blue-600'>certificados</span>
              </h2>
              <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
                Contamos con plomeros experimentados y equipados con las herramientas adecuadas. 
                Trabajamos de forma limpia, ordenada y respetando tu espacio. Todos nuestros servicios 
                incluyen garantía por escrito.
              </p>
              
              <div className='space-y-4'>
                <div className='flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow-md'>
                  <div className='bg-blue-500 text-white p-3 rounded-lg flex-shrink-0'>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  </div>
                  <div>
                    <h4 className='font-bold text-gray-800 mb-1'>Personal Calificado</h4>
                    <p className='text-gray-600'>Plomeros con años de experiencia y formación</p>
                  </div>
                </div>

                <div className='flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow-md'>
                  <div className='bg-blue-500 text-white p-3 rounded-lg flex-shrink-0'>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  </div>
                  <div>
                    <h4 className='font-bold text-gray-800 mb-1'>Herramientas Profesionales</h4>
                    <p className='text-gray-600'>Equipo especializado para cada tipo de trabajo</p>
                  </div>
                </div>

                <div className='flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow-md'>
                  <div className='bg-blue-500 text-white p-3 rounded-lg flex-shrink-0'>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  </div>
                  <div>
                    <h4 className='font-bold text-gray-800 mb-1'>Materiales de Calidad</h4>
                    <p className='text-gray-600'>Usamos componentes duraderos y certificados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className='py-20 bg-gradient-to-br from-blue-500 to-cyan-600 text-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              ¿Necesitas un plomero?
            </h2>
            <p className='text-xl md:text-2xl text-white mb-8'>
              Contáctanos ahora para servicio rápido y confiable
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a 
                href='/contacto'
                className='bg-white hover:bg-gray-100 text-blue-700 font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
              >
                Más información
              </a>
            </div>
            <div className='mt-8 flex items-center justify-center gap-6 text-white'>
              <div className='flex items-center gap-2'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                </svg>
                <span>Servicio inmediato</span>
              </div>
              <div className='flex items-center gap-2'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                </svg>
                <span>Con garantía</span>
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
