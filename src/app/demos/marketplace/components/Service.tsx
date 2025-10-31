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
import Image from 'next/image'
import dynamic from 'next/dynamic'
const TinySlider = dynamic(() => import('@/components/TinySlider'), { ssr: false })
import { TinySliderSettings } from 'tiny-slider'
import { serviceData } from '../data'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Service = () => {
  const clients = [clients1, clients2, clients3, clients4, clients5, clients6, clients7, clients8]

  const courseSliderSettings: TinySliderSettings = {
    arrowKeys: true,
    gutter: 30,
    autoplayButtonOutput: false,
    nested: 'inner',
    autoplay: true,
    controls: false,
    mouseDrag: true,
    edgePadding: 2,
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
    <section className="bg-dark">
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col sm={2}>
            <h5 className="text-white">Trusted by 5M+ businesses.</h5>
          </Col>
          <Col sm={10}>
            <div className="tiny-slider">
              <TinySlider settings={courseSliderSettings}>
                {clients.map((client, idx) => (
                  <div className="item" key={idx}>
                    <Image className="w-75 mx-auto" src={client} alt="clients" />
                  </div>
                ))}
              </TinySlider>
            </div>
          </Col>
        </Row>
        <Row className="mt-4 text-center">
          <Col sm={12}>
            <h2 className="text-white text-center mt-5 mb-3">Browse 2M+ Professional Services to Get Your Job Done</h2>
          </Col>
          {serviceData.map((item, idx) => {
            return (
              <Col sm={6} lg={3} className="mt-30" key={idx}>
                <div className="feature-box bg-white shadow-hover rounded f-style-5 h-100 icon-grad">
                  <div className="feature-box-icon">
                    <i className={`${item.icon}`} />
                  </div>
                  <h3 className="feature-box-title">{item.title}</h3>
                  <p className="feature-box-desc">{item.description}</p>
                </div>
              </Col>
            )
          })}
        </Row>
        <Row>
          <Col sm={12} className="mt-2 mt-md-4">
            <div className="text-center">
              <Button variant="outline-white" className="mt-4">
                See All Freelancer Skills
              </Button>
              <small className="d-block mt-2">Gain Access to a Network of Top Industry Experts</small>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Service
