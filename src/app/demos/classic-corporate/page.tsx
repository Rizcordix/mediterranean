import React from 'react'
import TopNavbar from './components/TopNavbar'
import Hero from './components/Hero'
import ActionBox from './components/ActionBox'
import Team from './components/Team'
import ActionBox2 from './components/ActionBox2'
import Service from './components/Service'
import News from './components/News'
import Clients from './components/Clients'
import Footer from '@/components/Blog/Footer'

const ClassicCorporatePage = () => {
  return (
    <>
      <TopNavbar />
      <Hero />
      <ActionBox />
      <Team />
      <ActionBox2 />
      <Service />
      <News />
      <Clients />
      <Footer />
    </>
  )
}

export default ClassicCorporatePage
