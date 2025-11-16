import React from 'react'
import Hero from './components/hero'
import TopNavbar from '../home/components/TopNavbar'
import Footer from '../home/components/Footer'
import TermsOfService from './components/terminfo'

const TermPage = () => {
  return (
    <>
      <TopNavbar />
      <Hero />
      <TermsOfService />
      <Footer />
    </>
  )
}

export default TermPage;
