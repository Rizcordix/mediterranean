import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const MoreInfo = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row className="justify-content-md-center">
          <Col md={4} className="text-center">
            <h5 className="mb-1">Connect With Our Team</h5>
            <p>
              Have questions about our services? Chat with our publishing experts through our live support
            </p>
          </Col>
          <Col md={4} className="text-center">
            <h5 className="mb-1">Business Inquiries</h5>
            <p>
              For partnership opportunities and general inquiries, reach us at <Link href="mailto:info@mediterraneanpublishing.com">info@mediterraneanpublishing.com</Link>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default MoreInfo