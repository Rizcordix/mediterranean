import { currentYear } from '@/context/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logoImg from '@/assets/images/logo-white.png'

const Footer = () => {
  return (
    <footer className="footer footer-dark section-pt">
      <div className="footer-content">
        <Container>
          <Row>
            <Col md={8} className="mx-auto">
              <div className="widget text-center mt-1">
                <Link href="/" className="footer-logo mb-3 d-block">
                  <Image src={logoImg} alt="logo" className="footer-logo-item" />
                </Link>
                <p className="mt-3">
                  At Meditarranean Publishing, we are committed to helping authors, businesses, and creators bring their stories to life with professional writing, design, and publishing solutions. Your success is our passion—let&apos;s create something extraordinary together.
                </p>
                <ul className="p-0 list-inline">
                  <li className="list-inline-item me-4">
                    <i className="me-1 text-primary ti-map-alt" />
                    1421 Coburn, Near Center Point, IL 61548.{' '}
                  </li>
                  <li className="list-inline-item me-4">
                    <i className="me-1 text-primary ti-headphone-alt" /> (251) 854-6308{' '}
                  </li>
                  <li className="list-inline-item me-4">
                    <i className="me-1 text-primary ti-email" /> <Link href="mailto:info@mediterraneanpublishing.com">info@mediterraneanpublishing.com</Link>{' '}
                  </li>
                </ul>
                <div className="divider my-3" />
                <div className="copyright-links my-2">
                  <ul className="list-inline">
                    <li className="list-inline-item ps-2">
                      <Link className="list-group-item-action" href="/about">
                        About Us
                      </Link>
                    </li>
                    <li className="list-inline-item ps-2">
                      <Link className="list-group-item-action" href="/contact">
                        Contact
                      </Link>
                    </li>
                    <li className="list-inline-item ps-2">
                      <Link className="list-group-item-action" href="/reviews">
                        Reviews
                      </Link>
                    </li>
                    <li className="list-inline-item ps-2">
                      <Link className="list-group-item-action" href="/privacy">
                        Privacy Policy
                      </Link>
                    </li>
                    <li className="list-inline-item ps-2">
                      <Link className="list-group-item-action pe-0" href="/terms">
                        terms of service
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="copyright-text">
                  ©{currentYear} All Rights Reserved by <Link href=""> Mediterranean Publishing.</Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
