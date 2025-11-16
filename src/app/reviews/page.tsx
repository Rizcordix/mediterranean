import React from 'react'
import Hero from './components/Heros'
import Reviews from './components/review'
import TopNavbar from '../home/components/TopNavbar'
import Footer from '../home/components/Footer'
import Careers from './components/Careers'
import FeaturedBooksSection from '../home/components/portfolio'
import ProcedureSection from '../home/components/procedure'

const ReviewPage = () => {
  return (
    <>
      <TopNavbar />
      <Hero />
      <Reviews />
      <Careers />
        <FeaturedBooksSection />
        <ProcedureSection />
      <Footer />
    </>
  )
}

export default ReviewPage
