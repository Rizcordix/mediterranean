'use client'
import Image from 'next/image'
import { teamData } from '../data'
import { renderToString } from 'react-dom/server'
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
    controlsText: [renderToString(<i className="fas fa-chevron-left" />), renderToString(<i className="fas fa-chevron-right" />)],
    autoplay: true,
    controls: true,
    edgePadding: 2,
    mouseDrag: true,
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
        items: 2,
      },
      1200: {
        items: 2,
      },
    },
  }
  return (
    <section>
      <Container>
        <Row>
          <Col md={6} className="align-self-center mb-md-0 mb-5">
            <h2>Our team, AKA superheros work for your success </h2>
            <p>
              We have built a robust team, which is capable of delivering best quality of services when it comes to website-design, Website
              development, mobile application, content and digital marketing
            </p>
            <h6 className="mb-3">
              We are hiring! Join our team Creative Agency Specializing in: Video Production, Web Design, Branding, Brand Strategy.
            </h6>
            <Link className="btn btn-grad" href="/pages/careers">
              Apply now!
            </Link>
          </Col>
          <Col md={6} className="align-self-center">
            <div className="tiny-slider arrow-hover">
              <TinySlider settings={courseSliderSettings}>
                {teamData.map((item, idx) => {
                  return (
                    <div className="item" key={idx}>
                      <div className="team-item mb-0 text-center">
                        <div className="team-avatar">
                          <Image src={item.image} alt="team1" />
                        </div>
                        <div className="team-desc">
                          <h5>{item.name}</h5>
                          <span>{item.category}</span>
                          <ul className="social-icons si-colored-on-hover">
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

export default Team
