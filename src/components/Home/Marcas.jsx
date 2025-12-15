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
              className='w-full h-[120px] bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center p-4 grayscale hover:grayscale-0 group'
            >
              <img
                src={marca.logo}
                alt={marca.nombre}
                className='max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110'
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}
