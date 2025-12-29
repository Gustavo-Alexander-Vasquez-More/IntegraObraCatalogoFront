import React from 'react';
import MiniCalculadoraRenta from './MiniCalculadoraRenta';

export default function DetalleEquipo({ equipo }) {
  if (!equipo) return null;
  return (
    <section className="w-full lg:max-w-[70%] bg-white rounded-2xl shadow-lg p-6 lg:mt-8 mb-8">
      {/* Breadcrumb arriba del nombre */}
      <nav className="mb-5 " aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          <li>
            <a href="/" className="hover:underline text-[#066396] font-semibold flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6" /></svg>
              Inicio
            </a>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li>
            <a href="/equipos/renta-equipos" className="hover:underline text-[#066396] font-semibold">Renta de Equipos</a>
          </li>
        </ol>
      </nav>
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="flex-shrink-0 w-full md:w-2/5 flex justify-center items-stretch">
          <img
            src={equipo.cardImageUrl || '/maquinaria/default.jpg'}
            alt={equipo.name}
            className="object-cover rounded-xl w-full max-w-md h-auto max-h-[500px] border border-gray-200"
            onError={e => (e.target.style.display = 'none')}
          />
        </div>
        <div className="flex-1 w-full flex flex-col justify-start">
          <div className="flex flex-col h-full justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-green-900 mb-2 leading-tight">{equipo.name}</h1>
              <p className="text-gray-700 mb-4 text-base whitespace-pre-line leading-normal">{equipo.description}</p>
              <div className="mb-3 flex flex-wrap gap-4">
                <span className="text-sm text-gray-500">SKU: <span className="font-semibold text-green-700">{equipo.sku}</span></span>
                <span className="text-sm text-gray-500">Quedan <span className="font-semibold text-green-700">{equipo.stock}</span> {equipo.stock === 1 ? 'unidad' : 'unidades'}</span>
              </div>
              <div className="mb-4 flex flex-col gap-1">
                {equipo.isForRent && (
                  <span className="text-base font-bold text-[#066396]">
                    Precio de renta: {equipo.priceVisibleForRent ? (
                      <span className="text-[#F48437]">${equipo.rentPrice} MXN</span>
                    ) : (
                      <span className="text-[#F48437]">CONSULTAR PRECIO</span>
                    )}
                  </span>
                )}
                {equipo.isForSale && equipo.salePrice > 0 && (
                  <span className="text-base font-bold text-green-700">
                    Precio de venta: <span className="text-[#F48437]">${equipo.salePrice} MXN</span>
                  </span>
                )}
                {equipo.isForRent && equipo.priceVisibleForRent && (
                  <MiniCalculadoraRenta precioDia={equipo.rentPrice} />
                )}
                {equipo.forRent && (
                  <span className="text-base font-bold text-[#066396]">
                    Renta por día: {equipo.priceVisibleForRent ? (
                      <span className="text-[#F48437]">${equipo.rentPrice} MXN</span>
                    ) : (
                      <span className="text-[#F48437]">CONSULTAR PRECIO</span>
                    )}
                  </span>
                )}
                {equipo.forSale && equipo.salePrice > 0 && (
                  <span className="text-base font-bold text-green-700">
                    Venta: <span className="text-[#F48437]">${equipo.salePrice} MXN</span>
                  </span>
                )}
                {equipo.forRent && equipo.priceVisibleForRent && (
                  <MiniCalculadoraRenta precioDia={equipo.rentPrice} />
                )}
              </div>
            </div>
            <div className='w-full'>
              <a
                href={equipo.stock > 0 ? `https://wa.me/529995210167?text=Hola, quiero este equipo: ${encodeURIComponent(equipo.name)} (SKU: ${equipo.sku})` : undefined}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 font-bold py-2 px-5 rounded-lg shadow transition-all text-base mt-4 ${equipo.stock > 0 ? 'bg-[#25D366] hover:bg-[#128C7E] text-white cursor-pointer' : 'bg-gray-300 text-gray-400 cursor-not-allowed pointer-events-none'}`}
                aria-disabled={equipo.stock === 0}
              >
                Quiero este equipo!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
