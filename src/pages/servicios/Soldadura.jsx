import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'

export default function Soldadura() {
  useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  const servicios = [
    {
      titulo: 'Estructuras Metálicas',
      descripcion: 'Fabricación y montaje de estructuras completas para construcción, naves industriales y edificaciones.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' />
        </svg>
      )
    },
    {
      titulo: 'Vigas y Columnas',
      descripcion: 'Soldadura de elementos estructurales principales para garantizar resistencia y estabilidad.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z' />
        </svg>
      )
    },
    {
      titulo: 'Marcos y Portones',
      descripcion: 'Construcción de marcos estructurales, portones y canceles metálicos personalizados.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' />
        </svg>
      )
    },
    {
      titulo: 'Bases y Soportes',
      descripcion: 'Fabricación de bases, anclajes y soportes para maquinaria y equipos industriales.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' />
        </svg>
      )
    },
    {
      titulo: 'Refuerzos Estructurales',
      descripcion: 'Reforzamiento de estructuras existentes para mejorar su capacidad de carga y resistencia.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' />
        </svg>
      )
    },
    {
      titulo: 'Escaleras Metálicas',
      descripcion: 'Diseño y fabricación de escaleras industriales, de servicio y arquitectónicas.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6' />
        </svg>
      )
    },
    {
      titulo: 'Barandales y Rejas',
      descripcion: 'Fabricación e instalación de barandales, pasamanos y rejas de protección.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
        </svg>
      )
    },
    {
      titulo: 'Trabajos Personalizados',
      descripcion: 'Fabricación de piezas y estructuras a medida según especificaciones de cada proyecto.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z' />
        </svg>
      )
    }
  ]

  const beneficios = [
    {
      titulo: 'Uniones Firmes',
      descripcion: 'Soldaduras resistentes y de larga duración',
      icono: '🔥'
    },
    {
      titulo: 'Personal Calificado',
      descripcion: 'Soldadores certificados y experimentados',
      icono: '👨‍🏭'
    },
    {
      titulo: 'Trabajo Rápido',
      descripcion: 'Cumplimos tiempos de entrega sin retrasos',
      icono: '⚡'
    },
    {
      titulo: 'A Tu Medida',
      descripcion: 'Soluciones personalizadas para cada obra',
      icono: '📐'
    }
  ]

  const tiposSoldadura = [
    { nombre: 'Soldadura MIG', descripcion: 'Ideal para aceros al carbono y aleaciones' },
    { nombre: 'Soldadura TIG', descripcion: 'Acabados de alta calidad y precisión' },
    { nombre: 'Soldadura por Arco', descripcion: 'Proceso versátil para trabajos generales' },
    { nombre: 'Soldadura con Electrodo', descripcion: 'Robusta para construcción pesada' },
    { nombre: 'Acero Estructural', descripcion: 'Trabajos en perfiles y placas de acero' },
    { nombre: 'Acero Inoxidable', descripcion: 'Para aplicaciones que requieren resistencia' }
  ]

  return (
    <>
      <Helmet>
        <title>Servicio de Soldadura para Construcción en Monterrey | IntegraObra</title>
        <meta name="description" content="Servicio profesional de soldadura en Monterrey: estructuras metálicas, vigas, columnas, marcos, portones y más. Soldadores certificados, calidad garantizada y soluciones a medida para tu obra. ¡Cotiza tu proyecto!" />
        <meta name="keywords" content="soldadura Monterrey, soldadura construcción, estructuras metálicas Monterrey, soldadores certificados, soldadura industrial Monterrey, IntegraObra" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://integraobra.com/servicios/soldadura" />
        {/* Open Graph */}
        <meta property="og:title" content="Servicio de Soldadura para Construcción en Monterrey | IntegraObra" />
        <meta property="og:description" content="Servicio profesional de soldadura: estructuras metálicas, vigas, columnas, marcos, portones y más. Soldadores certificados, calidad garantizada y soluciones a medida." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://integraobra.com/servicios/soldadura" />
        <meta property="og:image" content="https://integraobra.com/soldadura/soldador.webp" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Servicio de Soldadura para Construcción en Monterrey | IntegraObra" />
        <meta name="twitter:description" content="Servicio profesional de soldadura: estructuras metálicas, vigas, columnas, marcos, portones y más. Soldadores certificados, calidad garantizada y soluciones a medida." />
        <meta name="twitter:image" content="https://integraobra.com/soldadura/soldador.webp" />
      </Helmet>
      <div className='bg-white'>
      {/* Hero Section */}
      <div className='relative bg-gray-900 text-white py-20 overflow-hidden'>
        <div 
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{ backgroundImage: "url('/soldadura/banner.webp')" }}
        ></div>
        <div className='absolute inset-0 bg-black/40'></div>
        
        <div className='container mx-auto px-4 relative z-10'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-5xl md:text-6xl font-bold mb-6'>
              Servicio de <span className='text-orange-400'>Soldadura</span>
            </h1>
            <p className='text-xl md:text-2xl text-white mb-8'>
              Estructuras metálicas fabricadas con precisión y calidad garantizada
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
                className='bg-white hover:bg-gray-100 text-orange-700 font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
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
            <div className='bg-white p-8 md:p-12 rounded-2xl shadow-xl border-t-4 border-orange-500'>
              <div className='flex items-start gap-6'>
                <div className='hidden md:block flex-shrink-0'>
                  <div className='bg-gradient-to-br from-orange-500 to-red-600 p-4 rounded-xl'>
                    <svg className='w-12 h-12 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z' />
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z' />
                    </svg>
                  </div>
                </div>
                <div>
                  <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>
                    Soldadura <span className='text-orange-600'>para Construcción</span>
                  </h2>
                  <p className='text-lg text-gray-700 leading-relaxed'>
                    Ofrecemos servicio de <strong>soldadura para construcción</strong>, fabricando y reforzando estructuras 
                    metálicas con calidad y precisión. Realizamos trabajos en vigas, columnas, marcos, bases y soportes, 
                    asegurando uniones firmes y duraderas. Brindamos soluciones rápidas, seguras y hechas a la medida de 
                    cada proyecto para que tu obra avance sin contratiempos.
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
              <span className='bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold'>
                Nuestros Servicios
              </span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
              Trabajos de <span className='text-orange-600'>Soldadura</span>
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Fabricación y reforzamiento de estructuras metálicas para todo tipo de proyectos
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {servicios.map((servicio, index) => (
              <div 
                key={index}
                className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-500 group'
              >
                <div className='bg-gradient-to-br from-orange-500 to-red-600 text-white p-4 rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform duration-300'>
                  {servicio.icono}
                </div>
                <h3 className='text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors'>
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

      {/* Tipos de Soldadura */}
      <div className='py-20 bg-gradient-to-b from-gray-50 to-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
                Procesos y <span className='text-orange-600'>materiales</span>
              </h2>
              <p className='text-xl text-gray-600'>
                Dominamos diferentes técnicas de soldadura y tipos de acero
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {tiposSoldadura.map((tipo, index) => (
                <div 
                  key={index}
                  className='bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-orange-500'
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
                Ventajas de nuestro servicio
              </h2>
              <p className='text-xl text-gray-600'>
                Calidad y seguridad en cada soldadura
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {beneficios.map((beneficio, index) => (
                <div 
                  key={index}
                  className='bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2'
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
                Nuestro <span className='text-orange-600'>Proceso</span>
              </h2>
              <p className='text-xl text-gray-600'>
                Metodología profesional en cada proyecto
              </p>
            </div>

            <div className='grid md:grid-cols-4 gap-6'>
              {[
                { paso: '1', titulo: 'Análisis', descripcion: 'Evaluamos las necesidades y especificaciones técnicas' },
                { paso: '2', titulo: 'Diseño', descripcion: 'Planificamos la estructura y seleccionamos materiales' },
                { paso: '3', titulo: 'Fabricación', descripcion: 'Cortamos, preparamos y soldamos las piezas' },
                { paso: '4', titulo: 'Instalación', descripcion: 'Montamos y verificamos la estructura completa' }
              ].map((item, index) => (
                <div key={index} className='relative'>
                  <div className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-orange-500'>
                    <div className='text-5xl font-bold text-orange-200 mb-2'>{item.paso}</div>
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
                src='/soldadura/soldador.webp' 
                alt='Soldador profesional trabajando'
                className='w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-500'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-orange-900/60 to-transparent'></div>
              <div className='absolute bottom-6 left-6 right-6 text-white'>
                <p className='text-3xl font-bold mb-2'>Precisión profesional</p>
                <p className='text-orange-100'>Soldaduras certificadas y duraderas</p>
              </div>
            </div>

            <div>
              <h2 className='text-4xl font-bold text-gray-800 mb-6'>
                Equipo y <span className='text-orange-600'>experiencia</span>
              </h2>
              <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
                Contamos con soldadores certificados y equipos de última generación para garantizar 
                trabajos de la más alta calidad. Cumplimos con las normas de seguridad y utilizamos 
                técnicas profesionales en cada proyecto.
              </p>
              
              <div className='space-y-4'>
                <div className='flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow-md'>
                  <div className='bg-orange-500 text-white p-3 rounded-lg flex-shrink-0'>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  </div>
                  <div>
                    <h4 className='font-bold text-gray-800 mb-1'>Soldadores Certificados</h4>
                    <p className='text-gray-600'>Personal calificado con años de experiencia</p>
                  </div>
                </div>

                <div className='flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow-md'>
                  <div className='bg-orange-500 text-white p-3 rounded-lg flex-shrink-0'>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  </div>
                  <div>
                    <h4 className='font-bold text-gray-800 mb-1'>Equipo Profesional</h4>
                    <p className='text-gray-600'>Maquinaria moderna para resultados óptimos</p>
                  </div>
                </div>

                <div className='flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow-md'>
                  <div className='bg-orange-500 text-white p-3 rounded-lg flex-shrink-0'>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  </div>
                  <div>
                    <h4 className='font-bold text-gray-800 mb-1'>Garantía de Calidad</h4>
                    <p className='text-gray-600'>Estructuras firmes que superan expectativas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className='py-20 bg-gradient-to-br from-orange-500 to-red-600 text-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              ¿Necesitas trabajos de soldadura?
            </h2>
            <p className='text-xl md:text-2xl text-white mb-8'>
              Cotiza tu proyecto sin compromiso
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a 
                href='/contacto'
                className='bg-white hover:bg-gray-100 text-orange-700 font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
              >
                Más información
              </a>
            </div>
            <div className='mt-8 flex items-center justify-center gap-6 text-white'>
              <div className='flex items-center gap-2'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                </svg>
                <span>Presupuesto gratuito</span>
              </div>
              <div className='flex items-center gap-2'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                </svg>
                <span>Trabajo garantizado</span>
              </div>
              <div className='flex items-center gap-2'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                </svg>
                <span>Personal certificado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
)}
