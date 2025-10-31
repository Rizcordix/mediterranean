'use client'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CountUp from 'react-countup'

const Count = () => {
  return (
    <section className="p-0 counter counter-small">
      <Container>
        <Row>
          <Col md={12}>
            <div className="bg-dark rounded py-5 all-text-white pattern-overlay-2">
              <Row>
                <Col md={3} xs={6} className="mb-4 mb-sm-0">
                  <div className="text-center">
                    <i className="display-6 ti-write" />
                    <h2
                      className="fw-bold mt-2 mb-0 purecounter"
                      data-purecounter-start={0}
                      data-purecounter-delay={10}
                      data-purecounter-duration={1}
                      data-purecounter-end={5257}>
                      <CountUp duration={1} start={0} end={5257} />
                    </h2>
                    <p className="mb-0">Lines of code</p>
                  </div>
                </Col>
                <Col md={3} xs={6} className="mb-4 mb-sm-0">
                  <div className="text-center">
                    <i className="display-6 ti-truck" />
                    <h2
                      className="fw-bold mt-2 mb-0 purecounter"
                      data-purecounter-start={0}
                      data-purecounter-delay={10}
                      data-purecounter-duration={1}
                      data-purecounter-end={865}>
                      <CountUp duration={1} start={0} end={865} />
                    </h2>
                    <p className="mb-0">Project Delivered</p>
                  </div>
                </Col>
                <Col md={3} xs={6}>
                  <div className="text-center">
                    <i className="display-6 ti-face-smile" />
                    <h2
                      className="fw-bold mt-2 mb-0 purecounter"
                      data-purecounter-start={0}
                      data-purecounter-delay={10}
                      data-purecounter-duration={1}
                      data-purecounter-end={127}>
                      <CountUp duration={1} start={0} end={127} />
                    </h2>
                    <p className="mb-0">Satisfied clients</p>
                  </div>
                </Col>
                <Col md={3} xs={6}>
                  <div className="text-center">
                    <i className="display-6 ti-cup" />
                    <h2
                      className="fw-bold mt-2 mb-0 purecounter"
                      data-purecounter-start={0}
                      data-purecounter-delay={80}
                      data-purecounter-duration={10}
                      data-purecounter-end={16}>
                      <CountUp duration={8} start={0} end={16} />
                    </h2>
                    <p className="mb-0">Awards won</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Count
