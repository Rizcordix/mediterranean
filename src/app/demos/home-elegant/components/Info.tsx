import Image from 'next/image'
import React from 'react'
import blog5 from '@/assets/images/blog/05.jpg'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Info = () => {
  return (
    <section>
      <Container>
        <Row className="class">
          <Col sm={6} className="d-none d-lg-block">
            <Image className="rounded" src={blog5} alt="blog5" />
          </Col>
          <Col lg={6} className="ps-3 ps-md-5">
            <h2 className="mb-4 h1">Engaging, purposeful, and creative.</h2>
            <p className="lead">
              Placing assured be if removed it besides on. Far shed each high read are men over day. Afraid we praise lively he suffer family estate
              order up in of in ready.
            </p>
            <div className="mt-5">
              <div className="feature-box mt-3 f-style-4 h-100 icon-grad">
                <div className="feature-box-icon">
                  <i className="ti-panel" />
                </div>
                <h3 className="feature-box-title mb-0">WordPress know-how</h3>
                <p className="feature-box-desc">Our aim to achieve the goal as we provide innovative ideas, designs and solutions to our clients </p>
              </div>
              <div className="feature-box mt-3 f-style-4 h-100 icon-grad">
                <div className="feature-box-icon">
                  <i className="ti-harddrives" />
                </div>
                <h3 className="feature-box-title mb-0">Every issue solved</h3>
                <p className="feature-box-desc">Call in so want pure rank am dear were. Remarkably to continuing in surrounded diminution on </p>
              </div>
              <div className="feature-box mt-3 f-style-4 h-100 icon-grad">
                <div className="feature-box-icon">
                  <i className="ti-package" />
                </div>
                <h3 className="feature-box-title mb-0">Client Satisfaction</h3>
                <p className="feature-box-desc">In unfeeling existence objection immediate repulsive on he in Imprudence comparison uncommonly</p>
              </div>
            </div>
            <Button variant="grad" className="text-white mb-0 mt-3">
              View other feature
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Info
