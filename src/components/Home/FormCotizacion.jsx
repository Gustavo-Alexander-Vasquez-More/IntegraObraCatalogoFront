import React, { useState } from 'react'

export default function FormCotizacion() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    tipoServicio: '',
    mensaje: ''
  })

  const servicios = [
    'Renta de equipos',
    'Venta de refacciones',
    'Electricidad',
    'Instalación de climas',
    'Tablaroca y empastado',
    'Soldadura',
    'Cableado estructurado',
    'Mantenimiento de áreas verdes'
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Construir el mensaje de WhatsApp
    const mensaje = `*Solicitud de Cotización*%0A%0A` +
      `*Nombre:* ${formData.nombre}%0A` +
      `*Correo:* ${formData.correo}%0A` +
      `*Tipo de Servicio:* ${formData.tipoServicio}%0A%0A` +
      `*Mensaje:*%0A${formData.mensaje}`
    
    // Número de WhatsApp (reemplaza con tu número)
    const numeroWhatsApp = '5215512345678' // Formato: 52 + código de área + número
    
    // Abrir WhatsApp
    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensaje}`, '_blank')
  }

  return (
    <div id='cotizacion' className='relative bg-[#53545B] py-20'>
      <div className='container mx-auto px-4 relative'>
        <div className='max-w-4xl mx-auto'>
          {/* Header */}
          <div className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
              Solicita tu <span className='text-[#E67B32]'>Cotización</span>
            </h2>
            <p className='text-xl text-blue-100'>
              Déjanos tus datos y nos pondremos en contacto contigo de inmediato
            </p>
          </div>

          {/* Formulario */}
          <div className='bg-white rounded-3xl shadow-2xl p-8 md:p-12'>
            <form onSubmit={handleSubmit} className='space-y-6'>
              {/* Nombre */}
              <div>
                <label htmlFor='nombre' className='block text-gray-700 font-semibold mb-2'>
                  Nombre completo *
                </label>
                <input
                  type='text'
                  id='nombre'
                  name='nombre'
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F48437] focus:border-transparent transition-all duration-300'
                  placeholder='Tu nombre completo'
                />
              </div>

              {/* Correo */}
              <div>
                <label htmlFor='correo' className='block text-gray-700 font-semibold mb-2'>
                  Correo electrónico *
                </label>
                <input
                  type='email'
                  id='correo'
                  name='correo'
                  value={formData.correo}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F48437] focus:border-transparent transition-all duration-300'
                  placeholder='tu@email.com'
                />
              </div>

              {/* Tipo de Servicio */}
              <div>
                <label htmlFor='tipoServicio' className='block text-gray-700 font-semibold mb-2'>
                  Tipo de servicio *
                </label>
                <select
                  id='tipoServicio'
                  name='tipoServicio'
                  value={formData.tipoServicio}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F48437] focus:border-transparent transition-all duration-300 appearance-none bg-white cursor-pointer'
                >
                  <option value=''>Selecciona un servicio</option>
                  {servicios.map((servicio, index) => (
                    <option key={index} value={servicio}>
                      {servicio}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor='mensaje' className='block text-gray-700 font-semibold mb-2'>
                  Mensaje *
                </label>
                <textarea
                  id='mensaje'
                  name='mensaje'
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows='5'
                  className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F48437] focus:border-transparent transition-all duration-300 resize-none'
                  placeholder='Cuéntanos más sobre tu proyecto o necesidades...'
                />
              </div>

              {/* Botón de Enviar */}
              <button
                type='submit'
                className='w-full bg-gradient-to-r from-[#F48437] to-[#e07730] text-white font-bold py-4 rounded-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group'
              >
                <span className='text-lg'>Enviar por WhatsApp</span>
                <svg className='w-6 h-6 group-hover:scale-110 transition-transform' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z'/>
                </svg>
              </button>

              <p className='text-center text-gray-500 text-sm'>
                * Campos obligatorios
              </p>
            </form>
          </div>

          {/* Info adicional */}
          <div className='grid md:grid-cols-3 gap-6 mt-12 text-white text-center'>
            <div className='flex flex-col items-center'>
              <svg className='w-10 h-10 mb-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
              </svg>
              <h4 className='font-bold mb-1'>Respuesta Rápida</h4>
              <p className='text-blue-100 text-sm'>En menos de 24 horas</p>
            </div>
            <div className='flex flex-col items-center'>
              <svg className='w-10 h-10 mb-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
              </svg>
              <h4 className='font-bold mb-1'>Sin Compromiso</h4>
              <p className='text-blue-100 text-sm'>Cotización gratuita</p>
            </div>
            <div className='flex flex-col items-center'>
              <svg className='w-10 h-10 mb-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
              </svg>
              <h4 className='font-bold mb-1'>Asesoría Personalizada</h4>
              <p className='text-blue-100 text-sm'>Expertos a tu servicio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
