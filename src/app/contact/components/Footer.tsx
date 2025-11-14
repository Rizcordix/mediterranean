import Image from 'next/image'
import React from 'react'
import spFlags from '@/assets/images/flags/sp.svg'
import frFlags from '@/assets/images/flags/fr.svg'
import grFlags from '@/assets/images/flags/gr.svg'
import ukFlags from '@/assets/images/flags/uk.svg'
import worldMap from '@/assets/images/world-map.png'
import { Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap'
import Link from 'next/link'
import { currentYear } from '@/context/constants'
import logoImg from '@/assets/images/logo-white.png'

const Footer = () => {
  return (
    <footer className="footer footer-dark pt-6 position-relative">
      <div className="footer-content">
        <Container>
          <Row>
            <Col md={3} sm={6} className="order-sm-1">
              <div className="widget address">
                <Link href="/" className="footer-logo mb-3 d-block">
                  <Image src={logoImg} alt="logo" className="footer-logo-item" />
                </Link>
                <p>
                  Larexa; an innovative Internet marketing solutions company that offers comprehensive web development, SMO services, SEO strategies
                  and various other types of Internet marketing related services.{' '}
                </p>
              </div>
            </Col>
            <Col md={2} sm={4} className="order-sm-3">
              <div className="widget">
                <h6>Quick LInks</h6>
                <ul className="nav flex-column">
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
            <Col md={2} sm={4} className="order-sm-4">
              <div className="widget">
                <h6>Company</h6>
                <ul className="nav flex-column primary-hover">
                  <li className="nav-item">
                    <Link className="nav-link" href="/pages/about-classic">
                      Help
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/pages/contact">
                      Careers
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/">
                      Terms &amp; Conditions
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/blog/blog-grid/left-sidebar">
                      Privacy &amp; Policy
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/portfolio/column-4">
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={2} sm={4} className="order-sm-5">
              <div className="widget">
                <h6>Support</h6>
                <ul className="nav flex-column primary-hover">
                  <li className="nav-item">
                    <Link className="nav-link" href="/pages/about-classic">
                      Documentation
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/pages/contact">
                      Knowledge Base
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/">
                      Forum
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/blog/blog-grid/left-sidebar">
                      Contact
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/portfolio/column-4">
                      Terms of Use
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={3} sm={6} className="order-sm-2">
              <div
                className="widget address"
                style={{
                  backgroundImage: `url(${worldMap.src})`,
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
            <Dropdown className="btn-group dropup">
              <DropdownToggle
                as={'a'}
                className="dropdown-toggle btn btn-outline-secondary"
                role="button"
                id="dropdownLanguage"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                {' '}
                <Image className="dropdown-item-icon" src={ukFlags} alt="ukFlags" /> English{' '}
              </DropdownToggle>
              <DropdownMenu className="mt-2 shadow" aria-labelledby="dropdownLanguage">
                <span className="dropdown-item-text text-dark">Select language</span>
                <div className="dropdown-divider" />
                <DropdownItem className="text-dark">
                  <Image className="dropdown-item-icon" src={spFlags} alt="spFlags" /> Español
                </DropdownItem>
                <DropdownItem className="text-dark">
                  <Image className="dropdown-item-icon" src={frFlags} alt="frFlags" /> Français
                </DropdownItem>
                <DropdownItem className="text-dark">
                  <Image className="dropdown-item-icon" src={grFlags} alt="grFlags" /> Deutsch
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
