import React, { useState } from 'react'

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Construir el mensaje de WhatsApp
    const mensaje = `*Mensaje de Contacto*%0A%0A` +
      `*Nombre:* ${formData.nombre}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Teléfono:* ${formData.telefono}%0A` +
      `*Servicio:* ${formData.servicio}%0A%0A` +
      `*Mensaje:*%0A${formData.mensaje}`
    
    // Número de WhatsApp (reemplaza con tu número)
    const numeroWhatsApp = '5219995210167' // Formato: 52 + código de área + número
    
    // Abrir WhatsApp
    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensaje}`, '_blank')
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Formulario e Imagen */}
      <div className='container mx-auto px-4 py-16'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          {/* Formulario - Lado Izquierdo */}
          <div className='bg-white p-8 rounded-lg shadow-lg'>
            <h2 className='text-3xl font-bold text-gray-800 mb-6'>Envíanos un mensaje</h2>
            <form className='space-y-6' onSubmit={handleSubmit}>
              <div>
                <label className='block text-gray-700 font-semibold mb-2' htmlFor='nombre'>
                  Nombre completo
                </label>
                <input
                  type='text'
                  id='nombre'
                  name='nombre'
                  value={formData.nombre}
                  onChange={handleChange}
                  required
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
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
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
                  name='telefono'
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F48437] focus:border-transparent transition'
                  placeholder='+52 999 123 4567'
                />
              </div>

              <div>
                <label className='block text-gray-700 font-semibold mb-2' htmlFor='servicio'>
                  Servicio de interés
                </label>
                <select
                  id='servicio'
                  name='servicio'
                  value={formData.servicio}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F48437] focus:border-transparent transition bg-white'
                >
                  <option value=''>Selecciona un servicio</option>
                  <option value='Electricidad'>Electricidad</option>
                  <option value='Plomería'>Plomería</option>
                  <option value='Soldadura'>Soldadura</option>
                  <option value='Tablaroca y Empastado'>Tablaroca y Empastado</option>
                  <option value='Áreas Verdes'>Áreas Verdes</option>
                  <option value='Cableado Estructurado'>Cableado Estructurado</option>
                  <option value='Mantenimiento de Climas'>Mantenimiento de Climas</option>
                  <option value='Renta de Maquinaria'>Renta de Maquinaria</option>
                  <option value='Venta de Refacciones'>Venta de Refacciones</option>
                  <option value='Otros'>Otros</option>
                </select>
              </div>

              <div>
                <label className='block text-gray-700 font-semibold mb-2' htmlFor='mensaje'>
                  Mensaje
                </label>
                <textarea
                  id='mensaje'
                  name='mensaje'
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows='5'
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F48437] focus:border-transparent transition resize-none'
                  placeholder='Cuéntanos sobre tu proyecto...'
                ></textarea>
              </div>

              <button
                type='submit'
                className='w-full bg-[#F48437] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#e07730] transition duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group'
              >
                <span>Enviar por WhatsApp</span>
                <svg className='w-5 h-5 group-hover:scale-110 transition-transform' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z'/>
                </svg>
              </button>
            </form>
          </div>

          {/* Imagen - Lado Derecho */}
          <div className='hidden md:block h-full'>
            <img className='object-cover h-full' src="/contacto.webp" alt="" />
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
                  <a href="tel:+5219995210167" className='text-gray-600 hover:underline'>+52 1 999 521 0167</a>
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
                  <a href="mailto:info@integraobra.mx" className='text-gray-600 hover:underline'>info@integraobra.mx</a>
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
                  <p className='text-gray-600'>Fraccionamiento Faisanes Hacienda Tixcacal</p>
                  <p className='text-gray-600'>Cerrada 10A No. 804</p>
                  <p className='text-gray-600'>Calle 17A y Cerrada 10A #804</p>
                  <p className='text-gray-600'>CP: 97312, Mérida, Yucatán</p>
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
                  <p className='text-gray-600'>Lunes a viernes: 8:00 AM a 6:00 PM</p>
                  <p className='text-gray-600'>Sábados: 8:00 AM a 3:00 PM</p>
                  <p className='text-gray-600'>Domingos: cerrado</p>
                </div>
              </div>
            </div>

            {/* Mapa - Lado Derecho */}
            <div className='h-[500px] rounded-lg overflow-hidden shadow-lg'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3726.180231914166!2d-89.70998682474568!3d20.94527608068325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDU2JzQzLjAiTiA4OcKwNDInMjYuNyJX!5e0!3m2!1ses!2sar!4v1765490854143!5m2!1ses!2sar'
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
