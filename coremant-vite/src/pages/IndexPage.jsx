import React from 'react'
import { AboutUs } from '../components/aboutUs/AboutUs'
import { Banner } from '../components/banner/Banner'
import { Contrataciones } from '../components/contrataciones/Contrataciones'
import { Footer } from '../components/footer/Footer'
import { NuestrosServicios }  from '../components/nuestrosServicios/NuestrosServicios'
import { Personal } from '../components/personal/Personal'

export const IndexPage = () => {
  return (
    <div>
      <Banner />
      <AboutUs />
      <Personal />
      <NuestrosServicios />
      <Contrataciones />
      <Footer />
    </div>
  )
}
