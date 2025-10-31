import React from 'react'
import { faqData } from '../data'
import { Col, Container, Row } from 'react-bootstrap'

const Faq = () => {
  return (
    <section className="bg-light pb-4">
      <Container>
        <Row>
          <Col md={8} className="text-center mx-auto mb-5">
            <h2>Frequently asked question</h2>
          </Col>
        </Row>
        <Row>
          {faqData.map((item, idx) => (
            <Col md={6} className="mb-4" key={idx}>
              <div className="pe-md-4">
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Faq
