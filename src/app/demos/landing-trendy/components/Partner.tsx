import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Partner = () => {
  return (
    <section className="mb-n6 p-0">
      <Container>
        <div className="shadow rounded overflow-hidden">
          <Row className="g-0">
            <Col md={6} className="bg-white">
              <Row className="h-100 p-4 p-md-5">
                <Col lg={3} className="align-self-center">
                  <i className="ti-email display-1 text-grad" />
                </Col>
                <Col lg={9}>
                  <h3 className="mb-3">Subscribe to our newsletter</h3>
                  <input className="form-control" placeholder="Enter email..." />
                  <button className="btn btn-dark">Join us</button>
                  <p className="small mb-0">*We respect your privacy and do not tolerate spam.</p>
                </Col>
              </Row>
            </Col>
            <Col md={6} className="d-flex">
              <div className="bg-grad p-4 p-sm-5 pattern-overlay-2 h-auto">
                <div className="all-text-white">
                  <h3>A true business partner.</h3>
                  <p className="m-0">
                    Our services reflect our knowledge and in depth understanding of the project. We aim to achieve the goal as we provide innovative
                    ideas, designs, and multimedia solutions to our clients.
                  </p>
                </div>
                <div className="mt-3">
                  <button className="btn btn-dark mb-0">Learn more!</button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default Partner
