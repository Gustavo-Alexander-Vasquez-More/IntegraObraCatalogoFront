import React, { useState } from 'react'

export default function Testimonios() {
  const testimonios = [
    {
      id: 1,
      nombre: "Javier Alonso",
      foto: "/testimonios/javierAlonso.png",
      estrellas: 5,
      comentario: "Super atentos y super amables, me dieron un diagnostico bastante sincero y tienen una amplia cantidad de refacciones no tengo ninguna queja, ademas te dan garantía."
    },
    {
      id: 2,
      nombre: "Alex More",
      foto: "https://lh3.googleusercontent.com/a/ACg8ocI6V5TH9PGRgBpUt29GAhIoWEYeLpVzL-kzz-KKNSJWhKLQXA=w72-h72-p-rp-mo-br100",
      estrellas: 5,
      comentario: "Dejé mis equipos en el centro de servicio y los dejaron de 10!!..la atención muy buena, super amables!"
    },
    {
      id: 3,
      nombre: "Alan Perez",
      foto: "https://lh3.googleusercontent.com/a/ACg8ocJ6LrRqyMlV5MuFDYHp_n6aeVX0sbynTjnwV_A476Y82V54byI=w72-h72-p-rp-mo-br100",
      estrellas: 5,
      comentario: "La amplia variedad de maquinaria ligera que se consigue acá es impresionante.. lo que mas destaco es la atencion del gerente y el profesionalismo con el que te asesora para poder lograr lo que uno busca."
    },
    {
      id: 4,
      nombre: "María López",
      foto: "https://plus.unsplash.com/premium_photo-1682088124932-e5528eeae763?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2ElMjBtZXhpY2FuYXxlbnwwfHwwfHx8MA%3D%3D",
      estrellas: 5,
      comentario: "Excelente servicio, me resolvieron todo rapidísimo y sin tanta burocracia. Recomendados al 100%."
    },
    {
      id: 5,
      nombre: "Luis Martínez",
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5tsI5wMVd2XPVlJllTbRHtI1h8NQ1WdXKxg&s",
      estrellas: 4,
      comentario: "Buen trabajo, solo que tardaron un poquito en la entrega. Por lo demás, todo bien y el precio justo."
    },
    {
      id: 6,
      nombre: "Karla Itzá",
      foto: "https://images.unsplash.com/photo-1530047198515-516ff90fc4d9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVqZXIlMjBtZXhpY2FuYXxlbnwwfHwwfHx8MA%3D%3D",
      estrellas: 5,
      comentario: "Me atendieron en Mérida con mucha amabilidad, se portaron de primera. El técnico explicó todo clarito."
    },
    {
      id: 7,
      nombre: "Don Chema",
      foto: "https://cdn-icons-png.flaticon.com/512/9000/9000010.png",
      estrellas: 5,
      comentario: "la neta se la rifaron, me arreglaron la podadora en menos de lo que esperaba y me cobraron lo justo. Volvería sin pensarlo."
    },
    {
      id: 8,
      nombre: "Rosa Pérez",
      foto: "https://i.pinimg.com/originals/fe/0d/27/fe0d27685ee352e17c7714e18408298b.jpg",
      estrellas: 4,
      comentario: "Buen servicio, la refacción llegó bien pero venía con un rayón pequeño. Me lo cambiaron sin problema."
    },
    {
      id: 9,
      nombre: "Erick Chablé",
      foto: "https://i.pinimg.com/736x/2c/3c/b7/2c3cb7064c1068b54f8cecebb5b8fdc1.jpg",
      estrellas: 5,
      comentario: "Me ayudaron un buen, quedaron al tiro con mi equipo y ya quedó como nuevo. Muy contento con la atención."
    },
    {
      id: 10,
      nombre: "Mayra Cruz",
      foto: "https://images.unsplash.com/photo-1620715263611-0774a0e056a5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bXVsaGVyJTIwbWV4aWNhbmF8ZW58MHx8MHx8fDA%3D",
      estrellas: 5,
      comentario: "Trato excelente y muy profesionales; el técnico fue paciente y me explicó todo paso a paso. Gracias!"
    },
    {
      id: 11,
      nombre: "Jorge Ramírez",
      foto: "https://i.pinimg.com/736x/a0/a1/65/a0a16571b6d65d38ab22f9e55cc19f4b.jpg",
      estrellas: 4,
      comentario: "Todo bien con la reparación, nomás que el envío tardó más de lo esperado. Aún así los recomiendo."
    },
    {
      id: 12,
      nombre: "Ana Gómez",
      foto: "https://wallpapers.com/images/hd/cute-anime-profile-pictures-0lifptfs0jd9fml3.jpg",
      estrellas: 5,
      comentario: "Las refacciones que compré son 100% originales y llegaron súper rápido. Buena experiencia."
    },
    {
      id: 13,
      nombre: "Miguel Castillo",
      foto: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tYnJlJTIwbWV4aWNhbm98ZW58MHx8MHx8fDA%3D",
      estrellas: 5,
      comentario: "Buen equipo y atención sin broncas. Me explicaron todo y dejaron todo funcionando."
    },
    {
      id: 14,
      nombre: "Patricia Vega",
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5XsLnnc72Y26rYZViBhH3tjX6iEVTgpq-Bw&s",
      estrellas: 4,
      comentario: "Quedó un detalle menor después del servicio, pero lo resolvieron rápido. Buena disposición del personal."
    },
    {
      id: 15,
      nombre: "Fernando López",
      foto: "https://cdn-icons-png.freepik.com/512/9230/9230518.png",
      estrellas: 5,
      comentario: "Excelente atención, muy claros y cumplidos. Si vuelvo a necesitar algo no dudo en traerlo aquí."
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonios.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonios.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const renderStars = (rating) => {
    return (
      <div className='flex gap-1'>
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${index < rating ? 'text-[#F48437]' : 'text-gray-300'}`}
            fill='currentColor'
            viewBox='0 0 20 20'
          >
            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
          </svg>
        ))}
      </div>
    )
  }

  return (
    <div className='bg-gradient-to-b from-gray-100 to-white py-16'>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
            Lo que dicen nuestros <span className='text-[#F48437]'>clientes</span>
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
          </p>
        </div>

        {/* Carousel Container */}
        <div className='relative max-w-4xl mx-auto'>
          {/* Main Card */}
          <div className='bg-white rounded-2xl shadow-xl p-8 md:p-12 transition-all duration-500'>
            <div className='flex flex-col md:flex-row items-center gap-8'>
              {/* Foto */}
              <div className='flex-shrink-0'>
                <div className='relative'>
                  <img
                    src={testimonios[currentIndex].foto}
                    alt={testimonios[currentIndex].nombre}
                    className='w-32 h-32 rounded-full object-cover border-4 border-[#F48437] shadow-lg'
                  />
                  <div className='absolute -bottom-2 -right-2 bg-[#066396] text-white p-2 rounded-full'>
                    <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className='flex-1 text-center md:text-left'>
                {/* Nombre y Estrellas */}
                <div className='mb-4'>
                  <h3 className='text-2xl font-bold text-gray-800 mb-2'>
                    {testimonios[currentIndex].nombre}
                  </h3>
                  <div className='flex justify-center md:justify-start'>
                    {renderStars(testimonios[currentIndex].estrellas)}
                  </div>
                </div>

                {/* Quote Icon */}
                <div className='mb-4'>
                  <svg className='w-10 h-10 text-[#F48437] opacity-50' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z' />
                  </svg>
                </div>

                {/* Comentario */}
                <p className='text-lg text-gray-700 leading-relaxed italic'>
                  "{testimonios[currentIndex].comentario}"
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white hover:bg-[#F48437] text-gray-800 hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 group'
            aria-label='Anterior testimonio'
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 19l-7-7 7-7' />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white hover:bg-[#F48437] text-gray-800 hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 group'
            aria-label='Siguiente testimonio'
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7' />
            </svg>
          </button>

          {/* Dots Navigation */}
          <div className='flex justify-center gap-2 mt-8'>
            {testimonios.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-8 h-3 bg-[#F48437]'
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
