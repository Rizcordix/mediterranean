import React from 'react'
import { serviceData } from '../data'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Service = () => {
  return (
    <section className="bg-light">
      <Container>
        <Row>
          <Col md={8} className="mx-auto text-center mb-5">
            <h2 className="h1 fw-bold">Strategic digital solutions</h2>
            <h5>We provide innovative ideas, designs, and multimedia solutions to our clients. </h5>
          </Col>
        </Row>
        <Row>
          {serviceData.map((item, idx) => (
            <Col sm={6} lg={3} className="mb-4 mb-lg-0" key={idx}>
              <div className="shadow-hover h-100 bg-white px-5 pt-0 pb-5 text-center up-on-hover">
                <span className="alt-font text-light-gray display-2 fst-italic opacity-2">0{idx + 1}</span>
                <span className="d-block mb-4">
                  <i className={`${item.icon} mb-3 display-2 text-grad`} />
                </span>
                <Link className="h5" href="">
                  {item.icon}
                </Link>
              </div>
            </Col>
          ))}
        </Row>
        <Row>
          <Col xs={12} lg={8} className="mx-auto text-center mt-5">
            <h6>We have a strong foundation built on legacy and emerging technologies, including excellent track record of on-time deliveries.</h6>
            <Button variant="dark">View all services</Button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Service
