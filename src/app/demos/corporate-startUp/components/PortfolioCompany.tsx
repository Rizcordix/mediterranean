'use client'
import React from 'react'
import { companyData } from '../data'
import Image from 'next/image'
import dynamic from 'next/dynamic'
const GlightBox = dynamic(() => import('@/components/GlightBox'), { ssr: false })
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const PortfolioCompany = () => {
  return (
    <section className="portfolio portfolio-style-2 pb-0">
      <Container>
        <Row>
          <Col xs={12} lg={8} className="mx-auto">
            <div className="title text-center">
              <span className="pre-title">Company Portfolio </span>
              <h2>Check our Featured Works</h2>
              <p className="mb-0">
                We have built a robust team, which is capable of delivering best quality of services when it comes to website-design, Website
                development
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="p-0">
            <div className="portfolio-wrap grid items-3 items-padding" data-isotope='{ "itemSelector": ".isotope-item", "layoutMode": "masonry" }'>
              {companyData.map((item, idx) => (
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

export default PortfolioCompany
