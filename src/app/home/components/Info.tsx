import Image from 'next/image'
import React from 'react'
import service1 from '@/assets/images/service/01.jpg'
import service2 from '@/assets/images/service/02.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Info = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col md={6} className="pe-lg-5">
            <div className="mt-5 mt-md-0">
              <p className="bg-dark small text-white rounded px-2 py-0 mb-2 d-inline-block">Marketing</p>
              <h2 className="h1 fw-bold">Engaging, purposeful, and creative.</h2>
              <div className="d-flex mt-3">
                <h6 className="display-1 opacity-2 me-3 align-self-start fw-bold">01</h6>
                <div className="align-self-start">
                  <p>
                    A thing that looks beautiful and attractive always grabs eyeballs. The real challenge before companies in today&apos;s world is to
                    make their products and services appealing to everyone. thing that looks beautiful and attractive always grabs eyeballs.
                  </p>
                  <Link className="primary-hover" href="">
                    Read More <i className="fa fa-long-arrow-right ms-1" />
                  </Link>
                </div>
              </div>
            </div>
            <Image className="rounded mt-4 shadow-hover up-on-hover" src={service1} alt="service" />
          </Col>
          <Col md={6} className="ps-lg-5 mt-5 mt-md-0">
            <Image className="rounded mb-4 shadow-hover up-on-hover" src={service2} alt="service" />
            <div>
              <p className="bg-dark small text-white rounded px-2 py-0 mb-2 d-inline-block">Advertising</p>
              <h2 className="h1 fw-bold">Expect nothing less than perfect.</h2>
              <div className="d-flex mt-3">
                <h6 className="display-1 opacity-2 me-3 align-self-start fw-bold">02</h6>
                <div className="align-self-start">
                  <p>
                    We have a strong foundation built on legacy and emerging technologies, including excellent track record of on-time deliveries. We
                    are emerging as one of the most promising private talent sourcing and management firms in the world.
                  </p>
                  <Link className="primary-hover" href="">
                    Read More <i className="fa fa-long-arrow-right ms-1" />
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Info
