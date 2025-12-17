import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

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

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1536 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 1536, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 2
    }
  }

  return (
    <div className='relative bg-gradient-to-b from-gray-50 to-gray-100 py-16'>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
            Marcas en las que <span className='text-[#F48437]'>confiamos</span>
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Trabajamos con las mejores marcas de la industria
          </p>
        </div>

        {/* Carousel Container Mejorado */}
        <div className='relative bg-white/80 rounded-3xl shadow-2xl border border-[#F48437]/20 py-8 px-2 md:px-8 mb-8'>
          <Carousel
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={3000}
            infinite={true}
            arrows={false}
            swipeable={true}
            draggable={true}
            showDots={false}
            removeArrowOnDeviceType={['tablet', 'mobile']}
            containerClass='carousel-container'
            itemClass='px-4'
          >
            {marcas.map((marca) => (
              <div
                key={marca.id}
                className='w-full h-[120px] bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-md hover:shadow-2xl border border-gray-200 hover:border-[#F48437] transition-all duration-300 flex items-center justify-center p-4 grayscale hover:grayscale-0 group hover:bg-[#fff7f2]'
              >
                <img
                  src={marca.logo}
                  alt={marca.nombre}
                  className='max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-md'
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      {/* Franja decorativa inferior SVG */}
      <div className='absolute left-0 right-0 bottom-0 w-full overflow-hidden leading-none pointer-events-none'>
        <svg viewBox='0 0 1920 80' fill='none' xmlns='http://www.w3.org/2000/svg' className='w-full h-20 md:h-24'>
          <path d='M0 0C400 80 1520 0 1920 80V80H0V0Z' fill='#fff'/>
        </svg>
      </div>
    </div>
  )
}
