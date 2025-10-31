'use client'
import React from 'react'
import imgBg7 from '@/assets/images/bg/07.jpg'
import dynamic from 'next/dynamic'
const GlightBox = dynamic(() => import('@/components/GlightBox'), { ssr: false })
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="p-0 h-600 h-lg-800 position-relative">
      <Container fluid className="p-0">
        <Row className="g-0">
          <Col md={3} className="bg-grad h-600 h-lg-800 d-none d-md-block">
            <Row className="h-100">
              <Col xs={12} className="pb-5 mx-auto d-flex">
                <div className="align-self-end all-text-white rotate-270 pb-5 mb-5">
                  <GlightBox
                    className="btn btn-white btn-round zoom-on-hover mx-2 align-middle d-inline-block"
                    data-glightbox
                    href="https://youtu.be/n_Cn8eFo7u8">
                    {' '}
                    <i className="fa fa-play" />
                  </GlightBox>
                  <div className="align-middle d-inline-block">
                    <h4 className="mb-0">Our Stories</h4>
                    <p className="mb-0">In 02:11 min</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col
            md={9}
            className="h-600 h-lg-800 bg-overlay-dark-2"
            style={{ background: `url(${imgBg7.src}) no-repeat center center`, backgroundSize: 'cover' }}>
            <Row className="h-100 m-0 justify-content-center align-items-center">
              <Col xs={8} className="offset-md-1 me-auto all-text-white">
                <h1 className="display-1 alt-font fst-italic">The Larexa</h1>
                <h1 className="display-5 fw-bold text-white">Passion, dedication, and a lot of coffee.</h1>
                <Link href="" className="btn btn-outline-white btn-lg mt-3">
                  Explore the services
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
