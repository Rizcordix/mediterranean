import React from 'react'
import TopNavbar from './components/TopNavbar'
import Hero from './components/Hero'
// import About from './components/About'
import Service from './components/Service'
// import Testimonial from './components/Testimonial'
import Features from './components/Features'
import Info from './components/Info'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import PricingComponent from './components/Pricing'
// import Services from '../demos/corporate-startUp/components/Services'
import Testimonials from './components/Testimonial'

const CreativeAgencyPage = () => {
  return (
    <>
      <TopNavbar />
      <Hero />
      <AboutUs />
      <Service />
      <Features />
      <PricingComponent />
      <Info />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  )
}

export default CreativeAgencyPage
