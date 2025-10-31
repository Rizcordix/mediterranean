import Image from 'next/image'
import React from 'react'
import service1 from '@/assets/images/service/01.jpg'
import { Col, Container, Row } from 'react-bootstrap'

const ServiceBlock = () => {
  return (
    <section className="service-block">
      <Container>
        <Row>
          <Col sm={12} lg={6} className="align-self-center">
            <div className="title text-start pb-4 p-lg-0 ">
              <h2>
                Our services reflect our knowledge and in <span className="text-primary"> depth understanding</span> of the project
              </h2>
              <p>
                Larexa; an innovative Internet marketing solutions company that offers comprehensive web development, SMO services, SEO strategies and
                various other types of Internet marketing related services.{' '}
              </p>
              <Row>
                <Col xs={6}>
                  <ul className="list-group list-group-borderless list-group-icon-primary-bg">
                    <li className="list-group-item">
                      <i className="fa fa-check" />
                      Up to 10 users monthly
                    </li>
                    <li className="list-group-item">
                      <i className="fa fa-check" />
                      Unlimited updates
                    </li>
                    <li className="list-group-item">
                      <i className="fa fa-check" />
                      Free host &amp; domain included
                    </li>
                  </ul>
                </Col>
                <Col xs={6}>
                  <ul className="list-group list-group-borderless list-group-icon-primary-bg">
                    <li className="list-group-item">
                      <i className="fa fa-check" />
                      24/7 dedicated Support{' '}
                    </li>
                    <li className="list-group-item">
                      <i className="fa fa-check" />
                      Unlimited Storage usage
                    </li>
                    <li className="list-group-item">
                      <i className="fa fa-check" />
                      Up to 10 user register
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
          </Col>
          <Col md={10} lg={6} className="mx-md-auto align-self-center">
            <Image className="img-fluid" src={service1} alt="service" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ServiceBlock
