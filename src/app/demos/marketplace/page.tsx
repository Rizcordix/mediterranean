import React from 'react'
import TopNavbar from './components/TopNavbar'
import Hero from './components/Hero'
import Welcome from './components/Welcome'
import Service from './components/Service'
import Info from './components/Info'
import Testimonials from './components/Testimonials'
import Info2 from './components/Info2'
import ActionBox from './components/ActionBox'
import Footer from '@/components/Blog/Footer'

const MarketplacePage = () => {
  return (
    <>
      <TopNavbar />
      <Hero />
      <Welcome />
      <Service />
      <Info />
      <Testimonials />
      <Info2 />
      <ActionBox />
      <Footer />
    </>
  )
}

export default MarketplacePage
