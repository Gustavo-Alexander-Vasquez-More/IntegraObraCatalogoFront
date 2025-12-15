import React from 'react'

export default function AreasVerdes() {
  const servicios = [
    {
      titulo: 'Poda de Formación y Limpieza',
      descripcion: 'Mantenemos tus árboles y arbustos con la forma adecuada, eliminando ramas secas y enfermas.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z' />
        </svg>
      )
    },
    {
      titulo: 'Recorte de Césped',
      descripcion: 'Corte profesional del pasto manteniendo la altura ideal para un aspecto uniforme y saludable.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z' />
        </svg>
      )
    },
    {
      titulo: 'Deshierbe',
      descripcion: 'Eliminación de hierbas y plantas no deseadas que compiten por nutrientes con tus plantas.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
        </svg>
      )
    },
    {
      titulo: 'Retiro de Maleza',
      descripcion: 'Limpieza completa de vegetación invasora y residuos para mantener el jardín ordenado.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' />
        </svg>
      )
    },
    {
      titulo: 'Mantenimiento de Jardines',
      descripcion: 'Cuidado integral de tus espacios verdes, asegurando su belleza y vitalidad constante.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' />
        </svg>
      )
    },
    {
      titulo: 'Fertilización',
      descripcion: 'Aplicación de nutrientes esenciales para promover el crecimiento vigoroso de tus plantas.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12' />
        </svg>
      )
    },
    {
      titulo: 'Sistema de Riego',
      descripcion: 'Instalación y mantenimiento de sistemas de riego eficientes para una hidratación óptima.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z' />
        </svg>
      )
    },
    {
      titulo: 'Control de Plagas',
      descripcion: 'Tratamiento preventivo y correctivo contra insectos y enfermedades que afectan tus plantas.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
        </svg>
      )
    },
    {
      titulo: 'Manejo de Residuos',
      descripcion: 'Recolección y disposición adecuada de residuos vegetales de manera responsable con el medio ambiente.',
      icono: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' />
        </svg>
      )
    }
  ]

  const beneficios = [
    {
      titulo: 'Espacios Saludables',
      descripcion: 'Tus áreas verdes libres de plagas y enfermedades',
      icono: '🌱'
    },
    {
      titulo: 'Mayor Valor',
      descripcion: 'Incrementa el valor estético y económico de tu propiedad',
      icono: '📈'
    },
    {
      titulo: 'Ahorro de Tiempo',
      descripcion: 'Olvídate de la carga del mantenimiento constante',
      icono: '⏰'
    },
    {
      titulo: 'Profesionalismo',
      descripcion: 'Equipo capacitado con herramientas especializadas',
      icono: '👨‍🌾'
    }
  ]

  const proceso = [
    { paso: '1', titulo: 'Evaluación', descripcion: 'Visitamos tu propiedad para evaluar las necesidades específicas' },
    { paso: '2', titulo: 'Cotización', descripcion: 'Elaboramos un presupuesto personalizado sin compromiso' },
    { paso: '3', titulo: 'Planificación', descripcion: 'Diseñamos un plan de mantenimiento adaptado a tu jardín' },
    { paso: '4', titulo: 'Ejecución', descripcion: 'Realizamos el servicio con dedicación y profesionalismo' }
  ]

  return (
    <div className='bg-white'>
      {/* Hero Section */}
      <div className='relative bg-gradient-to-br from-green-100 to-green-100 text-white py-20 overflow-hidden'>
        <div 
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{ backgroundImage: "url('/areasVerdes/jardineria.webp')" }}
        ></div>
        <div className='absolute inset-0 bg-black/40'></div>
        
        <div className='container mx-auto px-4 relative z-10'>
          <div className='max-w-4xl mx-auto text-center'>
            <div className='inline-block mb-6'>
            </div>
            <h1 className='text-5xl md:text-6xl font-bold mb-6'>
              Mantenimiento de <span className='text-[#F48437]'>Áreas Verdes</span>
            </h1>
            <p className='text-xl md:text-2xl text-green-100 mb-8'>
              Espacios verdes saludables, ordenados y visualmente atractivos
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
                className='bg-white hover:bg-gray-100 text-green-700 font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
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
            <div className='bg-white p-8 md:p-12 rounded-2xl shadow-xl border-t-4 border-green-500'>
              <div className='flex items-start gap-6'>
                <div className='hidden md:block flex-shrink-0'>
                  <div className='bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-xl'>
                    <svg className='w-12 h-12 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 10V3L4 14h7v7l9-11h-7z' />
                    </svg>
                  </div>
                </div>
                <div>
                  <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>
                    Cuidado Profesional para tus <span className='text-green-600'>Espacios Verdes</span>
                  </h2>
                  <p className='text-lg text-gray-700 leading-relaxed'>
                    En <strong className='text-[#066396]'>IntegraObra.mx</strong> ofrecemos el mantenimiento completo 
                    de áreas verdes, atendiendo cada espacio con dedicación y profesionalismo. Realizamos poda de 
                    formación y limpieza, deshierbe, recorte de césped, retiro de maleza, mantenimiento de jardines, 
                    fertilización, riego, control de plagas y manejo adecuado de residuos vegetales. Nuestro objetivo 
                    es conservar sus áreas verdes en óptimas condiciones, garantizando espacios ordenados, saludables 
                    y visualmente atractivos.
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
              <span className='bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold'>
                Nuestros Servicios
              </span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
              Todo lo que <span className='text-green-600'>necesitas</span>
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Ofrecemos una amplia gama de servicios especializados para el cuidado integral de tus áreas verdes
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {servicios.map((servicio, index) => (
              <div 
                key={index}
                className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-500 group'
              >
                <div className='bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform duration-300'>
                  {servicio.icono}
                </div>
                <h3 className='text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors'>
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

      {/* Beneficios */}
      <div className='py-20 bg-gradient-to-br from-green-50 to-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
                ¿Por qué elegirnos?
              </h2>
              <p className='text-xl text-gray-600'>
                Beneficios de contratar nuestro servicio profesional
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {beneficios.map((beneficio, index) => (
                <div 
                  key={index}
                  className='bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2'
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

      {/* Proceso */}
      <div className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
                Nuestro <span className='text-green-600'>Proceso</span>
              </h2>
              <p className='text-xl text-gray-600'>
                Así es como trabajamos para transformar tus áreas verdes
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {proceso.map((item, index) => (
                <div key={index} className='relative'>
                  <div className='bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300'>
                    <div className='text-6xl font-bold opacity-20 mb-2'>{item.paso}</div>
                    <div className='relative z-10'>
                      <h3 className='text-2xl font-bold mb-3'>{item.titulo}</h3>
                      <p className='text-green-100'>{item.descripcion}</p>
                    </div>
                  </div>
                  {index < proceso.length - 1 && (
                    <div className='hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20'>
                      <svg className='w-6 h-6 text-green-500' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z' clipRule='evenodd' />
                      </svg>
                    </div>
                  )}
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
            <div className='relative rounded-2xl overflow-hidden shadow-2xl group'>
              <img 
                src='/areasVerdes/trabajando.webp' 
                alt='Jardín con mantenimiento profesional'
                className='w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-500'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent'></div>
              <div className='absolute bottom-6 left-6 right-6 text-white'>
                <p className='text-3xl font-bold mb-2'>Resultados que hablan</p>
                <p className='text-green-100'>Transformamos tus espacios verdes</p>
              </div>
            </div>

            <div>
              <h2 className='text-4xl font-bold text-gray-800 mb-6'>
                Equipo y herramientas <span className='text-green-600'>profesionales</span>
              </h2>
              <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
                Contamos con el equipo especializado y las herramientas necesarias para realizar cada 
                trabajo con la máxima calidad. Desde cortadoras profesionales hasta sistemas de riego 
                modernos, estamos equipados para cualquier desafío.
              </p>
              
              <div className='space-y-4'>
                <div className='flex items-start gap-4 p-4 bg-white rounded-lg shadow-md'>
                  <div className='bg-green-500 text-white p-3 rounded-lg flex-shrink-0'>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  </div>
                  <div>
                    <h4 className='font-bold text-gray-800 mb-1'>Personal Capacitado</h4>
                    <p className='text-gray-600'>Jardineros con experiencia y conocimiento especializado</p>
                  </div>
                </div>

                <div className='flex items-start gap-4 p-4 bg-white rounded-lg shadow-md'>
                  <div className='bg-green-500 text-white p-3 rounded-lg flex-shrink-0'>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  </div>
                  <div>
                    <h4 className='font-bold text-gray-800 mb-1'>Productos de Calidad</h4>
                    <p className='text-gray-600'>Fertilizantes, plaguicidas y productos certificados</p>
                  </div>
                </div>

                <div className='flex items-start gap-4 p-4 bg-white rounded-lg shadow-md'>
                  <div className='bg-green-500 text-white p-3 rounded-lg flex-shrink-0'>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  </div>
                  <div>
                    <h4 className='font-bold text-gray-800 mb-1'>Garantía de Satisfacción</h4>
                    <p className='text-gray-600'>Revisamos el resultado hasta que quedes completamente satisfecho</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className='py-20 bg-gradient-to-br from-green-600 to-green-700 text-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              ¿Listo para transformar tus áreas verdes?
            </h2>
            <p className='text-xl md:text-2xl text-green-100 mb-8'>
              Solicita una cotización sin compromiso y descubre cómo podemos ayudarte
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a 
                href='/contacto'
                className='bg-white hover:bg-gray-100 text-green-700 font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
              >
                Más información
              </a>
            </div>
            <div className='mt-8 flex items-center justify-center gap-6 text-green-100'>
              <div className='flex items-center gap-2'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                </svg>
                <span>Sin compromiso</span>
              </div>
              <div className='flex items-center gap-2'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                </svg>
                <span>Respuesta rápida</span>
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
