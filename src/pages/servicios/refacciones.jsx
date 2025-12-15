import React from 'react'
import { Helmet } from 'react-helmet'

export default function Refacciones() {

  const beneficios = [
    {
      titulo: 'Calidad Garantizada',
      descripcion: 'Refacciones compatibles y confiables',
      icono: '✅'
    },
    {
      titulo: 'Stock Disponible',
      descripcion: 'Amplio inventario listo para enviar',
      icono: '📦'
    },
    {
      titulo: 'Envío Nacional',
      descripcion: 'Entregamos en toda la República Mexicana',
      icono: '🚚'
    },
    {
      titulo: 'Asesoría Técnica',
      descripcion: 'Te ayudamos a encontrar la pieza correcta',
      icono: '🔧'
    }
  ]

  const tiposEquipos = [
    { nombre: 'Maquinaria Eléctrica', descripcion: 'Refacciones para herramientas y equipos eléctricos' },
    { nombre: 'Equipos de Combustión', descripcion: 'Piezas para motores de gasolina y diésel' },
    { nombre: 'Herramientas de Jardín', descripcion: 'Repuestos para podadoras, desbrozadoras y más' },
    { nombre: 'Generadores', descripcion: 'Componentes para plantas generadoras' }
  ]

  const ejemplosRefacciones = [
    'Carburadores',
    'Bobinas de ignición',
    'Cebadores',
    'Piolas y retractiles',
    'Campos',
    'Filtros',
    'Bujías',
    'Empaques y sellos'
  ]

  return (
    <div className='bg-white'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Venta de Refacciones para Maquinaria y Herramientas | IntegraRefacciones.mx</title>
        <meta name="description" content="Venta de refacciones para maquinaria eléctrica, equipos de combustión, herramientas de jardín y generadores en Mérida y todo México. Stock disponible, envío nacional y asesoría técnica. Encuentra carburadores, bobinas, filtros y más." />
        <meta name="keywords" content="refacciones maquinaria, repuestos herramientas, refacciones eléctricas, refacciones combustión, carburadores, bobinas, filtros, IntegraRefacciones, IntegraObra, Mérida Yucatán, venta de refacciones, México" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://integraobra.mx/servicios/refacciones" />
        {/* Open Graph */}
        <meta property="og:locale" content="es_MX" />
        <meta property="og:site_name" content="IntegraObra.mx" />
        <meta property="og:title" content="Venta de Refacciones para Maquinaria y Herramientas" />
        <meta property="og:description" content="Venta de refacciones para maquinaria eléctrica, equipos de combustión, herramientas de jardín y generadores en Mérida y todo México. Stock disponible, envío nacional y asesoría técnica." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://integraobra.mx/servicios/refacciones" />
        <meta property="og:image" content="https://integraobra.mx/refacciones/banner.webp" />
        <meta property="og:image:alt" content="Refacciones para maquinaria y herramientas IntegraObra" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@integraobra" />
        <meta name="twitter:title" content="Venta de Refacciones para Maquinaria y Herramientas" />
        <meta name="twitter:description" content="Venta de refacciones para maquinaria eléctrica, equipos de combustión, herramientas de jardín y generadores en Mérida y todo México. Stock disponible, envío nacional y asesoría técnica." />
        <meta name="twitter:image" content="https://integraobra.mx/refacciones/banner.webp" />
        <meta name="twitter:image:alt" content="Refacciones para maquinaria y herramientas IntegraObra" />
      </Helmet>
      {/* Hero Section */}
      <div className='relative bg-gray-900 text-white py-20 overflow-hidden'>
        <div 
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{ backgroundImage: "url('/refacciones/banner.webp')" }}
        ></div>
        <div className='absolute inset-0 bg-black/50'></div>
        
        <div className='container mx-auto px-4 relative z-10'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-5xl md:text-6xl font-bold mb-6'>
              Venta de <span className='text-[#F48437]'>Refacciones</span>
            </h1>
            <p className='text-xl md:text-2xl text-white mb-8'>
              ¿Necesitas una refacción para tu equipo? Contáctanos y te ayudamos a encontrarla
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a 
                href='/contacto'
                className='bg-[#F48437] hover:bg-[#e07730] text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
              >
                Consultar disponibilidad
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Introducción */}
      <div className='py-16 bg-gradient-to-b from-white to-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <div className='bg-white p-8 md:p-12 rounded-2xl shadow-xl border-t-4 border-red-500'>
              <div className='flex items-start gap-6'>
                <div className='hidden md:block flex-shrink-0'>
                  <div className='bg-gradient-to-br from-red-500 to-orange-600 p-4 rounded-xl'>
                    <svg className='w-12 h-12 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' />
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                    </svg>
                  </div>
                </div>
                <div>
                  <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>
                    IntegraRefacciones
                  </h2>
                  <p className='text-lg text-gray-700 leading-relaxed mb-4'>
                    Contamos con una división especializada en <strong>refacciones para maquinaria eléctrica y de 
                    combustión</strong> llamada <strong>IntegraRefacciones</strong>. Aquí encontrará una amplia variedad 
                    de repuestos como carburadores, bobinas de ignición, cebadores, piolas, retractiles, campos y muchas 
                    otras piezas disponibles en stock para diferentes marcas y modelos.
                  </p>
                  <p className='text-lg text-gray-700 leading-relaxed'>
                    En <strong>IntegraRefacciones</strong> nos enfocamos en ofrecer refacciones de calidad, garantizando 
                    compatibilidad y rendimiento para que sus equipos vuelvan a trabajar como nuevos. Realizamos envíos 
                    a toda la República Mexicana por medio de diversas paqueterías, asegurando rapidez y seguridad en 
                    cada entrega.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ejemplos de Refacciones */}
      <div id='productos' className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-5xl mx-auto'>
            <div className='text-center mb-12'>
              <div className='inline-block mb-4'>
                <span className='bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold'>
                  Nuestros Productos
                </span>
              </div>
              <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
                ¿Qué tipo de <span className='text-red-600'>refacciones</span> manejamos?
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Amplia variedad de repuestos como carburadores, bobinas de ignición, cebadores, piolas, retractiles, campos y muchas otras piezas
              </p>
            </div>

            <div className='bg-gradient-to-br from-red-50 to-orange-50 p-8 md:p-12 rounded-2xl shadow-xl'>
              <div className='grid md:grid-cols-2 gap-4'>
                {ejemplosRefacciones.map((refaccion, index) => (
                  <div key={index} className='flex items-center gap-3 p-4 bg-white rounded-lg shadow-md'>
                    <div className='bg-red-500 text-white p-2 rounded-lg flex-shrink-0'>
                      <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                      </svg>
                    </div>
                    <span className='text-gray-800 font-semibold'>{refaccion}</span>
                  </div>
                ))}
              </div>
              
              <div className='mt-8 text-center'>
                <p className='text-lg text-gray-700 mb-4'>
                  Y muchas más piezas disponibles en stock
                </p>
                <a 
                  href='/contacto'
                  className='inline-block bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                >
                  Consultar disponibilidad
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tipos de Equipos */}
      <div className='py-20 bg-gradient-to-b from-gray-50 to-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
                Refacciones para <span className='text-red-600'>todo tipo de equipos</span>
              </h2>
              <p className='text-xl text-gray-600'>
                Piezas compatibles con múltiples marcas
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {tiposEquipos.map((tipo, index) => (
                <div 
                  key={index}
                  className='bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-red-500'
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
                Por qué comprar con nosotros
              </h2>
              <p className='text-xl text-gray-600'>
                Servicio y calidad garantizada
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {beneficios.map((beneficio, index) => (
                <div 
                  key={index}
                  className='bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2'
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

      {/* Proceso de Compra */}
      <div className='py-20 bg-gradient-to-b from-gray-50 to-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
                Proceso de <span className='text-red-600'>Compra</span>
              </h2>
              <p className='text-xl text-gray-600'>
                Fácil y rápido en 4 pasos
              </p>
            </div>

            <div className='grid md:grid-cols-4 gap-6'>
              {[
                { paso: '1', titulo: 'Consulta', descripcion: 'Contáctanos y dinos qué refacción necesitas' },
                { paso: '2', titulo: 'Verificación', descripcion: 'Confirmamos compatibilidad y disponibilidad' },
                { paso: '3', titulo: 'Compra', descripcion: 'Realizas tu pedido y pago' },
                { paso: '4', titulo: 'Envío', descripcion: 'Enviamos tu refacción con paquetería' }
              ].map((item, index) => (
                <div key={index} className='relative'>
                  <div className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-red-500'>
                    <div className='text-5xl font-bold text-red-200 mb-2'>{item.paso}</div>
                    <h3 className='text-xl font-bold text-gray-800 mb-3'>{item.titulo}</h3>
                    <p className='text-gray-600'>{item.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Cómo Funciona */}
      <div className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-12'>
              <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
                ¿Cómo <span className='text-red-600'>conseguir</span> tu refacción?
              </h2>
              <p className='text-xl text-gray-600'>
                Es muy sencillo, solo contáctanos
              </p>
            </div>

            <div className='grid md:grid-cols-3 gap-8'>
              <div className='bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl shadow-lg text-center'>
                <div className='bg-gradient-to-br from-red-500 to-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold'>
                  1
                </div>
                <h3 className='text-2xl font-bold text-gray-800 mb-4'>Contáctanos</h3>
                <p className='text-gray-600 leading-relaxed'>
                  Dinos qué refacción necesitas, el modelo de tu equipo y la marca
                </p>
              </div>

              <div className='bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl shadow-lg text-center'>
                <div className='bg-gradient-to-br from-red-500 to-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold'>
                  2
                </div>
                <h3 className='text-2xl font-bold text-gray-800 mb-4'>Verificamos</h3>
                <p className='text-gray-600 leading-relaxed'>
                  Confirmamos disponibilidad y compatibilidad con tu equipo
                </p>
              </div>

              <div className='bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl shadow-lg text-center'>
                <div className='bg-gradient-to-br from-red-500 to-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold'>
                  3
                </div>
                <h3 className='text-2xl font-bold text-gray-800 mb-4'>Te enviamos</h3>
                <p className='text-gray-600 leading-relaxed'>
                  Enviamos tu refacción con paquetería segura a cualquier parte de México
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className='py-20 bg-gradient-to-br from-red-500 to-orange-600 text-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              ¿Necesitas una refacción para tu equipo?
            </h2>
            <p className='text-xl md:text-2xl text-white mb-8'>
              Contáctanos y te ayudamos a encontrarla. Verificamos compatibilidad y disponibilidad
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a 
                href='/contacto'
                className='bg-white hover:bg-gray-100 text-red-700 font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
              >
                Consultar ahora
              </a>
            </div>
            <div className='mt-8 flex items-center justify-center gap-6 text-white'>
              <div className='flex items-center gap-2'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                </svg>
                <span>Stock disponible</span>
              </div>
              <div className='flex items-center gap-2'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                </svg>
                <span>Envío nacional</span>
              </div>
              <div className='flex items-center gap-2'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                </svg>
                <span>Calidad garantizada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
