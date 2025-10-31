'use client'
import React from 'react'
import { teamData } from '../data'
import Image from 'next/image'
import { TinySliderSettings } from 'tiny-slider'
import dynamic from 'next/dynamic'
const TinySlider = dynamic(() => import('@/components/TinySlider'), { ssr: false })
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Team = () => {
  const courseSliderSettings: TinySliderSettings = {
    arrowKeys: true,
    gutter: 30,
    autoplayButtonOutput: false,
    nested: 'inner',
    autoplay: true,
    controls: false,
    edgePadding: 2,
    loop: true,
    items: 1,
    mouseDrag: true,
    nav: true,
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
        items: 2,
      },
    },
  }

  return (
    <section className="team team-grid">
      <Container>
        <Row>
          <Col xs={12} lg={8} className="mx-auto">
            <div className="title text-center">
              <span className="pre-title">They are all professionals</span>
              <h2>Creative Team and founders</h2>
              <p>
                Our friendly team members are always willing to help you understand your present technology requirements and provide suggestions on
                your future needs.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="tiny-slider dots-primary">
              <TinySlider settings={courseSliderSettings}>
                {teamData.map((item, idx) => (
                  <div className="item" key={idx}>
                    <div className="team-item">
                      <div className="team-avatar">
                        <Image className="rounded" src={item.image} alt="team" />
                      </div>
                      <div className="team-desc">
                        <h4 className="team-name">{item.name}</h4>
                        <span className="team-position">{item.category}</span>
                        <p>{item.description}</p>
                        <ul className="social-icons light si-colored-bg-on-hover no-pb">
                          <li className="social-icons-item social-facebook">
                            <Link className="social-icons-link" href="">
                              <i className="fab fa-facebook-f" />
                            </Link>
                          </li>
                          <li className="social-icons-item social-instagram">
                            <Link className="social-icons-link" href="">
                              <i className="fab fa-instagram" />
                            </Link>
                          </li>
                          <li className="social-icons-item social-twitter">
                            <Link className="social-icons-link" href="">
                              <i className="fab fa-twitter" />
                            </Link>
                          </li>
                        </ul>
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

export default Team
