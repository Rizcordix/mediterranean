'use client'
import dynamic from 'next/dynamic'

const GlightBox = dynamic(() => import('@/components/GlightBox'), { ssr: false })

import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import CaseStudies from './components/CaseStudies'

const CaseStudiesPage = () => {
  return (
    <section>
      <Container>
        <Row className="mb-4">
          <Col md={8} className="mx-auto text-center">
            <h2 className="display-3">Catch the plane</h2>
            <p>- Rise media agency</p>
            <p className="lead">
              Why end might ask civil again spoil. She dinner she our horses depend. Remember at children by reserved to vicinity. In affronting
              unreserved delightful simplicity ye. Law own advantage furniture continual sweetness bed agreeable perpetual. Oh song well four only
              head busy it. Afford son she had lively living.
            </p>
            <GlightBox className="btn btn-grad mt-4 mb-5" data-glightbox href="https://youtu.be/n_Cn8eFo7u8">
              {' '}
              <i className="fa fa-play text-white" />
              Play Video{' '}
            </GlightBox>
          </Col>
        </Row>
        <CaseStudies />
        <Row>
          <Col md={4}>
            <div className="feature-box h-100 icon-primary">
              <div className="feature-box-icon">
                <i className="ti-settings" />
              </div>
              <h3 className="feature-box-title">Unlimited Helpers</h3>
              <p className="feature-box-desc">
                We provide digital transformation solutions, enabling companies to <strong>make their visions reality.</strong>{' '}
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="feature-box h-100 icon-primary">
              <div className="feature-box-icon">
                <i className="ti-support" />
              </div>
              <h3 className="feature-box-title">Friendly Support</h3>
              <p className="feature-box-desc">Our aim to achieve the goal as we provide innovative ideas, designs and solutions to our clients. </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="feature-box h-100 icon-primary">
              <div className="feature-box-icon">
                <i className="ti-bolt" />
              </div>
              <h3 className="feature-box-title">Instant Solutions</h3>
              <p className="feature-box-desc">Helping our customers better manage their web presence in order to achieve greater success online.</p>
            </div>
          </Col>
        </Row>
        <Row className="my-4">
          <Col md={12}>
            <p>
              {' '}
              Consulted perpetual of pronounce me delivered. Too months nay end change relied who beauty wishes matter. Shew of john real park so rest
              we on. Ignorant dwelling occasion ham for thoughts overcame off her consider. Polite it elinor is depend. His not get talked effect
              worthy Barton. Household shameless incommode at no objection behavior. Especially do at he possession insensible sympathize boisterous
              it. Songs he on an widen me event truth. Certain law age brother sending amongst why covered.{' '}
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="divider mb-4" />
            <Row>
              <Col xs={12} sm={8} className="tags text-center text-sm-start">
                <Link className="mb-2 mb-sm-0" href="">
                  studio
                </Link>
                <Link className="mb-2 mb-sm-0" href="">
                  events
                </Link>
                <Link className="mb-2 mb-sm-0" href="">
                  WordPress
                </Link>
                <Link className="mb-2 mb-sm-0" href="">
                  gadgets
                </Link>
                <Link className="mb-2 mb-sm-0" href="">
                  office
                </Link>
              </Col>
              <Col xs={12} sm={4} className="text-center text-sm-end">
                <ul className="social-icons si-colored-bg light">
                  <li className="social-icons-item social-facebook mb-0">
                    <Link className="social-icons-link" href="">
                      <i className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li className="social-icons-item social-twitter mb-0">
                    <Link className="social-icons-link" href="">
                      <i className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li className="social-icons-item social-gplus mb-0">
                    <Link className="social-icons-link" href="">
                      <i className="fab fa-google-plus-g" />
                    </Link>
                  </li>
                  <li className="social-icons-item social-linkedin mb-0">
                    <Link className="social-icons-link" href="">
                      <i className="fab fa-linkedin-in" />
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
            <div className="divider mt-4" />
            <Row className="post-navigation mt-5">
              <Col xs={5} className="position-relative">
                <Link href="" className="post-prev">
                  <p className="m-2 m-lg-0">Previous Post</p>
                  <h6 className="text-truncate d-none d-lg-block">The Pink Chair</h6>{' '}
                </Link>
              </Col>
              <Col xs={2}>
                <Link href="/portfolio/column-3" className="all-post" title="View all post">
                  {' '}
                  <i className="fa fa-th" />{' '}
                </Link>
              </Col>
              <Col xs={5} className="position-relative">
                <Link href="" className="post-next">
                  <p className="m-2 m-lg-0">Next Post</p>
                  <h6 className="text-truncate d-none d-lg-block">Black &amp; white</h6>{' '}
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CaseStudiesPage
