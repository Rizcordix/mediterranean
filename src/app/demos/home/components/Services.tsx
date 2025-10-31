import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Services = () => {
  return (
    <section className="service">
      <Container>
        <Row>
          <Col xs={12} lg={8} className="mx-auto">
            <div className="title text-center">
              <span className="pre-title">Check out our services</span>
              <h2>Premium and royal service</h2>
              <p className="mb-0">
                We are an insight and behavior driven creative marketing agency. A Full Service Digital Creative Agency Specializing in: Video
                Production, Web Design, Branding, Brand Strategy
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="mt-30">
            <div className="feature-box f-style-2 icon-grad h-100">
              <div className="feature-box-icon">
                <i className="ti-save-alt" />
              </div>
              <h3 className="feature-box-title">Choose Right Tools</h3>
              <p className="feature-box-desc">
                Residence certainly elsewhere something she preferred cordially law. Age his surprise formerly Mrs perceive few moderate. Of in{' '}
                <strong> power match on</strong> truth worse would an match learn.{' '}
              </p>
              <Link href="" className="mt-3">
                Know more!
              </Link>
            </div>
          </Col>
          <Col md={4} className="mt-30">
            <div className="feature-box f-style-2 icon-grad h-100">
              <div className="feature-box-icon">
                <i className="ti-ruler-pencil" />
              </div>
              <h3 className="feature-box-title">Customize Your wish</h3>
              <p className="feature-box-desc">
                Consulted perpetual of pronounce me delivered. Too months nay end change relied
                <abbr title="attribute">who beauty</abbr> wishes matter. Shew of john real park so rest we on. Ignorant occasion for thoughts
              </p>
              <Link href="" className="mt-3">
                Know more!
              </Link>
            </div>
          </Col>
          <Col md={4} className="mt-30">
            <div className="feature-box f-style-2 icon-grad h-100">
              <div className="feature-box-icon">
                <i className="ti-agenda" />
              </div>
              <h3 className="feature-box-title">Meet your expectations</h3>
              <p className="feature-box-desc">
                Why end might ask civil again spoil. Dinner she our horses depend remember at children by reserved to vicinity. Oh song well four only
                head busy it. In affronting delightful simplicity own.
              </p>
              <Link href="" className="mt-3">
                Know more!
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Services
