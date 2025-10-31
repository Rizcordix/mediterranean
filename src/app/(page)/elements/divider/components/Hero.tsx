import React from 'react'
import bgImg from '@/assets/images/bg/04.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Hero = () => {
  return (
    <div
      className="bg-overlay-dark-7 py-7"
      style={{ background: `url(${bgImg.src}) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center center' }}>
      <Container>
        <Row className="all-text-white">
          <Col md={12} className="d-flex align-items-center justify-content-between">
            <div>
              <h1 className="fw-bold">Divider </h1>
              <h6 className="subtitle">We transform your perception into an excellent website</h6>
            </div>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item active">
                  <Link href="/">
                    <i className="ti-home" /> Home
                  </Link>
                </li>
                <li className="breadcrumb-item">Dividers</li>
              </ol>
            </nav>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero
