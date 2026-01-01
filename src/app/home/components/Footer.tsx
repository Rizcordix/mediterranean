"use client"
import { currentYear } from '@/context/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logoImg from '@/assets/images/medi_logo_white2.png'

const Footer = () => {
  return (
    <footer className="footer footer-dark section-footer-pt">
      <div className="footer-content">
        <Container>
          <Row>
            <Col md={8} className="mx-auto">
              <div className="widget text-center mt-0">
                {/* Logo */}
                <Link href="/" className="footer-logo mb-4 d-block">
                  <Image src={logoImg} alt="logo" className="footer-logo-item" />
                </Link>

                {/* Description */}
                <p className="mt-3">
                  At Meditarranean Publishing, we are committed to helping authors, businesses, and creators bring their stories to life with professional writing, design, and publishing solutions. Your success is our passion—let&apos;s create something extraordinary together.
                </p>

                {/* Contact Links */}
                <ul className="p-0 list-inline contact-list">
                  <li className="list-inline-item me-4">
                    <i className="me-2 text-white ti-map-alt" />
                    <Link href="/" className="footer-link">1421 Coburn, Near Center Point, IL 61548.</Link>
                  </li>
                  <li className="list-inline-item me-4">
                    <i className="me-1 text-white ti-headphone-alt" />
                    <Link href="tel:2518546308" className="footer-link">(251) 854-6308</Link>
                  </li>
                  <li className="list-inline-item me-4">
                    <i className="me-2 text-white ti-email" />
                    <Link href="mailto:info@mediterraneanpublishing.com" className="footer-link">info@mediterraneanpublishing.com</Link>
                  </li>
                </ul>

                {/* Social Icons */}
                <ul className="social-icons si-colored-bg-on-hover si-medium mt-3 justify-content-center">
                  <li className="social-icons-item social-facebook">
                    <Link className="social-icons-link" href="https://www.facebook.com/share/17L6o8vpt1/" target='_blank'>
                      <i className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li className="social-icons-item social-instagram">
                    <Link className="social-icons-link" href="https://www.instagram.com/mediterraneanpublishing/" target='_blank'>
                      <i className="fab fa-instagram" />
                    </Link>
                  </li>
                </ul>

                <div className="divider my-3" />

                {/* Footer Links */}
                <div className="copyright-links my-2">
                  <ul className="list-inline footer-links">
                    <li className="list-inline-item ps-2">
                      <Link href="/about" className="footer-link">About Us</Link>
                    </li>
                    <li className="list-inline-item ps-2">
                      <Link href="/contact" className="footer-link">Contact</Link>
                    </li>
                    <li className="list-inline-item ps-2">
                      <Link href="/reviews" className="footer-link">Reviews</Link>
                    </li>
                    <li className="list-inline-item ps-2">
                      <Link href="/privacy" className="footer-link">Privacy Policy</Link>
                    </li>
                    <li className="list-inline-item ps-2">
                      <Link href="/terms" className="footer-link">Terms of Service</Link>
                    </li>
                  </ul>
                </div>

                {/* Copyright */}
                <div className="copyright-text">
                  ©{currentYear} All Rights Reserved by{' '}
                  <Link href="https://www.mediterraneanpublishing.com" className="footer-link">Mediterranean Publishing.</Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Styles */}
      <style jsx>{`

        .social-wrapper {
          margin-top: 20px;
        }

        .social-square {
          width: 48px;
          height: 48px;
          background: #ffffff;
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .social-square i {
          font-size: 24px;
        }

        .social-square.instagram i {
          color: #E1306C;
        }

        .social-square.facebook i {
          color: #1877F2;
        }

        .social-square:hover {
          transform: translateY(-4px);
          box-shadow: 0 6px 16px rgba(255, 255, 255, 0.25);
        }
      `}</style>
    </footer>
  )
}

export default Footer
