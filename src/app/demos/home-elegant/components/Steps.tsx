import React from 'react'
import { stepsData } from '../data'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'

const Steps = () => {
  return (
    <section className="mt-lg-n9 mt-sm-0 pb-0 z-index-9 position-relative">
      <Container>
        <Row className="bg-white shadow m-0 p-2 p-lg-5 rounded">
          {stepsData.map((item, idx) => (
            <Col md={4} key={idx}>
              <div className="feature-box h-100 text-center">
                <div className="feature-box-icon">
                  <Image className="w-25" src={item.icon} alt="icon" />
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

export default Steps
