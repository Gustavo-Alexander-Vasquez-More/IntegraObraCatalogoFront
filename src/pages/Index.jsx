import React from 'react'
import HeroHome from '../components/Home/HeroHome'
import Testimonios from '../components/Home/Testimonios'
import Marcas from '../components/Home/Marcas'
import Cards from '../components/Home/Cards'
import PorqueElegirnos from '../components/Home/PorqueElegirnos'
import FormCotizacion from '../components/Home/FormCotizacion'

export default function Index() {
  return (
    <div>
      <HeroHome/>
      <PorqueElegirnos/>
      <Cards/>
      <Marcas/>
      <Testimonios/>
      <FormCotizacion/>
    </div>
  )
}
