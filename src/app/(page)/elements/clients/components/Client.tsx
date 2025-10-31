'use client'
import React from 'react'
import clients1 from '@/assets/images/clients/01.png'
import clients2 from '@/assets/images/clients/02.png'
import clients3 from '@/assets/images/clients/03.png'
import clients4 from '@/assets/images/clients/04.png'
import clients5 from '@/assets/images/clients/05.png'
import clients6 from '@/assets/images/clients/06.png'
import clients7 from '@/assets/images/clients/07.png'
import clients8 from '@/assets/images/clients/08.png'
import clientsLight1 from '@/assets/images/clients/01-light.png'
import clientsLight2 from '@/assets/images/clients/02-light.png'
import clientsLight3 from '@/assets/images/clients/03-light.png'
import clientsLight4 from '@/assets/images/clients/04-light.png'
import clientsLight5 from '@/assets/images/clients/05-light.png'
import clientsLight6 from '@/assets/images/clients/06-light.png'
import clientsLight7 from '@/assets/images/clients/07-light.png'
import clientsLight8 from '@/assets/images/clients/08-light.png'
import { TinySliderSettings } from 'tiny-slider'
import { renderToString } from 'react-dom/server'
import dynamic from 'next/dynamic'
const TinySlider = dynamic(() => import('@/components/TinySlider'), { ssr: false })
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'

const LightBackgroundClient = () => {
  const clients = [clients1, clients2, clients3, clients4, clients5, clients6, clients7, clients8]

  const courseSliderSettings: TinySliderSettings = {
    arrowKeys: true,
    gutter: 30,
    autoplayButtonOutput: false,
    nested: 'inner',
    autoplay: true,
    controls: true,
    controlsText: [renderToString(<i className="fas fa-chevron-left" />), renderToString(<i className="fas fa-chevron-right" />)],
    edgePadding: 2,
    mouseDrag: true,
    loop: true,
    items: 1,
    nav: false,
    responsive: {
      1: {
        items: 2,
      },
      576: {
        items: 3,
      },
      768: {
        items: 4,
      },
      992: {
        items: 5,
      },
      1200: {
        items: 6,
      },
    },
  }
  return (
    <section className="client">
      <Container>
        <Row>
          <Col md={12}>
            <h5 className="mb-5 text-center">Client with light background</h5>
            <div className="tiny-slider arrow-hover arrow-dark">
              <TinySlider settings={courseSliderSettings}>
                {clients.map((client, idx) => (
                  <div className="item" key={idx}>
                    <Image width={128} height={42} src={client} alt="client" />
                  </div>
                ))}
              </TinySlider>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

const DarkBackgroundClient = () => {
  const clients = [clients1, clients2, clients3, clients4, clients5, clients6, clients7, clients8]

  const courseSliderSettings: TinySliderSettings = {
    arrowKeys: true,
    gutter: 30,
    autoplayButtonOutput: false,
    nested: 'inner',
    autoplay: true,
    controls: true,
    controlsText: [renderToString(<i className="fas fa-chevron-left" />), renderToString(<i className="fas fa-chevron-right" />)],
    edgePadding: 2,
    mouseDrag: true,
    loop: true,
    items: 1,
    nav: false,
    responsive: {
      1: {
        items: 2,
      },
      576: {
        items: 3,
      },
      768: {
        items: 4,
      },
      992: {
        items: 5,
      },
      1200: {
        items: 6,
      },
    },
  }
  return (
    <section className="client bg-dark">
      <Container>
        <Row>
          <Col md={12}>
            <h5 className="mb-5 text-center text-white">Client with dark background</h5>
            <div className="tiny-slider arrow-hover arrow-white">
              <TinySlider settings={courseSliderSettings}>
                {clients.map((client, idx) => (
                  <div className="item" key={idx}>
                    <Image width={128} height={42} src={client} alt="client" />
                  </div>
                ))}
              </TinySlider>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

const GradientBackgroundClient = () => {
  const clients = [clientsLight1, clientsLight2, clientsLight3, clientsLight4, clientsLight5, clientsLight6, clientsLight7, clientsLight8]

  const courseSliderSettings: TinySliderSettings = {
    arrowKeys: true,
    gutter: 30,
    autoplayButtonOutput: false,
    nested: 'inner',
    autoplay: true,
    controls: true,
    controlsText: [renderToString(<i className="fas fa-chevron-left" />), renderToString(<i className="fas fa-chevron-right" />)],
    edgePadding: 2,
    mouseDrag: true,
    loop: true,
    items: 1,
    nav: false,
    responsive: {
      1: {
        items: 2,
      },
      576: {
        items: 3,
      },
      768: {
        items: 4,
      },
      992: {
        items: 5,
      },
      1200: {
        items: 6,
      },
    },
  }
  return (
    <section className="client bg-grad">
      <Container>
        <Row>
          <Col md={12}>
            <h5 className="mb-5 text-center text-white">Client with gradient background</h5>
            <div className="tiny-slider arrow-hover arrow-dark">
              <TinySlider settings={courseSliderSettings}>
                {clients.map((client, idx) => (
                  <div className="item" key={idx}>
                    <Image width={128} height={42} src={client} alt="client" />
                  </div>
                ))}
              </TinySlider>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

const Client = () => {
  return (
    <>
      <LightBackgroundClient />
      <DarkBackgroundClient />
      <GradientBackgroundClient />
    </>
  )
}

export default Client
