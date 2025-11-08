import React from 'react'
import { companyData } from '../data'
import { Col, Container, Row } from 'react-bootstrap'

const Company = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col xs={12} lg={8} className="mx-auto">
            <div className="title text-center">
              <span className="pre-title">Why choose larexa?</span>
              <h2>Passion, dedication, and a lot of coffee.</h2>
              <p className="mb-0">
                The real challenge before companies in today&apos;s world is to make their products and services appealing to everyone.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          {companyData.map((item, idx) => (
            <Col md={4} className="mt-4" key={idx}>
              <div className="feature-box f-style-5 h-100 icon-grad">
                <div className="feature-box-icon">
                  <i className={`${item.icon}`} />
                </div>
                <h3 className="feature-box-title">{item.title}</h3>
                <p className="feature-box-desc">{item.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Company
