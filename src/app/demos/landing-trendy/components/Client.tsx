import React from 'react'
import service1 from '@/assets/images/service/01.jpg'
import service3 from '@/assets/images/service/03.jpg'
import { Col, Container, Row } from 'react-bootstrap'

const Client = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col md={12} className="align-self-center mb-md-0 mb-5">
            <h2 className="h1">Hi there! We are creating smart websites.</h2>
            <h6 className="mb-4 text-light-gray fw-normal">
              We have built a robust team, which is capable of delivering best quality of services when it comes to website-design, Website
              development, mobile application, content and digital marketing
            </h6>
          </Col>
        </Row>
        <Row>
          <Col md={3} className="d-flex">
            <div className="h-auto w-100 p-5" style={{ background: `url(${service1.src}) center top`, backgroundSize: 'cover' }}>
              <span className="p-5" />
            </div>
          </Col>
          <Col md={3} className="d-flex">
            <div className="h-auto w-100 p-5" style={{ background: `url(${service3.src}) center top`, backgroundSize: 'cover' }}>
              <span className="p-5" />
            </div>
          </Col>
          <Col md={6}>
            <div className="bg-grad h-100 w-100 d-table p-5 all-text-white">
              <h2 className="font-weight-700 m-0 d-table-cell align-middle">
                <span className="d-block h4">Our vision is simple –</span>to make technology an asset for enterprises, not an intricacy.
              </h2>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Client
