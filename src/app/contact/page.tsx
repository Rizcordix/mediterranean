import React from 'react'
import Hero from './components/Hero'
import Contact from './components/Contact'
import MoreInfo from './components/MoreInfo'
import TopNavbar from '../home/components/TopNavbar'
import Footer from './components/Footer'

const ContactPage = () => {
  return (
    <>
      <TopNavbar />
      <Hero />
      <Contact />
      <MoreInfo />
      <Footer />
    </>
  )
}

export default ContactPage
