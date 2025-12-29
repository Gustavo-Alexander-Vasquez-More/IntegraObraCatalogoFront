import React, { useEffect, useState } from 'react'
import api from '../api/api.jsx'
export default function CatalogoRenta() {
  // Estados para filtros y productos
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [mostrarTodo, setMostrarTodo] = useState(true)
  const [categoria, setCategoria] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [size, setSize] = useState(20)
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(1)
  const [categorias, setCategorias] = useState([])
  // Fetch categorías reales
  useEffect(() => {
    api.get('/api/categories')
      .then(res => setCategorias(res.data || []))
      .catch(() => setCategorias([]))
  }, [])

  // Fetch productos
  useEffect(() => {
    setLoading(true)
    setError(null)
    let url = `/api/products/searchRent?size=${size}&page=${page}`
    // Si mostrarTodo está activo, solo filtra por searchTerm si existe
    if (mostrarTodo) {
      if (searchTerm) url += `&searchTerm=${encodeURIComponent(searchTerm)}`
    } else {
      if (categoria) url += `&categoryId=${categoria}`
      if (searchTerm) url += `&searchTerm=${encodeURIComponent(searchTerm)}`
    }
    api.get(url)
      .then(res => {
        setProductos(res.data.content || [])
        setTotal(res.data.totalElements || 0)
        setTotalPages(res.data.totalPages || 1)
      })
      .catch(err => setError('Error al cargar productos'))
      .finally(() => setLoading(false))
  }, [mostrarTodo, categoria, searchTerm, size, page])
  return (
    <>
      {/* Encabezado informativo */}
      <section className="w-full bg-[#066396] border-b border-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#F48437] mb-2 drop-shadow-sm">Catálogo de Maquinaria en Renta</h1>
          <p className="text-base md:text-lg text-white max-w-2xl mx-auto">
            Explora nuestra selección de equipos profesionales disponibles para renta.
          </p>
        </div>
      </section>
      {/* Sección de cards de equipos */}
      <section className="py-10 bg-[#f8f8f8]">
        <div className="container mx-auto px-4">
          {/* Barra de filtros y búsqueda */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-white rounded-xl shadow p-4 border border-gray-100">
            <div className="w-full flex flex-wrap items-center justify-between gap-4">
              {/* Checkbox Mostrar todo */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="mostrarTodo"
                  checked={mostrarTodo}
                  onChange={e => setMostrarTodo(e.target.checked)}
                  className="accent-[#F48437] w-5 h-5 rounded focus:ring-2 focus:ring-[#F48437]"
                  disabled={categoria === null}
                />
                <label htmlFor="mostrarTodo" className={`text-green-900 font-semibold select-none ${categoria === null ? 'opacity-60 cursor-not-allowed' : ''}`}>Mostrar todo</label>
              </div>
              {/* Selector de cantidad por página */}
              <div className="flex items-center gap-2">
                <label htmlFor="pageSize" className="text-sm text-gray-500 font-medium">Mostrar:</label>
                <select id="pageSize" value={size} onChange={e => { setSize(Number(e.target.value)); setPage(0); }} className="px-2 py-1 rounded border border-gray-200 bg-white text-gray-700 focus:ring-2 focus:ring-[#F48437] focus:outline-none">
                  <option value="20">20</option>
                  <option value="30">30</option>
                  <option value="40">40</option>
                  <option value="50">50</option>
                </select>
                <span className="text-sm text-gray-500">por página</span>
              </div>
              {/* Selector de categorías reales */}
              <div className="relative">
                <details className="group">
                  <summary className="flex items-center gap-2 cursor-pointer px-4 py-2 bg-[#f7f7f7] rounded-lg border border-gray-200 hover:bg-gray-100 transition font-medium text-green-900">
                    <span>Filtrar por categoría</span>
                    <svg className="w-4 h-4 ml-1 text-[#F48437] group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </summary>
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 z-20 p-3 flex flex-col gap-2">
                    {/* Opciones de categorías reales, solo una seleccionable y se puede desmarcar */}
                    {categorias.map(cat => (
                      <label key={cat.id} className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 rounded px-2 py-1">
                        <input type="radio" name="categoria" checked={categoria === cat.id && !mostrarTodo} onChange={() => { setCategoria(categoria === cat.id ? null : cat.id); setMostrarTodo(false); }} className="accent-[#F48437] w-4 h-4 rounded-full" />
                        <span className="text-green-900">{cat.name}</span>
                      </label>
                    ))}
                    {/* Opción para limpiar filtro de categoría */}
                    <button type="button" className="text-xs text-gray-500 mt-2 hover:underline" onClick={() => setCategoria(null)}>Quitar filtro de categoría</button>
                  </div>
                </details>
              </div>
              {/* Barra de búsqueda */}
              <div className="flex items-center w-full md:w-auto max-w-xs">
                <input
                  type="text"
                  placeholder="¿Qué estás buscando?"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#F48437] focus:outline-none bg-[#f7f7f7] text-green-900 placeholder:text-gray-400 shadow-sm"
                />
              </div>
            </div>
          </div>
          {/* Texto de productos mostrados arriba de las cards */}
          <div className="mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <span className="text-sm text-gray-500 font-medium">
              {loading
                ? 'Cargando productos...'
                : error
                ? error
                : categoria && !mostrarTodo
                  ? `Mostrando ${productos.length} de ${total} resultados en la categoría "${(categorias.find(c => c.id === categoria)?.name || '').toUpperCase()}"`
                  : `Mostrando ${productos.length} de ${total} resultados`}
            </span>
            {/* Paginador superior */}
            <div className="flex flex-col md:flex-row items-center justify-end gap-4">
              <nav className="flex items-center gap-1 select-none" aria-label="Paginación">
                {/* Botón anterior */}
                <button className="px-2 py-1 rounded hover:bg-gray-200 text-gray-500" disabled={page === 0} onClick={() => setPage(page - 1)}>
                  <span className="sr-only">Anterior</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                </button>
                {/* Números de página dinámicos tipo Google */}
                {Array.from({ length: totalPages }).map((_, i) => {
                  if (
                    i === 0 ||
                    i === totalPages - 1 ||
                    Math.abs(i - page) <= 1 ||
                    (page < 3 && i < 3) ||
                    (page > totalPages - 4 && i > totalPages - 4)
                  ) {
                    return (
                      <button
                        key={i}
                        className={`px-3 py-1 rounded ${i === page ? 'bg-[#F48437] text-white font-bold shadow' : 'hover:bg-gray-200 text-gray-700'}`}
                        aria-current={i === page ? 'page' : undefined}
                        onClick={() => setPage(i)}
                      >
                        {i + 1}
                      </button>
                    )
                  }
                  if (
                    (i === 1 && page > 2) ||
                    (i === totalPages - 2 && page < totalPages - 3)
                  ) {
                    return <span key={i} className="px-2 text-gray-400">...</span>
                  }
                  return null
                })}
                {/* Botón siguiente */}
                <button className="px-2 py-1 rounded hover:bg-gray-200 text-gray-700" disabled={page === totalPages - 1} onClick={() => setPage(page + 1)}>
                  <span className="sr-only">Siguiente</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </button>
              </nav>
            </div>
          </div>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {productos.map(equipo => (
              <div key={equipo.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col overflow-hidden">
                <div className="h-48 bg-white flex items-center justify-center">
                  <img src={equipo.cardImageUrl || '/maquinaria/default.jpg'} alt={equipo.name} className="object-contain h-40" onError={e => e.target.style.display='none'} />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-green-900 mb-2 flex-0">{equipo.name}</h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">Quedan <span className="font-semibold text-green-700">{equipo.stock}</span> {equipo.stock === 1 ? 'unidad' : 'unidades'}</span>
                    {equipo.priceVisibleForRent ? (
                      <span className="text-base font-bold text-[#F48437]">${equipo.rentPrice} <span className="text-xs font-normal text-gray-400">/día</span></span>
                    ) : (
                      <span className="text-base font-bold text-[#F48437]">CONSULTAR PRECIO</span>
                    )}
                  </div>
                  <button
                    className="mt-auto bg-[#F48437] hover:bg-[#e07730] text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                    onClick={() => {
                      const nombreUrl = encodeURIComponent(equipo.name.replace(/\s+/g, '-').toLowerCase())
                      window.location.href = `/equipos/${nombreUrl}/${equipo.id}`
                    }}
                  >
                    Ver equipo
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* Paginador con enlace para volver arriba en la esquina izquierda */}
          <div className="flex flex-col md:flex-row items-center justify-between mt-12 gap-4">
            <div className="w-full md:w-auto flex justify-start">
              <a href="#top" className="text-sm text-[#F48437] font-semibold hover:underline flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
                Volver arriba
              </a>
            </div>
            {/* Paginador tipo Google */}
            <nav className="flex items-center gap-1 select-none" aria-label="Paginación">
              {/* Botón anterior */}
              <button className="px-2 py-1 rounded hover:bg-gray-200 text-gray-500" disabled={page === 0} onClick={() => setPage(page - 1)}>
                <span className="sr-only">Anterior</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              </button>
              {/* Números de página dinámicos tipo Google */}
              {Array.from({ length: totalPages }).map((_, i) => {
                // Mostrar solo primeras 3, últimas 3 y las cercanas a la actual
                if (
                  i === 0 ||
                  i === totalPages - 1 ||
                  Math.abs(i - page) <= 1 ||
                  (page < 3 && i < 3) ||
                  (page > totalPages - 4 && i > totalPages - 4)
                ) {
                  return (
                    <button
                      key={i}
                      className={`px-3 py-1 rounded ${i === page ? 'bg-[#F48437] text-white font-bold shadow' : 'hover:bg-gray-200 text-gray-700'}`}
                      aria-current={i === page ? 'page' : undefined}
                      onClick={() => setPage(i)}
                    >
                      {i + 1}
                    </button>
                  )
                }
                // Puntos suspensivos
                if (
                  (i === 1 && page > 2) ||
                  (i === totalPages - 2 && page < totalPages - 3)
                ) {
                  return <span key={i} className="px-2 text-gray-400">...</span>
                }
                return null
              })}
              {/* Botón siguiente */}
              <button className="px-2 py-1 rounded hover:bg-gray-200 text-gray-700" disabled={page === totalPages - 1} onClick={() => setPage(page + 1)}>
                <span className="sr-only">Siguiente</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </button>
            </nav>
          </div>
        </div>
      </section>
    </>
  )
}
              <button className="px-3 py-1 rounded hover:bg-gray-200 text-gray-700">10</button>