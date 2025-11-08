'use client'
import useToggle from '@/hooks/useToggle'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Col, Collapse, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap'

type OpenType = {
  isOpen?: boolean
  menuCenter?: boolean
}

const TopMenu = ({ isOpen, menuCenter }: OpenType) => {
  const pathname = usePathname()

  const isActive = (url: any) => pathname === url || pathname.startsWith(url)

  return (
    <>
      <style jsx global>{`
        .services-megamenu .dropdown-menu {
          width: 900px;
          left: 50% !important;
          right: auto !important;
          transform: translateX(-50%) translateY(10%) !important;
          border: none !important;
          border-radius: 14px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          padding: 25px 20px;
          margin-top: 8px;
          background: white;
        }

        .services-megamenu .dropdown-menu .container {
          max-width: 100%;
          padding: 0;
        }

        .service-item {
          padding: 12px 15px;
          border-radius: 6px;
          transition: all 0.2s ease;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: #1f2937;
          margin-bottom: 4px;
          background: transparent;
        }

        .service-item:hover {
          background-color: #f3f4f6;
          transform: translateX(4px);
        }

        .service-icon {
          width: 35px;
          height: 35px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #364a52;
          transition: color 0.2s ease;
        }

        .service-item:hover .service-icon {
          color: #364a52;
        }

        .service-icon svg {
          width: 100%;
          height: 100%;
        }

        .service-icon img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .service-content {
          flex: 1;
        }

        .service-title {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 2px;
          color: #1f2937;
          line-height: 1.3;
        }

        .service-description {
          font-size: 12px;
          margin: 0;
          color: #6b7280;
          line-height: 1.4;
        }

        .services-footer {
          background-color: #0f252f;
          color: white;
          padding: 20px;
          margin-top: 20px;
          border-radius: 6px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .services-footer-content h4 {
          margin: 0 0 6px 0;
          font-size: 16px;
          font-weight: 600;
          color: white;
        }

        .services-footer-content p {
          margin: 0;
          opacity: 0.9;
          font-size: 13px;
          line-height: 1.5;
        }

        .services-footer-btn {
          background-color: #748185;
          color: white;
          padding: 10px 24px;
          border-radius: 5px;
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .services-footer-btn:hover {
          background-color: #81b9c4ff;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(139, 107, 176, 0.3);
        }

        @media (max-width: 992px) {
          .services-megamenu .dropdown-menu {
            width: 90vw;
          }
        }

        @media (max-width: 768px) {
          .services-megamenu .dropdown-menu {
            position: static !important;
            transform: none !important;
            width: 100%;
          }
          
          .services-footer {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }
        }
      `}</style>

      <Collapse in={isOpen} className="navbar-collapse">
        <ul className={`navbar-nav navbar-nav-scroll navbar-nav-scroll ${menuCenter ? 'mx-auto' : 'ms-auto'}  `}>
          
          {/* 1. Home Link */}
          <li className="nav-item">
            <Link 
              className={`nav-link ${pathname === '/' ? 'active' : ''}`} 
              href="/">
              Home
            </Link>
          </li>

          {/* 2. About Link */}
          <li className="nav-item">
            <Link 
              className={`nav-link ${isActive('/pages/about') ? 'active' : ''}`} 
              href="/about">
              About
            </Link>
          </li>

          {/* 3. Services Dropdown (Updated Megamenu) */}
          <Dropdown className="nav-item megamenu services-megamenu">
            <DropdownToggle
              as={'a'}
              className={`nav-link ${isActive('/elements') ? 'active' : ''}`}
              id="servicesMenu"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              Services
            </DropdownToggle>
            <DropdownMenu renderOnMount>
              <Container>
                <Row className="w-100">
                  <Col md={4}>
                    <Link href="/elements/accordions" className="service-item">
                      <div className="service-icon">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="currentColor">
                          <path d="M10 15h30v3H10zm0 7h30v3H10zm0 7h30v3H10z"/>
                        </svg>
                      </div>
                      <div className="service-content">
                        <div className="service-title">Book Writing</div>
                        <div className="service-description">Turning Your Creativity into Timeless Stories</div>
                      </div>
                    </Link>

                    <Link href="/elements/action-box" className="service-item">
                      <div className="service-icon">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="currentColor">
                          <path d="M15 10h20v3H15zm0 7h20v3H15zm0 7h15v3H15z"/>
                        </svg>
                      </div>
                      <div className="service-content">
                        <div className="service-title">eBook Ghostwriting</div>
                        <div className="service-description">Your Ideas, Our Words, Our eBooks</div>
                      </div>
                    </Link>

                    <Link href="/elements/alerts" className="service-item">
                      <div className="service-icon">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="currentColor">
                          <path d="M25 5L5 15v10c0 12 8 20 20 25 12-5 20-13 20-25V15L25 5z"/>
                        </svg>
                      </div>
                      <div className="service-content">
                        <div className="service-title">Article Publication</div>
                        <div className="service-description">Establishing Your Authority</div>
                      </div>
                    </Link>

                    <Link href="/elements/animated-headlines" className="service-item">
                      <div className="service-icon">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="currentColor">
                          <rect x="10" y="10" width="30" height="30" rx="2"/>
                        </svg>
                      </div>
                      <div className="service-content">
                        <div className="service-title">Cover Design</div>
                        <div className="service-description">Stunning Book Cover Designs For Your Books</div>
                      </div>
                    </Link>
                  </Col>

                  <Col md={4}>
                    <Link href="/elements/blockquote" className="service-item highlighted">
                      <div className="service-icon">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="currentColor">
                          <path d="M25 10c-8 0-15 5-15 12 0 4 2 7 5 9l-3 9 10-5c1 0 2 0 3 0 8 0 15-5 15-12s-7-13-15-13z"/>
                        </svg>
                      </div>
                      <div className="service-content">
                        <div className="service-title">Audio Books</div>
                        <div className="service-description">Engaging Audio Books For All Genres</div>
                      </div>
                    </Link>

                    <Link href="/elements/buttons" className="service-item">
                      <div className="service-icon">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="currentColor">
                          <path d="M20 10l-5 5 10 10-10 10 5 5 15-15z"/>
                        </svg>
                      </div>
                      <div className="service-content">
                        <div className="service-title">Book Printing</div>
                        <div className="service-description">Affordable Book Printing Solutions</div>
                      </div>
                    </Link>

                    <Link href="/elements/clients" className="service-item">
                      <div className="service-icon">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="currentColor">
                          <path d="M25 5L10 15v20l15 10 15-10V15z"/>
                        </svg>
                      </div>
                      <div className="service-content">
                        <div className="service-title">Book Video Trailer</div>
                        <div className="service-description">Bringing Creativity to Life Through Videos</div>
                      </div>
                    </Link>

                    <Link href="/elements/counter" className="service-item">
                      <div className="service-icon">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="currentColor">
                          <circle cx="17" cy="25" r="5"/>
                          <circle cx="33" cy="25" r="5"/>
                          <circle cx="25" cy="15" r="5"/>
                        </svg>
                      </div>
                      <div className="service-content">
                        <div className="service-title">Web Design Seo</div>
                        <div className="service-description">Creating Beautiful Web Designs</div>
                      </div>
                    </Link>
                  </Col>

                  <Col md={4}>
                    <Link href="/elements/divider" className="service-item">
                      <div className="service-icon">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="currentColor">
                          <path d="M25 10c-8 0-15 7-15 15s7 15 15 15 15-7 15-15-7-15-15-15zm0 25c-6 0-10-4-10-10s4-10 10-10 10 4 10 10-4 10-10 10z"/>
                        </svg>
                      </div>
                      <div className="service-content">
                        <div className="service-title">Blog Writing</div>
                        <div className="service-description">Bespoke Blog Writing Services</div>
                      </div>
                    </Link>

                    <Link href="/elements/feature-box" className="service-item">
                      <div className="service-icon">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="currentColor">
                          <path d="M10 10h15v15H10zm0 17h15v15H10zm17-17h15v15H27zm0 17h15v15H27z"/>
                        </svg>
                      </div>
                      <div className="service-content">
                        <div className="service-title">Book Marketing</div>
                        <div className="service-description">Promoting Your Authors with Their Audience</div>
                      </div>
                    </Link>

                    <Link href="/elements/forms" className="service-item">
                      <div className="service-icon">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="currentColor">
                          <path d="M15 5v40l10-7 10 7V5z"/>
                        </svg>
                      </div>
                      <div className="service-content">
                        <div className="service-title">Book illustration</div>
                        <div className="service-description">Painting Your Words in Color</div>
                      </div>
                    </Link>

                    <Link href="/elements/grid" className="service-item">
                      <div className="service-icon">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="currentColor">
                          <path d="M10 10h30v5H10zm5 10h20v3H15zm0 8h25v3H15z"/>
                        </svg>
                      </div>
                      <div className="service-content">
                        <div className="service-title">Website Content Writing</div>
                        <div className="service-description">Content that Fuels Your Online Presence</div>
                      </div>
                    </Link>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div className="services-footer">
                      <div className="services-footer-content">
                        <h4>Our Expert Writers Always Assist You</h4>
                        <p>We provide a wide range of services in book publishing including everything from book writing to publishing and marketing.</p>
                      </div>
                      <Link href="/contact" className="services-footer-btn">
                        Contact Now
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Container>
            </DropdownMenu>
          </Dropdown>

          <li className="nav-item">
            <Link 
              className={`nav-link ${pathname === '/pages/contact' ? 'active' : ''}`} 
              href="/contact">
              Contact
            </Link>
          </li>

          <li className="nav-item">
            <Link 
              className={`nav-link ${pathname === '/reviews' ? 'active' : ''}`} 
              href="/reviews">
              Reviews
            </Link>
          </li>
        </ul>
      </Collapse>
    </>
  )
}

export default TopMenu