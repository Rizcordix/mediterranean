import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Error404 = () => {
  return (
    <section className="error-page">
      <Container>
        <Row>
          <Col md={8} className="mx-auto text-center">
            <h2 className="display-1 fw-bold text-grad">404!</h2>
            <h3 className="mb-4">Page Not Found</h3>
            <p>Ooops! The page you are looking for, couldn&apos;t be found.</p>
            <a className="btn btn-sm btn-outline-light" href="/">
              Back to home!
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Error404
