import React from 'react'
import woldMap from '@/assets/images/world-map.png'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'
import { currentYear } from '@/context/constants'
import logoImg from '@/assets/images/logo-white.png'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="footer footer-dark section-pt position-relative pt-4 mt-5">
      <div className="position-absolute top-0 start-0 w-100">
        <svg width="100%" height={70} viewBox="0 0 500 70" preserveAspectRatio="none" style={{ marginTop: '-70px' }}>
          <path d="M0,70 L0,40 Q250,-40 500,40 L580,70 Z" fill="#343a40" />
        </svg>
      </div>
      <div className="footer-content pb-3">
        <Container>
          <Row>
            <Col md={4}>
              <div className="widget">
                <Link href="/" className="footer-logo mb-3 d-block">
                  <Image src={logoImg} alt="logo" className="logo-auth mb-4" />
                </Link>
                <p className="mt-3">
                  Larexa is a highly creative, modern, visually stunning and Bootstrap 5 Creative Multi-purpose corporate and portfolio HTML5
                  template.
                </p>
                <p>It is based on the powerful Bootstrap 5 Framework to make sure an entirely responsive layout. </p>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div
                className="widget address"
                style={{
                  backgroundImage: `url(${woldMap.src})`,
                  backgroundPosition: '50% 20px',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                }}>
                <ul className="list-group list-group-borderless">
                  <li className="d-flex mb-3">
                    <i className="me-3 display-8 ti-map-alt" />
                    1421 Coburn Hollow Road Metamora, Near Center Point, IL 61548.{' '}
                  </li>
                  <li className="d-flex mb-3">
                    <i className="me-3 display-8 ti-headphone-alt" /> (251) 854-6308{' '}
                  </li>
                  <li className="d-flex mb-3">
                    <i className="me-3 display-8 ti-email" /> help@larexa.com
                  </li>
                  <li className="d-flex mb-3">
                    <i className="me-3 display-8 ti-time" />
                    <p>
                      Mon - Fri: <strong>09:00 - 21:00</strong> <br />
                      Sat &amp; Sun: <strong>Closed</strong>
                    </p>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={2} sm={6}>
              <div className="widget">
                <h6>Quick LInks</h6>
                <ul className="nav flex-column primary-hover">
                  <li className="nav-item">
                    <Link className="nav-link" href="/pages/about-classic">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/pages/contact">
                      Contact
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/blog/blog-grid/left-sidebar">
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/portfolio/column-4">
                      Portfolio
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={3} className="">
              <div className="widget bg-grad p-4 all-text-white rounded">
                <i className="ti-email newsletter-icon" />
                <p className="mb-2 text-white">Subscribe to our newsletter to receive exclusive offers.</p>
                <div className="form-group mb-0">
                  <input className="form-control border-white mb-3" type="email" placeholder="Enter email..." />
                  <button className="btn btn-dark mb-0">Join us</button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="divider mt-3" />
      <div className="footer-copyright py-3">
        <Container>
          <div className="d-md-flex justify-content-between align-items-center py-3 text-center text-md-start">
            <div className="copyright-text">
              ©{currentYear} All Rights Reserved by <Link href=""> Larexa.</Link>
            </div>
            <div className="copyright-links mt-3 mt-md-0">
              <ul className="list-inline">
                <li className="list-inline-item ps-2">
                  <Link className="list-group-item-action" href="">
                    Home
                  </Link>
                </li>
                <li className="list-inline-item ps-2">
                  <Link className="list-group-item-action" href="">
                    About Us
                  </Link>
                </li>
                <li className="list-inline-item ps-2">
                  <Link className="list-group-item-action" href="">
                    Career
                  </Link>
                </li>
                <li className="list-inline-item ps-2">
                  <Link className="list-group-item-action" href="">
                    Privacy Policy
                  </Link>
                </li>
                <li className="list-inline-item ps-2">
                  <Link className="list-group-item-action pe-0" href="">
                    Use of terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
