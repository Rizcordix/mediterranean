'use client'
import bg1Image from '@/assets/images/bg/01.jpg'
import bg4Image from '@/assets/images/bg/04.jpg'
import dynamic from 'next/dynamic'
const TinySlider = dynamic(() => import('@/components/TinySlider'), { ssr: false })
import Image from 'next/image'
import { TinySliderSettings } from 'tiny-slider'
import { whyUsData } from '../data'
import { Col, Container, Row } from 'react-bootstrap'

const WhyUs = () => {
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
    <section className="why-us p-0">
      <Container fluid>
        <Row>
          <Col
            lg={6}
            className="d-none d-lg-block bg-light p-0"
            style={{ background: `url(${bg1Image.src}) no-repeat`, backgroundSize: 'cover' }}></Col>
          <Col lg={6} md={12} className="bg-dark px-4 py-5 p-lg-5 text-white">
            <div className="h-100">
              <div className="title text-start p-0">
                <span className="pre-title">Ok! So why our client trust us?</span>
                <h2 className="text-white">We Provide best of the best solutions for any of your business needs!</h2>
                <p>
                  With years of experience Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur.{' '}
                </p>
              </div>
              <Row>
                <Col>
                  <ul className="list-group list-group-borderless mb-0">
                    <li className="list-group-item text-white">
                      <i className="fa fa-check" />
                      We provide ipsum dolor sit amet
                    </li>
                    <li className="list-group-item text-white">
                      <i className="fa fa-check" />
                      consectetur adipisicing elit sed do{' '}
                    </li>
                    <li className="list-group-item text-white">
                      <i className="fa fa-check" />
                      eiusmod tempor incididunt ut labore{' '}
                    </li>
                    <li className="list-group-item text-white">
                      <i className="fa fa-check" />
                      magna et dolore aliqua Ut enim ad{' '}
                    </li>
                  </ul>
                </Col>
                <Col>
                  <ul className="list-group list-group-borderless mb-0">
                    <li className="list-group-item text-white">
                      <i className="fa fa-check" />
                      commodo exea consequat Duis aute{' '}
                    </li>
                    <li className="list-group-item text-white">
                      <i className="fa fa-check" />
                      irure dolor in reprehenderit voluptate
                    </li>
                    <li className="list-group-item text-white">
                      <i className="fa fa-check" />
                      velit esse cillum dolore eu fugiat nulla
                    </li>
                    <li className="list-group-item text-white">
                      <i className="fa fa-check" />
                      Excepteur sint occaecat cupidatat non.
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row className="testimonials">
          <Col lg={6} md={12} className="bg-light px-4 py-5 p-lg-5">
            <div className="h-100">
              <div className="title text-center p-0">
                <span className="pre-title">Ok! So why our client trust us?</span>
                <h2>We Provide best of the best solutions for any of your business needs!</h2>
              </div>
              <Row>
                <div className="tiny-slider testi-full dots-dark">
                  <TinySlider settings={courseSliderSettings}>
                    {whyUsData.map((item, idx) => (
                      <div className="item" key={idx}>
                        <div className="testimonials-wrap">
                          <div className="testi-avatar">
                            {' '}
                            <Image src={item.image} alt="avatar" />{' '}
                          </div>
                          <div className="testi-text">
                            <p>{item.description}</p>
                            <span className="display-7 text-primary">
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
              </Row>
            </div>
          </Col>
          <Col
            lg={6}
            className="d-none d-lg-block bg-light p-0"
            style={{ background: `url(${bg4Image.src}) no-repeat`, backgroundSize: 'cover' }}></Col>
        </Row>
      </Container>
    </section>
  )
}

export default WhyUs
