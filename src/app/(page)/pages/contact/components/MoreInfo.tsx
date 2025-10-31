import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const MoreInfo = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row className="justify-content-md-center">
          <Col md={4} className="text-center">
            <h5 className="mb-1"> Join us on Chat</h5>
            <p>
              If you have technical questions, chat live with developers in our <Link href="">live chat</Link>
            </p>
          </Col>
          <Col md={4} className="text-center">
            <h5 className="mb-1"> General communication</h5>
            <p>
              For general queries, including partnership opportunities, please email <Link href="">help@larexa.com</Link>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default MoreInfo
