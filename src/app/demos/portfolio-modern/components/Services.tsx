import Image from 'next/image'
import React from 'react'
import banner4 from '@/assets/images/banner/04.jpg'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Services = () => {
  return (
    <section>
      <Container className="h-100">
        <Row>
          <Col md={10} lg={7} className="align-self-center ">
            <Image className="rounded" src={banner4} alt="banner4" />
          </Col>
          <Col md={12} lg={5} className="align-self-center mt-4 mt-lg-0">
            <div className="title text-start pb-0">
              <span className="pre-title">We are the Larexa!</span>
              <h2>
                We are a full service <span className="text-primary">Creative agency</span> that makes good ideas come to life.
              </h2>
              <p>
                We are an insight and behaviour driven creative marketing agency. A Full package Digital Creative Agency Specializing in: Video
                Production, Web Design, Branding, Brand Strategy, Content Marketing and Aerial Cinematography.{' '}
              </p>
              <Button variant="outline-primary">Read more</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Services
