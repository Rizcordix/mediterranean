import Image from 'next/image'
import React from 'react'
import serviceImg from '@/assets/images/service/01.jpg'
import service2Img from '@/assets/images/service/02.jpg'
import service3Img from '@/assets/images/service/03.jpg'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Contact = () => {
  return (
    <section>
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col md={6}>
            <Row className="mt-4 mt-md-0">
              <Col xs={5} className="offset-1 px-2 mb-3 align-self-end">
                <Image
                  className="rounded aos"
                  data-aos="fade-up"
                  data-aos-delay={200}
                  data-aos-duration={1000}
                  data-aos-easing="ease-in-out"
                  src={serviceImg}
                  alt="serviceImg"
                />
              </Col>
              <Col xs={6} className="px-2 mb-3">
                <Image
                  className="rounded aos"
                  data-aos="fade-right"
                  data-aos-delay={200}
                  data-aos-duration={1000}
                  src={service2Img}
                  alt="service2Img"
                />
              </Col>
              <Col xs={7} className="px-2 mb-3">
                <div
                  className="rounded aos bg-grad p-2 p-sm-3 p-lg-4 p-xl-5 all-text-white"
                  data-aos="fade-left"
                  data-aos-delay={300}
                  data-aos-duration={1500}>
                  <span>Our goal:</span>
                  <h3 className="fw-bold">&quot;If we build it, they will come&quot;</h3>
                </div>
              </Col>
              <Col xs={5} className="align-self-start ps-2 mb-3">
                <Image
                  className="rounded aos"
                  data-aos="fade-down"
                  data-aos-delay={300}
                  data-aos-duration={1500}
                  src={service3Img}
                  alt="service3Img"
                />
              </Col>
            </Row>
          </Col>
          <Col md={6} className="ps-lg-5">
            <h2 className="h1">Get it done with the Larexa HTML5 template </h2>
            <p className="lead">
              Partnering with 500+ Fortune companies and mid-sized firms across enterprises, uniquely customized and{' '}
              <abbr title="title">scalable workforce solutions.</abbr>
            </p>
            <p>
              There is nothing that can stop you from achieving what you want, except yourself. If you devote yourself to it you will achieve your
              goal.
            </p>
            <div>
              <Button variant="dark">Contact us</Button>
              <Button variant="link">View Portfolio</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
