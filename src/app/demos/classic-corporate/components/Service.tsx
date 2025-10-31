'use client'
import Image from 'next/image'
import React from 'react'
import service5 from '@/assets/images/service/06.jpg'
import CountUp from 'react-countup'
import dynamic from 'next/dynamic'
const GlightBox = dynamic(() => import('@/components/GlightBox'), { ssr: false })
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Service = () => {
  return (
    <section>
      <Container className="h-100">
        <Row>
          <Col md={12} lg={6} className="align-self-center mb-5 mb-lg-0">
            <div className="title pb-4 text-start">
              <h2>We are a full service Creative agency</h2>
              <p className="mb-0">
                We are an insight and behavior driven creative marketing agency. A Full package Digital Creative Agency Specializing in: Video
                Production, Web Design, Branding, Brand Strategy, Content Marketing and Aerial Cinematography.{' '}
              </p>
            </div>
            <Row>
              <Col sm={6}>
                <div>
                  <h2
                    className="text-grad fw-bold display-4 mb-0 purecounter"
                    data-purecounter-start={0}
                    data-purecounter-delay={10}
                    data-purecounter-duration={1}
                    data-purecounter-end={5257}>
                    <CountUp duration={1} start={0} end={5257} />
                  </h2>
                  <p className="text-secondary fs-5">New accounts</p>
                </div>
              </Col>
              <Col sm={6}>
                <div>
                  <h2
                    className="text-grad fw-bold display-4 mb-0 purecounter"
                    data-purecounter-start={0}
                    data-purecounter-delay={10}
                    data-purecounter-duration={1}
                    data-purecounter-end={3200}>
                    <CountUp duration={1} start={0} end={3200} />
                  </h2>
                  <p className="text-secondary fs-5">Renewal accounts</p>
                </div>
              </Col>
            </Row>
            <p className="mb-4">
              Benefits are the rewards that go beyond the paycheck. We offer a selection of benefits that meet our employees’ needs and expectation at
              different life stages. Examples for benefits at Larexa are retirement benefits, health care and accident insurance.
            </p>
            <div className="list-group-inline list-group-number list-unstyled mb-5 mb-lg-0">
              <Link href="" className="list-group-item list-group-item-action">
                <span>1</span> Career Development
              </Link>
              <Link href="" className="list-group-item list-group-item-action">
                <span>2</span> Future Provision
              </Link>
              <Link href="" className="list-group-item list-group-item-action">
                <span>3</span> Flexible Working Hours{' '}
              </Link>
              <Link href="" className="list-group-item list-group-item-action">
                <span>4</span> Health &amp; Fitness{' '}
              </Link>
              <Link href="" className="list-group-item list-group-item-action">
                <span>5</span> Employee Gifts{' '}
              </Link>
              <Link href="" className="list-group-item list-group-item-action">
                <span>6</span> Welcome Aboard{' '}
              </Link>
            </div>
          </Col>
          <Col md={10} lg={6} className="mx-md-auto align-self-center text-center position-relative">
            <Image className="rounded up-on-hover shadow shadow-hover" src={service5} alt="service5" />
            <div className="position-absolute start-0 bottom-0 ms-4 ms-md-n2 mb-3">
              <GlightBox className="btn btn-grad" data-glightbox href="https://youtu.be/n_Cn8eFo7u8">
                {' '}
                <i className="fa fa-play text-white" />
                Play Video{' '}
              </GlightBox>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Service
