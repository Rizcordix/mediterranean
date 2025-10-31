import React from 'react'
import TopNavbar from './components/TopNavbar'
import Hero from './components/Hero'
import Steps from './components/Steps'
import Client from './components/Client'
import Pricing from './components/Pricing'
import PriceInfo from './components/PriceInfo'
import Info from './components/Info'
import ActionBox from './components/ActionBox'
import Footer from '@/components/Blog/Footer'

const HomeElegantPage = () => {
  return (
    <>
      <TopNavbar />
      <Hero />
      <Steps />
      <Client />
      <Pricing />
      <PriceInfo />
      <Info />
      <ActionBox />
      <Footer />
    </>
  )
}

export default HomeElegantPage
