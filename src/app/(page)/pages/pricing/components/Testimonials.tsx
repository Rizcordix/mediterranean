'use client'
import React from 'react'
import { testimonialsData } from '../data'
import Image from 'next/image'
import dynamic from 'next/dynamic'
const TinySlider = dynamic(() => import('@/components/TinySlider'), { ssr: false })
import { TinySliderSettings } from 'tiny-slider'
import { Col, Container, Row } from 'react-bootstrap'

const Testimonials = () => {
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
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 3,
      },
    },
  }
  return (
    <>
      <section className="bg-light triangle-down py-4">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
              <h4 className="m-0">
                Our passion for customer excellence is just one reason why we are the market leader. We&apos;ve always worked very hard to
                <strong className="text-primary bold"> give our customers the best experience</strong> in dealing with our company.
              </h4>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="testimonials testimonials-border pb-4">
        <Container>
          <Row>
            <Col md={12}>
              <div className="tiny-slider">
                <TinySlider className="testi-full" settings={courseSliderSettings}>
                  {testimonialsData.map((item, idx) => (
                    <div className="item" key={idx}>
                      <div className="testimonials-wrap">
                        <div className="testi-text">
                          <p>{item.description}</p>
                          <div className="testi-avatar">
                            {' '}
                            <Image src={item.image} alt="avatar" />{' '}
                          </div>
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
    </>
  )
}

export default Testimonials
