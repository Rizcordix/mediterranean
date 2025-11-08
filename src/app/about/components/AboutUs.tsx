import React from 'react'
import { aboutUsData } from '../data'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const AboutUs = () => {
  return (
    <section>
      <Container className="h-100">
        <Row>
          <Col md={6} className="align-self-center">
            <div className="text-center text-sm-center text-md-end mb-4">
              <h2 className="text-grad display-1 fw-bold mb-0">15+ Years</h2>
              <span>In market insight and behavior driven creative marketing agency</span>
            </div>
          </Col>
          <Col md={6} className="align-self-center text-center text-sm-center text-md-start">
            <p className="pe-0 pe-lg-5">
              A Full portfolio Digital Creative Agency Specializing in: Video Production, Web Design, Branding, Brand Strategy, Content Marketing and
              Aerial Cinematography. sequi, obcaecati temporibus laboriosam
            </p>
            <p className="pe-0 pe-lg-5">
              We are an insight and behaviour driven creative marketing agency deleniti delectus fugiat commodi facere atque molestias sequi obcaecati
              temporibus laboriosam?
            </p>
            <Button variant="outline-light">Explore services!</Button>
          </Col>
        </Row>
        <Row className="mt-7">
          {aboutUsData.map((item, idx) => (
            <Col md={3} className="mb-6" key={idx}>
              <div className="process">
                <div className="process-number">0{idx + 1}.</div>
                <h3 className="process-title">{item.title}</h3>
                <p className="process-content">{item.description}</p>
                <Link href="">Read More</Link>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default AboutUs
