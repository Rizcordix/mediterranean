'use client'
import React from 'react'
import { TinySliderSettings } from 'tiny-slider'
import clients1 from '@/assets/images/clients/logos/2.png'
import clients2 from '@/assets/images/clients/logos/3.png'
import clients3 from '@/assets/images/clients/logos/4.png'
import clients4 from '@/assets/images/clients/logos/5.png'
import clients5 from '@/assets/images/clients/logos/6.png'
import clients6 from '@/assets/images/clients/logos/7.png'
import clients7 from '@/assets/images/clients/logos/8.png'
import clients8 from '@/assets/images/clients/logos/9.png'
import Image from 'next/image'
import dynamic from 'next/dynamic'
const TinySlider = dynamic(() => import('@/components/TinySlider'), { ssr: false })
import { Col, Container, Row } from 'react-bootstrap'

const Clients = () => {
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
    <section className="client p-0 mt-5 mt-md-0 position-relative z-index-9">
      <Container>
        <Row>
          <Col md={12}>
            <div className="tiny-slider">
              <TinySlider settings={courseSliderSettings}>
                {clients.map((client, idx) => (
                  <div className="item" key={idx}>
                    <Image className="w-75" src={client} alt="client" />
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

export default Clients
