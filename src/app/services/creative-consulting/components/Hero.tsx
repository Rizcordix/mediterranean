'use client'

// import Image from 'next/image'
import React from 'react'
// import blog1 from '@/assets/images/blog/01.jpg'
import { Button, Col, Container, Row } from 'react-bootstrap'
// import dynamic from 'next/dynamic'
import { usePopup } from '@/components/wrappers/PopupContext'
// const GlightBox = dynamic(() => import('@/components/GlightBox'), { ssr: false })
import Image from 'next/image'
import image1 from '@/assets/images/services/blogwriting1.png'

const Hero = () => {
  const { openQuote } = usePopup();
  return (
    <section className="p-0 py-5 bg-grad2 pattern-overlay-2">
      <Container>
        <Row className="py-0 py-md-5 justify-content-between align-items-center">
          <Col sm={10} lg={6} className="all-text-white my-5 mt-md-0 position-relative">
            <div className="text-start py-0 py-md-5 my-5">
              <h6>You found it!</h6>
              <h2 className="display-4 fw-normal">Expert Creative Consulting.</h2>
              <p className="mb-4 display-8 lh-0 fw-normal">
                At Mediterranean Publishing, our creative consulting services guide authors through every stage of their book project. From concept development to marketing strategy, we provide expert advice to help your ideas succeed.
              </p>
              <Button onClick={openQuote} variant="white" className="me-3">
                Get Your Instant Quote
              </Button>
            </div>
          </Col>
          <Col sm={10} md={6} className="d-none d-lg-block mb-5 position-relative">
            <Image className="rounded shadow" src={image1} width={600} height={400} alt="creativeconsultation1" />
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
