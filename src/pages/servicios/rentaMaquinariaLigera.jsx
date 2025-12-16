import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'

export default function RentaMaquinariaLigera() {
  useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  const equipos = [
    {
      titulo: 'Demoledores',
      descripcion: 'Martillos demoledores eléctricos y neumáticos para trabajos de demolición y rompimiento.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' />
        </svg>
      )
    },
    {
      titulo: 'Revolvedoras de Concreto',
      descripcion: 'Mezcladoras de diferentes capacidades para preparación de concreto y mortero.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' />
        </svg>
      )
    },
    {
      titulo: 'Vibradoras',
      descripcion: 'Vibradores para concreto que garantizan una mezcla compacta y sin burbujas.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 10V3L4 14h7v7l9-11h-7z' />
        </svg>
      )
    },
    {
      titulo: 'Bailarinas Compactadoras',
      descripcion: 'Compactadoras vibratorias para suelos, asfalto y bases de construcción.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 14l-7 7m0 0l-7-7m7 7V3' />
        </svg>
      )
    },
    {
      titulo: 'Compactadores Manuales',
      descripcion: 'Pisones manuales y compactadores ligeros para espacios reducidos.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4' />
        </svg>
      )
    },
    {
      titulo: 'Esmeriles',
      descripcion: 'Esmeriles angulares y de banco para corte, desbaste y pulido de metales.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z' />
        </svg>
      )
    },
    {
      titulo: 'Rotomartillos',
      descripcion: 'Taladros percutores profesionales para perforación en concreto y mampostería.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' />
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
        </svg>
      )
    },
    {
      titulo: 'Cortadoras',
      descripcion: 'Cortadoras de concreto, azulejo, metal y otros materiales de construcción.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z' />
        </svg>
      )
    },
    {
      titulo: 'Andamios',
      descripcion: 'Sistemas de andamios modulares seguros para trabajo en altura.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' />
        </svg>
      )
    }
  ]

  const beneficios = [
    {
      titulo: 'Equipos Confiables',
      descripcion: 'Maquinaria en excelente estado de funcionamiento',
      icono: '✅'
    },
    {
      titulo: 'Sin Inversión',
      descripcion: 'Renta sin necesidad de comprar o mantener',
      icono: '💰'
    },
    {
      titulo: 'Revisión Previa',
      descripcion: 'Cada equipo es probado antes de entregarse',
      icono: '🔧'
    },
    {
      titulo: 'Amplio Catálogo',
      descripcion: 'Variedad de herramientas especializadas',
      icono: '📋'
    }
  ]

  const tiposProyectos = [
    { nombre: 'Obra Residencial', descripcion: 'Equipos para construcción de casas y departamentos' },
    { nombre: 'Proyectos Comerciales', descripcion: 'Maquinaria para locales y edificios comerciales' },
    { nombre: 'Obra Industrial', descripcion: 'Equipos pesados para naves y proyectos industriales' },
    { nombre: 'Remodelaciones', descripcion: 'Herramientas para trabajos de renovación' },
    { nombre: 'Mantenimiento', descripcion: 'Equipos para trabajos de conservación' },
    { nombre: 'Demolición', descripcion: 'Maquinaria especializada para demoliciones' }
  ]

  return (
    <>
      <Helmet>
        <title>Renta de Maquinaria Ligera para Construcción en Monterrey | IntegraObra</title>
        <meta name="description" content="Renta de maquinaria ligera en Monterrey: demoledores, revolvedoras, vibradoras, compactadoras, andamios y más. Equipos revisados, limpios y listos para tu obra. Cotiza fácil y rápido con IntegraObra." />
        <meta name="keywords" content="renta maquinaria ligera Monterrey, renta de equipos construcción, demoledores, revolvedoras, vibradoras, compactadoras, andamios, herramientas obra, IntegraObra" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://integraobra.com/servicios/renta-maquinaria-ligera" />
        {/* Open Graph */}
        <meta property="og:title" content="Renta de Maquinaria Ligera para Construcción en Monterrey | IntegraObra" />
        <meta property="og:description" content="Renta de maquinaria ligera: demoledores, revolvedoras, vibradoras, compactadoras, andamios y más. Equipos revisados y listos para tu obra. Cotiza fácil y rápido." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://integraobra.com/servicios/renta-maquinaria-ligera" />
        <meta property="og:image" content="https://integraobra.com/maquinaria/obrero.webp" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Renta de Maquinaria Ligera para Construcción en Monterrey | IntegraObra" />
        <meta name="twitter:description" content="Renta de maquinaria ligera: demoledores, revolvedoras, vibradoras, compactadoras, andamios y más. Equipos revisados y listos para tu obra. Cotiza fácil y rápido." />
        <meta name="twitter:image" content="https://integraobra.com/maquinaria/obrero.webp" />
      </Helmet>
      <div className='bg-white'>
      {/* Hero Section */}
      <div className='relative bg-gray-900 text-white py-20 overflow-hidden'>
        <div 
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{ backgroundImage: "url('/maquinaria/banner.webp')" }}
        ></div>
        <div className='absolute inset-0 bg-black/50'></div>
        
        <div className='container mx-auto px-4 relative z-10'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-5xl md:text-6xl font-bold mb-6'>
              Renta de <span className='text-[#F48437]'>Maquinaria Ligera</span>
            </h1>
            <p className='text-xl md:text-2xl text-white mb-8'>
              Equipos confiables y en excelente estado para tu obra
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a 
                href='/contacto'
                className='bg-[#F48437] hover:bg-[#e07730] text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
              >
                Contactar
              </a>
              <a 
                href='#equipos'
                className='bg-white hover:bg-gray-100 text-orange-700 font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
              >
                Ver equipos
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Introducción */}
      <div className='py-16 bg-gradient-to-b from-white to-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <div className='bg-white p-8 md:p-12 rounded-2xl shadow-xl border-t-4 border-yellow-500'>
              <div className='flex items-start gap-6'>
                <div className='hidden md:block flex-shrink-0'>
                  <div className='bg-gradient-to-br from-yellow-500 to-orange-600 p-4 rounded-xl'>
                    <svg className='w-12 h-12 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' />
                    </svg>
                  </div>
                </div>
                <div>
                  <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>
                    Maquinaria de <span className='text-yellow-600'>Calidad</span>
                  </h2>
                  <p className='text-lg text-gray-700 leading-relaxed mb-4'>
                    En <strong>IntegraObra</strong> también contamos con el servicio de <strong>renta de maquinaria ligera 
                    para la construcción</strong>, brindando equipos confiables y en excelente estado para apoyar cualquier 
                    tipo de proyecto. Ponemos a su disposición demoledores, revolvedoras de concreto, vibradoras, bailarinas 
                    compactadoras, compactadores manuales, esmeriles, rotomartillos, cortadoras, andamios y un amplio catálogo 
                    de herramientas especializadas para obra y otros oficios.
                  </p>
                  <p className='text-lg text-gray-700 leading-relaxed'>
                    Cada equipo es revisado, limpiado y probado antes de su entrega, asegurando un funcionamiento óptimo para 
                    que pueda desempeñar de manera eficiente y segura el trabajo encomendado. Nuestro objetivo es facilitarle 
                    el acceso a maquinaria de calidad sin necesidad de invertir en compra o mantenimiento, ofreciéndole 
                    soluciones rápidas, prácticas y adecuadas a las necesidades de su proyecto, ya sea residencial, comercial 
                    o industrial.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Equipos Grid */}
      <div id='equipos' className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <div className='inline-block mb-4'>
              <span className='bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold'>
                Nuestros Equipos
              </span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
              Algunos de los <span className='text-yellow-600'>equipos que ofrecemos</span>
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Maquinaria especializada para cada necesidad de tu obra
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {equipos.map((equipo, index) => (
              <div 
                key={index}
                className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-yellow-500 group'
              >
                <div className='bg-gradient-to-br from-yellow-500 to-orange-600 text-white p-4 rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform duration-300'>
                  {equipo.icono}
                </div>
                <h3 className='text-xl font-bold text-gray-800 mb-3 group-hover:text-yellow-600 transition-colors'>
                  {equipo.titulo}
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  {equipo.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tipos de Proyectos */}
      <div className='py-20 bg-gradient-to-b from-gray-50 to-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
                Para todo tipo de <span className='text-yellow-600'>proyectos</span>
              </h2>
              <p className='text-xl text-gray-600'>
                Maquinaria adaptada a cada tipo de obra
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {tiposProyectos.map((tipo, index) => (
                <div 
                  key={index}
                  className='bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-yellow-500'
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
                Ventajas de rentar con nosotros
              </h2>
              <p className='text-xl text-gray-600'>
                Soluciones prácticas para tu obra
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {beneficios.map((beneficio, index) => (
                <div 
                  key={index}
                  className='bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2'
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

      {/* Proceso de Renta */}
      <div className='py-20 bg-gradient-to-b from-gray-50 to-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
                Proceso de <span className='text-yellow-600'>Renta</span>
              </h2>
              <p className='text-xl text-gray-600'>
                Renta fácil y rápida en 4 pasos
              </p>
            </div>

            <div className='grid md:grid-cols-4 gap-6'>
              {[
                { paso: '1', titulo: 'Solicitud', descripcion: 'Contáctanos y solicita el equipo que necesitas' },
                { paso: '2', titulo: 'Cotización', descripcion: 'Te enviamos precio y disponibilidad' },
                { paso: '3', titulo: 'Entrega', descripcion: 'Recibe el equipo limpio y probado' },
                { paso: '4', titulo: 'Devolución', descripcion: 'Regresa el equipo al finalizar tu trabajo' }
              ].map((item, index) => (
                <div key={index} className='relative'>
                  <div className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-yellow-500'>
                    <div className='text-5xl font-bold text-yellow-200 mb-2'>{item.paso}</div>
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
                Equipos <span className='text-yellow-600'>revisados y listos</span>
              </h2>
              <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
                Todos nuestros equipos pasan por un proceso riguroso de limpieza, revisión y prueba antes de 
                ser entregados. Esto garantiza que cada máquina llegue a tu obra en óptimas condiciones y lista 
                para trabajar de inmediato.
              </p>
              
              <div className='space-y-4'>
                <div className='flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow-md'>
                  <div className='bg-yellow-500 text-white p-3 rounded-lg flex-shrink-0'>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  </div>
                  <div>
                    <h4 className='font-bold text-gray-800 mb-1'>Mantenimiento Constante</h4>
                    <p className='text-gray-600'>Cada equipo recibe servicio preventivo regular</p>
                  </div>
                </div>

                <div className='flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow-md'>
                  <div className='bg-yellow-500 text-white p-3 rounded-lg flex-shrink-0'>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  </div>
                  <div>
                    <h4 className='font-bold text-gray-800 mb-1'>Pruebas de Funcionamiento</h4>
                    <p className='text-gray-600'>Verificamos operación antes de cada entrega</p>
                  </div>
                </div>

                <div className='flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow-md'>
                  <div className='bg-yellow-500 text-white p-3 rounded-lg flex-shrink-0'>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  </div>
                  <div>
                    <h4 className='font-bold text-gray-800 mb-1'>Asesoría de Uso</h4>
                    <p className='text-gray-600'>Te explicamos cómo usar cada equipo de forma segura</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='relative rounded-2xl overflow-hidden shadow-2xl group order-first md:order-last'>
              <img 
                src='/maquinaria/obrero.webp' 
                alt='Obrero utilizando maquinaria ligera'
                className='w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-500'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-orange-900/60 to-transparent'></div>
              <div className='absolute bottom-6 left-6 right-6 text-white'>
                <p className='text-3xl font-bold mb-2'>Equipos profesionales</p>
                <p className='text-yellow-100'>Listos para tu obra</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className='py-20 bg-gradient-to-br from-yellow-500 to-orange-600 text-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              ¿Necesitas rentar maquinaria?
            </h2>
            <p className='text-xl md:text-2xl text-white mb-8'>
              Cotiza el equipo que necesitas para tu proyecto
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
                <span>Equipos confiables</span>
              </div>
              <div className='flex items-center gap-2'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                </svg>
                <span>Entrega rápida</span>
              </div>
              <div className='flex items-center gap-2'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                </svg>
                <span>Precios competitivos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>

)}
