'use client'

import Image from 'next/image'
import React from 'react'
import blog1 from '@/assets/images/portfolio_images/booksamplehero.png'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { usePopup } from '@/components/wrappers/PopupContext'

const Hero = () => {
  const { openQuote } = usePopup();
  return (
    <section className="p-0 py-5 position-relative" style={{ 
      background: 'linear-gradient(175deg, #eeeae7 0%, #364a52 25%, #0f252f 100%)',
    }}>
      <Container>
        <Row className="py-0 py-md-5 justify-content-between align-items-center">
          <Col sm={10} lg={6} className="all-text-white my-5 mt-md-0 position-relative">
            <div className="text-start py-0 py-md-5 my-5">
              <h6>Our Work!</h6>
              <h2 className="display-4 fw-normal">Books We&apos;ve Proudly Published.</h2>
              <p className="mb-4 display-8 lh-0 fw-normal">
                Explore a curated collection of books we&apos;ve brought to life for authors worldwide. From compelling stories to impactful non-fiction, these samples highlight our commitment to quality, creativity, and professional publishing.
              </p>
              <Button href='/contact' variant="white" className="me-3">
                Get free consultation
              </Button>
              <Button onClick={openQuote} variant="outline-white">Get a quote</Button>
            </div>
          </Col>
          <Col sm={10} md={6} className="d-none d-lg-block mt-4 position-relative">
            <Image className="rounded shadow" src={blog1} width={600} height={400} alt="Book Samples" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
