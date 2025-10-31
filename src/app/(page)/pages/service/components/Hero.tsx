import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Hero = () => {
  return (
    <div className="left bg-dark-grad pattern-overlay-1">
      <Container>
        <Row className="all-text-white">
          <Col md={12} className="align-self-center position-relative">
            <h1 className="fw-bold display-1 mb-2 mb-md-n4 mt-9">Our Services</h1>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero
