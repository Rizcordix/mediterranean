import React from 'react'
import bgImg from '@/assets/images/bg/04.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Hero = () => {
  return (
    <div
      className="text-center bg-overlay-dark-7 py-7"
      style={{ background: `url(${bgImg.src}) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center center' }}>
      <Container>
        <Row className="all-text-white">
          <Col md={12} className="align-self-center">
            <h1 className="fw-bold">Blog Grid Left Sidebar</h1>
            <h6 className="mb-5">We transform your perception into an excellent website</h6>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item active">
                  <Link href="/">
                    <i className="ti-home" /> Home
                  </Link>
                </li>
                <li className="breadcrumb-item">Blog Grid</li>
              </ol>
            </nav>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero
