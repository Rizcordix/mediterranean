'use client'

// import Image from 'next/image'
import React from 'react'
// import blog1 from '@/assets/images/blog/01.jpg'
import { Button, Col, Container, Row } from 'react-bootstrap'
// import dynamic from 'next/dynamic'
import { usePopup } from '@/components/wrappers/PopupContext'
// const GlightBox = dynamic(() => import('@/components/GlightBox'), { ssr: false })

const Hero = () => {
  const { openQuote } = usePopup();
  return (
    <section className="p-0 py-5 bg-grad2 pattern-overlay-2">
      <Container>
        <Row className="py-0 py-md-5 justify-content-between align-items-center">
          <Col sm={10} lg={6} className="all-text-white my-5 mt-md-0 position-relative">
            <div className="text-start py-0 py-md-5 my-5">
              <h6>You found it!</h6>
              <h2 className="display-4 fw-normal">Premium Support Designed to Guide You.</h2>
              <p className="mb-4 display-8 lh-0 fw-normal">
               At Meditarranean Publishing, our premium support service ensures authors receive dedicated assistance, quick responses, and expert guidance throughout their entire publishing journey.
              </p>
              <Button onClick={openQuote} variant="white" className="me-3">
                Get Your Instant Quote
              </Button>
            </div>
          </Col>
          <Col sm={10} md={6} className="d-none d-lg-block mb-5 position-relative">
            <img className="rounded shadow" src='https://placehold.co/600x400' width={600} height={400} alt="blog1" />
          </Col>
        </Row>
      </Container>
      <div className="position-absolute bottom-0 start-0 w-100 d-none d-md-block mb-n3">
        <svg width="100%" height={150} viewBox="0 0 500 150" preserveAspectRatio="none">
          <path d="M0,150 L0,40 Q250,150 500,40 L580,150 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
