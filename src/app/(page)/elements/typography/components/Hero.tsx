'use client'
import React from 'react'
import bgImg from '@/assets/images/bg/04.jpg'
import dynamic from 'next/dynamic'
const GlightBox = dynamic(() => import('@/components/GlightBox'), { ssr: false })
import { Col, Container, Row } from 'react-bootstrap'

const Hero = () => {
  return (
    <div
      className="innerpage-banner left bg-overlay-dark-7 py-7"
      style={{ background: `url(${bgImg.src}) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center center' }}>
      <Container>
        <Row className="all-text-white">
          <Col xs={12} lg={8}>
            <h1 className="fw-bold">We are a creative agency specializing in all your branding needs</h1>
            <h4 className="my-3">We Provide the best solutions for your business needs!</h4>
            <p>
              A Full package Digital Creative Agency Specializing in: Video Production, Web Design, Branding, Brand Strategy, Content Marketing and
              Aerial Cinematography. We are an insight and behaviour driven creative marketing agency.
            </p>
            <GlightBox className="btn btn-grad btn-round zoom-on-hover" data-fancybox href="https://youtu.be/n_Cn8eFo7u8">
              {' '}
              <i className="fa fa-play text-white" />
            </GlightBox>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero
