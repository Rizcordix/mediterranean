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
    autoplay: true,
    controls: true,
    controlsText: [renderToString(<i className="fas fa-chevron-left" />), renderToString(<i className="fas fa-chevron-right" />)],
    edgePadding: 2,
    loop: true,
    items: 1,
    mouseDrag: true,
    nav: false,
    responsive: {
      1: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  }
  return (
    <section className="blog pb-0">
      <Container>
        <Row>
          <Col xs={12} lg={8} className="mx-auto">
            <div className="title text-center">
              <span className="pre-title">Check out some of our latest blog post.</span>
              <h2>Read our news, comments &amp; thoughts</h2>
              <p className="mb-0">
                Our blog shows our hard work and devotion to helping our clients succeed. Don&apos;t just take our word for it. Check out the latest
                work.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="tiny-slider arrow-dark arrow-hover">
              <TinySlider settings={courseSliderSettings}>
                {blogData.map((item, idx) => {
                  return (
                    <div className="item" key={idx}>
                      <div className="post">
                        <div className="post-info">
                          <span className="post-tag bg-grad text-white mb-3 clearfix">
                            <Link href="">Trend</Link>
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
                  )
                })}
              </TinySlider>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Blog
