import React from 'react'

export default function Electricidad() {
  const servicios = [
    {
      titulo: 'Instalaciones Eléctricas',
      descripcion: 'Instalación completa de sistemas eléctricos residenciales, comerciales e industriales desde cero.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 10V3L4 14h7v7l9-11h-7z' />
        </svg>
      )
    },
    {
      titulo: 'Reparaciones',
      descripcion: 'Diagnóstico y reparación de fallas eléctricas, cortos circuitos y problemas de suministro.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' />
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
        </svg>
      )
    },
    {
      titulo: 'Tableros Eléctricos',
      descripcion: 'Instalación y mantenimiento de centros de carga, breakers y sistemas de protección.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z' />
        </svg>
      )
    },
    {
      titulo: 'Cableado Estructurado',
      descripcion: 'Tendido de cables, canalizaciones y organización de redes eléctricas ordenadas.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
        </svg>
      )
    },
    {
      titulo: 'Iluminación',
      descripcion: 'Diseño e instalación de sistemas de iluminación LED, decorativa y funcional.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' />
        </svg>
      )
    },
    {
      titulo: 'Mantenimiento Preventivo',
      descripcion: 'Revisiones periódicas para detectar problemas antes de que se conviertan en fallas.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' />
        </svg>
      )
    },
    {
      titulo: 'Tierras Físicas',
      descripcion: 'Instalación de sistemas de tierra física para protección contra descargas eléctricas.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9' />
        </svg>
      )
    },
    {
      titulo: 'Adecuaciones',
      descripcion: 'Modificaciones y ampliaciones de instalaciones eléctricas existentes según necesidades.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' />
        </svg>
      )
    }
  ]

  const beneficios = [
    {
      titulo: 'Seguridad Garantizada',
      descripcion: 'Instalaciones conforme a normativas vigentes',
      icono: '🛡️'
    },
    {
      titulo: 'Ahorro Energético',
      descripcion: 'Sistemas eficientes que reducen consumo',
      icono: '⚡'
    },
    {
      titulo: 'Respuesta Rápida',
      descripcion: 'Atención inmediata en emergencias',
      icono: '🚀'
    },
    {
      titulo: 'Personal Certificado',
      descripcion: 'Electricistas con experiencia comprobada',
      icono: '👷'
    }
  ]

  const tiposProyectos = [
    { nombre: 'Residencial', descripcion: 'Casas, departamentos y fraccionamientos' },
    { nombre: 'Comercial', descripcion: 'Tiendas, oficinas y locales comerciales' },
    { nombre: 'Industrial', descripcion: 'Fábricas, naves industriales y bodegas' },
    { nombre: 'Baja Tensión', descripcion: 'Instalaciones hasta 1000V' },
    { nombre: 'Media Tensión', descripcion: 'Sistemas de distribución eléctrica' },
    { nombre: 'Emergencias', descripcion: 'Atención urgente 24/7' }
  ]

  return (
    <div className='bg-white'>
      {/* Hero Section */}
      <div className='relative bg-gray-900 text-white py-20 overflow-hidden'>
        <div 
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{ backgroundImage: "url('/electricidad/banner.webp')" }}
        ></div>
        <div className='absolute inset-0 bg-black/50'></div>
        
        <div className='container mx-auto px-4 relative z-10'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-5xl md:text-6xl font-bold mb-6'>
              Servicios de <span className='text-[#F48437]'>Electricidad</span>
            </h1>
            <p className='text-xl md:text-2xl text-white mb-8'>
              Instalaciones, reparaciones y mantenimiento con seguridad garantizada
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
            <div className='bg-white p-8 md:p-12 rounded-2xl shadow-xl border-t-4 border-yellow-500'>
              <div className='flex items-start gap-6'>
                <div className='hidden md:block flex-shrink-0'>
                  <div className='bg-gradient-to-br from-yellow-500 to-orange-600 p-4 rounded-xl'>
                    <svg className='w-12 h-12 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 10V3L4 14h7v7l9-11h-7z' />
                    </svg>
                  </div>
                </div>
                <div>
                  <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>
                    Soluciones Eléctricas <span className='text-yellow-600'>Profesionales</span>
                  </h2>
                  <p className='text-lg text-gray-700 leading-relaxed'>
                    Brindamos servicios de <strong>electricidad en baja y media tensión</strong>, realizando instalaciones, 
                    reparaciones y adecuaciones según las necesidades de cada proyecto. Atendemos desde cableado, tableros 
                    y canalizaciones hasta correcciones y mantenimiento preventivo, garantizando un trabajo seguro, eficiente 
                    y conforme a las normas eléctricas vigentes.
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
              <span className='bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold'>
                Nuestros Servicios
              </span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
              Servicios <span className='text-yellow-600'>Eléctricos</span>
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Cobertura completa para todas tus necesidades eléctricas
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {servicios.map((servicio, index) => (
              <div 
                key={index}
                className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-yellow-500 group'
              >
                <div className='bg-gradient-to-br from-yellow-500 to-orange-600 text-white p-4 rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform duration-300'>
                  {servicio.icono}
                </div>
                <h3 className='text-xl font-bold text-gray-800 mb-3 group-hover:text-yellow-600 transition-colors'>
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

      {/* Tipos de Proyectos */}
      <div className='py-20 bg-gradient-to-b from-gray-50 to-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
                Atendemos <span className='text-yellow-600'>todo tipo de proyectos</span>
              </h2>
              <p className='text-xl text-gray-600'>
                Experiencia en instalaciones residenciales, comerciales e industriales
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
                Por qué elegirnos
              </h2>
              <p className='text-xl text-gray-600'>
                Compromiso con la calidad y seguridad en cada proyecto
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

      {/* Galería con Imagen */}
      <div className='py-20 bg-gradient-to-b from-gray-50 to-white'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto'>
            <div>
              <h2 className='text-4xl font-bold text-gray-800 mb-6'>
                Trabajo <span className='text-yellow-600'>seguro y certificado</span>
              </h2>
              <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
                Nuestros electricistas cuentan con las certificaciones necesarias y siguen estrictamente 
                las normas de seguridad. Utilizamos materiales de calidad y equipos especializados para 
                garantizar instalaciones duraderas y seguras.
              </p>
              
              <div className='space-y-4'>
                <div className='flex items-start gap-4 p-4 bg-white rounded-lg shadow-md'>
                  <div className='bg-yellow-500 text-white p-3 rounded-lg flex-shrink-0'>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  </div>
                  <div>
                    <h4 className='font-bold text-gray-800 mb-1'>Cumplimiento Normativo</h4>
                    <p className='text-gray-600'>Trabajos según NOM y reglamentos vigentes</p>
                  </div>
                </div>

                <div className='flex items-start gap-4 p-4 bg-white rounded-lg shadow-md'>
                  <div className='bg-yellow-500 text-white p-3 rounded-lg flex-shrink-0'>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  </div>
                  <div>
                    <h4 className='font-bold text-gray-800 mb-1'>Materiales Certificados</h4>
                    <p className='text-gray-600'>Solo usamos componentes de marcas reconocidas</p>
                  </div>
                </div>

                <div className='flex items-start gap-4 p-4 bg-white rounded-lg shadow-md'>
                  <div className='bg-yellow-500 text-white p-3 rounded-lg flex-shrink-0'>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  </div>
                  <div>
                    <h4 className='font-bold text-gray-800 mb-1'>Garantía de Servicio</h4>
                    <p className='text-gray-600'>Respaldamos nuestro trabajo con garantía escrita</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='relative rounded-2xl overflow-hidden shadow-2xl group order-first md:order-last'>
              <img 
                src='/electricidad/electricista.webp' 
                alt='Electricista trabajando'
                className='w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-500'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-orange-900/60 to-transparent'></div>
              <div className='absolute bottom-6 left-6 right-6 text-white'>
                <p className='text-3xl font-bold mb-2'>Experiencia que respalda</p>
                <p className='text-yellow-100'>Calidad y seguridad garantizada</p>
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
              ¿Necesitas servicio eléctrico?
            </h2>
            <p className='text-xl md:text-2xl text-white mb-8'>
              Contáctanos para una cotización sin compromiso
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
                <span>Cotización gratuita</span>
              </div>
              <div className='flex items-center gap-2'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                </svg>
                <span>Atención 24/7</span>
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
  )
}
