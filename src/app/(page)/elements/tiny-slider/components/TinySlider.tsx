'use client'

import dynamic from 'next/dynamic'

const TinySlider = dynamic(() => import('@/components/TinySlider'), { ssr: false })
import { Col, Container, Row } from 'react-bootstrap'
import { arrowsSliderSettings, basicSliderSettings, defaultSliderSettings, dotsPositionSliderSettings } from '../data'

const AllTinySlider = () => {
  const Slides = ['Slide 1', 'Slide 2', 'Slide 3', 'slide 4']
  const Slides2 = ['Slide 1', 'Slide 2']
  return (
    <>
      <section className="pt-5 pb-0">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="alert alert-warning mb-0" role="alert">
                <p className="mb-0">
                  This page demonstrates tiny Slider functionality, See our Documentation for a detailed technical explanation. We have provided
                  slider data attributes so you don&apos;t need to play with JavaScrips or CSS. The list of all data attributes type name and
                  it&apos;s descriptions are provided in our documentation.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col xs={12} className="mb-6">
              <h4 className="mb-4">Tiny Slider basic</h4>
              <div className="tiny-slider">
                <TinySlider settings={basicSliderSettings}>
                  {Slides.map((slide, idx) => (
                    <div className="item" key={idx}>
                      {' '}
                      <div className="p-8 bg-light">
                        <h6 className="position-absolute top-50 start-50 translate-middle text-body">{slide}</h6>
                      </div>{' '}
                    </div>
                  ))}
                </TinySlider>
              </div>
            </Col>
            <Col xs={12} className="mb-6">
              <h4 className="mb-4">Default slider with arrow and dots</h4>
              <div className="tiny-slider">
                <TinySlider settings={defaultSliderSettings}>
                  {Slides.map((slide, idx) => (
                    <div className="item" key={idx}>
                      {' '}
                      <div className="p-8 bg-dark">
                        <h6 className="position-absolute top-50 start-50 translate-middle text-body">{slide}</h6>
                      </div>{' '}
                    </div>
                  ))}
                </TinySlider>
              </div>
            </Col>
            <Col xs={12}>
              <h3 className="mb-5">Slider dots options</h3>
            </Col>
            <Col sm={6} md={4} lg={3} className="mb-6">
              <h5 className="mb-4">Dots position default</h5>
              <div className="tiny-slider">
                <TinySlider settings={dotsPositionSliderSettings}>
                  {Slides2.map((slide, idx) => (
                    <div className="item" key={idx}>
                      {' '}
                      <div className="p-7 bg-light position-relative">
                        <h6 className="position-absolute top-50 start-50 translate-middle text-body">{slide}</h6>
                      </div>{' '}
                    </div>
                  ))}
                </TinySlider>
              </div>
            </Col>
            <Col sm={6} md={4} lg={3} className="mb-6">
              <h5 className="mb-4">Dots position inside</h5>
              <div className="tiny-slider dots-inside">
                <TinySlider settings={dotsPositionSliderSettings}>
                  {Slides2.map((slide, idx) => (
                    <div className="item" key={idx}>
                      {' '}
                      <div className="p-7 bg-light position-relative">
                        <h6 className="position-absolute top-50 start-50 translate-middle text-body">{slide}</h6>
                      </div>{' '}
                    </div>
                  ))}
                </TinySlider>
              </div>
            </Col>
            <Col sm={6} md={4} lg={3} className="mb-6">
              <h5 className="mb-4">Dots primary</h5>
              <div className="tiny-slider dots-primary">
                <TinySlider settings={dotsPositionSliderSettings}>
                  {Slides2.map((slide, idx) => (
                    <div className="item" key={idx}>
                      {' '}
                      <div className="p-7 bg-light position-relative">
                        <h6 className="position-absolute top-50 start-50 translate-middle text-body">{slide}</h6>
                      </div>{' '}
                    </div>
                  ))}
                </TinySlider>
              </div>
            </Col>
            <Col sm={6} md={4} lg={3} className="mb-6">
              <h5 className="mb-4">Dots white</h5>
              <div className="tiny-slider dots-white">
                <TinySlider settings={dotsPositionSliderSettings}>
                  {Slides2.map((slide, idx) => (
                    <div className="item" key={idx}>
                      {' '}
                      <div className="p-7 bg-light position-relative">
                        <h6 className="position-absolute top-50 start-50 translate-middle text-body">{slide}</h6>
                      </div>{' '}
                    </div>
                  ))}
                </TinySlider>
              </div>
              <div className="bg-dark pb-5 p-4" />
            </Col>
            <Col sm={6} md={4} lg={3} className="mb-6">
              <h5 className="mb-4">Dots dark</h5>
              <div className="tiny-slider dots-dark">
                <TinySlider settings={dotsPositionSliderSettings}>
                  {Slides2.map((slide, idx) => (
                    <div className="item" key={idx}>
                      {' '}
                      <div className="p-7 bg-light position-relative">
                        <h6 className="position-absolute top-50 start-50 translate-middle text-body">{slide}</h6>
                      </div>{' '}
                    </div>
                  ))}
                </TinySlider>
              </div>
            </Col>
            <Col sm={6} md={4} lg={3} className="mb-6">
              <h5 className="mb-4">Dots bordered</h5>
              <div className="tiny-slider dots-bordered">
                <TinySlider settings={dotsPositionSliderSettings}>
                  {Slides2.map((slide, idx) => (
                    <div className="item" key={idx}>
                      {' '}
                      <div className="p-7 bg-light position-relative">
                        <h6 className="position-absolute top-50 start-50 translate-middle text-body">{slide}</h6>
                      </div>{' '}
                    </div>
                  ))}
                </TinySlider>
              </div>
            </Col>
            <Col sm={6} md={4} lg={3} className="mb-6">
              <h5 className="mb-4">Dots bordered white</h5>
              <div className="tiny-slider dots-white dots-bordered">
                <TinySlider settings={dotsPositionSliderSettings}>
                  {Slides2.map((slide, idx) => (
                    <div className="item" key={idx}>
                      {' '}
                      <div className="p-7 bg-light position-relative">
                        <h6 className="position-absolute top-50 start-50 translate-middle text-body">{slide}</h6>
                      </div>{' '}
                    </div>
                  ))}
                </TinySlider>
              </div>
              <div className="bg-dark pb-5 p-4" />
            </Col>
            <Col xs={12}>
              <h3 className="my-5">Slider navs(arrows) options</h3>
            </Col>
            <Col sm={6} md={4} lg={3} className="mb-6">
              <h5 className="mb-4">Arrow default</h5>
              <div className="tiny-slider">
                <TinySlider settings={arrowsSliderSettings}>
                  {Slides2.map((slide, idx) => (
                    <div className="item" key={idx}>
                      {' '}
                      <div className="p-7 bg-dark position-relative">
                        <h6 className="position-absolute top-50 start-50 translate-middle text-body">{slide}</h6>
                      </div>{' '}
                    </div>
                  ))}
                </TinySlider>
              </div>
            </Col>
            <Col sm={6} md={4} lg={3} className="mb-6">
              <h5 className="mb-4">Arrow dark</h5>
              <div className="tiny-slider arrow-dark">
                <TinySlider settings={arrowsSliderSettings}>
                  {Slides2.map((slide, idx) => (
                    <div className="item" key={idx}>
                      {' '}
                      <div className="p-7 bg-light position-relative">
                        <h6 className="position-absolute top-50 start-50 translate-middle text-body">{slide}</h6>
                      </div>{' '}
                    </div>
                  ))}
                </TinySlider>
              </div>
            </Col>
            <Col sm={6} md={4} lg={3} className="mb-6">
              <h5 className="mb-4">Arrow gray</h5>
              <div className="tiny-slider arrow-gray">
                <TinySlider settings={arrowsSliderSettings}>
                  {Slides2.map((slide, idx) => (
                    <div className="item" key={idx}>
                      {' '}
                      <div className="p-7 bg-light position-relative">
                        <h6 className="position-absolute top-50 start-50 translate-middle text-body">{slide}</h6>
                      </div>{' '}
                    </div>
                  ))}
                </TinySlider>
              </div>
            </Col>
            <Col sm={6} md={4} lg={3} className="mb-6">
              <h5 className="mb-4">Arrow round</h5>
              <div className="tiny-slider arrow-dark arrow-round">
                <TinySlider settings={arrowsSliderSettings}>
                  {Slides2.map((slide, idx) => (
                    <div className="item" key={idx}>
                      {' '}
                      <div className="p-7 bg-light position-relative">
                        <h6 className="position-absolute top-50 start-50 translate-middle text-body">{slide}</h6>
                      </div>{' '}
                    </div>
                  ))}
                </TinySlider>
              </div>
            </Col>
            <Col sm={6} md={4} lg={3} className="mb-6">
              <h5 className="mb-4">Arrow bordered</h5>
              <div className="tiny-slider arrow-bordered">
                <TinySlider settings={arrowsSliderSettings}>
                  {Slides2.map((slide, idx) => (
                    <div className="item" key={idx}>
                      {' '}
                      <div className="p-7 bg-light position-relative">
                        <h6 className="position-absolute top-50 start-50 translate-middle text-body">{slide}</h6>
                      </div>{' '}
                    </div>
                  ))}
                </TinySlider>
              </div>
            </Col>
            <Col sm={6} md={4} lg={3} className="mb-6">
              <h5 className="mb-4">Arrow only</h5>
              <div className="tiny-slider arrow-gray arrow-only">
                <TinySlider settings={arrowsSliderSettings}>
                  {Slides2.map((slide, idx) => (
                    <div className="item" key={idx}>
                      {' '}
                      <div className="p-7 bg-light position-relative">
                        <h6 className="position-absolute top-50 start-50 translate-middle text-body">{slide}</h6>
                      </div>{' '}
                    </div>
                  ))}
                </TinySlider>
              </div>
            </Col>
            <Col sm={6} md={4} lg={3} className="mb-6">
              <h5 className="mb-4">Arrow on hover</h5>
              <div className="tiny-slider arrow-dark arrow-hover">
                <TinySlider settings={arrowsSliderSettings}>
                  {Slides2.map((slide, idx) => (
                    <div className="item" key={idx}>
                      {' '}
                      <div className="p-7 bg-light position-relative">
                        <h6 className="position-absolute top-50 start-50 translate-middle text-body">{slide}</h6>
                      </div>{' '}
                    </div>
                  ))}
                </TinySlider>
              </div>
            </Col>
            <Col sm={6} md={4} lg={3} className="mb-6">
              <h5 className="mb-4">Arrow md none</h5>
              <div className="tiny-slider arrow-dark arrow-md-none">
                <TinySlider settings={arrowsSliderSettings}>
                  {Slides2.map((slide, idx) => (
                    <div className="item" key={idx}>
                      {' '}
                      <div className="p-7 bg-light position-relative">
                        <h6 className="position-absolute top-50 start-50 translate-middle text-body">{slide}</h6>
                      </div>{' '}
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

export default AllTinySlider
