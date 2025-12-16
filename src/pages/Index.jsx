import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import HeroHome from '../components/Home/HeroHome'
import Testimonios from '../components/Home/Testimonios'
import Marcas from '../components/Home/Marcas'
import Cards from '../components/Home/Cards'
import PorqueElegirnos from '../components/Home/PorqueElegirnos'
import FormCotizacion from '../components/Home/FormCotizacion'
export default function Index() {
  useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  return (
    <>
      <Helmet>
        <title>IntegraObra | Servicios de Construcción y Mantenimiento en México</title>
        <meta name="description" content="Empresa líder en servicios de construcción, mantenimiento, renta de maquinaria, instalaciones eléctricas, plomería, soldadura, tablaroca y más en todo México. Calidad, experiencia y atención profesional en cada proyecto. ¡Cotiza tu obra en cualquier ciudad del país!" />
        <meta name="keywords" content="construcción México, mantenimiento México, renta de maquinaria México, instalaciones eléctricas México, plomería México, soldadura México, tablaroca México, empresa constructora México, IntegraObra" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://integraobra.com/" />
        {/* Open Graph */}
        <meta property="og:title" content="IntegraObra | Servicios de Construcción y Mantenimiento en México" />
        <meta property="og:description" content="Empresa líder en servicios de construcción, mantenimiento, renta de maquinaria, instalaciones eléctricas, plomería, soldadura, tablaroca y más en todo México. Calidad, experiencia y atención profesional en cada proyecto." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://integraobra.com/" />
        <meta property="og:image" content="https://integraobra.com/og-home.webp" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IntegraObra | Servicios de Construcción y Mantenimiento en México" />
        <meta name="twitter:description" content="Empresa líder en servicios de construcción, mantenimiento, renta de maquinaria, instalaciones eléctricas, plomería, soldadura, tablaroca y más en todo México. Calidad, experiencia y atención profesional en cada proyecto." />
        <meta name="twitter:image" content="https://integraobra.com/og-home.webp" />
      </Helmet>
      <div>
        <HeroHome/>
        <PorqueElegirnos/>
        <Cards/>
        <Marcas/>
        <Testimonios/>
        <FormCotizacion/>
      </div>
    </>
  )
}
