import React from 'react'
import { Helmet } from 'react-helmet'
export default function SobreNosotros() {
  return (
    <div className='bg-white'>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sobre Nosotros | IntegraObra.mx - Historia, Misión, Visión y Valores</title>
        <meta name="description" content="Descubre la historia, misión, visión y valores de IntegraObra.mx. Comprometidos con la excelencia, innovación y el crecimiento de Mérida y la región. Servicios profesionales, maquinaria y refacciones de calidad en Yucatán." />
        <meta name="keywords" content="Sobre Nosotros, IntegraObra, Mérida, construcción, servicios profesionales, maquinaria, refacciones, misión, visión, valores, empresa, Yucatán, México" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://integraobra.mx/empresa/sobre-nosotros" />
        {/* Open Graph */}
        <meta property="og:locale" content="es_MX" />
        <meta property="og:site_name" content="IntegraObra.mx" />
        <meta property="og:title" content="Sobre Nosotros | IntegraObra.mx" />
        <meta property="og:description" content="Historia, misión, visión y valores de IntegraObra.mx. Compromiso con la excelencia, innovación y crecimiento en Mérida y la región." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://integraobra.mx/empresa/sobre-nosotros" />
        <meta property="og:image" content="https://integraobra.mx/nosotros.webp" />
        <meta property="og:image:alt" content="Equipo IntegraObra en Mérida" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@integraobra" />
        <meta name="twitter:title" content="Sobre Nosotros | IntegraObra.mx" />
        <meta name="twitter:description" content="Historia, misión, visión y valores de IntegraObra.mx. Servicios profesionales y compromiso en Mérida y Yucatán." />
        <meta name="twitter:image" content="https://integraobra.mx/nosotros.webp" />
        <meta name="twitter:image:alt" content="Equipo IntegraObra en Mérida" />
      </Helmet>
      {/* Hero Section */}
      <div className="relative flex items-center justify-center overflow-hidden">
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 blur-[1.5px] brightness-90"
          style={{ backgroundImage: "url('/nosotros.webp')" }}
        ></div>
        {/* Overlay elegante */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/60"></div>
        {/* Contenido */}
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center py-16 md:py-24">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg mb-4">
            Sobre <span className="text-[#F48437] drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]">Nosotros</span>
          </h1>
          <p className="text-lg md:text-2xl text-white/80 text-center font-medium max-w-2xl mx-auto mb-2 md:mb-4 drop-shadow">
            Comprometidos con la excelencia, la innovación y el crecimiento de Mérida y la región.
          </p>
        </div>
      </div>

      {/* Nuestra Historia */}
      <div className='lg:py-20 py-10'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto'>
            {/* Imagen */}
            <div className='order-2 md:order-1'>
              <div className='relative rounded-2xl overflow-hidden shadow-2xl group'>
                <img 
                  src='/merida.webp' 
                  alt='Construcción en Mérida, Yucatán, crecimiento de la región'
                  className='w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500'
                  loading='lazy'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-[#066396]/50 to-transparent'></div>
                <div className='absolute bottom-6 left-6 right-6'>
                  <p className='text-white font-bold text-xl'>Mérida, Yucatán</p>
                  <p className='text-blue-100'>Epicentro de crecimiento</p>
                </div>
              </div>
            </div>

            {/* Texto */}
            <div className='order-1 md:order-2'>
              <div className='inline-block mb-4'>
                <span className='bg-[#F48437] text-white px-4 py-2 rounded-full text-sm font-semibold'>
                  Nuestra Historia
                </span>
              </div>
              <h2 className='text-4xl font-bold text-gray-800 mb-6'>
                El Origen de <span className='text-[#F48437]'>IntegraObra</span>
              </h2>
              <div className='space-y-4 text-gray-600 leading-relaxed text-lg'>
                <p>
                  La idea surgió al observar que en <strong className='text-[#066396]'>Mérida, Yucatán</strong>, existe un gran crecimiento en el sector de la construcción y, con ello, una alta demanda de servicios, equipos y refacciones.
                </p>
                <p>
                  Analizamos el mercado y así nació el proyecto <strong className='text-[#F48437]'>IntegraObra</strong> e <strong className='text-[#066396]'>IntegraRefacciones</strong>, dos divisiones que comparten el mismo propósito, pero se presentan en sitios web distintos para ofrecer una atención más especializada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nuestro Compromiso */}
      <div className='bg-gradient-to-b from-gray-50 to-white py-20'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto'>
            {/* Texto */}
            <div>
              <div className='inline-block mb-4'>
                <span className='bg-[#066396] text-white px-4 py-2 rounded-full text-sm font-semibold'>
                  Nuestro Compromiso
                </span>
              </div>
              <h2 className='text-4xl font-bold text-gray-800 mb-6'>
                Servicio con <span className='text-[#F48437]'>Garantía</span>
              </h2>
              <div className='space-y-4 text-gray-600 leading-relaxed text-lg mb-8'>
                <p>
                  Nuestro objetivo es brindar a nuestros clientes <strong className='text-[#066396]'>productos y servicios profesionales</strong>, siempre respaldados con garantía por escrito.
                </p>
                <p>
                  De esta manera, cada cliente tiene la seguridad de que todos nuestros servicios son 100 % transparentes y están siempre orientados a resolver sus necesidades con experiencia, eficiencia y confianza.
                </p>
              </div>

              {/* Check list */}
              <div className='space-y-3'>
                <div className='flex items-start gap-3'>
                  <div className='bg-[#F48437] p-1 rounded-full mt-1'>
                    <svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                  </div>
                  <span className='text-gray-700 font-medium'>Garantía por escrito en todos nuestros servicios</span>
                </div>
                <div className='flex items-start gap-3'>
                  <div className='bg-[#F48437] p-1 rounded-full mt-1'>
                    <svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                  </div>
                  <span className='text-gray-700 font-medium'>Atención especializada y personalizada</span>
                </div>
                <div className='flex items-start gap-3'>
                  <div className='bg-[#F48437] p-1 rounded-full mt-1'>
                    <svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                  </div>
                  <span className='text-gray-700 font-medium'>Transparencia y responsabilidad en cada proyecto</span>
                </div>
              </div>
            </div>

            {/* Imagen */}
            <div>
              <div className='relative rounded-2xl overflow-hidden shadow-2xl group'>
                <img 
                  src='/trabajando.webp' 
                  alt='Equipo IntegraObra trabajando en Mérida, Yucatán'
                  className='w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500'
                  loading='lazy'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-[#F48437]/50 to-transparent'></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Visión, Misión y Valores */}
      <div className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto'>
            
            {/* Visión y Misión */}
            <div className='grid md:grid-cols-2 gap-8 mb-16'>
              {/* Visión */}
              <div className='bg-gradient-to-br from-[#F48437] to-[#e07730] rounded-2xl p-8 text-white shadow-xl'>
                <div className='flex items-center gap-4 mb-6'>
                  <div className='bg-white/20 p-3 rounded-xl'>
                    <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                    </svg>
                  </div>
                  <h3 className='text-3xl font-bold'>Nuestra Visión</h3>
                </div>
                <p className='text-white/95 leading-relaxed text-lg'>
                  Consolidarnos como la empresa líder en servicios integrales, renta de maquinaria y refaccionamiento en Mérida y la región, distinguiéndonos por nuestra calidad, innovación y compromiso. Aspiramos a ser la primera opción de nuestros clientes, impulsando su productividad mediante soluciones confiables, eficientes y respaldadas por un servicio excepcional.
                </p>
              </div>

              {/* Misión */}
              <div className='bg-gradient-to-br from-[#066396] to-[#0578b8] rounded-2xl p-8 text-white shadow-xl'>
                <div className='flex items-center gap-4 mb-6'>
                  <div className='bg-white/20 p-3 rounded-xl'>
                    <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' />
                    </svg>
                  </div>
                  <h3 className='text-3xl font-bold'>Nuestra Misión</h3>
                </div>
                <p className='text-white/95 leading-relaxed text-lg'>
                  Brindar soluciones integrales en servicios, renta de maquinaria ligera y refacciones para la construcción, ofreciendo calidad, rapidez y confianza en cada proyecto. Nos comprometemos a apoyar a nuestros clientes con equipos garantizados, atención profesional y un servicio eficiente que facilite su trabajo y contribuya al éxito de sus obras en Mérida Yucatán y la región.
                </p>
              </div>
            </div>

            {/* Nuestros Valores */}
            <div className='bg-gradient-to-b from-gray-50 to-white rounded-2xl p-8 md:p-12 shadow-xl'>
              <div className='text-center mb-12'>
                <div className='inline-flex items-center gap-3 mb-4'>
                  <div className='bg-[#F48437] p-3 rounded-xl'>
                    <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' />
                    </svg>
                  </div>
                  <h3 className='text-3xl md:text-4xl font-bold text-gray-800'>Nuestros Valores</h3>
                </div>
                <p className='text-gray-600 text-lg max-w-3xl mx-auto'>
                  Los principios que guían nuestro trabajo diario
                </p>
              </div>

              {/* Valor: Honestidad */}
              <div className='max-w-4xl mx-auto'>
                <div className='flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300'>
                  <div className='flex-shrink-0'>
                    <div className='bg-gradient-to-br from-[#F48437] to-[#e07730] p-4 rounded-xl'>
                      <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' />
                      </svg>
                    </div>
                  </div>
                  <div className='flex-1'>
                    <h4 className='text-2xl font-bold text-gray-800 mb-3'>Honestidad e Integridad</h4>
                    <p className='text-gray-600 leading-relaxed text-lg'>
                      Trabajamos con transparencia y rectitud en cada servicio que ofrecemos. Comunicamos información clara, real y responsable, brindando a nuestros clientes la confianza de recibir soluciones justas, diagnósticos precisos y precios honestos. La honestidad guía nuestras decisiones y fortalece cada relación que construimos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className='py-20'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-4xl font-bold text-gray-800 mb-6'>
              ¿Listo para trabajar con nosotros?
            </h2>
            <p className='text-xl text-gray-600 mb-8'>
              Contáctanos hoy y descubre cómo podemos ayudarte con tu proyecto
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a 
                href='/contacto'
                className='bg-[#F48437] hover:bg-[#e07730] text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
              >
                Contáctanos
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
