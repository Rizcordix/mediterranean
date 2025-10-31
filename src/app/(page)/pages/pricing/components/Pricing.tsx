import React from 'react'
import { pricingData } from '../data'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Pricing = () => {
  return (
    <section className="pricing-page pricing pricing-center">
      <Container>
        <Row>
          <Col md={8} className="mb-0 mb-md-5">
            <div className="p-0 text-center text-md-start">
              <h2>Affordable Pricing Packages</h2>
              <p>
                We can design and develop a website that specifically meets your unique needs, and meets your required standards as well as industry
                related standards
              </p>
            </div>
          </Col>
          <Col md={4} className="text-center text-md-end align-self-center mb-5 ">
            <Button variant="grad">Start 30 days free trial!</Button>
          </Col>
        </Row>
        <Row>
          {pricingData.map((item, idx) => (
            <Col md={4} className="mb-5" key={idx}>
              <div className={`pricing-box h-100 ${item.isPopular && 'shadow'}`}>
                {item.isPopular && (
                  <div className="ribbon">
                    <span>POPULAR</span>
                  </div>
                )}
                <h5>{item.title}</h5>
                <div className="plan-price">
                  <span className="price text-grad">
                    <sup className="text-grad">$</sup>
                    {item.price}{' '}
                  </span>{' '}
                  /month
                </div>
                <p>{item.description}</p>
                <a className={`btn ${item.isPopular ? 'btn-grad' : 'btn-outline-light'} mt-4`} href="">
                  Order now!
                </a>
              </div>
            </Col>
          ))}
        </Row>
        <Row>
          <Col sm={12} className="mt-2 mt-md-4">
            <div className="text-center">
              <h4>Looking for enterprise plan? We offer discounts for large teams! </h4>
              <p className="m-0">Everything you need to be everywhere your customers are, wrapped up in one pretty package—at a special price.</p>
              <Button variant="outline-light" className="mt-4">
                Order now!
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Pricing
