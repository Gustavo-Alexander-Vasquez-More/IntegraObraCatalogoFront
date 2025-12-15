import React from 'react'
import { Helmet } from 'react-helmet'

export default function PoliticaPrivavidad() {
  return (
    <div className='bg-white'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Política de Privacidad | IntegraObra.mx - Protección de Datos y Derechos ARCO</title>
        <meta name="description" content="Lee la política de privacidad de IntegraObra.mx. Descubre cómo protegemos tus datos personales, tus derechos ARCO, el uso mínimo de cookies y nuestras medidas de seguridad. Tu privacidad es nuestra prioridad en Mérida y todo México." />
        <meta name="keywords" content="Política de privacidad, IntegraObra, protección de datos personales, derechos ARCO, cookies, seguridad, confidencialidad, Mérida, Yucatán, México" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://integraobra.mx/empresa/politica-privacidad" />
        {/* Open Graph */}
        <meta property="og:locale" content="es_MX" />
        <meta property="og:site_name" content="IntegraObra.mx" />
        <meta property="og:title" content="Política de Privacidad | IntegraObra.mx" />
        <meta property="og:description" content="Conoce cómo IntegraObra protege tus datos personales, derechos ARCO y privacidad. Consulta nuestra política completa y contacta para ejercer tus derechos." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://integraobra.mx/empresa/politica-privacidad" />
        <meta property="og:image" content="https://integraobra.mx/empresa/privacidad-bg.jpg" />
        <meta property="og:image:alt" content="Política de privacidad IntegraObra" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@integraobra" />
        <meta name="twitter:title" content="Política de Privacidad | IntegraObra.mx" />
        <meta name="twitter:description" content="Descubre cómo protegemos tu privacidad y datos personales en IntegraObra. Derechos ARCO, seguridad y contacto directo." />
        <meta name="twitter:image" content="https://integraobra.mx/empresa/privacidad-bg.jpg" />
        <meta name="twitter:image:alt" content="Política de privacidad IntegraObra" />
      </Helmet>
      {/* Hero Section */}
      <div className='relative bg-gradient-to-br from-[#066396] to-[#0578b8] text-white py-16 overflow-hidden'>
        <div 
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{ backgroundImage: "url('/empresa/privacidad-bg.jpg')" }}
        ></div>
        <div className='absolute inset-0 bg-gradient-to-br from-[#066396]/90 to-[#0578b8]/90'></div>
        
        <div className='container mx-auto px-4 relative z-10'>
          <div className='max-w-4xl mx-auto text-center'>
            <div className='inline-block mb-4'>
              <div className='bg-[#F48437] p-4 rounded-2xl'>
                <svg className='w-12 h-12' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
                </svg>
              </div>
            </div>
            <h1 className='text-4xl md:text-6xl font-bold mb-4'>
              Política de <span className='text-[#F48437]'>Privacidad</span>
            </h1>
            <p className='text-xl md:text-2xl text-blue-100'>
              Tu privacidad y seguridad son nuestra prioridad
            </p>
            <p className='text-sm text-blue-200 mt-4' aria-label='Fecha de última actualización'>
              Última actualización: Diciembre 2024
            </p>
          </div>
        </div>
      </div>

      {/* Introducción */}
      <div className='py-16 bg-gradient-to-b from-gray-50 to-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            <div className='bg-white p-8 rounded-2xl shadow-lg border border-gray-100'>
              <div className='flex items-start gap-4'>
                <div className='bg-[#F48437]/10 p-3 rounded-lg flex-shrink-0'>
                  <svg className='w-6 h-6 text-[#F48437]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                  </svg>
                </div>
                <div>
                  <h2 className='text-2xl font-bold text-gray-800 mb-4'>Bienvenido a nuestra Política de Privacidad</h2>
                  <p className='text-gray-600 leading-relaxed mb-4'>
                    En <strong>IntegraObra</strong>, respetamos y protegemos tu privacidad. Esta política describe cómo 
                    recopilamos, usamos y protegemos la información que nos proporcionas a través de nuestro sitio web 
                    y servicios.
                  </p>
                  <p className='text-gray-600 leading-relaxed'>
                    Al utilizar nuestros servicios, aceptas las prácticas descritas en esta política. Te recomendamos 
                    leerla cuidadosamente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secciones de la Política */}
      <div className='py-12'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto space-y-12'>
            
            {/* Sección 1: Información que Recopilamos */}
            <section>
              <div className='flex items-center gap-3 mb-6'>
                <div className='bg-[#F48437] h-1 w-12 rounded'></div>
                <h3 className='text-2xl md:text-3xl font-bold text-gray-800'>1. Información que Recopilamos</h3>
              </div>
              <div className='bg-gray-50 p-6 rounded-xl space-y-4'>
                <div>
                  <h4 className='font-semibold text-gray-800 mb-2 flex items-center gap-2'>
                    <span className='text-[#F48437]'>•</span>
                    Información de Formularios de Contacto
                  </h4>
                  <p className='text-gray-600 pl-5'>
                    Cuando solicitas una cotización o nos contactas, recopilamos: nombre completo, correo electrónico, 
                    número de teléfono, empresa (opcional), y el mensaje o descripción del servicio que necesitas.
                  </p>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-800 mb-2 flex items-center gap-2'>
                    <span className='text-[#F48437]'>•</span>
                    Información de Navegación
                  </h4>
                  <p className='text-gray-600 pl-5'>
                    Nuestro sitio web recopila automáticamente información básica como dirección IP, tipo de navegador, 
                    páginas visitadas y tiempo de permanencia. Esta información es anónima y se utiliza solo para 
                    mejorar la experiencia del usuario.
                  </p>
                </div>
                <div>
                  <h4 className='font-semibold text-gray-800 mb-2 flex items-center gap-2'>
                    <span className='text-[#F48437]'>•</span>
                    Información de WhatsApp
                  </h4>
                  <p className='text-gray-600 pl-5'>
                    Cuando utilizas nuestro botón de WhatsApp, la información se procesa directamente a través de la 
                    plataforma de WhatsApp. No almacenamos tus mensajes, pero sí guardamos tu número de contacto 
                    para seguimiento comercial.
                  </p>
                </div>
              </div>
            </section>

            {/* Sección 2: Uso de la Información */}
            <section>
              <div className='flex items-center gap-3 mb-6'>
                <div className='bg-[#066396] h-1 w-12 rounded'></div>
                <h3 className='text-2xl md:text-3xl font-bold text-gray-800'>2. Uso de la Información</h3>
              </div>
              <div className='bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl space-y-4'>
                <p className='text-gray-600 mb-4'>Utilizamos tu información personal únicamente para:</p>
                <ul className='space-y-3'>
                  <li className='flex items-start gap-3'>
                    <svg className='w-6 h-6 text-[#066396] flex-shrink-0 mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                    </svg>
                    <span className='text-gray-700'>
                      <strong>Responder tus consultas:</strong> Para ponernos en contacto contigo y brindarte 
                      información sobre nuestros servicios.
                    </span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <svg className='w-6 h-6 text-[#066396] flex-shrink-0 mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                    </svg>
                    <span className='text-gray-700'>
                      <strong>Procesar cotizaciones:</strong> Para elaborar presupuestos personalizados según 
                      tus necesidades.
                    </span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <svg className='w-6 h-6 text-[#066396] flex-shrink-0 mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                    </svg>
                    <span className='text-gray-700'>
                      <strong>Mejorar nuestros servicios:</strong> Para entender mejor las necesidades de nuestros 
                      clientes y mejorar nuestra oferta.
                    </span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <svg className='w-6 h-6 text-[#066396] flex-shrink-0 mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                    </svg>
                    <span className='text-gray-700'>
                      <strong>Seguimiento comercial:</strong> Para mantener comunicación sobre el estado de tu 
                      solicitud o proyecto.
                    </span>
                  </li>
                </ul>
                <div className='bg-white p-4 rounded-lg border-l-4 border-[#F48437] mt-4'>
                  <p className='text-gray-700 flex items-start gap-2'>
                    <svg className='w-5 h-5 text-[#F48437] flex-shrink-0 mt-0.5' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z' clipRule='evenodd' />
                    </svg>
                    <span><strong>Nota importante:</strong> Nunca compartimos, vendemos ni alquilamos tu información 
                    personal a terceros con fines comerciales o publicitarios.</span>
                  </p>
                </div>
              </div>
            </section>

            {/* Sección 3: Cookies y Tecnologías Similares */}
            <section>
              <div className='flex items-center gap-3 mb-6'>
                <div className='bg-[#F48437] h-1 w-12 rounded'></div>
                <h3 className='text-2xl md:text-3xl font-bold text-gray-800'>3. Cookies y Tecnologías Similares</h3>
              </div>
              <div className='bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl'>
                <div className='flex items-start gap-4 mb-4'>
                  <div className='bg-[#F48437]/10 p-3 rounded-lg flex-shrink-0'>
                    <svg className='w-6 h-6 text-[#F48437]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-800 mb-2'>Uso Mínimo de Cookies</h4>
                    <p className='text-gray-600 leading-relaxed mb-4'>
                      Nuestro sitio web utiliza <strong>cookies mínimas y esenciales</strong> únicamente para garantizar 
                      el funcionamiento correcto del sitio. No utilizamos cookies de seguimiento publicitario ni de 
                      terceros para rastrearte.
                    </p>
                    <div className='space-y-3'>
                      <div>
                        <p className='font-semibold text-gray-700 mb-1'>Cookies Técnicas:</p>
                        <p className='text-gray-600 pl-4'>
                          Son necesarias para la navegación básica y el funcionamiento del sitio. Se eliminan 
                          automáticamente al cerrar el navegador.
                        </p>
                      </div>
                      <div>
                        <p className='font-semibold text-gray-700 mb-1'>Análisis Básico:</p>
                        <p className='text-gray-600 pl-4'>
                          Utilizamos información anónima para entender cómo se usa el sitio y mejorarlo. No se 
                          vincula a tu identidad personal.
                        </p>
                      </div>
                    </div>
                    <p className='text-sm text-gray-500 mt-4 italic'>
                      Puedes configurar tu navegador para rechazar cookies, aunque esto puede afectar algunas 
                      funcionalidades del sitio.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Sección 4: Seguridad de la Información */}
            <section>
              <div className='flex items-center gap-3 mb-6'>
                <div className='bg-[#066396] h-1 w-12 rounded'></div>
                <h3 className='text-2xl md:text-3xl font-bold text-gray-800'>4. Seguridad de la Información</h3>
              </div>
              <div className='grid md:grid-cols-2 gap-6'>
                <div className='bg-white p-6 rounded-xl shadow-lg border border-gray-100'>
                  <div className='bg-[#066396]/10 p-3 rounded-lg inline-block mb-4'>
                    <svg className='w-8 h-8 text-[#066396]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' />
                    </svg>
                  </div>
                  <h4 className='font-bold text-gray-800 mb-2'>Protección de Datos</h4>
                  <p className='text-gray-600'>
                    Implementamos medidas de seguridad técnicas y organizativas para proteger tu información 
                    contra acceso no autorizado, pérdida o alteración.
                  </p>
                </div>
                <div className='bg-white p-6 rounded-xl shadow-lg border border-gray-100'>
                  <div className='bg-[#F48437]/10 p-3 rounded-lg inline-block mb-4'>
                    <svg className='w-8 h-8 text-[#F48437]' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
                    </svg>
                  </div>
                  <h4 className='font-bold text-gray-800 mb-2'>Acceso Restringido</h4>
                  <p className='text-gray-600'>
                    Solo el personal autorizado tiene acceso a tu información personal, y están obligados a 
                    mantener la confidencialidad de tus datos.
                  </p>
                </div>
              </div>
            </section>

            {/* Sección 5: Tus Derechos ARCO */}
            <section>
              <div className='flex items-center gap-3 mb-6'>
                <div className='bg-[#F48437] h-1 w-12 rounded'></div>
                <h3 className='text-2xl md:text-3xl font-bold text-gray-800'>5. Tus Derechos (ARCO)</h3>
              </div>
              <div className='bg-white p-8 rounded-xl shadow-lg border-2 border-[#F48437]/20'>
                <p className='text-gray-600 mb-6'>
                  Tienes derecho a ejercer los siguientes derechos sobre tu información personal:
                </p>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div className='flex gap-4'>
                    <div className='flex-shrink-0'>
                      <div className='bg-[#066396] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold'>
                        A
                      </div>
                    </div>
                    <div>
                      <h5 className='font-bold text-gray-800 mb-1'>Acceso</h5>
                      <p className='text-gray-600 text-sm'>
                        Conocer qué datos personales tenemos sobre ti y para qué los utilizamos.
                      </p>
                    </div>
                  </div>
                  <div className='flex gap-4'>
                    <div className='flex-shrink-0'>
                      <div className='bg-[#F48437] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold'>
                        R
                      </div>
                    </div>
                    <div>
                      <h5 className='font-bold text-gray-800 mb-1'>Rectificación</h5>
                      <p className='text-gray-600 text-sm'>
                        Solicitar la corrección de tu información si está desactualizada o es inexacta.
                      </p>
                    </div>
                  </div>
                  <div className='flex gap-4'>
                    <div className='flex-shrink-0'>
                      <div className='bg-[#066396] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold'>
                        C
                      </div>
                    </div>
                    <div>
                      <h5 className='font-bold text-gray-800 mb-1'>Cancelación</h5>
                      <p className='text-gray-600 text-sm'>
                        Solicitar que eliminemos tus datos de nuestras bases de datos cuando ya no sean necesarios.
                      </p>
                    </div>
                  </div>
                  <div className='flex gap-4'>
                    <div className='flex-shrink-0'>
                      <div className='bg-[#F48437] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold'>
                        O
                      </div>
                    </div>
                    <div>
                      <h5 className='font-bold text-gray-800 mb-1'>Oposición</h5>
                      <p className='text-gray-600 text-sm'>
                        Oponerte al uso de tus datos para fines específicos.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='mt-6 p-4 bg-gradient-to-r from-blue-50 to-orange-50 rounded-lg'>
                  <p className='text-gray-700 text-sm'>
                    <strong>Para ejercer tus derechos ARCO:</strong> Envía un correo electrónico a 
                    <a href='mailto:privacidad@integraobra.com' className='text-[#066396] font-semibold hover:underline ml-1'>
                      privacidad@integraobra.com
                    </a> con tu nombre completo, el derecho que deseas ejercer, y una identificación oficial. 
                    Responderemos en un plazo máximo de 20 días hábiles.
                  </p>
                </div>
              </div>
            </section>

            {/* Sección 6: Cambios a la Política */}
            <section>
              <div className='flex items-center gap-3 mb-6'>
                <div className='bg-[#066396] h-1 w-12 rounded'></div>
                <h3 className='text-2xl md:text-3xl font-bold text-gray-800'>6. Cambios a esta Política</h3>
              </div>
              <div className='bg-gray-50 p-6 rounded-xl'>
                <p className='text-gray-600 mb-4'>
                  Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. 
                  Cualquier cambio será publicado en esta página con la fecha de actualización correspondiente.
                </p>
                <p className='text-gray-600'>
                  Te recomendamos revisar periódicamente esta política para estar informado sobre cómo protegemos 
                  tu información.
                </p>
              </div>
            </section>

            {/* Sección 7: Contacto */}
            <section>
              <div className='flex items-center gap-3 mb-6'>
                <div className='bg-[#F48437] h-1 w-12 rounded'></div>
                <h3 className='text-2xl md:text-3xl font-bold text-gray-800'>7. Contacto</h3>
              </div>
              <div className='bg-gradient-to-br from-[#066396] to-[#0578b8] p-8 rounded-xl text-white'>
                <p className='text-blue-100 mb-6'>
                  Si tienes preguntas, comentarios o inquietudes sobre esta Política de Privacidad o el manejo 
                  de tus datos personales, no dudes en contactarnos:
                </p>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div className='flex items-start gap-3'>
                    <svg className='w-6 h-6 flex-shrink-0 mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                    </svg>
                    <div>
                      <p className='font-semibold mb-1'>Correo Electrónico</p>
                      <a href='mailto:privacidad@integraobra.com' className='text-blue-200 hover:text-white transition-colors'>
                        privacidad@integraobra.com
                      </a>
                    </div>
                  </div>
                  <div className='flex items-start gap-3'>
                    <svg className='w-6 h-6 flex-shrink-0 mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                    </svg>
                    <div>
                      <p className='font-semibold mb-1'>Dirección</p>
                      <p className='text-blue-200'>
                        Cerrada 10A No. 804, Fracc. Faisanes<br/>
                        Hacienda Tixcacal, CP 97312<br/>
                        Mérida, Yucatán
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className='py-16 bg-gradient-to-b from-gray-50 to-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mx-auto text-center'>
            <div className='bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#F48437]'>
              <h3 className='text-2xl md:text-3xl font-bold text-gray-800 mb-4'>
                ¿Listo para trabajar con nosotros?
              </h3>
              <p className='text-gray-600 mb-6'>
                Tus datos están seguros con nosotros. Solicita tu cotización sin compromiso.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <a 
                  href='/contacto'
                  className='bg-[#F48437] hover:bg-[#e07730] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                >
                  Contactar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
