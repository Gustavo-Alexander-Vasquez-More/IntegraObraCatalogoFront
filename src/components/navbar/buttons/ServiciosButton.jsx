import React from 'react'

const MenuBox = () => {
  return (
    <div className='bg-[#53545B] p-5 absolute left-0 top-full mt-2.4 shadow-lg z-50 w-auto min-w-[350px]'>
      <a className='block text-white font-semibold py-2 hover:bg-[#6b6c70] px-3 rounded' href="/servicios/areas-verdes">Mantenimiento de áreas verdes</a>
      <a className='block text-white font-semibold py-2 hover:bg-[#6b6c70] px-3 rounded' href="/servicios/instalacion-manto-climas">Instalación de manto y climas</a>
      <a className='block text-white font-semibold py-2 hover:bg-[#6b6c70] px-3 rounded' href="/servicios/tablaroca-empastado">Tablaroca y empastado</a>
       <a className='block text-white font-semibold py-2 hover:bg-[#6b6c70] px-3 rounded' href="/servicios/electricidad">Electricidad</a>
        <a className='block text-white font-semibold py-2 hover:bg-[#6b6c70] px-3 rounded' href="/servicios/soldadura">Soldadura</a>
         <a className='block text-white font-semibold py-2 hover:bg-[#6b6c70] px-3 rounded' href="/servicios/cableado-estructurado">Cableado y estructurado</a>
    </div>
  );
};

export default function ServiciosButton() {
  const [isHovering, setIsHovering] = React.useState(false);

  return (
    <div 
      className='relative inline-block' 
      onMouseEnter={() => setIsHovering(true)}
      // 3. Añadir el onMouseLeave para cerrar el menú
      onMouseLeave={() => setIsHovering(false)} 
    >
      {/* Botón (Contenido principal) */}
      <button className={`px-5 h-full text-white font-semibold transition duration-150  ${isHovering ? 'bg-[#53545B]' : 'hover:bg-[#53545B]'}`}>
          Servicios
      </button>

      {/* 4. Renderizado Condicional: Usamos el componente como una etiqueta React */}
      {isHovering && <MenuBox />}
    </div>
  )
}
