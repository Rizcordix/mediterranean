import React from 'react'
import { aboutData } from '../data'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'

const About = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col md={8} className="mx-auto text-center mb-5">
            <h2 className="h1 fw-bold">Engaging, purposeful, and creative</h2>
            <h5>At Larexa, we transform your perception into an excellent website</h5>
            <p>
              Remarkably to continuing in surrounded diminution on. In unfeeling existence objection immediate repulsive on he in. Imprudence
              comparison uncommonly me he difficulty diminution resolution.
            </p>
          </Col>
        </Row>
        <Row>
          {aboutData.map((item, idx) => {
            return (
              <Col md={4} key={idx}>
                <div className={`feature-box h-100 text-center px-4 py-5 ${item.isPopular && 'all-text-white bg-grad rounded'}`}>
                  <div className="feature-box-icon">
                    <Image className="w-25" src={item.image} alt="icon" />
                  </div>
                  <h3 className="feature-box-title">{item.title}</h3>
                  <p className="feature-box-desc">{item.description}</p>
                </div>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default About
