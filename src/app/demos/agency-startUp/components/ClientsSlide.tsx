'use client'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { TinySliderSettings } from 'tiny-slider'
import { clientSlideData } from '../data'
import Image from 'next/image'
import dynamic from 'next/dynamic'
const TinySlider = dynamic(() => import('@/components/TinySlider'), { ssr: false })
import { Col, Container, Row } from 'react-bootstrap'

const ClientsSlide = () => {
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
    nav: true,
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
    <section className="testimonials">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="tiny-slider arrow-large arrow-round arrow-bordered">
              <TinySlider settings={courseSliderSettings}>
                {clientSlideData.map((item, idx) => (
                  <div className="item px-2 px-sm-5 testi-full testi-big" key={idx}>
                    <div className="testimonials-wrap">
                      <div className="testi-avatar">
                        {' '}
                        <Image src={item.image} alt="avatar" />{' '}
                      </div>
                      <div className="testi-text">
                        <p>{item.description}</p>
                        <span className="text-primary display-8">
                          <i className="fas fa-quote-left" />
                        </span>
                        <h6 className="mb-0 mt-3">{item.name}</h6>
                        <h6 className="small">{item.category}</h6>
                      </div>
                    </div>
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

export default ClientsSlide
