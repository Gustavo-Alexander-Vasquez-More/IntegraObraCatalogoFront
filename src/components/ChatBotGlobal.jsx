import React, { useState } from 'react'

export default function ChatBotGlobal() {
  const [open, setOpen] = useState(false)

  // Preguntas frecuentes extraídas del componente PreguntasFrecuentes.jsx
  const faqs = [
    {
      pregunta: "¿Qué servicios ofrece IntegraObra?",
      respuesta: "IntegraObra ofrece servicios integrales de construcción que incluyen: renta de maquinaria ligera (demoledores, revolvedoras, vibradoras, andamios), instalaciones eléctricas, instalación de climas, tablaroca y empastado, soldadura, cableado estructurado y mantenimiento de áreas verdes. Además, contamos con IntegraRefacciones para venta de repuestos."
    },
    {
      pregunta: "¿En qué zonas brindan servicio?",
      respuesta: "Brindamos servicio principalmente en Mérida, Yucatán y toda la región. Para servicios especiales o proyectos grandes, podemos evaluar la posibilidad de atender otras zonas. Contacta con nosotros para más información sobre cobertura."
    },
    {
      pregunta: "¿Cómo funciona la renta de maquinaria?",
      respuesta: "Contamos con maquinaria ligera lista para rentar. Todos nuestros equipos están revisados y garantizados por escrito. El proceso es simple: contactas con nosotros, defines el equipo y tiempo de renta, firmamos el contrato con garantía, y entregamos el equipo listo para usar."
    },
    {
      pregunta: "¿Los equipos tienen garantía?",
      respuesta: "Sí, todos nuestros equipos cuentan con garantía por escrito. Nuestros técnicos del centro de servicio revisan cada equipo antes de entregarlo. Si presentan algún problema durante la renta, nos hacemos responsables según los términos del contrato."
    },
    {
      pregunta: "¿Qué tipo de refacciones manejan?",
      respuesta: "En IntegraRefacciones manejamos repuestos para maquinaria eléctrica y de combustión. Nuestro inventario incluye carburadores, bobinas, cebadores, filtros, bujías y más. Contamos con stock disponible y realizamos envíos a toda la República Mexicana."
    },
    {
      pregunta: "¿Hacen envíos a otros estados?",
      respuesta: "Sí, realizamos envíos a toda la República Mexicana. Los tiempos de entrega varían según la ubicación. Contáctanos para cotizar el envío a tu localidad y conocer los tiempos estimados de entrega."
    },
    {
      pregunta: "¿Qué garantía ofrecen en sus servicios?",
      respuesta: "Todos nuestros servicios están respaldados con garantía por escrito. En nuestro centro de servicio, es una norma devolver las piezas dañadas de tus equipos; de lo contrario, el servicio es completamente gratuito. Esto refleja nuestro compromiso con la transparencia y calidad."
    },
    {
      pregunta: "¿Cuál es su política de precios?",
      respuesta: "Trabajamos con total transparencia. Proporcionamos cotizaciones claras y detalladas antes de iniciar cualquier trabajo. No hay costos ocultos ni sorpresas desagradables. Nuestros precios son honestos y competitivos, reflejando la calidad de nuestro servicio."
    },
    {
      pregunta: "¿Cómo puedo solicitar una cotización?",
      respuesta: "Puedes solicitar una cotización de tres formas: 1) Llenando el formulario en nuestra página web, 2) Llamando directamente a nuestras oficinas, o 3) Enviándonos un mensaje por WhatsApp. Nos pondremos en contacto contigo en menos de 24 horas."
    },
    {
      pregunta: "¿Cuál es su horario de atención?",
      respuesta: "Nuestro horario de atención es: Lunes a Viernes de 8:00 AM a 6:00 PM, y Sábados de 9:00 AM a 2:00 PM. Para emergencias o consultas urgentes, puedes contactarnos por WhatsApp donde respondemos lo más pronto posible."
    }
  ];

  // Estado para mostrar respuesta de FAQ
  const [faqSeleccionada, setFaqSeleccionada] = useState(null)

  // Estado para flujo de asesor
  const [asesorStep, setAsesorStep] = useState(null) // null | 'nombre' | 'telefono' | 'correo' | 'resumen' | 'enviado'
  const [asesorData, setAsesorData] = useState({ nombre: '', telefono: '', correo: '' })
  const [asesorError, setAsesorError] = useState('')

  // Validaciones simples
  const validarTelefono = (tel) => /^\d{10}$/.test(tel.replace(/\D/g, ''))
  const validarCorreo = (mail) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(mail)

  // Enviar a WhatsApp vía wa.link
  const enviarAWa = () => {
    const { nombre, telefono, correo } = asesorData
    const mensaje = encodeURIComponent(
      `Hola, me gustaría hablar con un asesor.\n\nNombre: ${nombre}\nTeléfono: ${telefono}\nCorreo: ${correo}`
    )
    // Cambia el número por el de tu empresa
    const numero = '5219995210167' // Ejemplo: 52 + lada + número
    window.open(`https://wa.me/${numero}?text=${mensaje}`, '_blank')
    setAsesorStep('enviado')
  }

  return (
    <>
      {/* Botón flotante de chatbot */}
      <button
        className="fixed z-50 bottom-6 right-6 bg-[#066396] hover:bg-[#0578b8] text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#F48437] group"
        aria-label="Abrir chat"
        onClick={() => setOpen((v) => !v)}
      >
        {/* Icono de chatbot (burbuja de mensaje) */}
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.8l-4.28 1.07A1 1 0 013 19.13l1.07-4.28A9.77 9.77 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        {/* Texto flotante */}
        <span className="ml-2 px-3 py-1 bg-[#F48437] text-white text-xs font-semibold rounded-full shadow-lg transition-all duration-300 opacity-90 group-hover:scale-105 hidden sm:inline-block">
          Asistente virtual
        </span>
      </button>

      {/* Ventana de chat */}
      {open && (
        <div className="fixed z-50 bottom-24 right-6 w-80 max-w-[95vw] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-fade-in flex flex-col">
          <div className="bg-[#066396] text-white px-4 py-3 flex items-center justify-between">
            <span className="font-bold text-lg">Asistente IntegraObra</span>
            <button onClick={() => setOpen(false)} aria-label="Cerrar chat" className="ml-2 p-1 rounded hover:bg-[#0578b8]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 p-4 flex flex-col gap-2">
            {/* FLUJO PRINCIPAL: FAQ o Asesor */}
            {asesorStep ? (
              // FLUJO DE ASESOR
              <>
                {asesorStep === 'nombre' && (
                  <form
                    className="flex flex-col gap-3"
                    onSubmit={e => {
                      e.preventDefault()
                      if (!asesorData.nombre.trim()) {
                        setAsesorError('Por favor ingresa tu nombre completo.')
                        return
                      }
                      setAsesorError('')
                      setAsesorStep('telefono')
                    }}
                  >
                    <div className="mb-2 text-sm text-gray-700 font-semibold">¿Cuál es tu nombre completo?</div>
                    <input
                      className="border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#F48437] outline-none"
                      autoFocus
                      type="text"
                      value={asesorData.nombre}
                      onChange={e => setAsesorData(d => ({ ...d, nombre: e.target.value }))}
                      placeholder="Tu nombre completo"
                    />
                    {asesorError && <div className="text-xs text-red-500">{asesorError}</div>}
                    <button type="submit" className="bg-[#F48437] text-white rounded-lg py-2 font-bold mt-2">Siguiente</button>
                  </form>
                )}
                {asesorStep === 'telefono' && (
                  <form
                    className="flex flex-col gap-3"
                    onSubmit={e => {
                      e.preventDefault()
                      if (!validarTelefono(asesorData.telefono)) {
                        setAsesorError('Ingresa un teléfono válido de 10 dígitos.')
                        return
                      }
                      setAsesorError('')
                      setAsesorStep('correo')
                    }}
                  >
                    <div className="mb-2 text-sm text-gray-700 font-semibold">¿Cuál es tu teléfono?</div>
                    <input
                      className="border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#F48437] outline-none"
                      autoFocus
                      type="tel"
                      value={asesorData.telefono}
                      onChange={e => setAsesorData(d => ({ ...d, telefono: e.target.value }))}
                      placeholder="Ej. 9991234567"
                    />
                    {asesorError && <div className="text-xs text-red-500">{asesorError}</div>}
                    <button type="submit" className="bg-[#F48437] text-white rounded-lg py-2 font-bold mt-2">Siguiente</button>
                  </form>
                )}
                {asesorStep === 'correo' && (
                  <form
                    className="flex flex-col gap-3"
                    onSubmit={e => {
                      e.preventDefault()
                      if (!validarCorreo(asesorData.correo)) {
                        setAsesorError('Ingresa un correo válido.')
                        return
                      }
                      setAsesorError('')
                      setAsesorStep('resumen')
                    }}
                  >
                    <div className="mb-2 text-sm text-gray-700 font-semibold">¿Cuál es tu correo electrónico?</div>
                    <input
                      className="border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#F48437] outline-none"
                      autoFocus
                      type="email"
                      value={asesorData.correo}
                      onChange={e => setAsesorData(d => ({ ...d, correo: e.target.value }))}
                      placeholder="tucorreo@email.com"
                    />
                    {asesorError && <div className="text-xs text-red-500">{asesorError}</div>}
                    <button type="submit" className="bg-[#F48437] text-white rounded-lg py-2 font-bold mt-2">Finalizar</button>
                  </form>
                )}
                {asesorStep === 'resumen' && (
                  <div className="flex flex-col gap-3">
                    <div className="mb-2 text-sm text-gray-700 font-semibold">¿Deseas enviar estos datos al asesor por WhatsApp?</div>
                    <div className="bg-gray-50 rounded-lg p-3 text-xs text-gray-700 border border-[#F48437]/30">
                      <div><b>Nombre:</b> {asesorData.nombre}</div>
                      <div><b>Teléfono:</b> {asesorData.telefono}</div>
                      <div><b>Correo:</b> {asesorData.correo}</div>
                    </div>
                    <button
                      className="bg-[#25D366] text-white rounded-lg py-2 font-bold mt-2 flex items-center justify-center gap-2"
                      onClick={enviarAWa}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A11.93 11.93 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.18-1.62A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.68-.5-5.25-1.44l-.38-.22-3.67.96.98-3.58-.25-.37A9.94 9.94 0 012 12C2 6.48 6.48 2 12 2c2.54 0 4.93.99 6.73 2.77A9.93 9.93 0 0122 12c0 5.52-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 4.93 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>
                      Enviar a WhatsApp
                    </button>
                    <button
                      className="text-xs text-[#066396] underline hover:text-[#F48437] font-semibold self-end mt-2"
                      onClick={() => setAsesorStep('nombre')}
                    >
                      Editar datos
                    </button>
                  </div>
                )}
                {asesorStep === 'enviado' && (
                  <div className="flex flex-col gap-3 items-center justify-center text-center">
                    <div className="text-green-600 text-2xl">¡Datos enviados!</div>
                    <div className="text-gray-700 text-sm">Un asesor te contactará pronto por WhatsApp.</div>
                    <button
                      className="mt-2 text-xs text-[#066396] underline hover:text-[#F48437] font-semibold"
                      onClick={() => {
                        setAsesorStep(null)
                        setAsesorData({ nombre: '', telefono: '', correo: '' })
                      }}
                    >
                      Volver al inicio
                    </button>
                  </div>
                )}
                {/* Botón para cancelar y volver al menú principal */}
                {asesorStep !== 'enviado' && (
                  <button
                    className="mt-4 text-xs text-gray-400 underline hover:text-[#F48437] self-center"
                    onClick={() => {
                      setAsesorStep(null)
                      setAsesorData({ nombre: '', telefono: '', correo: '' })
                      setAsesorError('')
                    }}
                  >
                    Cancelar y volver al menú principal
                  </button>
                )}
              </>
            ) : faqSeleccionada ? (
              // FLUJO DE FAQ
              <>
                <div className="mb-2 text-sm text-[#F48437] font-semibold">{faqSeleccionada.pregunta}</div>
                <div className="bg-gray-50 text-gray-700 rounded-lg px-3 py-3 text-sm mb-4 border border-[#F48437]/30">
                  {faqSeleccionada.respuesta}
                </div>
                <button
                  className="text-xs text-[#066396] underline hover:text-[#F48437] font-semibold self-end"
                  onClick={() => setFaqSeleccionada(null)}
                >
                  Volver al menú principal
                </button>
              </>
            ) : (
              // MENÚ PRINCIPAL
              <>
                <div className="mb-2 text-sm text-gray-700 font-semibold">¿En qué te puedo ayudar?</div>
                <div className="flex flex-col gap-2">
                  {faqs.map((faq, i) => (
                    <button
                      key={i}
                      className="text-left bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg px-3 py-2 text-sm transition-all border border-transparent hover:border-[#F48437]"
                      onClick={() => setFaqSeleccionada(faq)}
                    >
                      {faq.pregunta}
                    </button>
                  ))}
                </div>
                <div className="my-2 border-t border-gray-200"></div>
                <button
                  className="w-full bg-[#F48437] hover:bg-[#e07730] text-white font-bold py-2 rounded-lg transition-all duration-200 shadow"
                  onClick={() => setAsesorStep('nombre')}
                >
                  Hablar con un asesor
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
//
}
