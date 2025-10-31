'use client'
import React from 'react'
import bgImg from '@/assets/images/bg/08.jpg'
import { Col, Container, Row } from 'react-bootstrap'
// import Jarallax from '@/components/Jarallax'
import dynamic from 'next/dynamic'

const Jarallax = dynamic(() => import('@/components/Jarallax'), { ssr: false })

const Hero = () => {
  return (
    <Jarallax
      tag={'div'}
      className="bg-overlay-dark-2 bg-parallax pt-7 pb-10"
      style={{ background: `url(${bgImg.src}) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center center' }}>
      <Container>
        <Row className="all-text-white">
          <Col md={12} className="align-self-center text-center position-relative">
            <h1 className="fw-bold display-2 pt-4 pb-8 mb-8 mt-2">We&apos;re Superheroes</h1>
          </Col>
        </Row>
      </Container>
      <div className="position-absolute bottom-0 start-0 w-100 mb-n3">
        <svg width="100%" height={150} viewBox="0 0 500 150" preserveAspectRatio="none">
          <path d="M0,150 L0,40 Q250,150 500,40 L580,150 Z" fill="white" />
        </svg>
      </div>
    </Jarallax>
  )
}

export default Hero
