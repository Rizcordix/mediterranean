'use client'
import blog2 from '@/assets/images/blog/02.jpg'
import dynamic from 'next/dynamic'
const GlightBox = dynamic(() => import('@/components/GlightBox'), { ssr: false })
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import { aboutUsData } from '../data'

const AboutUs = () => {
  return (
    <section>
      <Container className="h-100">
        <Row>
          <Col md={12} lg={6} className="align-self-center ">
            <div className="title text-start">
              <span className="pre-title">We are the Larexa!</span>
              <h2>
                We are a full service <span className="text-primary">Creative agency</span> that makes good ideas come to life.
              </h2>
              <p className="mb-0">
                We are an insight and behaviour driven creative marketing agency. A Full package Digital Creative Agency Specializing in: Video
                Production, Web Design, Branding, Brand Strategy, Content Marketing and Aerial Cinematography.{' '}
              </p>
              <div className="list-group-inline list-group-number list-unstyled mt-4">
                <a href="#" className="list-group-item list-group-item-action">
                  <span>01</span> Creative Ideas
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <span>02</span> Super Responsive for all devices
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <span>03</span> Extensive documentation
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <span>04</span> Excellent features
                </a>
              </div>
            </div>
          </Col>
          <Col md={10} lg={6} className="mx-md-auto align-self-center position-relative">
            <Image className="rounded" src={blog2} alt="blog" />
            <div className="position-absolute start-0 bottom-0 ms-4 ms-md-n2 mb-3">
              <GlightBox className="btn btn-grad" data-glightbox href="https://youtu.be/n_Cn8eFo7u8">
                {' '}
                <i className="fa fa-play text-white" />
                Play Video{' '}
              </GlightBox>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          {aboutUsData.map((item, idx) => (
            <Col md={4} key={idx}>
              <div className="feature-box h-100 icon-primary">
                <div className="feature-box-icon">
                  <i className={`${item.icon}`} />
                </div>
                <h3 className="feature-box-title">{item.title}</h3>
                <p className="feature-box-desc">{item.description} </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default AboutUs
