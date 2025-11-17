'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Col, Collapse, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap'

// Lucide Icons
import {
  PenLine,
  BookOpen,
  FileText,
  Square,
  Headphones,
  Printer,
  PlayCircle,
  Globe,
  PencilLine,
  Megaphone,
  Palette,
  FileEdit
} from "lucide-react"

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
          transform: translateX(-50%) translateY(12%) !important;
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
        }

        .service-content {
          flex: 1;
        }

        .service-title {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 2px;
        }

        .service-description {
          font-size: 12px;
          margin: 0;
          color: #6b7280;
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

        .services-footer-btn {
          background-color: #8f8985f0;
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
          background-color: #8f8985ff;
          color: white;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(136, 133, 121, 0.3);
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
        <ul className={`navbar-nav navbar-nav-scroll ${menuCenter ? 'mx-auto' : 'ms-auto'}`}>

          {/* Home */}
          <li className="nav-item">
            <Link className={`nav-link ${pathname === '/' ? 'active' : ''}`} href="/">Home</Link>
          </li>

          {/* About */}
          <li className="nav-item">
            <Link className={`nav-link ${isActive('/about') ? 'active' : ''}`} href="/about">About</Link>
          </li>

          {/* Services Mega Menu */}
          <Dropdown className="nav-item megamenu services-megamenu">
            <DropdownToggle
              as={'a'}
              className={`nav-link ${pathname.startsWith('/services/') ? 'active' : ''}`}
              id="servicesMenu"
              data-bs-toggle="dropdown"
            >
              Services
            </DropdownToggle>

            <DropdownMenu renderOnMount>
              <Container>
                <Row className="w-100">
                  
                  {/* Column 1 */}
                  <Col md={4}>
                    <Link href="/services/bookwriting" className="service-item">
                      <div className="service-icon"><PenLine size={32} /></div>
                      <div className="service-content">
                        <div className="service-title">Book Writing</div>
                        <div className="service-description">Turning Your Creativity into Timeless Stories</div>
                      </div>
                    </Link>

                    <Link href="/services/ebook-ghostwriting" className="service-item">
                      <div className="service-icon"><BookOpen size={32} /></div>
                      <div className="service-content">
                        <div className="service-title">eBook Ghostwriting</div>
                        <div className="service-description">Your Ideas, Our Words, Our eBooks</div>
                      </div>
                    </Link>

                    <Link href="/services/article-publication" className="service-item">
                      <div className="service-icon"><FileText size={32} /></div>
                      <div className="service-content">
                        <div className="service-title">Article Publication</div>
                        <div className="service-description">Establishing Your Authority</div>
                      </div>
                    </Link>

                    <Link href="/services/cover-design" className="service-item">
                      <div className="service-icon"><Square size={32} /></div>
                      <div className="service-content">
                        <div className="service-title">Cover Design</div>
                        <div className="service-description">Stunning Book Cover Designs For Your Books</div>
                      </div>
                    </Link>
                  </Col>

                  {/* Column 2 */}
                  <Col md={4}>
                    <Link href="/services/audio-book" className="service-item">
                      <div className="service-icon"><Headphones size={32} /></div>
                      <div className="service-content">
                        <div className="service-title">Audio Books</div>
                        <div className="service-description">Engaging Audio Books For All Genres</div>
                      </div>
                    </Link>

                    <Link href="/services/book-printing" className="service-item">
                      <div className="service-icon"><Printer size={32} /></div>
                      <div className="service-content">
                        <div className="service-title">Book Printing</div>
                        <div className="service-description">Affordable Book Printing Solutions</div>
                      </div>
                    </Link>

                    <Link href="/services/book-video-trailer" className="service-item">
                      <div className="service-icon"><PlayCircle size={32} /></div>
                      <div className="service-content">
                        <div className="service-title">Book Video Trailer</div>
                        <div className="service-description">Bringing Creativity to Life Through Videos</div>
                      </div>
                    </Link>

                    <Link href="/services/web-design-seo" className="service-item">
                      <div className="service-icon"><Globe size={32} /></div>
                      <div className="service-content">
                        <div className="service-title">Web Design SEO</div>
                        <div className="service-description">Creating Beautiful Web Designs</div>
                      </div>
                    </Link>
                  </Col>

                  {/* Column 3 */}
                  <Col md={4}>
                    <Link href="/services/blog-writing" className="service-item">
                      <div className="service-icon"><PencilLine size={32} /></div>
                      <div className="service-content">
                        <div className="service-title">Blog Writing</div>
                        <div className="service-description">Bespoke Blog Writing Services</div>
                      </div>
                    </Link>

                    <Link href="/services/book-marketing" className="service-item">
                      <div className="service-icon"><Megaphone size={32} /></div>
                      <div className="service-content">
                        <div className="service-title">Book Marketing</div>
                        <div className="service-description">Promoting Your Authors</div>
                      </div>
                    </Link>

                    <Link href="/services/book-illustration" className="service-item">
                      <div className="service-icon"><Palette size={32} /></div>
                      <div className="service-content">
                        <div className="service-title">Book Illustration</div>
                        <div className="service-description">Painting Your Words in Color</div>
                      </div>
                    </Link>

                    <Link href="/services/website-content-writing" className="service-item">
                      <div className="service-icon"><FileEdit size={32} /></div>
                      <div className="service-content">
                        <div className="service-title">Website Content Writing</div>
                        <div className="service-description">Content that Fuels Your Online Presence</div>
                      </div>
                    </Link>
                  </Col>

                </Row>

                {/* Footer */}
                <Row>
                  <Col>
                    <div className="services-footer">
                      <div>
                        <h4 style={{color: '#ffffff'}}>Our Expert Writers Always Assist You</h4>
                        <p>We provide a wide range of services in book publishing including writing, publishing and marketing.</p>
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

          {/* Support */}
          <Dropdown className="nav-item">
            <DropdownToggle as={'a'} className={`nav-link ${pathname === '/contact' || pathname === '/terms' || pathname === '/privacy' ? 'active' : ''}`}>
              Support
            </DropdownToggle>
            <DropdownMenu renderOnMount>
              <DropdownItem as={Link} href="/contact">Contact Us</DropdownItem>
              <DropdownItem as={Link} href="/terms">Terms of Service</DropdownItem>
              <DropdownItem as={Link} href="/privacy">Privacy Policy</DropdownItem>
            </DropdownMenu>
          </Dropdown>

          {/* Reviews */}
          <li className="nav-item">
            <Link className={`nav-link ${pathname === '/reviews' ? 'active' : ''}`} href="/reviews">Reviews</Link>
          </li>

          {/* Samples */}
          <li className="nav-item">
            <Link className={`nav-link ${pathname === '/book-samples' ? 'active' : ''}`} href="/book-samples">Samples</Link>
          </li>

        </ul>
      </Collapse>
    </>
  )
}

export default TopMenu
