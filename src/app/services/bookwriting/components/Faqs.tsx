import React from 'react'
import { faqsData } from '../data'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Faqs = () => {
  return (
    <section className="bg-dark">
      <Container>
        <Row>
          <Col xs={12} lg={8} className="mx-auto">
            <div className="title text-center all-text-white">
              <span className="pre-title">Have any questions?</span>
              <h2>Engaging, purposeful, and creative.</h2>
              <p>The real challenge before companies in today&apos;s world is to make their products and services appealing to everyone.</p>
            </div>
          </Col>
        </Row>
        <Row>
          {faqsData.map((item, idx) => (
            <Col md={3} className="mt-4 all-text-white primary-border-start-dotted py-4" key={idx}>
              <h4>{item.question}</h4>
              <p>{item.description}</p>
              <Link className="text-primary" href="">
                Learn more <i className="ti-arrow-right text-primary" />
              </Link>
            </Col>
          ))}
        </Row>
        <Row>
          <Col xs={12} className="mx-auto text-center mt-5">
            <Link href="" className="btn btn-grad mb-1">
              Read more FAQs
            </Link>
            <p className="small text-white">Does design matter? How important is design to business success.</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Faqs
