import React from 'react'
import TopNavbar from './components/TopNavbar'
import Hero from './components/Hero'
// import About from './components/About'
import Service from './components/Service'
// import Testimonial from './components/Testimonial'
import Features from './components/Features'
import Info from './components/Info'
// import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import PricingComponent from './components/Pricing'
// import Services from '../demos/corporate-startUp/components/Services'
import Testimonials from './components/Testimonial'
import ActionBox from '../about/components/ActionBox'
import Clients from '../services/bookwriting/components/Clients'
import Categories from './components/Categories'
import FeaturedBooksSection from './components/portfolio'
import ProcedureSection from './components/procedure'

const CreativeAgencyPage = () => {
  return (
    <>
      <TopNavbar />
      <Hero />
      <AboutUs />
      <div className="divider mb-3" />
      <Clients />
      <div className="divider mt-2" />
      <Service />
      <FeaturedBooksSection />
      <Features />
      <PricingComponent />
      <ProcedureSection />
      <Info />
      <Categories />
      <Testimonials />
      <ActionBox />
      <Footer />
    </>
  )
}

export default CreativeAgencyPage
