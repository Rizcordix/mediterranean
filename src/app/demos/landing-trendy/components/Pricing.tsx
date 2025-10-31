import React from 'react'
import { pricingData } from '../data'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Pricing = () => {
  return (
    <section className="pricing pricing-center">
      <Container>
        <Row>
          <Col xs={12} lg={8} className="mx-auto">
            <div className="text-center">
              <h2>Affordable Pricing Packages</h2>
              <p>
                We can design and develop a website that specifically meets your unique needs, and meets your required standards as well as industry
                related standards
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          {pricingData.map((item, idx) => (
            <Col md={4} className="mb-5" key={idx}>
              <div className={`pricing-box h-100 ${item.isPopular && 'shadow no-border box'}`}>
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
                <Link className={`btn ${item.isPopular ? 'btn-grad' : 'btn-outline-light'}  mt-4`} href="">
                  Order now!
                </Link>
              </div>
            </Col>
          ))}
        </Row>
        <Row>
          <Col xs={12} lg={8} className="mx-auto text-center mt-3">
            <h6>
              If you&apos;re not exactly sure which pricing strategy will work for your business. Contact us we will help you to choose your best
              pricing plan.{' '}
            </h6>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Pricing
