'use client'
import React from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
const TinySlider = dynamic(() => import('@/components/TinySlider'), { ssr: false })
import { TinySliderSettings } from 'tiny-slider'
import { Col, Container, Row } from 'react-bootstrap'
import avatar1 from '@/assets/images/thumbnails/John_Doe.jpg'
import avatar2 from '@/assets/images/thumbnails/Emma_Johnson.jpg'
import avatar3 from '@/assets/images/thumbnails/Sophia_Miller.jpg'
import avatar5 from '@/assets/images/thumbnails/Liam_Green.jpg'

const testimonialsData = [
  {
    name: 'Michelle T.',
    category: 'Fantasy Author | 2,400+ copies sold',
    description: '"I had a manuscript I\'d been working on for three years. I didn\'t know where to start with publishing. Mediterranean Publishing handled everything—editing, cover design, publishing setup. 90 days later, my book was on Amazon. Within six months, I had 300+ reviews and made back my investment. The support team was incredible. I\'m already working on book two with them."',
    image: avatar2,
    title: 'Published in 90 Days. Now Working on Book Two.'
  },
  {
    name: 'James H.',
    category: 'Business Author/Coach | 1,800+ books sold',
    description: '"As a business coach, I needed credibility. A published book was the answer. Mediterranean Publishing didn\'t just publish my book—they helped me build my author platform through their blog writing and marketing services. Now my book is a lead generation tool. I\'ve signed 50+ new coaching clients directly from book visibility. Best investment I\'ve made."',
    image: avatar1,
    title: 'Built My Platform. Became an Authority.'
  },
  {
    name: 'Rosa M.',
    category: 'Memoir Author | Gifted to 50+ family members',
    description: '"I wanted to write my family\'s immigration story for my grandchildren. I had no writing experience. Mediterranean Publishing\'s ghostwriting service was perfect—they interviewed me, captured my voice, and created a beautiful manuscript. The final book made my family cry. It\'s now a treasured heirloom. Priceless."',
    image: avatar3,
    title: 'My Family Story Will Live Forever.'
  },
  {
    name: 'David R.',
    category: 'Mystery Author | 1,100+ books sold, 4.8★ average rating',
    description: '"I was worried about hidden costs and low quality. Mediterranean Publishing was transparent about pricing and delivered professional results. My cover looks bookstore ready. My editing was thorough. My book is selling. For the price, I don\'t know how they do it. Highly recommended."',
    image: avatar5,
    title: 'Professional Quality. Reasonable Price. Zero Regrets.'
  }
]

const Testimonials = () => {
  const courseSliderSettings: TinySliderSettings = {
    arrowKeys: true,
    gutter: 30,
    autoplayButtonOutput: false,
    nested: 'inner',
    autoplay: true,
    controls: false,
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
        items: 1,
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
    <>
      {/* <section className="bg-light triangle-down py-4">
        <Container>
          <Row className="justify-content-center">
            <Col md={10} className="text-center">
              <h2 className="mb-4">5,000+ Authors Have Trusted Mediterranean Publishing</h2>
              <div className="d-flex flex-wrap justify-content-center gap-4 mt-4">
                <div className="text-center">
                  <h3 className="text-primary mb-1">⭐ 98%</h3>
                  <p className="mb-0 small">Client Satisfaction Rate</p>
                </div>
                <div className="text-center">
                  <h3 className="text-primary mb-1">📚 5,000+</h3>
                  <p className="mb-0 small">Books Successfully Published</p>
                </div>
                <div className="text-center">
                  <h3 className="text-primary mb-1">🌍 100+</h3>
                  <p className="mb-0 small">Countries Available</p>
                </div>
                <div className="text-center">
                  <h3 className="text-primary mb-1">✅ 90 Days</h3>
                  <p className="mb-0 small">Average Publishing Timeline</p>
                </div>
                <div className="text-center">
                  <h3 className="text-primary mb-1">💬 24/7</h3>
                  <p className="mb-0 small">Customer Support</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}
      <section className="testimonials testimonials-border pb-4">
        <Container>
          <Row>
            <Col md={12}>
              <div className="tiny-slider">
                <TinySlider className="testi-full" settings={courseSliderSettings}>
                  {testimonialsData.map((item, idx) => (
                    <div className="item" key={idx}>
                      <div className="testimonials-wrap">
                        <div className="testi-text">
                          <h5 className="text-primary mb-3">{item.title}</h5>
                          <p>{item.description}</p>
                          <div className="testi-avatar">
                            <Image src={item.image} alt="avatar" width={80} height={80} />
                          </div>
                          <h6 className="mb-0 mt-3">{item.name}</h6>
                          <h6 className="small text-muted">{item.category}</h6>
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
    </>
  )
}

export default Testimonials