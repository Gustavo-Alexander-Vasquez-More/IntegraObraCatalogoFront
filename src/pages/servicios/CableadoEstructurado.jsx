import React from 'react'
import { Helmet } from 'react-helmet'

export default function CableadoEstructurado() {
  const servicios = [
    {
      titulo: 'Instalación de Red',
      descripcion: 'Diseño e instalación completa de infraestructura de red cableada para empresas y oficinas.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' />
        </svg>
      )
    },
    {
      titulo: 'Cableado Cat 5e / Cat 6',
      descripcion: 'Instalación de cables de red certificados para alta velocidad de transferencia de datos.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 10V3L4 14h7v7l9-11h-7z' />
        </svg>
      )
    },
    {
      titulo: 'Rack y Patch Panel',
      descripcion: 'Instalación y organización de racks, patch panels y sistemas de administración de cables.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' />
        </svg>
      )
    },
    {
      titulo: 'Canalización',
      descripcion: 'Instalación de ductos, canaletas y sistemas de conducción para cables ordenados y protegidos.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
        </svg>
      )
    },
    {
      titulo: 'Certificación de Red',
      descripcion: 'Pruebas y certificación de instalaciones con equipos especializados para garantizar rendimiento.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' />
        </svg>
      )
    },
    {
      titulo: 'Puntos de Red',
      descripcion: 'Instalación de nodos de conexión, rosetas y puertos de red en toda la instalación.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
        </svg>
      )
    },
    {
      titulo: 'Fibra Óptica',
      descripcion: 'Instalación de cableado de fibra óptica para conexiones de ultra alta velocidad.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1' />
        </svg>
      )
    },
    {
      titulo: 'Mantenimiento',
      descripcion: 'Revisión, corrección y actualización de infraestructura de red existente.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' />
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
        </svg>
      )
    }
  ]

  const beneficios = [
    {
      titulo: 'Conexión Estable',
      descripcion: 'Redes confiables sin interrupciones',
      icono: '🔌'
    },
    {
      titulo: 'Alta Velocidad',
      descripcion: 'Transferencia de datos ultrarrápida',
      icono: '⚡'
    },
    {
      titulo: 'Instalación Ordenada',
      descripcion: 'Cableado limpio y profesional',
      icono: '📐'
    },
    {
      titulo: 'Escalable',
      descripcion: 'Fácil de expandir según necesidades',
      icono: '📈'
    }
  ]

  const aplicaciones = [
    { nombre: 'Oficinas Corporativas', descripcion: 'Infraestructura para áreas de trabajo colaborativo' },
    { nombre: 'Edificios Comerciales', descripcion: 'Redes completas para complejos empresariales' },
    { nombre: 'Call Centers', descripcion: 'Instalaciones para alta densidad de usuarios' },
    { nombre: 'Hoteles', descripcion: 'Conectividad en habitaciones y áreas comunes' },
    { nombre: 'Instituciones Educativas', descripcion: 'Redes para aulas y laboratorios' },
    { nombre: 'Centros de Datos', descripcion: 'Infraestructura crítica de alto rendimiento' }
  ]

  return (
    <div className='bg-white'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cableado Estructurado en Mérida | Redes Profesionales | IntegraObra.mx</title>
        <meta name="description" content="Instalación profesional de cableado estructurado en Mérida y Yucatán: redes de datos, fibra óptica, racks, certificación, canalización y mantenimiento. Soluciones para oficinas, empresas y comercios. Cotiza tu red con expertos certificados." />
        <meta name="keywords" content="cableado estructurado, redes de datos, instalación de red, fibra óptica, racks, patch panel, certificación de red, canalización, mantenimiento de red, IntegraObra, Mérida Yucatán, soluciones de conectividad, México" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://integraobra.mx/servicios/cableado-estructurado" />
        {/* Open Graph */}
        <meta property="og:locale" content="es_MX" />
        <meta property="og:site_name" content="IntegraObra.mx" />
        <meta property="og:title" content="Cableado Estructurado en Mérida | Redes Profesionales" />
        <meta property="og:description" content="Instalación profesional de cableado estructurado en Mérida y Yucatán: redes de datos, fibra óptica, racks, certificación, canalización y mantenimiento. Soluciones para oficinas, empresas y comercios." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://integraobra.mx/servicios/cableado-estructurado" />
        <meta property="og:image" content="https://integraobra.mx/cableado/banner.webp" />
        <meta property="og:image:alt" content="Cableado estructurado profesional en Mérida, IntegraObra" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@integraobra" />
        <meta name="twitter:title" content="Cableado Estructurado en Mérida | Redes Profesionales" />
        <meta name="twitter:description" content="Instalación profesional de cableado estructurado en Mérida y Yucatán: redes de datos, fibra óptica, racks, certificación, canalización y mantenimiento. Soluciones para oficinas, empresas y comercios." />
        <meta name="twitter:image" content="https://integraobra.mx/cableado/banner.webp" />
        <meta name="twitter:image:alt" content="Cableado estructurado profesional en Mérida, IntegraObra" />
      </Helmet>
      {/* Hero Section */}
      <div className='relative bg-gray-900 text-white py-20 overflow-hidden'>
        <div 
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{ backgroundImage: "url('/cableado/banner.webp')" }}
        ></div>
        <div className='absolute inset-0 bg-black/50'></div>
        
        <div className='container mx-auto px-4 relative z-10'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-5xl md:text-6xl font-bold mb-6'>
              Cableado <span className='text-[#F48437]'>Estructurado</span>
            </h1>
            <p className='text-xl md:text-2xl text-white mb-8'>
              Redes confiables y de alto rendimiento para tu empresa
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
                  <div className='bg-gradient-to-br from-blue-500 to-indigo-600 p-4 rounded-xl'>
                    <svg className='w-12 h-12 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' />
                    </svg>
                  </div>
                </div>
                <div>
                  <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>
                    Infraestructura de Red <span className='text-blue-600'>Profesional</span>
                  </h2>
                  <p className='text-lg text-gray-700 leading-relaxed'>
                    Instalamos <strong>cableado estructurado de red</strong> de forma profesional y eficiente, garantizando 
                    conexiones rápidas, estables y listas para soportar tus sistemas de trabajo. Diseñamos e instalamos redes 
                    modernas, ordenadas y confiables para que tu empresa, oficina o negocio funcione sin interrupciones.
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
              Soluciones de <span className='text-blue-600'>Conectividad</span>
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Todo lo necesario para una infraestructura de red completa y eficiente
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {servicios.map((servicio, index) => (
              <div 
                key={index}
                className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-500 group'
              >
                <div className='bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-4 rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform duration-300'>
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

      {/* Aplicaciones */}
      <div className='py-20 bg-gradient-to-b from-gray-50 to-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
                Sectores que <span className='text-blue-600'>atendemos</span>
              </h2>
              <p className='text-xl text-gray-600'>
                Experiencia en instalaciones para diferentes tipos de negocios
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {aplicaciones.map((app, index) => (
                <div 
                  key={index}
                  className='bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500'
                >
                  <h3 className='text-xl font-bold text-gray-800 mb-2'>
                    {app.nombre}
                  </h3>
                  <p className='text-gray-600'>
                    {app.descripcion}
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
                Beneficios del cableado estructurado
              </h2>
              <p className='text-xl text-gray-600'>
                Ventajas de una red profesionalmente instalada
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {beneficios.map((beneficio, index) => (
                <div 
                  key={index}
                  className='bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2'
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
                Metodología profesional paso a paso
              </p>
            </div>

            <div className='grid md:grid-cols-4 gap-6'>
              {[
                { paso: '1', titulo: 'Análisis', descripcion: 'Evaluamos necesidades y diseñamos la red' },
                { paso: '2', titulo: 'Canalización', descripcion: 'Instalamos ductos y rutas de cable' },
                { paso: '3', titulo: 'Cableado', descripcion: 'Tendemos cables y conectamos puntos' },
                { paso: '4', titulo: 'Certificación', descripcion: 'Probamos y entregamos documentación' }
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
            <div>
              <h2 className='text-4xl font-bold text-gray-800 mb-6'>
                Instalación <span className='text-blue-600'>certificada</span>
              </h2>
              <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
                Contamos con técnicos certificados y utilizamos materiales de primera calidad. Todas nuestras 
                instalaciones son probadas y certificadas con equipos especializados, garantizando el máximo 
                rendimiento y confiabilidad de tu red.
              </p>
              
              <div className='space-y-4'>
                <div className='flex items-start gap-4 p-4 bg-white rounded-lg shadow-md'>
                  <div className='bg-blue-500 text-white p-3 rounded-lg flex-shrink-0'>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  </div>
                  <div>
                    <h4 className='font-bold text-gray-800 mb-1'>Cables Certificados</h4>
                    <p className='text-gray-600'>Usamos cableado Cat 5e, Cat 6 y fibra óptica de marcas reconocidas</p>
                  </div>
                </div>

                <div className='flex items-start gap-4 p-4 bg-white rounded-lg shadow-md'>
                  <div className='bg-blue-500 text-white p-3 rounded-lg flex-shrink-0'>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  </div>
                  <div>
                    <h4 className='font-bold text-gray-800 mb-1'>Pruebas de Certificación</h4>
                    <p className='text-gray-600'>Verificamos rendimiento con certificadores de red</p>
                  </div>
                </div>

                <div className='flex items-start gap-4 p-4 bg-white rounded-lg shadow-md'>
                  <div className='bg-blue-500 text-white p-3 rounded-lg flex-shrink-0'>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  </div>
                  <div>
                    <h4 className='font-bold text-gray-800 mb-1'>Documentación Completa</h4>
                    <p className='text-gray-600'>Entregamos planos y reportes de certificación</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='relative rounded-2xl overflow-hidden shadow-2xl group order-first md:order-last'>
              <img 
                src='/cableado/tecnico.webp' 
                alt='Técnico certificado instalando cableado estructurado profesional en Mérida, Yucatán'
                className='w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-500'
                loading='lazy'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent'></div>
              <div className='absolute bottom-6 left-6 right-6 text-white'>
                <p className='text-3xl font-bold mb-2'>Instalación profesional</p>
                <p className='text-blue-100'>Conexiones confiables y duraderas</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className='py-20 bg-gradient-to-br from-blue-500 to-indigo-600 text-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              ¿Necesitas instalar una red?
            </h2>
            <p className='text-xl md:text-2xl text-white mb-8'>
              Cotiza tu proyecto de cableado estructurado
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
                <span>Cotización gratuita</span>
              </div>
              <div className='flex items-center gap-2'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                </svg>
                <span>Red certificada</span>
              </div>
              <div className='flex items-center gap-2'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                </svg>
                <span>Soporte técnico</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
