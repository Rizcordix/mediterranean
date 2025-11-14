import React from 'react'
import Hero from './components/Heros'
import Reviews from './components/review'
import TopNavbar from '../home/components/TopNavbar'
import Footer from '../home/components/Footer'
import Careers from './components/Careers'

const ReviewPage = () => {
  return (
    <>
      <TopNavbar />
      <Hero />
      <Reviews />
      <Careers />
      <Footer />
    </>
  )
}

export default ReviewPage
