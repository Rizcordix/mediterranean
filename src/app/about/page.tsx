import React from 'react'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import WhyUs from './components/WhyUs'
import Solutions from './components/Solutions'
import ActionBox from './components/ActionBox'
import TopNavbar from '../home/components/TopNavbar'
import Footer from '../home/components/Footer'

const AboutAdvancePage = () => {
  return (
    <>
      <TopNavbar />
      <Hero />
      <AboutUs />
      {/* <WhyUs /> */}
      {/* <Solutions /> */}
      {/* <ActionBox /> */}
      <Footer />
    </>
  )
}

export default AboutAdvancePage
