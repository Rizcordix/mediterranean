'use client'
import React from 'react'
import bgImg from '@/assets/images/bg/03.jpg'
import CountUp from 'react-countup'
import { Col, Container, Row } from 'react-bootstrap'

const Counters = () => {
  return (
    <>
      <section className="py-4">
        <Container>
          <Row>
            <Col md={3} xs={6} className="mb-4 mb-md-0">
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
            <Col md={3} xs={6} className="mb-4 mb-md-0">
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
                  <CountUp duration={10} start={0} end={16} />
                </h2>
                <p className="mb-0">Awards won</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-4 bg-light">
        <Container>
          <Row>
            <Col md={3} xs={6} className=" mb-4 mb-md-0">
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
            <Col md={3} xs={6} className="mb-4 mb-md-0">
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
                  <CountUp duration={10} start={0} end={16} />
                </h2>
                <p className="mb-0">Awards won</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-4">
        <Container>
          <Row>
            <Col md={3} xs={6} className=" mb-4 mb-md-0">
              <div className="text-center">
                <i className="text-grad display-6 ti-write" />
                <h2
                  className="text-grad fw-bold mt-2 mb-0 purecounter"
                  data-purecounter-start={0}
                  data-purecounter-delay={10}
                  data-purecounter-duration={1}
                  data-purecounter-end={5257}>
                  <CountUp duration={1} start={0} end={5257} />
                </h2>
                <p className="mb-0">Lines of code</p>
              </div>
            </Col>
            <Col md={3} xs={6} className=" mb-4 mb-md-0">
              <div className="text-center">
                <i className="text-grad display-6 ti-truck" />
                <h2
                  className="text-grad fw-bold mt-2 mb-0 purecounter"
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
                <i className="text-grad display-6 ti-face-smile" />
                <h2
                  className="text-grad fw-bold mt-2 mb-0 purecounter"
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
                <i className="text-grad display-6 ti-cup" />
                <h2
                  className="text-grad fw-bold mt-2 mb-0 purecounter"
                  data-purecounter-start={0}
                  data-purecounter-delay={80}
                  data-purecounter-duration={10}
                  data-purecounter-end={16}>
                  <CountUp duration={10} start={0} end={16} />
                </h2>
                <p className="mb-0">Awards won</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-4 bg-dark all-text-white">
        <Container>
          <Row>
            <Col md={3} xs={6} className=" mb-4 mb-md-0">
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
            <Col md={3} xs={6} className=" mb-4 mb-md-0">
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
                  <CountUp duration={10} start={0} end={16} />
                </h2>
                <p className="mb-0">Awards won</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-4 bg-grad all-text-white">
        <Container>
          <Row>
            <Col md={3} xs={6} className=" mb-4 mb-md-0">
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
            <Col md={3} xs={6} className=" mb-4 mb-md-0">
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
                  <CountUp duration={10} start={0} end={16} />
                </h2>
                <p className="mb-0">Awards won</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-4 bg-dark-grad all-text-white">
        <Container>
          <Row>
            <Col md={3} xs={6} className=" mb-4 mb-md-0">
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
            <Col md={3} xs={6} className=" mb-4 mb-md-0">
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
                  <CountUp duration={10} start={0} end={16} />
                </h2>
                <p className="mb-0">Awards won</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section
        className="py-5 all-text-white bg-overlay-dark-7"
        style={{ background: `url(${bgImg.src}) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center center' }}>
        <Container>
          <Row>
            <Col md={3} xs={6} className=" mb-4 mb-md-0">
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
            <Col md={3} xs={6} className=" mb-4 mb-md-0">
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
                  <CountUp duration={10} start={0} end={16} />
                </h2>
                <p className="mb-0">Awards won</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-4 bg-light">
        <Container>
          <Row>
            <Col md={3} xs={6} className=" mb-4 mb-md-0">
              <div className="text-center">
                <h2
                  className="fw-bold display-5 mb-0 purecounter"
                  data-purecounter-start={0}
                  data-purecounter-delay={10}
                  data-purecounter-duration={1}
                  data-purecounter-end={5257}>
                  <CountUp duration={1} start={0} end={5257} />
                </h2>
                <p className="mb-0">Lines of code</p>
              </div>
            </Col>
            <Col md={3} xs={6} className=" mb-4 mb-md-0">
              <div className="text-center">
                <h2
                  className="fw-bold display-5 mb-0 purecounter"
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
                <h2
                  className="fw-bold display-5 mb-0 purecounter"
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
                <h2
                  className="fw-bold display-5 mb-0 purecounter"
                  data-purecounter-start={0}
                  data-purecounter-delay={80}
                  data-purecounter-duration={10}
                  data-purecounter-end={16}>
                  <CountUp duration={10} start={0} end={16} />
                </h2>
                <p className="mb-0">Awards won</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-4 bg-dark all-text-white">
        <Container>
          <Row>
            <Col md={3} xs={6} className=" mb-3 mb-md-0">
              <div className="text-center mb-4 mb-sm-0">
                <h2
                  className="fw-bold mb-0 purecounter"
                  data-purecounter-start={0}
                  data-purecounter-delay={10}
                  data-purecounter-duration={1}
                  data-purecounter-end={5257}>
                  <CountUp duration={1} start={0} end={5257} />
                </h2>
                <p className="mb-0">Lines of code</p>
              </div>
            </Col>
            <Col md={3} xs={6} className=" mb-3 mb-md-0">
              <div className="text-center mb-4 mb-sm-0">
                <h2
                  className="fw-bold mb-0 purecounter"
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
                <h2
                  className="fw-bold mb-0 purecounter"
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
                <h2
                  className="fw-bold mb-0 purecounter"
                  data-purecounter-start={0}
                  data-purecounter-delay={80}
                  data-purecounter-duration={10}
                  data-purecounter-end={16}>
                  <CountUp duration={10} start={0} end={16} />
                </h2>
                <p className="mb-0">Awards won</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Counters
