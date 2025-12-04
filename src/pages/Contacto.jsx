import React from 'react'

export default function Contacto() {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <div className='bg-[#066396] text-white py-16'>
        <div className='container mx-auto px-4'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>Contáctanos</h1>
          <p className='text-xl text-gray-100'>Estamos aquí para ayudarte con tus proyectos</p>
        </div>
      </div>

      {/* Formulario e Imagen */}
      <div className='container mx-auto px-4 py-16'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          {/* Formulario - Lado Izquierdo */}
          <div className='bg-white p-8 rounded-lg shadow-lg'>
            <h2 className='text-3xl font-bold text-gray-800 mb-6'>Envíanos un mensaje</h2>
            <form className='space-y-6'>
              <div>
                <label className='block text-gray-700 font-semibold mb-2' htmlFor='nombre'>
                  Nombre completo
                </label>
                <input
                  type='text'
                  id='nombre'
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F48437] focus:border-transparent transition'
                  placeholder='Tu nombre'
                />
              </div>

              <div>
                <label className='block text-gray-700 font-semibold mb-2' htmlFor='email'>
                  Correo electrónico
                </label>
                <input
                  type='email'
                  id='email'
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F48437] focus:border-transparent transition'
                  placeholder='tu@email.com'
                />
              </div>

              <div>
                <label className='block text-gray-700 font-semibold mb-2' htmlFor='telefono'>
                  Teléfono
                </label>
                <input
                  type='tel'
                  id='telefono'
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F48437] focus:border-transparent transition'
                  placeholder='+1 234 567 890'
                />
              </div>

              <div>
                <label className='block text-gray-700 font-semibold mb-2' htmlFor='mensaje'>
                  Mensaje
                </label>
                <textarea
                  id='mensaje'
                  rows='5'
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F48437] focus:border-transparent transition resize-none'
                  placeholder='Cuéntanos sobre tu proyecto...'
                ></textarea>
              </div>

              <button
                type='submit'
                className='w-full bg-[#F48437] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#e07730] transition duration-300 shadow-md hover:shadow-lg'
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* Imagen - Lado Derecho */}
          <div className='hidden md:block h-full'>
            <img className='object-cover h-full' src="https://cdn.prod.website-files.com/61a96fd30879375cde8cf1b0/62f18e7a1ca43fa92b21f48a_1N5A2511.png" alt="" />
          </div>
        </div>
      </div>

      {/* Información de Contacto y Mapa */}
      <div className='bg-white py-16'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-2 gap-12'>
            {/* Información de Contacto - Lado Izquierdo */}
            <div className='space-y-8'>
              <h2 className='text-3xl font-bold text-gray-800 mb-8'>Información de contacto</h2>
              
              <div className='flex items-start space-x-4'>
                <div className='bg-[#F48437] p-3 rounded-lg'>
                  <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                  </svg>
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-gray-800 mb-2'>Teléfono</h3>
                  <p className='text-gray-600'>+1 (234) 567-8900</p>
                  <p className='text-gray-600'>+1 (234) 567-8901</p>
                </div>
              </div>

              <div className='flex items-start space-x-4'>
                <div className='bg-[#066396] p-3 rounded-lg'>
                  <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                  </svg>
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-gray-800 mb-2'>Correo electrónico</h3>
                  <p className='text-gray-600'>contacto@integraobra.com</p>
                  <p className='text-gray-600'>ventas@integraobra.com</p>
                </div>
              </div>

              <div className='flex items-start space-x-4'>
                <div className='bg-[#F48437] p-3 rounded-lg'>
                  <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                  </svg>
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-gray-800 mb-2'>Dirección</h3>
                  <p className='text-gray-600'>Calle Principal #123</p>
                  <p className='text-gray-600'>Ciudad, Estado 12345</p>
                </div>
              </div>

              <div className='flex items-start space-x-4'>
                <div className='bg-[#066396] p-3 rounded-lg'>
                  <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                  </svg>
                </div>
                <div>
                  <h3 className='text-xl font-semibold text-gray-800 mb-2'>Horario de atención</h3>
                  <p className='text-gray-600'>Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                  <p className='text-gray-600'>Sábados: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

            {/* Mapa - Lado Derecho */}
            <div className='h-[500px] rounded-lg overflow-hidden shadow-lg'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093706!2d144.9537353159042!3d-37.81720974201426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sau!4v1494834730200'
                width='100%'
                height='100%'
                style={{ border: 0 }}
                allowFullScreen=''
                loading='lazy'
                title='Mapa de ubicación'
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
