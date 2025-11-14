'use client'
import React from 'react'
import { blogData } from '../data'
import { TinySliderSettings } from 'tiny-slider'
import { renderToString } from 'react-dom/server'
import dynamic from 'next/dynamic'
const TinySlider = dynamic(() => import('@/components/TinySlider'), { ssr: false })
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Blog = () => {
  const courseSliderSettings: TinySliderSettings = {
    arrowKeys: true,
    gutter: 30,
    autoplayButtonOutput: false,
    nested: 'inner',
    controlsText: [renderToString(<i className="fas fa-chevron-left" />), renderToString(<i className="fas fa-chevron-right" />)],
    autoplay: true,
    controls: true,
    mouseDrag: true,
    edgePadding: 2,
    loop: true,
    items: 1,
    nav: false,
    responsive: {
      1: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 3,
      },
    },
  }
  return (
    <section className="blog bg-light">
      <Container>
        <Row>
          <Col xs={12} lg={8} className="mx-auto">
            <div className="title text-center">
              <span className="pre-title">From the latest blog</span>
              <h2>Read our news and thoughts</h2>
              <p>Timed blind had now those ought set often which. Or snug dull he show more true wish. No at many deny away miss evil.</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="tiny-slider arrow-hover arrow-dark">
              <TinySlider settings={courseSliderSettings}>
                {blogData.map((item, idx) => (
                  <div className="item post-style-3" key={idx}>
                    <div className="post">
                      <div className="post-info">
                        <span className="post-tag bg-grad text-white mb-3 clearfix">
                          <Link href="">{item.category}</Link>
                        </span>
                        <div className="post-author">
                          <Link href=""> {item.name}</Link>
                        </div>
                        ,
                        <div className="post-time">
                          <Link href="">{item.time}</Link>
                        </div>
                        <Link className="post-title" href="">
                          {item.title}
                        </Link>
                        <p className="mb-0">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </TinySlider>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Blog
