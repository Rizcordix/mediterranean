'use client'
import React from 'react'
import { resultsData } from '../data'
import Image from 'next/image'
import dynamic from 'next/dynamic'
const GlightBox = dynamic(() => import('@/components/GlightBox'), { ssr: false })
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Results = () => {
  return (
    <section className="portfolio pb-0">
      <Container>
        <Row>
          <Col xs={12} lg={7} className="mx-auto">
            <div className="title text-center">
              <span className="pre-title">Check out some of our latest work.</span>
              <h2>Our Portfolio: Quality Results</h2>
              <p className="mb-0">
                Our portfolio shows our hard work and devotion to helping our clients succeed. Don&apos;t just take our word for it. Check out the
                latest work.
              </p>
            </div>
          </Col>
          <Col md={12} className="p-0">
            <div className="portfolio-wrap grid items-3 items-padding">
              {resultsData.map((item, idx) => (
                <div className="portfolio-card isotope-item digital" key={idx}>
                  <div className="portfolio-card-body">
                    <div className="portfolio-card-header">
                      <Image src={item.image} alt="portfolio" />
                    </div>
                    <div className="portfolio-card-footer">
                      <GlightBox className="full-screen" href={item.image.src} data-glightbox data-gallery="portfolio">
                        <i className="ti-fullscreen" />
                      </GlightBox>
                      <h6 className="info-title">
                        <Link href="">Fly in time</Link>
                      </h6>
                      <p>Branding, Watch</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Results
