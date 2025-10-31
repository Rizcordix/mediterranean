import React from 'react'
import { serviceData } from '../data'
import { Col, Container, Row } from 'react-bootstrap'

const Service = () => {
  return (
    <section className="service">
      <Container>
        <Row>
          {serviceData.map((item, idx) => (
            <Col sm={6} md={4} key={idx}>
              <div className="feature-box h-100 icon-grad">
                <div className="feature-box-icon">
                  <i className={item.icon} />
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

export default Service
