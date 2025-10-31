'use client'
import React, { useState } from 'react'
import { companyData } from '../data'
import Image from 'next/image'
import clsx from 'clsx'
import dynamic from 'next/dynamic'
const GlightBox = dynamic(() => import('@/components/GlightBox'), { ssr: false })
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const CompanyPortfolio = () => {
  const [gallery, setGallery] = useState(companyData)
  const [category, setCategory] = useState('all')

  const filterImages = (category: string) => {
    console.log(category)
    setCategory(category)
    setTimeout(() => {
      const galleryAlbums = category === 'all' ? companyData : companyData.filter((album) => album.categories?.includes(category))
      setGallery(galleryAlbums)
    }, 300)
  }
  return (
    <section className="portfolio portfolio-link pb-0">
      <Container>
        <Row>
          <Col md={8} className="mx-auto text-center mb-3">
            <h2 className="h1">The Work I have done</h2>
            <p className="mb-0">
              By in no ecstatic wondered disposal my speaking. Direct wholly valley or uneasy it at really. Sir wish like said dull and need make.
              Sportsman one bed departure rapturous situation disposing his.{' '}
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="p-0">
            <div className="nav justify-content-center grid-menu" data-target=".filter-container">
              <ul className="nav-tabs m-0 p-0">
                <li className="nav-filter">
                  <a className={clsx({ active: category === 'all' })} onClick={() => filterImages('all')} data-group="all">
                    All Works
                  </a>
                </li>
                <li className="nav-filter">
                  <a className={clsx({ active: category === 'marketing' })} onClick={() => filterImages('marketing')} data-group="marketing">
                    Marketing
                  </a>
                </li>
                <li className="nav-filter">
                  <a className={clsx({ active: category === 'digital' })} onClick={() => filterImages('digital')} data-group="digital">
                    Digital
                  </a>
                </li>
                <li className="nav-filter">
                  <a className={clsx({ active: category === 'photography' })} onClick={() => filterImages('photography')} data-group="photography">
                    Photography
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="portfolio-wrap grid items-3 items-padding filter-container"
              data-isotope='{ "itemSelector": ".isotope-item", "layoutMode": "masonry" }'>
              {gallery.map((item, idx) => {
                return (
                  <div className="portfolio-card grid-item digital" key={idx}>
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
                )
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CompanyPortfolio
