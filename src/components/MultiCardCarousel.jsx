import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function MultiCardCarousel({ productos, responsive }) {
  if (!productos || productos.length === 0) return null;
  return (
    <section className="w-full bg-white rounded-2xl z-20 shadow-lg p-6 mb-8">
      <h2 className="text-lg font-bold text-green-900 mb-4">Te puede interesar</h2>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay={false}
        arrows
        className="mb-2"
        containerClass="w-full"
        itemClass="flex flex-col h-full"
      >
        {productos.map(producto => {
          const url = `/equipos/${encodeURIComponent(producto.name.replace(/\s+/g, '-').toLowerCase())}/${producto.id}`;
          return (
            <a
              key={producto.id}
              href={url}
              className="bg-white rounded-xl shadow p-3 mx-2 flex flex-col h-full border border-gray-100 transition hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#F48437] cursor-pointer group"
              style={{ textDecoration: 'none' }}
              tabIndex={0}
            >
              <img
                src={producto.cardImageUrl}
                alt={producto.name}
                className="object-cover h-[160px] w-full mb-2 rounded-lg bg-gray-100 group-hover:opacity-90"
                onError={e => (e.target.style.display = 'none')}
              />
              <h3 className="text-sm font-bold text-green-900 mb-1">{producto.name}</h3>
              <span className="text-xs text-gray-500 mb-2">Precio de renta: {producto.priceVisibleForRent ? <span className="text-[#F48437] font-bold">${producto.rentPrice} MXN</span> : <span className="text-[#F48437]">CONSULTAR</span>}</span>
              <div className="flex justify-center mt-auto">
                <span className="bg-[#F48437] hover:bg-[#e07730] text-white font-semibold py-1 px-4 rounded-lg transition-all duration-200 shadow-md text-xs pointer-events-none select-none">Ver equipo</span>
              </div>
            </a>
          );
        })}
      </Carousel>
    </section>
  );
}
