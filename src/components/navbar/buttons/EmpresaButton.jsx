import React, { useState } from 'react';

const MenuBox = () => {
  return (
    <div className='bg-[#53545B] p-5 absolute left-0 top-full mt-2.4 shadow-lg z-10 w-auto min-w-[300px]'>
      <a className='block text-white font-semibold py-2 hover:bg-[#6b6c70] px-3 rounded' href="/empresa/sobre-nosotros">Sobre nosotros</a>
      <a className='block text-white font-semibold py-2 hover:bg-[#6b6c70] px-3 rounded' href="/empresa/preguntas-frecuentes">Preguntas frecuentes</a>
      <a className='block text-white font-semibold py-2 hover:bg-[#6b6c70] px-3 rounded' href="/empresa/politica-privacidad">Política de privacidad</a>
    </div>
  );
};

export default function EmpresaButton() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div 
      className='relative inline-block' 
      onMouseEnter={() => setIsHovering(true)}
      // 3. Añadir el onMouseLeave para cerrar el menú
      onMouseLeave={() => setIsHovering(false)} 
    >
      {/* Botón (Contenido principal) */}
      <button className={`px-5 h-full text-white font-semibold transition duration-150 ${isHovering ? 'bg-[#53545B]' : 'hover:bg-[#53545B]'}`}>
          Empresa
      </button>

      {/* 4. Renderizado Condicional: Usamos el componente como una etiqueta React */}
      {isHovering && <MenuBox />}
    </div>
  );
}