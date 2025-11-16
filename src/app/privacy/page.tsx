import React from 'react'
import Hero from './components/hero'
import TopNavbar from '../home/components/TopNavbar'
import Footer from '../home/components/Footer'
import PrivacyPolicy from './components/policy'

const PrivacyPage = () => {
  return (
    <>
      <TopNavbar />
      <Hero />
      <PrivacyPolicy />
      <Footer />
    </>
  )
}

export default PrivacyPage
