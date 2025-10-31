'use client'
import useToggle from '@/hooks/useToggle'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Col, Collapse, Container, Dropdown, DropdownHeader, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap'

type OpenType = {
  isOpen?: boolean
  menuCenter?: boolean
}

const TopMenu = ({ isOpen, menuCenter }: OpenType) => {
  const pathname = usePathname()

  const { isOpen: dropdownOpen, toggle } = useToggle()
  const { isOpen: gridOpen, toggle: gridToggle } = useToggle()
  const { isOpen: blogOpen, toggle: blogToggle } = useToggle()
  const { isOpen: pageMenuOpen, toggle: pageMenuToggle } = useToggle()
  const { isOpen: loginMenuOpen, toggle: loginMenuToggle } = useToggle()

  const isActive = (url: any) => pathname === url || pathname.startsWith(url)

  return (
    <Collapse in={isOpen} className="navbar-collapse">
      {/* <div> */}
      <ul className={`navbar-nav navbar-nav-scroll navbar-nav-scroll ${menuCenter ? 'mx-auto' : 'ms-auto'}  `}>
        <Dropdown className="nav-item">
          <DropdownToggle as={'a'} className={`nav-link ${isActive('/demos') ? 'active' : ''}`} role="button">
            Demos
          </DropdownToggle>
          <DropdownMenu className="pb-3 pb-lg-0" renderOnMount>
            <div className="d-block d-sm-flex">
              <ul className="list-unstyled w-100 w-sm-50 pe-0 pe-lg-5">
                <DropdownHeader>Business Homepages</DropdownHeader>
                <li>
                  {' '}
                  <DropdownItem as={Link} className={`${pathname === '/demos/home' ? 'active' : ''}`} href="/">
                    Classic Default<span className="badge bg-success ms-2">Hot</span>
                  </DropdownItem>{' '}
                </li>
                <li>
                  {' '}
                  <DropdownItem as={Link} className={`${pathname === '/demos/corporate-startUp' ? 'active' : ''}`} href="/demos/corporate-startUp">
                    Corporate Start-Up
                  </DropdownItem>{' '}
                </li>
                <li>
                  {' '}
                  <DropdownItem as={Link} className={`${pathname === '/demos/landing-trendy' ? 'active' : ''}`} href="/demos/landing-trendy">
                    Landing Trendy
                  </DropdownItem>{' '}
                </li>
                <li>
                  {' '}
                  <DropdownItem as={Link} className={`${pathname === '/demos/portfolio-modern' ? 'active' : ''}`} href="/demos/portfolio-modern">
                    Portfolio Modern
                  </DropdownItem>
                </li>
                <li>
                  {' '}
                  <DropdownItem as={Link} className={`${pathname === '/demos/agency-startUp' ? 'active' : ''}`} href="/demos/agency-startUp">
                    Agency Start-Up
                  </DropdownItem>{' '}
                </li>
              </ul>
              <ul className="list-unstyled w-100 w-sm-50 pe-0 pe-lg-5">
                <DropdownHeader className="mt-3 mt-sm-0">Classic Homepages</DropdownHeader>
                <li>
                  {' '}
                  <DropdownItem as={Link} className={`${pathname === '/demos/classic-corporate' ? 'active' : ''}`} href="/demos/classic-corporate">
                    Classic Corporate
                  </DropdownItem>{' '}
                </li>
                <li>
                  {' '}
                  <DropdownItem as={Link} className={`${pathname === '/demos/creative-agency' ? 'active' : ''}`} href="/demos/creative-agency">
                    Creative agency
                  </DropdownItem>{' '}
                </li>
                <li>
                  {' '}
                  <DropdownItem as={Link} className={`${pathname === '/demos/home-elegant' ? 'active' : ''}`} href="/demos/home-elegant">
                    Home Elegant
                  </DropdownItem>{' '}
                </li>
                <li>
                  {' '}
                  <DropdownItem as={Link} className={`${pathname === '/demos/marketplace' ? 'active' : ''}`} href="/demos/marketplace">
                    Marketplace
                  </DropdownItem>{' '}
                </li>
                <li>
                  {' '}
                  <DropdownItem as={Link} className={`${pathname === '/demos/personal-portfolio' ? 'active' : ''}`} href="/demos/personal-portfolio">
                    Personal Portfolio
                  </DropdownItem>{' '}
                </li>
              </ul>
            </div>
            <div className="w-100 bg-grad pattern-overlay-2 p-4 mt-3 all-text-white d-none d-lg-flex">
              <div className="align-self-center me-4">
                <h4 className="mb-0">Checkout the doc!</h4>
                <p className="mb-0 small">For better understanding of theme standard</p>
              </div>
              <Link
                href="https://larexa-next.netlify.app/"
                target="_blank"
                className="btn btn-outline-white btn-sm mb-0 align-self-center ms-auto">
                Read more!
              </Link>
            </div>
          </DropdownMenu>
        </Dropdown>

        <Dropdown className="nav-item">
          <DropdownToggle as={'a'} className={`nav-link ${isActive('/blog') ? 'active' : ''}`} role="button">
            Blog
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu" renderOnMount>
            <li className="dropdown-submenu">
              <Dropdown className="dropdown">
                <DropdownToggle as={'a'} onClick={toggle} className={`dropdown-item ${isActive('/default') ? 'active' : ''}`}>
                  Blog default
                </DropdownToggle>
                <ul className={`dropdown-menu ${dropdownOpen && 'show'} `}>
                  <li>
                    {' '}
                    <DropdownItem as={Link} className={`${pathname === '/blog/default/full-width' ? 'active' : ''}`} href="/blog/default/full-width">
                      Full Width
                    </DropdownItem>{' '}
                  </li>
                  <li>
                    {' '}
                    <DropdownItem as={Link} className={`${pathname === '/blog/default/left-sidebar' ? 'active' : ''}`} href="/blog/default/left-sidebar">
                      Left Sidebar
                    </DropdownItem>{' '}
                  </li>
                  <li>
                    {' '}
                    <DropdownItem as={Link} className={`${pathname === '/blog/default/right-sidebar' ? 'active' : ''}`} href="/blog/default/right-sidebar">
                      Right Sidebar
                    </DropdownItem>{' '}
                  </li>
                </ul>
              </Dropdown>
            </li>
            <li className="dropdown-submenu">
              <Dropdown className="dropdown">
                <DropdownToggle as={'a'} onClick={gridToggle} className={`dropdown-item ${isActive('/blog-grid') ? 'active' : ''}`}>
                  Blog Grid
                </DropdownToggle>
                <ul className={`dropdown-menu ${gridOpen && 'show'}`}>
                  <li>
                    {' '}
                    <DropdownItem as={Link} className={`${pathname === '/blog/blog-grid/three-column' ? 'active' : ''}`} href="/blog/blog-grid/three-column">
                      Three column
                    </DropdownItem>{' '}
                  </li>
                  <li>
                    {' '}
                    <DropdownItem as={Link} className={`${pathname === '/blog/blog-grid/four-column' ? 'active' : ''}`} href="/blog/blog-grid/four-column">
                      Four column
                    </DropdownItem>{' '}
                  </li>
                  <li>
                    {' '}
                    <DropdownItem as={Link} className={`${pathname === '/blog/blog-grid/left-sidebar' ? 'active' : ''}`} href="/blog/blog-grid/left-sidebar">
                      Left Sidebar
                    </DropdownItem>{' '}
                  </li>
                  <li>
                    {' '}
                    <DropdownItem
                      className={`${pathname === '/blog/blog-grid/right-sidebar' ? 'active' : ''}`}
                      href="/blog/blog-grid/right-sidebar">
                      Right Sidebar
                    </DropdownItem>{' '}
                  </li>
                </ul>
              </Dropdown>
            </li>
            <li>
              <DropdownItem href="/blog/blog-minimal">Blog minimal</DropdownItem>
            </li>
            <li className="dropdown-submenu">
              <Dropdown className="dropdown">
                <DropdownToggle as={'a'} onClick={blogToggle} className="dropdown-item">
                  Blog Single
                </DropdownToggle>
                <ul className={`dropdown-menu ${blogOpen && 'show'}`}>
                  <li>
                    {' '}
                    <DropdownItem
                      className={`${pathname === '/blog/blog-single/single-classic' ? 'active' : ''}`}
                      href="/blog/blog-single/single-classic">
                      Single classic
                    </DropdownItem>{' '}
                  </li>
                  <li>
                    {' '}
                    <DropdownItem
                      className={`${pathname === '/blog/blog-single/single-minimal' ? 'active' : ''}`}
                      href="/blog/blog-single/single-minimal">
                      Single Minimal
                    </DropdownItem>{' '}
                  </li>
                </ul>
              </Dropdown>
            </li>
          </DropdownMenu>
        </Dropdown>

        <Dropdown className="nav-item">
          <DropdownToggle onClick={pageMenuToggle} as={'a'} className={`nav-link ${isActive('/pages') ? 'active' : ''}`} role="button">
            Pages
          </DropdownToggle>
          <ul className={`dropdown-menu ${pageMenuOpen && 'show'}`} data-bs-popper="static">
            <li>
              {' '}
              <DropdownItem as={Link} className={`${pathname === '/pages/about-classic' ? 'active' : ''}`} href="/pages/about-classic">
                About Classic
              </DropdownItem>
            </li>
            <li>
              {' '}
              <DropdownItem as={Link} className={`${pathname === '/pages/about-advance' ? 'active' : ''}`} href="/pages/about-advance">
                About Advance
              </DropdownItem>{' '}
            </li>
            <li>
              {' '}
              <DropdownItem as={Link} className={`${pathname === '/pages/service' ? 'active' : ''}`} href="/pages/service">
                Service
              </DropdownItem>{' '}
            </li>
            <li>
              {' '}
              <DropdownItem as={Link} className={`${pathname === '/pages/contact' ? 'active' : ''}`} href="/pages/contact">
                Contact
              </DropdownItem>{' '}
            </li>
            <li>
              {' '}
              <DropdownItem as={Link} className={`${pathname === '/pages/team' ? 'active' : ''}`} href="/pages/team">
                Team
              </DropdownItem>{' '}
            </li>
            <li>
              {' '}
              <DropdownItem as={Link} className={`${pathname === '/pages/careers' ? 'active' : ''}`} href="/pages/careers">
                Careers
              </DropdownItem>{' '}
            </li>
            <li>
              {' '}
              <DropdownItem as={Link} className={`${pathname === '/pages/careers-single' ? 'active' : ''}`} href="/pages/careers-single">
                Careers single
              </DropdownItem>{' '}
            </li>
            <li className="dropdown-submenu">
              <Dropdown className="dropdown">
                <DropdownToggle onClick={loginMenuToggle} className="dropdown-item">
                  Login &amp; Signup
                </DropdownToggle>
                <ul className={`dropdown-menu ${loginMenuOpen && 'show'}`}>
                  <li>
                    {' '}
                    <DropdownItem as={Link} className={`${pathname === '/auth/sign-in' ? 'active' : ''}`} href="/auth/sign-in">
                      Sign in
                    </DropdownItem>{' '}
                  </li>
                  <li>
                    {' '}
                    <DropdownItem as={Link} className={`${pathname === '/auth/sign-up' ? 'active' : ''}`} href="/auth/sign-up">
                      Sign up
                    </DropdownItem>{' '}
                  </li>
                  <li>
                    {' '}
                    <DropdownItem as={Link} className={`${pathname === '/auth/password-recovery' ? 'active' : ''}`} href="/auth/password-recovery">
                      Password recovery
                    </DropdownItem>{' '}
                  </li>
                </ul>
              </Dropdown>
            </li>
            <li>
              {' '}
              <DropdownItem as={Link} className={`${pathname === '/pages/pricing' ? 'active' : ''}`} href="/pages/pricing">
                Pricing
              </DropdownItem>{' '}
            </li>
            <li>
              {' '}
              <DropdownItem as={Link} className={`${pathname === '/pages/timeline' ? 'active' : ''}`} href="/pages/timeline">
                Timeline
              </DropdownItem>{' '}
            </li>
            <li>
              {' '}
              <DropdownItem as={Link} className={`${pathname === '/pages/faq' ? 'active' : ''}`} href="/pages/faq">
                FAQs
              </DropdownItem>{' '}
            </li>
            <li>
              {' '}
              <DropdownItem as={Link} className={`${pathname === '/maintenance' ? 'active' : ''}`} href="/maintenance">
                Maintenance mode
              </DropdownItem>{' '}
            </li>
            <li>
              {' '}
              <DropdownItem as={Link} className={`${pathname === '/pages/error-404' ? 'active' : ''}`} href="/pages/error-404">
                Error 404
              </DropdownItem>{' '}
            </li>
          </ul>
        </Dropdown>
        <Dropdown className="nav-item">
          <DropdownToggle as={'a'} className={`nav-link ${isActive('/portfolio') ? 'active' : ''}`} role="button">
            Portfolio
          </DropdownToggle>
          <DropdownMenu renderOnMount>
            <li>
              {' '}
              <DropdownItem as={Link} className={` ${pathname === '/portfolio/column-2' ? 'active' : ''}`} href="/portfolio/column-2">
                Portfolio Column 2
              </DropdownItem>{' '}
            </li>
            <li>
              {' '}
              <DropdownItem as={Link} className={` ${pathname === '/portfolio/column-3' ? 'active' : ''}`} href="/portfolio/column-3">
                Portfolio Column 3
              </DropdownItem>{' '}
            </li>
            <li>
              {' '}
              <DropdownItem as={Link} className={` ${pathname === '/portfolio/column-4' ? 'active' : ''}`} href="/portfolio/column-4">
                Portfolio Column 4
              </DropdownItem>{' '}
            </li>
            <li>
              {' '}
              <DropdownItem as={Link} className={` ${pathname === '/portfolio/column-5' ? 'active' : ''}`} href="/portfolio/column-5">
                Portfolio Column 5
              </DropdownItem>{' '}
            </li>
            <li>
              {' '}
              <DropdownItem as={Link} className={` ${pathname === '/portfolio/column-6' ? 'active' : ''}`} href="/portfolio/column-6">
                Portfolio Column 6
              </DropdownItem>{' '}
            </li>
            <li>
              {' '}
              <DropdownItem as={Link} className={` ${pathname === '/portfolio/single' ? 'active' : ''}`} href="/portfolio/single">
                Portfolio Single
              </DropdownItem>{' '}
            </li>
            <li>
              {' '}
              <DropdownItem as={Link} className={` ${pathname === '/portfolio/single-2' ? 'active' : ''}`} href="/portfolio/single-2">
                Portfolio Single 2
              </DropdownItem>{' '}
            </li>
            <li>
              {' '}
              <DropdownItem as={Link} className={` ${pathname === '/portfolio/case-studies' ? 'active' : ''}`} href="/portfolio/case-studies">
                Portfolio case studies <span className="badge bg-success ms-2">Hot</span>
              </DropdownItem>{' '}
            </li>
          </DropdownMenu>
        </Dropdown>

        <Dropdown className="nav-item megamenu">
          <DropdownToggle
            as={'a'}
            className={`nav-link ${isActive('/elements') ? 'active' : ''}`}
            id="elementsMenu"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            Elements
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
      </ul>
      {/* </div> */}
    </Collapse>
  )
}

export default TopMenu
