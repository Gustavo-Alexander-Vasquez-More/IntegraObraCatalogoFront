import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../api/api';
import Carousel from 'react-multi-carousel';
import MiniCalculadoraRenta from '../components/MiniCalculadoraRenta';
import MultiCardCarousel from '../components/MultiCardCarousel';
import DetalleEquipo from '../components/DetalleEquipo';
import 'react-multi-carousel/lib/styles.css';

export default function InfoEquipo() {
      // Productos reales para el carrusel
      const [productosRelacionados, setProductosRelacionados] = useState([]);

      const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1280 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 1280, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 640 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 640, min: 0 },
          items: 1
        }
      };
    // ...existing code...
  const { id } = useParams();
  const [equipo, setEquipo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    api.get(`/api/products/especific-product/${id}`)
      .then(async res => {
        setEquipo(res.data);
        // Obtener productos relacionados por cada categoría
        let relacionados = [];
        const categorias = res.data.categories || res.data.categoryDetail || [];
        for (const cat of categorias) {
          const catId = cat.categoryId || cat.categoryDetailId;
          if (catId) {
            try {
              const resp = await api.get(`/api/products/by-category-or-all/${catId}`);
              if (Array.isArray(resp.data)) {
                relacionados = relacionados.concat(
                  resp.data.filter(p => {
                    const sameId = p.id === res.data.id;
                    const sameName = (p.name || '').trim().toLowerCase() === (res.data.name || '').trim().toLowerCase();
                    return !sameId && !sameName;
                  })
                );
              }
            } catch (e) { /* ignorar error de una categoría */ }
          }
        }
        // Eliminar duplicados por id
        const unicos = [];
        const ids = new Set();
        for (const prod of relacionados) {
          if (!ids.has(prod.id)) {
            ids.add(prod.id);
            unicos.push(prod);
          }
        }
        // Si no hay productos relacionados (solo estaba el mismo), pedir todos los productos
        if (unicos.length === 0) {
          try {
            const respAll = await api.get(`/api/products/by-category-or-all/0`);
            if (Array.isArray(respAll.data)) {
              setProductosRelacionados(
                respAll.data.filter(p => {
                  const sameId = p.id === res.data.id;
                  const sameName = (p.name || '').trim().toLowerCase() === (res.data.name || '').trim().toLowerCase();
                  return !sameId && !sameName;
                })
              );
            } else {
              setProductosRelacionados([]);
            }
          } catch {
            setProductosRelacionados([]);
          }
        } else {
          setProductosRelacionados(unicos);
        }
      })
      .catch(() => setError('No se pudo cargar el equipo'))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="text-center py-20 text-gray-500">Cargando equipo...</div>;
  if (error) return <div className="text-center py-20 text-red-500">{error}</div>;
  if (!equipo) return null;

  return (
    <div className="w-full px-0 flex flex-col items-center py-10">
      <DetalleEquipo equipo={equipo} />
      <MultiCardCarousel productos={productosRelacionados} responsive={responsive} />

      {/* Llamada a la acción final */}
      <div className="w-full max-w-[70%] mt-2 mb-8">
        <div className="bg-[#f9f6f3] border border-[#F48437] rounded-xl p-6 flex flex-col items-center text-center shadow">
          <h3 className="text-xl font-bold text-[#066396] mb-2">¿No encuentras lo que buscas?</h3>
          <p className="text-base text-gray-700 mb-4">Contáctanos y te ayudamos a encontrar el equipo ideal para tu proyecto. Nuestro equipo está listo para asesorarte.</p>
          <a
            href="https://wa.me/529995210167?text=Hola, necesito ayuda para encontrar un equipo."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-bold py-2 px-6 rounded-lg shadow transition-all text-base bg-[#F48437] hover:bg-[#e07730] text-white"
          >
            ¡Contáctanos por WhatsApp!
          </a>
        </div>
      </div>
    </div>
  );
}
