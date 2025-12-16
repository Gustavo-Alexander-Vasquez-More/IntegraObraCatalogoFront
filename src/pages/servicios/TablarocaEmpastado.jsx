import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'

export default function TablarocaEmpastado() {
  useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  const servicios = [
    {
      titulo: 'Muros de Tablaroca',
      descripcion: 'Construcción de muros divisorios con estructura metálica y placas de yeso de alta resistencia.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' />
        </svg>
      )
    },
    {
      titulo: 'Plafones',
      descripcion: 'Instalación de techos falsos con tablaroca para mejorar estética y funcionalidad de espacios.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' />
        </svg>
      )
    },
    {
      titulo: 'Empastado Profesional',
      descripcion: 'Aplicación de pasta y resane para lograr superficies completamente lisas y uniformes.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' />
        </svg>
      )
    },
    {
      titulo: 'Acabados Lisos',
      descripcion: 'Terminados de alta calidad listos para pintar o aplicar cualquier recubrimiento decorativo.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' />
        </svg>
      )
    },
    {
      titulo: 'Estructura Metálica',
      descripcion: 'Instalación de perfiles y polines de acero galvanizado para soporte óptimo y duradero.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z' />
        </svg>
      )
    },
    {
      titulo: 'Aislamiento Térmico/Acústico',
      descripcion: 'Colocación de materiales aislantes para mejor confort térmico y reducción de ruido.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3' />
        </svg>
      )
    },
    {
      titulo: 'Reparación y Resanes',
      descripcion: 'Corrección de grietas, daños y desniveles en muros y plafones existentes.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' />
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
        </svg>
      )
    },
    {
      titulo: 'Diseños Personalizados',
      descripcion: 'Creación de formas arquitectónicas especiales, nichos, repisas y elementos decorativos.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' />
        </svg>
      )
    }
  ]

  const beneficios = [
    {
      titulo: 'Acabado Perfecto',
      descripcion: 'Superficies completamente lisas y uniformes',
      icono: '✨'
    },
    {
      titulo: 'Instalación Rápida',
      descripcion: 'Proceso más limpio y veloz que construcción tradicional',
      icono: '⚡'
    },
    {
      titulo: 'Versatilidad',
      descripcion: 'Adaptable a cualquier diseño arquitectónico',
      icono: '🎨'
    },
    {
      titulo: 'Durabilidad',
      descripcion: 'Materiales resistentes y de larga vida útil',
      icono: '💪'
    }
  ]

  const aplicaciones = [
    { nombre: 'Divisiones de Oficina', descripcion: 'Espacios de trabajo modulares y profesionales' },
    { nombre: 'Remodelaciones', descripcion: 'Renovación de espacios habitacionales y comerciales' },
    { nombre: 'Plafones Decorativos', descripcion: 'Techos con diseños modernos y elegantes' },
    { nombre: 'Closets y Vestidores', descripcion: 'Espacios de almacenamiento personalizados' },
    { nombre: 'Locales Comerciales', descripcion: 'Adecuaciones rápidas para negocios' },
    { nombre: 'Cancelería y Puertas', descripcion: 'Marcos y estructuras para accesos' }
  ]

  return (
    <>
      <Helmet>
        <title>Tablaroca y Empastado para Construcción en Monterrey | IntegraObra</title>
        <meta name="description" content="Instalación profesional de tablaroca y empastado en Monterrey: muros, plafones, acabados lisos, estructura metálica y más. Acabados perfectos, instalación rápida y materiales de calidad. ¡Cotiza tu proyecto!" />
        <meta name="keywords" content="tablaroca Monterrey, empastado Monterrey, muros de tablaroca, plafones Monterrey, acabados lisos Monterrey, instalación tablaroca Monterrey, IntegraObra" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://integraobra.com/servicios/tablaroca-empastado" />
        {/* Open Graph */}
        <meta property="og:title" content="Tablaroca y Empastado para Construcción en Monterrey | IntegraObra" />
        <meta property="og:description" content="Instalación profesional de tablaroca y empastado: muros, plafones, acabados lisos, estructura metálica y más. Acabados perfectos, instalación rápida y materiales de calidad." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://integraobra.com/servicios/tablaroca-empastado" />
        <meta property="og:image" content="https://integraobra.com/tablaroca/banner.webp" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tablaroca y Empastado para Construcción en Monterrey | IntegraObra" />
        <meta name="twitter:description" content="Instalación profesional de tablaroca y empastado: muros, plafones, acabados lisos, estructura metálica y más. Acabados perfectos, instalación rápida y materiales de calidad." />
        <meta name="twitter:image" content="https://integraobra.com/tablaroca/banner.webp" />
      </Helmet>
      <div className='bg-white'>
      {/* Hero Section */}
      <div className='relative bg-gradient-to-br from-slate-700 to-slate-800 text-white py-20 overflow-hidden'>
        <div 
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{ backgroundImage: "url('/tablaroca/banner.webp')" }}
        ></div>
        <div className='absolute inset-0 bg-black/40'></div>
        
        <div className='container mx-auto px-4 relative z-10'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-5xl md:text-6xl font-bold mb-6'>
              Tablaroca y <span className='text-orange-400'>Empastado</span>
            </h1>
            <p className='text-xl md:text-2xl text-slate-200 mb-8'>
              Acabados profesionales con precisión y calidad garantizada
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
                className='bg-white hover:bg-gray-100 text-slate-700 font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
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
            <div className='bg-white p-8 md:p-12 rounded-2xl shadow-xl border-t-4 border-slate-600'>
              <div className='flex items-start gap-6'>
                <div className='hidden md:block flex-shrink-0'>
                  <div className='bg-gradient-to-br from-slate-600 to-slate-700 p-4 rounded-xl'>
                    <svg className='w-12 h-12 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' />
                    </svg>
                  </div>
                </div>
                <div>
                  <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>
                    Calidad en Cada <span className='text-slate-600'>Acabado</span>
                  </h2>
                  <p className='text-lg text-gray-700 leading-relaxed'>
                    Ofrecemos servicio de <strong>instalación de tablaroca y empastado</strong>, realizando muros, 
                    plafones y acabados lisos de alta calidad. Trabajamos con precisión en cada detalle, desde la 
                    estructura hasta el terminado final, garantizando superficies uniformes y listas para pintura 
                    o recubrimiento.
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
              <span className='bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold'>
                Nuestros Servicios
              </span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
              Servicios <span className='text-slate-600'>Completos</span>
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Desde la estructura hasta el acabado final, cubrimos todas tus necesidades
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {servicios.map((servicio, index) => (
              <div 
                key={index}
                className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-slate-600 group'
              >
                <div className='bg-gradient-to-br from-slate-600 to-slate-700 text-white p-4 rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform duration-300'>
                  {servicio.icono}
                </div>
                <h3 className='text-xl font-bold text-gray-800 mb-3 group-hover:text-slate-600 transition-colors'>
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
                Aplicaciones <span className='text-slate-600'>Versátiles</span>
              </h2>
              <p className='text-xl text-gray-600'>
                Ideales para todo tipo de proyectos residenciales y comerciales
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {aplicaciones.map((app, index) => (
                <div 
                  key={index}
                  className='bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-[#F48437]'
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
                Ventajas de la tablaroca
              </h2>
              <p className='text-xl text-gray-600'>
                Por qué elegir este sistema constructivo moderno
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {beneficios.map((beneficio, index) => (
                <div 
                  key={index}
                  className='bg-gradient-to-br from-slate-50 to-gray-50 p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2'
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
                Nuestro <span className='text-slate-600'>Proceso</span>
              </h2>
              <p className='text-xl text-gray-600'>
                Trabajo ordenado en cada etapa del proyecto
              </p>
            </div>

            <div className='grid md:grid-cols-4 gap-6'>
              {[
                { paso: '1', titulo: 'Medición', descripcion: 'Tomamos medidas exactas del área de trabajo' },
                { paso: '2', titulo: 'Estructura', descripcion: 'Instalamos perfiles metálicos y bastidores' },
                { paso: '3', titulo: 'Colocación', descripcion: 'Fijamos las placas de tablaroca correctamente' },
                { paso: '4', titulo: 'Acabado', descripcion: 'Empastamos y lijamos hasta lograr superficie lisa' }
              ].map((item, index) => (
                <div key={index} className='relative'>
                  <div className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-slate-600'>
                    <div className='text-5xl font-bold text-slate-200 mb-2'>{item.paso}</div>
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
                src='/tablaroca/tablaroca.webp' 
                alt='Instalación profesional de tablaroca'
                className='w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-500'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent'></div>
              <div className='absolute bottom-6 left-6 right-6 text-white'>
                <p className='text-3xl font-bold mb-2'>Trabajo de precisión</p>
                <p className='text-slate-200'>Resultados impecables garantizados</p>
              </div>
            </div>

            <div>
              <h2 className='text-4xl font-bold text-gray-800 mb-6'>
                Materiales de <span className='text-slate-600'>primera calidad</span>
              </h2>
              <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
                Trabajamos únicamente con materiales certificados y de marcas reconocidas. Nuestros técnicos 
                están capacitados en las mejores prácticas de instalación para garantizar acabados duraderos 
                y profesionales.
              </p>
              
              <div className='space-y-4'>
                <div className='flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow-md'>
                  <div className='bg-slate-600 text-white p-3 rounded-lg flex-shrink-0'>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  </div>
                  <div>
                    <h4 className='font-bold text-gray-800 mb-1'>Personal Especializado</h4>
                    <p className='text-gray-600'>Instaladores con años de experiencia certificada</p>
                  </div>
                </div>

                <div className='flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow-md'>
                  <div className='bg-slate-600 text-white p-3 rounded-lg flex-shrink-0'>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  </div>
                  <div>
                    <h4 className='font-bold text-gray-800 mb-1'>Herramientas Profesionales</h4>
                    <p className='text-gray-600'>Equipos especializados para trabajo de precisión</p>
                  </div>
                </div>

                <div className='flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow-md'>
                  <div className='bg-slate-600 text-white p-3 rounded-lg flex-shrink-0'>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  </div>
                  <div>
                    <h4 className='font-bold text-gray-800 mb-1'>Garantía de Satisfacción</h4>
                    <p className='text-gray-600'>Acabados perfectos o corregimos sin costo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className='py-20 bg-gradient-to-br from-slate-700 to-slate-800 text-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              ¿Listo para tu proyecto de tablaroca?
            </h2>
            <p className='text-xl md:text-2xl text-slate-200 mb-8'>
              Obtén acabados profesionales con nuestro equipo especializado
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a 
                href='/contacto'
                className='bg-white hover:bg-gray-100 text-slate-700 font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
              >
                Más información
              </a>
            </div>
            <div className='mt-8 flex items-center justify-center gap-6 text-slate-200'>
              <div className='flex items-center gap-2'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                </svg>
                <span>Presupuesto sin costo</span>
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
                <span>Calidad profesional</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
)}
