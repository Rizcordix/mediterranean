'use client'
import Image from 'next/image'
import React from 'react'
import blog3 from '@/assets/images/blog/03.jpg'
import dynamic from 'next/dynamic'
const GlightBox = dynamic(() => import('@/components/GlightBox'), { ssr: false })
import { Col, Container, Row } from 'react-bootstrap'

const Videos = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col md={12} lg={6} className="align-self-center ">
            <div className="title text-start">
              <span className="pre-title">Video option</span>
              <h2>
                Set youtube and vimeo <span className="text-primary">Video In pupup </span> with play button.
              </h2>
              <p className="mb-0">
                We are an insight and behaviour driven creative marketing agency. A Full package Digital Creative Agency Specializing in: Video
                Production, Web Design, Branding, Brand Strategy, Content Marketing and Aerial Cinematography.{' '}
              </p>
            </div>
          </Col>
          <Col md={10} lg={6} className="mx-md-auto align-self-center position-relative">
            <Image className="rounded" src={blog3} alt="blog3" />
            <div className="position-absolute start-0 bottom-0 ms-4 ms-md-n2 mb-3">
              <GlightBox className="btn btn-grad" data-glightbox href="https://youtu.be/n_Cn8eFo7u8">
                {' '}
                <i className="fa fa-play text-white" />
                Play Video{' '}
              </GlightBox>
            </div>
          </Col>
        </Row>
        <Row className=" mt-7">
          <Col md={10} lg={6} className="mx-md-auto align-self-center ">
            <div className="ratio ratio-16x9">
              <iframe width={560} height={315} src="https://www.youtube.com/embed/9No-FiEInLA" allow="autoplay; encrypted-media" allowFullScreen />
            </div>
          </Col>
          <Col md={12} lg={6} className="align-self-center mt-sm-5">
            <div className="title text-start">
              <span className="pre-title">Video option</span>
              <h2>
                Set youtube <span className="text-primary">Video with fit column </span>
              </h2>
              <p className="mb-0">
                We are an insight and behaviour driven creative marketing agency. A Full package Digital Creative Agency Specializing in: Video
                Production, Web Design, Branding, Brand Strategy, Content Marketing and Aerial Cinematography.{' '}
              </p>
            </div>
          </Col>
        </Row>
        <Row className=" mt-7">
          <Col md={12} lg={6} className="align-self-center ">
            <div className="title text-start">
              <span className="pre-title">Video option</span>
              <h2>
                Set Vimeo <span className="text-primary">Video with fit column </span>
              </h2>
              <p className="mb-0">
                We are an insight and behaviour driven creative marketing agency. A Full package Digital Creative Agency Specializing in: Video
                Production, Web Design, Branding, Brand Strategy, Content Marketing and Aerial Cinematography.{' '}
              </p>
            </div>
          </Col>
          <Col md={10} lg={6} className="mx-md-auto align-self-center ">
            <div className="ratio ratio-16x9">
              <iframe src="https://player.vimeo.com/video/167434033?title=0&byline=0&portrait=0" width={640} height={360} allowFullScreen />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Videos
