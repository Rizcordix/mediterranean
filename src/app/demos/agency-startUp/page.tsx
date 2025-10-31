import React from 'react'
import TopNavbar from './components/TopNavbar'
import Hero from './components/Hero'
import Clients from './components/Clients'
import Company from './components/Company'
import Services from './components/Services'
import Faqs from './components/Faqs'
import ClientsSlide from './components/ClientsSlide'
import Team from './components/Team'
import Blog from './components/Blog'
import ActionBox from './components/ActionBox'
import Footer from './components/Footer'

const AgencyStartUpPage = () => {
  return (
    <>
      <TopNavbar />
      <Hero />
      <Clients />
      <div className="divider mt-5" />
      <Company />
      <Services />
      <Faqs />
      <ClientsSlide />
      <div className="divider m-0" />
      <Team />
      <Blog />
      <ActionBox />
      <Footer />
    </>
  )
}

export default AgencyStartUpPage
