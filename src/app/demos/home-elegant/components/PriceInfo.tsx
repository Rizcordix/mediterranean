import Link from 'next/link'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const PriceInfo = () => {
  return (
    <section className="mt-n9 pb-0 z-index-9 position-relative">
      <Container>
        <Row className="bg-white shadow m-0 p-3 p-lg-5 rounded">
          <Col md={4} className="mb-4 mb-md-0">
            <h2 className="h1">30 days*</h2>
            <h3>money-back guarantee</h3>
            <Button variant="dark" className="mt-3" href="">
              Create account
            </Button>
            <div className="small mt-3">
              <span className="text-primary">*</span> Read our <Link href="">Terms and Conditions</Link>
            </div>
          </Col>
          <Col md={4}>
            <ul className="list-group list-group-borderless list-group-icon-primary-bg">
              <li className="list-group-item">
                <i className="fa fa-check" /> All plans come with unlimited download
              </li>
              <li className="list-group-item">
                <i className="fa fa-check" /> After the 30-day free trial, you have the option to pick your plan and pay monthly
              </li>
              <li className="list-group-item">
                <i className="fa fa-check" /> All plans come with 256-bit SSL security, and all our key features tasks
              </li>
              <li className="list-group-item">
                <i className="fa fa-check" /> All our key features tasks, time tracking, etc
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <ul className="list-group list-group-borderless list-group-icon-primary-bg">
              <li className="list-group-item">
                <i className="fa fa-check" /> All our key features tasks, time tracking, etc.
              </li>
              <li className="list-group-item">
                <i className="fa fa-check" /> Pay via credit card or annually via credit card or invoice
              </li>
              <li className="list-group-item">
                <i className="fa fa-check" /> Only active projects count toward your plan&apos;s project limit
              </li>
              <li className="list-group-item">
                <i className="fa fa-check" /> Upgrade, downgrade, or cancel anytime
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default PriceInfo
