import React from 'react'
import { pricingData } from '../data'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Pricing = () => {
  return (
    <section className="bg-dark pricing pricing-dark pricing-center all-text-white">
      <Container>
        <Row className=" text-center">
          <Col md={8} className="mx-auto">
            <h2 className="h1">Premium features on all plans</h2>
            <p className="mb-5">
              Timed blind had now those ought set often which. Or snug dull he show more true wish. No at many deny away miss evil. On in so indeed
              spirit an mother. Amounted old strictly but Marianne admitted.
            </p>
          </Col>
        </Row>
        <Row>
          {pricingData.map((item, idx) => (
            <Col md={4} className="mb-5" key={idx}>
              <div className="pricing-box h-100">
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
                <Link className={`btn ${item.isPopular ? 'btn-grad' : 'btn-outline-light'} mt-4`} href="">
                  Order now!
                </Link>
              </div>
            </Col>
          ))}
        </Row>
        <Row className="mb-7 z-index-99 position-relative">
          <Col sm={12} className="mt-2 mt-md-4">
            <div className="text-center">
              <h4>Looking for enterprise plan? We offer discounts for large teams! </h4>
              <p className="mb-5 mb-md-0">
                Everything you need to be everywhere your customers are, wrapped up in one pretty package—at a special price.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Pricing
