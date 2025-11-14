'use client'

import Image from 'next/image'
import React from 'react'
import blog1 from '@/assets/images/blog/01.jpg'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Hero = () => {
  return (
    <section className="p-0 py-5 bg-grad2 pattern-overlay-2">
      <Container>
        <Row className="py-0 py-md-5 justify-content-between align-items-center">
          <Col sm={10} lg={6} className="all-text-white my-5 mt-md-0 position-relative">
            <div className="text-start py-0 py-md-5 my-5">
              <h6>You found it!</h6>
              <h2 className="display-4 fw-normal">Expect nothing less than perfect.</h2>
              <p className="mb-4 display-8 lh-0 fw-normal">
                Our friendly team members are always willing to help you understand your present technology requirements and provide suggestions on
                your future needs.
              </p>
              <Button variant="white" className="me-3">
                Get a demo
              </Button>
              <Button variant="outline-white">Learn more!</Button>
            </div>
          </Col>
          <Col sm={10} md={6} className="d-none d-lg-block mb-5 position-relative">
            <Image className="rounded shadow" src={blog1} alt="blog1" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
