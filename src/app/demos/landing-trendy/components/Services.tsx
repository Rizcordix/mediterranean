import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Services = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row className="mt-3">
          <Col sm={6} md={4}>
            <div className="feature-box h-100 icon-grad">
              <div className="feature-box-icon">
                <i className="ti-brush-alt" />
              </div>
              <h3 className="feature-box-title">Graphic Design</h3>
              <p className="feature-box-desc">
                We provide digital transformation solutions, enabling companies to <strong>make their visions reality</strong>{' '}
              </p>
            </div>
          </Col>
          <Col sm={6} md={4}>
            <div className="feature-box h-100 icon-grad">
              <div className="feature-box-icon">
                <i className="ti-announcement" />
              </div>
              <h3 className="feature-box-title">Online Marketing</h3>
              <p className="feature-box-desc">Our aim to achieve the goal as we provide innovative ideas, designs and solutions to our clients </p>
            </div>
          </Col>
          <Col sm={6} md={4}>
            <div className="feature-box h-100 icon-grad">
              <div className="feature-box-icon">
                <i className="ti-bolt" />
              </div>
              <h3 className="feature-box-title">Web Development</h3>
              <p className="feature-box-desc">Helping our customers better manage their web presence in order to achieve greater success online.</p>
            </div>
          </Col>
          <Col sm={6} md={4}>
            <div className="feature-box h-100 icon-grad">
              <div className="feature-box-icon">
                <i className="ti-settings" />
              </div>
              <h3 className="feature-box-title">Management</h3>
              <p className="feature-box-desc">
                Increasing impression interested expression he my at respect invited greater request charmed warrant{' '}
              </p>
            </div>
          </Col>
          <Col sm={6} md={4}>
            <div className="feature-box h-100 icon-grad">
              <div className="feature-box-icon">
                <i className="ti-gallery" />
              </div>
              <h3 className="feature-box-title">Photography</h3>
              <p className="feature-box-desc">Placing assured be if removed it besides on far shed each high invited read are men over day family </p>
            </div>
          </Col>
          <Col sm={6} md={4}>
            <div className="feature-box h-100 icon-grad">
              <div className="feature-box-icon">
                <i className="ti-mobile" />
              </div>
              <h3 className="feature-box-title">Mobile Solutions</h3>
              <p className="feature-box-desc">Call in so want pure rank am dear were Marianne remarkably to continuing in surrounded diminution</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Services
