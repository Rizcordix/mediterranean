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
import { TinySliderSettings } from 'tiny-slider'
import dynamic from 'next/dynamic'
const TinySlider = dynamic(() => import('@/components/TinySlider'), { ssr: false })
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'

const Client = () => {
  const clients = [clients1, clients2, clients3, clients4, clients5, clients6, clients7, clients8]

  const courseSliderSettings: TinySliderSettings = {
    arrowKeys: true,
    gutter: 30,
    autoplayButtonOutput: false,
    nested: 'inner',
    autoplay: true,
    controls: false,
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
          <Col md={8} className="mx-auto text-center mb-5">
            <h2>Trusted by great companies</h2>
          </Col>
          <div className="tiny-slider">
            <TinySlider settings={courseSliderSettings}>
              {clients.map((client, idx) => (
                <div className="item" key={idx}>
                  <Image src={client} className="w-75" alt="client" />
                </div>
              ))}
            </TinySlider>
          </div>
        </Row>
      </Container>
    </section>
  )
}

export default Client
