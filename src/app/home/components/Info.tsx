import Image from 'next/image'
import React from 'react'
import service1 from '@/assets/images/service/01.jpg'
import service2 from '@/assets/images/service/02.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Info = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col md={6} className="pe-lg-5">
            <div className="mt-5 mt-md-0">
              <p className="bg-dark small text-white rounded px-2 py-0 mb-2 d-inline-block">Why Choose Us</p>
              <h2 className="h1 fw-bold">Trusted Expertise. Exceptional Quality.</h2>
              <div className="d-flex mt-3">
                <h6 className="display-1 opacity-2 me-3 align-self-start fw-bold">01</h6>
                <div className="align-self-start">
                  <p>
                    At Mediterranean Publishing, we bring your ideas to life with unmatched precision and creativity. 
                    Our team of professional writers, editors, designers, and marketers works closely with you to ensure 
                    your book stands out in every stage—from concept to publication. Your vision becomes our mission.
                  </p>
                  <Link className="primary-hover" href="/about">
                    Read More <i className="fa fa-long-arrow-right ms-1" />
                  </Link>
                </div>
              </div>
            </div>
            <Image className="rounded mt-4 shadow-hover up-on-hover" src={service1} alt="service" />
          </Col>

          <Col md={6} className="ps-lg-5 mt-5 mt-md-0">
            <Image className="rounded mb-4 shadow-hover up-on-hover" src={service2} alt="service" />
            <div>
              <p className="bg-dark small text-white rounded px-2 py-0 mb-2 d-inline-block">Why Choose Us</p>
              <h2 className="h1 fw-bold">A Team Committed to Your Success.</h2>
              <div className="d-flex mt-3">
                <h6 className="display-1 opacity-2 me-3 align-self-start fw-bold">02</h6>
                <div className="align-self-start">
                  <p>
                    From high-quality writing and editing to publishing, printing, and marketing—we provide a complete 
                    end-to-end solution for authors. Our personalized approach ensures you get the guidance, attention, and 
                    professional touch needed to create a book that leaves a lasting impact.
                  </p>
                  <Link className="primary-hover" href="/contact">
                    Reach Out to Us <i className="fa fa-long-arrow-right ms-1" />
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Info
