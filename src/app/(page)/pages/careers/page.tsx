import React from 'react'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Careers from './components/Careers'

const CareersPage = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <hr className="mb-0" />
      <Careers />
    </>
  )
}

export default CareersPage
