import React from 'react'
import bgImg from '@/assets/images/bg/05.jpg'
import { Col, Container, Row } from 'react-bootstrap'

const Hero = () => {
  return (
    <div
      className="text-center bg-overlay-dark-4"
      style={{ 
        background: `url(${bgImg.src}) no-repeat`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center center' 
      }}
    >
      <Container>
        <Row className="all-text-white">
          <Col md={12} className="align-self-center">
            {/* Replaced the phone number with a relevant sub-heading */}
            <h1 className="display-6 fw-bold mt-9 mb-0">
              Hear What Our Clients Say
            </h1>
            {/* Updated the main heading */}
            <h1 className="fw-bold display-1 mb-2 mb-md-n4">
              Client Reviews
            </h1>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero