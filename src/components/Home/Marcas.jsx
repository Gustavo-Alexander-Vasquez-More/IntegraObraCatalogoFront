import React from 'react'

export default function Marcas() {
  // Array de marcas - reemplaza las URLs con tus logos reales
  const marcas = [
    { id: 1, nombre: "bosch", logo: "/marcas/bosch.png" },
    { id: 2, nombre: "craftsman", logo: "/marcas/craftsman.png" },
    { id: 3, nombre: "black & decker", logo: "/marcas/decker.png" },
    { id: 4, nombre: "dewalt", logo: "/marcas/dewalt.png" },
    { id: 5, nombre: "husky", logo: "/marcas/husky.png" },
    { id: 6, nombre: "makita", logo: "/marcas/makita.png" },
    { id: 7, nombre: "milwaukee", logo: "/marcas/milwaukee.png" },
    { id: 8, nombre: "stanley", logo: "/marcas/stanley.png" },
    { id: 9, nombre: "truper", logo: "/marcas/truper.png" },
    { id: 10, nombre: "vecker", logo: "/marcas/vekcer.png" },
  ]

  return (
    <div className='bg-gradient-to-b from-gray-50 to-gray-100 py-16'>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
            Marcas en las que <span className='text-[#F48437]'>confíamos</span>
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Trabajamos con las mejores marcas de la industria
          </p>
        </div>

        {/* Carousel Container */}
        <div className='relative overflow-hidden'>
          {/* Animate infinite scroll */}
          <div className='flex gap-8 animate-scroll'>
            {/* Primera iteración de logos */}
            {marcas.map((marca) => (
              <div
                key={`first-${marca.id}`}
                className='flex-shrink-0 w-[200px] h-[120px] bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center p-4 grayscale hover:grayscale-0 group'
              >
                <img
                  src={marca.logo}
                  alt={marca.nombre}
                  className='max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110'
                />
              </div>
            ))}
            {/* Segunda iteración para loop infinito */}
            {marcas.map((marca) => (
              <div
                key={`second-${marca.id}`}
                className='flex-shrink-0 w-[200px] h-[120px] bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center p-4 grayscale hover:grayscale-0 group'
              >
                <img
                  src={marca.logo}
                  alt={marca.nombre}
                  className='max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110'
                />
              </div>
            ))}
          </div>

          {/* Gradientes laterales para efecto fade */}
          <div className='absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none'></div>
          <div className='absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none'></div>
        </div>

      </div>

      {/* CSS para la animación - agregar al index.css o como style global */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 50s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
