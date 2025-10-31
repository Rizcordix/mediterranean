'use client'
import React from 'react'
import banner5 from '@/assets/images/banner/05.jpg'
import banner2 from '@/assets/images/banner/02.jpg'
import dynamic from 'next/dynamic'
const TinySlider = dynamic(() => import('@/components/TinySlider'), { ssr: false })
import { TinySliderSettings } from 'tiny-slider'
import { renderToString } from 'react-dom/server'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Hero = () => {
  const courseSliderSettings: TinySliderSettings = {
    arrowKeys: true,
    gutter: 30,
    autoplayButtonOutput: false,
    nested: 'inner',
    controlsText: [renderToString(<i className="fas fa-chevron-left" />), renderToString(<i className="fas fa-chevron-right" />)],
    autoplay: true,
    controls: true,
    edgePadding: 2,
    mouseDrag: true,
    loop: true,
    items: 1,
    nav: false,
    responsive: {
      1: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
  }
  return (
    <section className="p-0">
      <div className="tiny-slider arrow-dark arrow-large arrow-transparent arrow-hover">
        <TinySlider settings={courseSliderSettings}>
          <div
            className="h-400 h-lg-700 bg-overlay-dark-2"
            style={{ backgroundImage: `url(${banner5.src})`, backgroundPosition: 'center center', backgroundSize: 'cover' }}>
            <Container className="h-100">
              <Row className="d-flex h-100">
                <Col lg={8} xl={6} className="me-auto slider-content justify-content-center align-self-center align-items-start text-start">
                  <h2 className="animate__animated animate__fadeInUp animate__delay-1s display-2 fw-bold text-white">
                    We are creating smart websites.
                  </h2>
                  <h3 className="animate__animated animate__fadeInUp animate__delay-2s text-white display-7 alt-font fst-italic mb-2 my-md-4">
                    Crafting visually stunning memorable experiences for the web
                  </h3>
                  <div className="animate__animated animate__fadeInUp animate__delay-3s mt-3 dealy-1500">
                    <Button variant="grad">Purchase Now!</Button>{' '}
                    <Button variant="link" className=" text-white">
                      Check live demo!
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div
            className="h-400 h-lg-700 bg-overlay-dark-2"
            style={{ backgroundImage: `url(${banner2.src})`, backgroundPosition: 'center top', backgroundSize: 'cover' }}>
            <Container className="h-100">
              <Row className="d-flex h-100">
                <Col md={8} className="justify-content-center align-self-center align-items-start mx-auto">
                  <div className="slider-content text-center ">
                    <h3 className="animate__animated animate__fadeInUp animate__delay-1s display-7 text-white alt-font fst-italic">
                      Build a very unique and professional website
                    </h3>
                    <h2 className="animate__animated animate__fadeInUp animate__delay-2s display-3 fw-bold text-white">
                      We’re good. Just ask our moms.
                    </h2>
                    <div className="animate__animated animate__fadeInUp animate__delay-3s mt-3 dealy-1500">
                      <Button variant="grad">Contact us</Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </TinySlider>
      </div>
    </section>
  )
}

export default Hero
