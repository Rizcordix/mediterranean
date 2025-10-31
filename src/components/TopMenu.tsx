'use client'
import useToggle from '@/hooks/useToggle'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Col, Collapse, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap'

// NOTE: useToggle is still needed for the 'Elements' megamenu/dropdown 
// but the other toggle states (dropdownOpen, gridOpen, blogOpen, pageMenuOpen, loginMenuOpen) 
// are no longer necessary as their corresponding menu items are removed.

type OpenType = {
  isOpen?: boolean
  menuCenter?: boolean
}

const TopMenu = ({ isOpen, menuCenter }: OpenType) => {
  const pathname = usePathname()

  // Only the isActive function and the elements menu-related state (if needed) are relevant.
  // The toggle states for Blog, Pages, etc. are removed.
  // The Elements menu is complex (a megamenu using a full Dropdown), 
  // so we'll keep its structure mostly intact but wrap it in the new simplified list.

  const isActive = (url: any) => pathname === url || pathname.startsWith(url)

  return (
    <Collapse in={isOpen} className="navbar-collapse">
      <ul className={`navbar-nav navbar-nav-scroll navbar-nav-scroll ${menuCenter ? 'mx-auto' : 'ms-auto'}  `}>
        
        {/* 1. Home Link */}
        <li className="nav-item">
          <Link 
            className={`nav-link ${pathname === '/' ? 'active' : ''}`} 
            href="/">
            Home
          </Link>
        </li>

        {/* 2. About Link (Linking to the closest 'About' page from the original menu) */}
        <li className="nav-item">
          {/* Using '/pages/about-classic' as the default About page */}
          <Link 
            className={`nav-link ${isActive('/pages/about') ? 'active' : ''}`} 
            href="/about">
            About
          </Link>
        </li>

        {/* 4. Elements Dropdown (Megamenu - Kept from original code) */}
        <Dropdown className="nav-item megamenu">
          <DropdownToggle
            as={'a'}
            className={`nav-link ${isActive('/elements') ? 'active' : ''}`}
            id="elementsMenu"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            Services
          </DropdownToggle>
          <DropdownMenu renderOnMount>
            <Container>
              <Row className="w-100">
                <Col sm={6} lg={3}>
                  <ul className="list-unstyled">
                    <li>
                      {' '}
                      <DropdownItem as={Link} className={`${pathname === '/elements/accordions' ? 'active' : ''}`} href="/elements/accordions">
                        Accordion
                      </DropdownItem>{' '}
                    </li>
                    <li>
                      {' '}
                      <DropdownItem as={Link} className={` ${pathname === '/elements/action-box' ? 'active' : ''}`} href="/elements/action-box">
                        Action box
                      </DropdownItem>{' '}
                    </li>
                    <li>
                      {' '}
                      <DropdownItem as={Link} className={` ${pathname === '/elements/alerts' ? 'active' : ''}`} href="/elements/alerts">
                        Alerts
                      </DropdownItem>{' '}
                    </li>
                    <li>
                      {' '}
                      <DropdownItem
                        className={` ${pathname === '/elements/animated-headlines' ? 'active' : ''}`}
                        href="/elements/animated-headlines">
                        Animated Headlines
                      </DropdownItem>
                    </li>
                    <li>
                      {' '}
                      <DropdownItem as={Link} className={` ${pathname === '/elements/blockquote' ? 'active' : ''}`} href="/elements/blockquote">
                        Blockquote
                      </DropdownItem>{' '}
                    </li>
                    <li>
                      {' '}
                      <DropdownItem as={Link} className={` ${pathname === '/elements/buttons' ? 'active' : ''}`} href="/elements/buttons">
                        Buttons
                      </DropdownItem>{' '}
                    </li>
                  </ul>
                </Col>
                <Col sm={6} lg={3}>
                  <ul className="list-unstyled">
                    <li>
                      {' '}
                      <DropdownItem as={Link} className={` ${pathname === '/elements/clients' ? 'active' : ''}`} href="/elements/clients">
                        Clients
                      </DropdownItem>{' '}
                    </li>
                    <li>
                      {' '}
                      <DropdownItem as={Link} className={` ${pathname === '/elements/counter' ? 'active' : ''}`} href="/elements/counter">
                        Counter
                      </DropdownItem>{' '}
                    </li>
                    <li>
                      {' '}
                      <DropdownItem as={Link} className={` ${pathname === '/elements/divider' ? 'active' : ''}`} href="/elements/divider">
                        Divider
                      </DropdownItem>{' '}
                    </li>
                    <li>
                      {' '}
                      <DropdownItem as={Link} className={` ${pathname === '/elements/feature-box' ? 'active' : ''}`} href="/elements/feature-box">
                        Feature box
                      </DropdownItem>{' '}
                    </li>
                    <li>
                      {' '}
                      <DropdownItem as={Link} className={` ${pathname === '/elements/forms' ? 'active' : ''}`} href="/elements/forms">
                        Forms
                      </DropdownItem>{' '}
                    </li>
                    <li>
                      {' '}
                      <DropdownItem as={Link} className={` ${pathname === '/elements/grid' ? 'active' : ''}`} href="/elements/grid">
                        Grid
                      </DropdownItem>{' '}
                    </li>
                  </ul>
                </Col>
                <Col sm={6} lg={3}>
                  <ul className="list-unstyled">
                    <li>
                      {' '}
                      <DropdownItem as={Link} className={` ${pathname === '/elements/list-styles' ? 'active' : ''}`} href="/elements/list-styles">
                        list styles
                      </DropdownItem>{' '}
                    </li>
                    <li>
                      {' '}
                      <DropdownItem as={Link} className={` ${pathname === '/elements/map' ? 'active' : ''}`} href="/elements/map">
                        Map
                      </DropdownItem>{' '}
                    </li>
                    <li>
                      {' '}
                      <DropdownItem as={Link} className={` ${pathname === '/elements/modal' ? 'active' : ''}`} href="/elements/modal">
                        Modal
                      </DropdownItem>{' '}
                    </li>
                    <li>
                      {' '}
                      <DropdownItem as={Link} className={` ${pathname === '/elements/skill' ? 'active' : ''}`} href="/elements/skill">
                        skill
                      </DropdownItem>{' '}
                    </li>
                    <li>
                      {' '}
                      <DropdownItem as={Link} className={` ${pathname === '/elements/social-icon' ? 'active' : ''}`} href="/elements/social-icon">
                        social icon
                      </DropdownItem>{' '}
                    </li>
                    <li>
                      {' '}
                      <DropdownItem as={Link} className={` ${pathname === '/elements/tabs' ? 'active' : ''}`} href="/elements/tabs">
                        Tab
                      </DropdownItem>{' '}
                    </li>
                  </ul>
                </Col>
                <Col sm={6} lg={3}>
                  <ul className="list-unstyled">
                    <li>
                      {' '}
                      <DropdownItem as={Link} className={` ${pathname === '/elements/table' ? 'active' : ''}`} href="/elements/table">
                        Table
                      </DropdownItem>{' '}
                    </li>
                    <li>
                      {' '}
                      <DropdownItem as={Link} className={` ${pathname === '/elements/team' ? 'active' : ''}`} href="/elements/team">
                        Team
                      </DropdownItem>{' '}
                    </li>
                    <li>
                      {' '}
                      <DropdownItem as={Link} className={` ${pathname === '/elements/tiny-slider' ? 'active' : ''}`} href="/elements/tiny-slider">
                        Tiny slider
                      </DropdownItem>{' '}
                    </li>
                    <li>
                      {' '}
                      <DropdownItem as={Link} className={` ${pathname === '/elements/typography' ? 'active' : ''}`} href="/elements/typography">
                        Typography
                      </DropdownItem>{' '}
                    </li>
                    <li>
                      {' '}
                      <DropdownItem as={Link} className={` ${pathname === '/elements/video' ? 'active' : ''}`} href="/elements/video">
                        Video
                      </DropdownItem>{' '}
                    </li>
                  </ul>
                </Col>
              </Row>
            </Container>
          </DropdownMenu>
        </Dropdown>

        <li className="nav-item">
          <Link 
            className={`nav-link ${pathname === '/pages/contact' ? 'active' : ''}`} 
            href="/contact">
            ContactUs
          </Link>
        </li>

        <li className="nav-item">
          <Link 
            className={`nav-link ${pathname === '/pages/contact' ? 'active' : ''}`} 
            href="/contact">
            Reviews
          </Link>
        </li>
      </ul>
    </Collapse>
  )
}

export default TopMenu