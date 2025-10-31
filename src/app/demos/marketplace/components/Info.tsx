import Image from 'next/image'
import React from 'react'
import mockups1 from '@/assets/images/mockups/01.png'
import { Col, Container, Row } from 'react-bootstrap'

const Info = () => {
  return (
    <section className="pb-3">
      <Container>
        <Row>
          <Col md={6} lg={8}>
            <Image src={mockups1} alt="mockups1" />
          </Col>
          <Col md={6} lg={4} className="align-self-center">
            <h6 className="bg-grad p-2 rounded d-inline-block text-white">Trusted Experts</h6>
            <h2>Trust our experts to help grow your business.</h2>
            <p>
              Placing assured be if removed it besides on. Far shed each high read are men over day. Afraid we praise lively he suffer family estate
              is. Ample order up in of in ready. Timed blind had now those ought set often which. Or snug dull he show more true wish. No at many deny
              away miss evil. On in so indeed spirit an mother.{' '}
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Info
