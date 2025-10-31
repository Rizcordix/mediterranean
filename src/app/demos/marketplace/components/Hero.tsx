'use client'
import React from 'react'
import banner6 from '@/assets/images/banner/06.jpg'
import banner7 from '@/assets/images/banner/07.jpg'
import { TinySliderSettings } from 'tiny-slider'
import { renderToString } from 'react-dom/server'
import dynamic from 'next/dynamic'
const TinySlider = dynamic(() => import('@/components/TinySlider'), { ssr: false })
import { Button, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

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
            className="bg-overlay-dark-3 h-700 h-lg-900"
            style={{ backgroundImage: `url(${banner6.src})`, backgroundPosition: 'center center', backgroundSize: 'cover' }}>
            <Container className="h-100">
              <Row className="d-flex h-100">
                <Col md={8} lg={6} className="me-auto slider-content justify-content-center align-self-center align-items-start text-start">
                  <h2 className="animate__animated animate__fadeInUp animate__delay-1s text-white fw-bold display-2">Larexa Freelancers </h2>
                  <p className="animate__animated animate__fadeInUp animate__delay-2s lead text-white alt-font fst-italic d-none d-lg-block">
                    We aim to achieve the goal as we provide innovative ideas, designs, and multimedia solutions to our clients.{' '}
                  </p>
                  <form className="animate__animated animate__fadeInUp animate__delay-3s bg-white my-2 my-md-4 p-2 w-100 rounded shadow">
                    <div className="input-group">
                      <input
                        className="form-control rounded-end border-0 mb-0"
                        type="text"
                        name="search"
                        placeholder="Enter job title, skills, position..."
                      />
                      <button type="button" className="btn btn-grad m-0 rounded">
                        <span className="d-none d-md-block">Search</span>
                        <span className="d-md-none">
                          <i className="fa fa-search m-0" />
                        </span>
                      </button>
                    </div>
                  </form>
                  <p className="animate__animated animate__fadeInUp animate__delay-4s mt-3 lead text-white">
                    We help our customers better manage their web presence in order to achieve greater{' '}
                    <Link href="" className="fw-bold">
                      {' '}
                      success online.
                    </Link>
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
          <div
            className="bg-overlay-dark-3 h-700 h-lg-900"
            style={{ backgroundImage: `url(${banner7.src})`, backgroundPosition: 'center center', backgroundSize: 'cover' }}>
            <Container className="h-100">
              <Row className="d-flex h-100">
                <Col lg={7} className="justify-content-center align-self-center mx-auto slider-content text-center">
                  <h2 className="animate__animated animate__fadeInUp animate__delay-1s dealy-500 text-white fw-bold display-2">
                    Bringing the art to the cart
                  </h2>
                  <p className="animate__animated animate__fadeInUp animate__delay-2s lead text-white alt-font fst-italic d-none d-md-block">
                    It can be the packaging of an item or the design of its website and Applications. Creative alternative solutions.
                  </p>
                  <div className="animate__animated animate__fadeInUp mt-3 dealy-1500">
                    <Button variant="grad" className="">
                      Purchase Now!
                    </Button>
                    <Button variant="link" className="text-white">
                      Check live demo!
                    </Button>
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
