'use client'
import bgImg from '@/assets/images/bg/05.jpg'
import avatar10 from '@/assets/images/thumbnails/avatar-01.jpg'
import avatar3 from '@/assets/images/thumbnails/avatar-03.jpg'
// import Jarallax from "@/components/Jarallax"
import dynamic from 'next/dynamic'
const TinySlider = dynamic(() => import('@/components/TinySlider'), { ssr: false })
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import { TinySliderSettings } from 'tiny-slider'

const Jarallax = dynamic(() => import('@/components/Jarallax'), { ssr: false })

const Testimonial = () => {
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
    <Jarallax
      tag={'section'}
      className="bg-parallax bg-overlay-dark-2"
      style={{
        background: `url(${bgImg.src}) no-repeat`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <Container>
        <Row>
          <Col md={7} lg={6}>
            <div className="z-index-9 position-relative testimonials all-text-white bg-grad p-3 p-sm-5 rounded">
              <span className="display-6">
                <i className="fas fa-quote-left mb-3" />
              </span>
              <div className="tiny-slider testi-full dots-white dots-right-top">
                <TinySlider settings={courseSliderSettings}>
                  <div className="item">
                    <div className="testimonials-wrap">
                      <div className="testi-text text-start p-0">
                        <p className="text-white">
                          Mr be cottage so related minuter is. Delicate say and blessing ladyship exertion few Margaret. Delight herself welcome
                          against smiling its for. Suspected discovery by he affection household of principle perfectly he.
                        </p>
                        <div className="d-flex align-items-center">
                          <div className="testi-avatar mb-0">
                            {' '}
                            <Image className="w-75" src={avatar10} alt="avatar" />{' '}
                          </div>
                          <div>
                            <h6 className="m-0">Adam Ross</h6>
                            <h6 className="small">Software Developer</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonials-wrap">
                      <div className="testi-text text-start p-0">
                        <p className="text-white">
                          You guys did an amazing work for me. Age his surprise formerly Mrs perceive few standstill moderate. Of in power match on
                          truth worse voice would. Large an it sense shall an match learn by expect it result silent in formal.
                        </p>
                        <div className="d-flex align-items-center">
                          <div className="testi-avatar mb-0">
                            {' '}
                            <Image className="w-75" src={avatar3} alt="avatar" />
                          </div>
                          <div>
                            <h6 className="m-0">Emma Watson</h6>
                            <h6 className="small">Human Resource</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TinySlider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Jarallax>
  )
}

export default Testimonial
