import Image from 'next/image'
import React from 'react'
import service1 from '@/assets/images/service/01.jpg'
import service2 from '@/assets/images/service/02.jpg'
import service3 from '@/assets/images/service/03.jpg'
import service4 from '@/assets/images/service/04.jpg'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Solutions = () => {
  return (
    <section>
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col lg={6} md={12}>
            <div className="title text-start pb-0">
              <span className="pre-title">Why client choose us?</span>
              <h2>
                We Provide best of the <span className="text-primary"> best solutions!</span>
              </h2>
              <p>
                With years of experience Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.{' '}
              </p>
              <Button variant="grad" className="me-3">
                Explore services!
              </Button>
              <Link className="primary-hover text-light-gray" href="">
                Request a quote
              </Link>
            </div>
          </Col>
          <Col md={6}>
            <Row className="mt-4 mt-md-0">
              <Col xs={7} className="ps-4 pe-2 mb-3">
                <Image
                  className="rounded aos"
                  data-aos="fade-right"
                  data-aos-delay={200}
                  data-aos-duration={1000}
                  data-aos-easing="ease-in-out"
                  src={service2}
                  alt="service"
                />
              </Col>
              <Col xs={5} className="align-self-end ps-2 mb-3">
                <Image className="rounded aos" data-aos="fade-down" data-aos-delay={200} data-aos-duration={1000} src={service1} alt="service" />
              </Col>
              <Col xs={5} className="offset-1 px-2 mb-3">
                <Image className="rounded aos" data-aos="fade-up" data-aos-delay={300} data-aos-duration={1500} src={service3} alt="service" />
              </Col>
              <Col xs={5} className="px-2 mb-3">
                <Image className="rounded aos" data-aos="fade-left" data-aos-delay={300} data-aos-duration={1500} src={service4} alt="service" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Solutions
