import React from 'react'
import bgImg from '@/assets/images/bg/07.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Hero = () => {
  return (
    <div
      className="bg-overlay-dark-7 py-7"
      style={{ background: `url(${bgImg.src}) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center center' }}>
      <Container>
        <Row className="all-text-white">
          <Col md={12} className="d-md-flex justify-content-md-between align-items-center">
            <div>
              <h1 className="fw-bold">Counter</h1>
              <h6 className="subtitle">We are a creative studio focusing on branding &amp; web design</h6>
            </div>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item active">
                  <Link href="/">
                    <i className="ti-home" /> Home
                  </Link>
                </li>
                <li className="breadcrumb-item">Counter</li>
              </ol>
            </nav>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero
