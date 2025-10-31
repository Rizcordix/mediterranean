'use client'
import React from 'react'
import service10 from '@/assets/images/service/10.jpg'
import Typist from 'react-text-typist'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Hero = () => {
  return (
    <section className="p-0 position-relative ">
      <Container fluid className="d-flex h-100 w-100">
        <Row className="justify-content-between align-items-center w-100">
          <Col md={5} className="d-none d-md-block p-0 ">
            <figure className="w-100 ie-height-900">
              <svg
                version="1.1"
                id="Layer_2"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 881.8 917.9"
                xmlSpace="preserve">
                <path
                  id="XMLID_6_"
                  fill="url(#BgGradient)"
                  d="M0,39.6c0,0,171-121.5,264,64.5s508.5,178.5,508.5,178.5s240-6-6,228S816,755.1,657,830.1
								s-309,106.5-445.5,76.5C75,876.6,0,717.6,0,717.6V39.6z"
                />
                <path id="XMLID_5_" className="fill-dark" d="M0,291.1c0,0,133.5-100.5,169.5,91.5s103.5,204,81,283.5S0,832.6,0,832.6V291.1z" />
                <g id="XMLID_3_">
                  <defs>
                    <rect id="XMLID_11_" x={175} y={18} width={650} height={850} />
                    <linearGradient id="BgGradient">
                      <stop className="fill-grad-start" offset="0%" />
                      <stop className="fill-grad-end" offset="100%" />
                    </linearGradient>
                  </defs>
                  <clipPath id="XMLID_51_">
                    <use xlinkHref="#XMLID_11_" style={{ overflow: 'visible' }} />
                  </clipPath>
                  <g id="XMLID_4_" className="st2">
                    <image
                      style={{ overflow: 'visible' }}
                      width={650}
                      height={850}
                      id="XMLID_16_"
                      xlinkHref={service10.src}
                      transform="matrix(0.9999 0 0 0.9999 174.9682 17.8254)"></image>
                  </g>
                </g>
              </svg>
            </figure>
          </Col>
          <Col md={7} className="offset-lg-1 col-lg-5 mt-5 mt-md-0 me-auto">
            <h6>— Welcome to my world</h6>
            <h5 className="display-4 fw-normal cd-headline clip clip-dark big-clip is-full-width">
              <span className="pt-0">Howdy, I am Maria</span>
              <br />
              <span className="pt-0">A,</span>
              <Typist
                className="typed text-end text-primary"
                sentences={['Blogger', 'Traveler', 'Photographer']}
                typingSpeed={1500}
                deletingSpeed={700}
                showCursor={true}
                startDelay={100}
                cursorSmooth
                pauseTime={2500}
              />
            </h5>
            <p className="h6 text-light-gray mb-4 fw-normal">
              I’ve found a way to get paid for my favorite hobby, and do so while following my dream of traveling the world.
            </p>
            <Button variant="grad" className="me-4 mb-3 mb-sm-0">
              Know more about me!
            </Button>
          </Col>
          <Col md={2} className="d-none d-lg-block p-0 position-absolute end-0 top-0 z-index-n9">
            <figure className="w-100 ie-height-900">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 326 800"
                enableBackground="new 0 0 326 800"
                xmlSpace="preserve">
                <defs>
                  <linearGradient id="BgGradientRight">
                    <stop className="fill-grad-start" offset="0%" />
                    <stop className="fill-grad-end" offset="100%" />
                  </linearGradient>
                </defs>
                <polygon fill="url(#BgGradientRight)" points="0,0 -60,0 60.3,49.9 -56.2,49.9 " />
                <rect x={120} y={350} fill="#f0f2f9" width={100} height={10} />
                <rect x={120} y={330} fill="#f0f2f9" width={100} height={10} />
                <rect x={120} y={310} fill="#f0f2f9" width={100} height={10} />
                <circle fill="none" stroke="url(#BgGradientRight)" strokeWidth={8} strokeMiterlimit={10} cx="147.5" cy={700} r={32} />
              </svg>
            </figure>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
