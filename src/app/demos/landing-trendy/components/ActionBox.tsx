import React from 'react'
import bgImg6 from '@/assets/images/bg/06.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const ActionBox = () => {
  return (
    <section className="py-0">
      <Container>
        <Row className="g-0">
          <Col md={6} className="vh-md-50 rounded-start" style={{ background: `url(${bgImg6.src}) no-repeat `, backgroundSize: 'cover' }}></Col>
          <Col md={6} className="p-md-5 p-4 bg-dark all-text-white rounded-end">
            <h4 className="mb-4">Does design matter? How important is design to business success.</h4>
            <p>
              Increasing impression interested expression he my at. Respect invited request charmed me warrant to. Expect no pretty as do though so
              genius afraid cousin. Girl when of ye snug poor draw. Mistake totally of in chiefly.{' '}
            </p>
            <p>
              Justice visitor him entered for. Continue delicate as unlocked entirely mr relation diverted in. Known not end fully being style house.{' '}
            </p>
            <h5>Have any question? Contact us now:</h5>
            <div className="display-7 mt-4">
              <Link className="primary-hover mb-3 d-inline-block text-white" href="tel:+2518546308">
                (+251) 854-6308
              </Link>{' '}
              or
              <Link className="primary-hover mb-3 d-inline-block text-white" href="mailto:help@larexa.com">
                help@larexa.com
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ActionBox
