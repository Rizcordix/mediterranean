'use client'
import React from 'react'
import banner3 from '@/assets/images/banner/03.jpg'
import dynamic from 'next/dynamic'
const GlightBox = dynamic(() => import('@/components/GlightBox'), { ssr: false })
import { Col, Container, Row } from 'react-bootstrap'

const Hero = () => {
  return (
    <section className="p-0 h-500 h-lg-700 bg-parallax" style={{ background: `url(${banner3.src}) no-repeat 65% 0%`, backgroundSize: 'cover' }}>
      <Container className="h-100">
        <Row className="justify-content-between align-items-center h-100">
          <Col md={8} className="mb-7">
            <h4>A mint of creativity</h4>
            <h1 className="display-4 fw-bold">We are dreaming of the future</h1>
            <span>
              <GlightBox className="btn btn-grad btn-round zoom-on-hover me-3" data-glightbox href="https://youtu.be/n_Cn8eFo7u8">
                {' '}
                <i className="fa fa-play text-white" />
              </GlightBox>
              03:00 minutes
            </span>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
