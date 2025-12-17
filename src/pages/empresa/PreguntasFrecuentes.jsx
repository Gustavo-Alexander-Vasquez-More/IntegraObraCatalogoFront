import React, { useState } from 'react'
import { Helmet } from 'react-helmet'

export default function PreguntasFrecuentes() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqs = [
    {
      id: 1,
      categoria: "Servicios Generales",
      pregunta: "¿Qué servicios ofrece IntegraObra?",
      respuesta: "IntegraObra brinda servicios de renta de maquinaria ligera, reparación de equipos eléctricos y carburados, venta de refacciones y ejecución integral de proyectos, con experiencia y responsabilidad."
    },
    {
      id: 2,
      categoria: "Servicios Generales",
      pregunta: "¿En qué zonas brindan servicio?",
      respuesta: "Ofrecemos servicio en Mérida y toda la región, así como atención a servicios especiales y proyectos en toda la República Mexicana, previa evaluación. Contáctenos para más información."
    },
    {
      id: 3,
      categoria: "Servicios Generales",
      pregunta: "¿Como funciona el servicio de construcccion?",
      respuesta: "Evaluamos tu proyecto, te presentamos una propuesta clara y lo ejecutamos con personal capacitado, maquinaria adecuada y supervisión constante, garantizando calidad y responsabilidad."
    },
    {
      id: 4,
      categoria: "Renta de Equipos",
      pregunta: "¿Cómo funciona la renta de maquinaria?",
      respuesta: "Disponemos de maquinaria ligera en renta, con equipos revisados y garantizados. El proceso de contratación es sencillo y transparente: identificación oficial vigente (INE) con domicilio en Mérida, Yucatán, firma de contrato y pago conforme al periodo de renta solicitado."
    },
    {
      id: 5,
      categoria: "Renta de Equipos",
      pregunta: "¿Los equipos tienen garantía?",
      respuesta: "Sí, todos nuestros equipos en renta se encuentran en buenas condiciones. Son revisados, mantenidos y probados antes de cada entrega para garantizar su correcto funcionamiento y desempeño en obra. La garantía no aplica en equipos arrendados que no sean utilizados de manera correcta."
    },
    {
      id: 6,
      categoria: "Refacciones",
      pregunta: "¿Qué tipo de refacciones manejan?",
      respuesta: "Manejamos un amplio surtido de refacciones para equipos eléctricos y carburados, como campos, filtros, bujías, cebadores, bobinas y carburadores, entre muchas otras, para que el trabajo no se detenga."
    },
    {
      id: 7,
      categoria: "Refacciones",
      pregunta: "¿Hacen envíos a otros estados?",
      respuesta: "Sí, realizamos envíos a toda la República Mexicana. Los tiempos de entrega varían según la ubicación. Contáctanos para cotizar el envío a tu localidad y conocer los tiempos estimados de entrega."
    },
    {
      id: 8,
      categoria: "Garantías y Políticas",
      pregunta: "¿Qué garantía ofrecen en sus servicios?",
      respuesta: "Nuestros servicios de reparación cuentan con garantía por escrito. Como parte de nuestras políticas de transparencia, en el centro de servicio se entregan las piezas dañadas reemplazadas; en caso contrario, el servicio no tendrá costo. Este procedimiento respalda nuestro compromiso con la calidad y la confianza de nuestros clientes."
    },
    {
      id: 9,
      categoria: "Garantías y Políticas",
      pregunta: "¿Cuál es su política de precios?",
      respuesta: "Trabajamos con total transparencia. Proporcionamos cotizaciones claras y detalladas antes de iniciar cualquier trabajo. No hay costos ocultos ni sorpresas desagradables. Nuestros precios son honestos y competitivos, reflejando la calidad de nuestro servicio."
    },
    {
      id: 10,
      categoria: "Cotizaciones y Contacto",
      pregunta: "¿Cómo puedo solicitar una cotización?",
      respuesta: "Puedes solicitar una cotización de tres formas: 1) Llenando el formulario en nuestra página web, 2) Llamando directamente a nuestras oficinas, o 3) Enviándonos un mensaje por WhatsApp. Nos pondremos en contacto contigo en menos de 24 horas."
    },
    {
      id: 11,
      categoria: "Cotizaciones y Contacto",
      pregunta: "¿Cuál es su horario de atención?",
      respuesta: "Nuestro horario de atención es: Lunes a Viernes de 8:00 AM a 6:00 PM, y Sábados de 8:00 AM a 3:00 PM. Para emergencias o consultas urgentes, puedes contactarnos por WhatsApp donde respondemos lo más pronto posible."
    }
  ]

  // Agrupar FAQs por categoría
  const categorias = [...new Set(faqs.map(faq => faq.categoria))]

  return (
    <div className='bg-white'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Preguntas Frecuentes | IntegraObra.mx - Dudas sobre Servicios, Renta y Garantías</title>
        <meta name="description" content="Resuelve tus dudas sobre servicios, renta de maquinaria, refacciones y garantías en IntegraObra.mx. Consulta las preguntas frecuentes y obtén respuestas claras y rápidas. Atención en Mérida y toda la República Mexicana." />
        <meta name="keywords" content="Preguntas frecuentes, FAQ, IntegraObra, servicios de construcción, renta de maquinaria, refacciones, garantías, Mérida, Yucatán, México" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://integraobra.mx/empresa/preguntas-frecuentes" />
        {/* Open Graph */}
        <meta property="og:locale" content="es_MX" />
        <meta property="og:site_name" content="IntegraObra.mx" />
        <meta property="og:title" content="Preguntas Frecuentes | IntegraObra.mx" />
        <meta property="og:description" content="Resuelve tus dudas sobre servicios, renta de maquinaria, refacciones y garantías en IntegraObra.mx. Atención en Mérida y envíos a todo México." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://integraobra.mx/empresa/preguntas-frecuentes" />
        <meta property="og:image" content="https://integraobra.mx/empresa/faq-bg.jpg" />
        <meta property="og:image:alt" content="Preguntas frecuentes IntegraObra" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@integraobra" />
        <meta name="twitter:title" content="Preguntas Frecuentes | IntegraObra.mx" />
        <meta name="twitter:description" content="Resuelve tus dudas sobre servicios, renta de maquinaria, refacciones y garantías en IntegraObra.mx. Atención personalizada y rápida respuesta." />
        <meta name="twitter:image" content="https://integraobra.mx/empresa/faq-bg.jpg" />
        <meta name="twitter:image:alt" content="Preguntas frecuentes IntegraObra" />
      </Helmet>
      {/* Hero Section */}
      <div className='relative bg-gradient-to-br from-[#066396] to-[#0578b8] text-white py-16 overflow-hidden'>
        {/* Imagen de fondo */}
        <div 
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{ backgroundImage: "url('/empresa/faq-bg.jpg')" }}
        ></div>
        
        {/* Overlay azul con opacidad */}
        <div className='absolute inset-0 bg-gradient-to-br from-[#066396]/85 to-[#0578b8]/85'></div>
        
        {/* Contenido */}
        <div className='container mx-auto px-4 relative z-10'>
          <div className='max-w-4xl mx-auto text-center'>
            <div className='inline-block mb-4'>
              <div className='bg-[#F48437] p-4 rounded-2xl'>
                <svg className='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
              </div>
            </div>
            <h1 className='text-4xl md:text-6xl font-bold mb-4'>
              Preguntas <span className='text-[#F48437]'>Frecuentes</span>
            </h1>
            <p className='text-xl md:text-2xl text-blue-100'>
              Encuentra respuestas a las dudas más comunes sobre nuestros servicios
            </p>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className='py-16 bg-gradient-to-b from-gray-50 to-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-3xl font-bold text-gray-800 mb-4'>
              ¿Tienes alguna duda?
            </h2>
            <p className='text-lg text-gray-600 mb-8'>
              Aquí encontrarás respuestas a las preguntas más frecuentes de nuestros clientes. 
              Si no encuentras lo que buscas, no dudes en contactarnos directamente.
            </p>
          </div>
        </div>
      </div>

      {/* FAQs por Categoría */}
      {categorias.map((categoria, catIndex) => (
        <div key={catIndex} className={`py-12 ${catIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className='container mx-auto px-4'>
            <div className='max-w-4xl mx-auto'>
              {/* Título de Categoría */}
              <div className='flex items-center gap-3 mb-8'>
                <div className='bg-[#F48437] h-1 w-12 rounded'></div>
                <h3 className='text-2xl md:text-3xl font-bold text-gray-800'>{categoria}</h3>
              </div>

              {/* Preguntas de esta categoría */}
              <div className='space-y-4'>
                {faqs
                  .filter(faq => faq.categoria === categoria)
                  .map((faq, index) => (
                    <div
                      key={faq.id}
                      className='bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100'
                    >
                      <button
                        onClick={() => toggleFAQ(faq.id)}
                        className='w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200'
                      >
                        <div className='flex items-start gap-4 flex-1'>
                          <div className='flex-shrink-0 mt-1'>
                            <div className='bg-gradient-to-br from-[#F48437] to-[#e07730] p-2 rounded-lg'>
                              <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                              </svg>
                            </div>
                          </div>
                          <span className='text-lg font-semibold text-gray-800 pr-4'>
                            {faq.pregunta}
                          </span>
                        </div>
                        <svg
                          className={`w-6 h-6 text-[#066396] flex-shrink-0 transition-transform duration-300 ${
                            openIndex === faq.id ? 'rotate-180' : ''
                          }`}
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
                        </svg>
                      </button>

                      {/* Respuesta */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          openIndex === faq.id ? 'max-h-96' : 'max-h-0'
                        }`}
                      >
                        <div className='px-6 pb-6 pt-2'>
                          <div className='pl-14 pr-10'>
                            <p className='text-gray-600 leading-relaxed text-base'>
                              {faq.respuesta}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Sección con Imagen - ¿Aún tienes dudas? */}
      <div className='py-20 bg-gradient-to-b from-white to-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto'>
            {/* Imagen */}
            <div className='order-2 md:order-1'>
              <div className='relative rounded-2xl overflow-hidden shadow-2xl group'>
                <img 
                  src='/preguntas.webp' 
                  alt='Soporte al cliente de IntegraObra, atención personalizada a dudas frecuentes'
                  className='w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500'
                  loading='lazy'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-[#066396]/60 to-transparent'></div>
                <div className='absolute bottom-6 left-6 right-6 text-white'>
                  <p className='text-2xl font-bold mb-2'>¿Necesitas ayuda?</p>
                  <p className='text-blue-100'>Estamos aquí para ti</p>
                </div>
              </div>
            </div>

            {/* Texto y CTA */}
            <div className='order-1 md:order-2'>
              <h2 className='text-4xl font-bold text-gray-800 mb-6'>
                ¿Aún tienes <span className='text-[#F48437]'>dudas</span>?
              </h2>
              <p className='text-lg text-gray-600 mb-8 leading-relaxed'>
                Nuestro equipo está listo para ayudarte. Contáctanos por el medio que prefieras 
                y con gusto resolveremos todas tus preguntas. Recuerda que ofrecemos asesoría 
                personalizada sin compromiso.
              </p>

              {/* Métodos de contacto */}
              <div className='space-y-4 mb-8'>
                <div className='flex items-center gap-4 p-4 bg-white rounded-lg shadow-md'>
                  <div className='bg-[#F48437] p-3 rounded-lg'>
                    <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                    </svg>
                  </div>
                  <div>
                    <p className='font-semibold text-gray-800'>Llámanos</p>
                    <p className='text-gray-600'>999 123 4567</p>
                  </div>
                </div>

                <div className='flex items-center gap-4 p-4 bg-white rounded-lg shadow-md'>
                  <div className='bg-[#066396] p-3 rounded-lg'>
                    <svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z'/>
                    </svg>
                  </div>
                  <div>
                    <p className='font-semibold text-gray-800'>WhatsApp</p>
                    <p className='text-gray-600'>Respuesta rápida</p>
                  </div>
                </div>
              </div>

              {/* Botones */}
              <div className='flex flex-col sm:flex-row gap-4'>
                <a 
                  href='/contacto'
                  className='bg-[#F48437] hover:bg-[#e07730] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center'
                >
                  Ir a contacto
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
