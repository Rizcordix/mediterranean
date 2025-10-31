'use client'
import small1 from '@/assets/images/bg/small/01.jpg'
import small2 from '@/assets/images/bg/small/02.jpg'
import avatar1 from '@/assets/images/thumbnails/avatar-01.jpg'
import avatar3 from '@/assets/images/thumbnails/avatar-03.jpg'
import dynamic from 'next/dynamic'
const GlightBox = dynamic(() => import('@/components/GlightBox'), { ssr: false })
const TinySlider = dynamic(() => import('@/components/TinySlider'), { ssr: false })
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { currency } from '@/context/constants'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import { TinySliderSettings } from 'tiny-slider'

const VideoSlider = () => {
  const courseSliderSettings: TinySliderSettings = {
    arrowKeys: true,
    gutter: 30,
    autoplayButtonOutput: false,
    nested: 'inner',
    autoplay: true,
    controls: false,
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
    <section className="bg-light">
      <Container>
        <div className="tiny-slider dots-dark">
          <TinySlider settings={courseSliderSettings}>
            <div className="item mb-3">
              <Row className="align-items-center">
                <Col md={10} lg={6} className="mx-md-auto align-self-center">
                  <div className="text-start">
                    <h2>MacoInfo saved {currency}1M with Larexa</h2>
                    <p className="mb-0 lead">
                      &quot;I am really satisfied with my service. Thanks to service, we&apos;ve just launched our 5th website! You guys rock!&quot;
                    </p>
                    <div className="d-flex mt-3">
                      <h6 className="align-self-start me-3">
                        <Image className="rounded-circle" src={avatar1} alt="avatar" />
                      </h6>
                      <div className="align-self-center">
                        <h5 className="mb-2">Nix Maxwell</h5>
                        <p>CEO and co-founder, MacoInfo</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={10} lg={6} className="mx-md-auto align-self-center mt-4 mt-lg-0 position-relative">
                  <Image className="rounded" src={small2} alt="small1" />
                  <div className="position-absolute start-0 bottom-0 ms-4 ms-md-0 ms-md-n2 mb-3">
                    <GlightBox className="btn btn-grad" data-glightbox href="https://youtu.be/n_Cn8eFo7u8">
                      {' '}
                      <IconifyIcon icon="fa:play" className="text-white" />
                      &nbsp;Play Video{' '}
                    </GlightBox>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="item mb-3">
              <Row>
                <Col md={10} lg={6} className="mx-md-auto align-self-center">
                  <div className="text-start">
                    <h2>BerryDesign Start new business with us!</h2>
                    <p className="mb-0 lead">&quot;You guys rock! Buy this now. I made back the purchase price in just 48 hours!&quot;</p>
                    <div className="d-flex mt-3">
                      <h6 className="align-self-start me-3">
                        <Image className="rounded-circle" src={avatar3} alt="avatar" />
                      </h6>
                      <div className="align-self-center">
                        <h5 className="mb-2">Maria Smith</h5>
                        <p>CEO and Founder, BerryDesign</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={10} lg={6} className="mx-md-auto align-self-center mt-4 mt-lg-0 position-relative">
                  <Image className="rounded" src={small1} alt="small1" />
                  <div className="position-absolute start-0 bottom-0 ms-4 ms-md-0 ms-md-n2 mb-3">
                    <GlightBox className="btn btn-grad" data-glightbox href="https://youtu.be/n_Cn8eFo7u8">
                      {' '}
                      <IconifyIcon icon="fa:play" className="text-white" />
                      &nbsp;Play Video{' '}
                    </GlightBox>
                  </div>
                </Col>
              </Row>
            </div>
          </TinySlider>
        </div>
      </Container>
    </section>
  )
}

export default VideoSlider
