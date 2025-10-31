'use client'
import React, { useState } from 'react'
import { portfolioData } from '../../data'
import Image from 'next/image'
import dynamic from 'next/dynamic'
const GlightBox = dynamic(() => import('@/components/GlightBox'), { ssr: false })
import clsx from 'clsx'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Portfolio = () => {
  const [gallery, setGallery] = useState(portfolioData)
  const [category, setCategory] = useState('all')

  const filterImages = (category: string) => {
    setCategory(category)
    setTimeout(() => {
      const galleryAlbums = category === 'all' ? portfolioData : portfolioData.filter((album) => album.categories?.includes(category))
      setGallery(galleryAlbums)
    }, 300)
  }
  return (
    <section className="portfolio pb-0">
      <Container>
        <Row>
          <Col md={12}>
            <div className="nav justify-content-center grid-menu" data-target=".filter-container">
              <ul className="nav-tabs nav-tabs-style-2 text-center px-2 p-md-0 m-0 mb-4">
                <li className="nav-filter mb-4">
                  <a className={clsx({ active: category === 'all' })} onClick={() => filterImages('all')} data-filter="*">
                    All Works
                  </a>
                </li>
                <li className="nav-filter mb-4">
                  <a className={clsx({ active: category === 'marketing' })} onClick={() => filterImages('marketing')} data-filter=".marketing">
                    Marketing
                  </a>
                </li>
                <li className="nav-filter mb-4">
                  <a className={clsx({ active: category === 'digital' })} onClick={() => filterImages('digital')} data-filter=".digital">
                    Digital
                  </a>
                </li>
                <li className="nav-filter mb-4">
                  <a className={clsx({ active: category === 'photography' })} onClick={() => filterImages('photography')} data-filter=".photo">
                    Photography
                  </a>
                </li>
              </ul>
            </div>
            <div className="portfolio-wrap grid items-2 items-padding filter-container" data-isotope='{ "layoutMode": "masonry" }'>
              {gallery.map((item, idx) => (
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
                        <Link href="">{item.title}</Link>
                      </h6>
                      <p>{item.category}</p>
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

export default Portfolio
