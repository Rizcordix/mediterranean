'use client'
import TopMenu from '@/components/TopMenu'
import Image from 'next/image'
import React from 'react'
import spFlag from '@/assets/images/flags/sp.svg'
import frFlag from '@/assets/images/flags/fr.svg'
import grFlag from '@/assets/images/flags/gr.svg'
import ukFlag from '@/assets/images/flags/uk.svg'
import logo from '@/assets/images/medi_logo2.png'
import useScrollEvent from '@/hooks/useScrollEvent'
import { Button, Col, Collapse, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap'
import useToggle from '@/hooks/useToggle'
import Link from 'next/link'

const TopNavbar = () => {
  const { scrollY } = useScrollEvent()
  const { isOpen, toggle } = useToggle()
  const { isOpen: isOpenSearch, toggle: searchToggle } = useToggle()
  return (
    <header className={`header-static navbar-sticky navbar-light ${scrollY > 100 && 'navbar-sticky-on'}`}>
      <Collapse in={isOpenSearch} className="top-search bg-light" data-bs-parent="#search">
        <div>
          <div className="container">
            <Row className="position-relative">
              <Col md={8} className="mx-auto py-5">
                <form>
                  <div className="input-group">
                    <input
                      className="form-control rounded-start border-end-0 mb-0"
                      type="text"
                      name="search"
                      placeholder="What are you looking for?"
                    />
                    <button type="button" className="btn btn-grad m-0">
                      Search
                    </button>
                  </div>
                </form>
                <p className="small mt-2 mb-0">
                  <strong>e.g.</strong>Template, Larexa, WordPress theme{' '}
                </p>
              </Col>
              <Link onClick={searchToggle} className="position-absolute top-0 end-0 mt-3 me-3 text-end" data-bs-toggle="collapse" href="">
                <i className="fa fa-window-close" />
              </Link>
            </Row>
          </div>
        </div>
      </Collapse>
      <div className="navbar-top d-none d-lg-block">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <Dropdown>
                <DropdownToggle as={'a'} role="button" id="dropdownLanguage" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {' '}
                  <Image className="dropdown-item-icon" src={ukFlag} alt="ukFlag" /> English{' '}
                </DropdownToggle>
                <DropdownMenu className="mt-2 shadow" aria-labelledby="dropdownLanguage">
                  <span className="dropdown-item-text">Select language</span>
                  <div className="dropdown-divider" />
                  <DropdownItem>
                    <Image className="dropdown-item-icon" src={spFlag} alt="spFlag" /> Español
                  </DropdownItem>
                  <DropdownItem>
                    <Image className="dropdown-item-icon" src={frFlag} alt="frFlag" /> Français
                  </DropdownItem>
                  <DropdownItem>
                    <Image className="dropdown-item-icon" src={grFlag} alt="grFlag" /> Deutsch
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <ul className="nav list-unstyled ms-3">
                <li className="nav-item me-3">
                  <Link className="navbar-link" href="">
                    <strong>Phone:</strong> (251) 854-6308
                  </Link>
                </li>
                <li className="nav-item me-3">
                  <Link className="navbar-link" href="">
                    <strong>Email:</strong> help@larexa.com
                  </Link>
                </li>
              </ul>
            </div>
            <div className="d-flex align-items-center">
              <Dropdown>
                <DropdownToggle as={'a'} role="button" id="dropdownAccount" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="ti-user me-2" />
                  Account{' '}
                </DropdownToggle>
                <DropdownMenu className="mt-2 shadow" aria-labelledby="dropdownAccount">
                  <DropdownItem href="/auth/sign-in">Log In</DropdownItem>
                  <DropdownItem href="/auth/sign-up">Register</DropdownItem>
                  <DropdownItem href="">Settings</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <ul className="nav">
                <li className="nav-item">
                  <Link className="navbar-link mx-3" href="/pages/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <ul className="social-icons">
                <li className="social-icons-item social-facebook m-0">
                  <Link className="social-icons-link w-auto px-2" href="">
                    <i className="fab fa-facebook-f" />
                  </Link>
                </li>
                <li className="social-icons-item social-instagram m-0">
                  <Link className="social-icons-link w-auto px-2" href="">
                    <i className="fab fa-instagram" />
                  </Link>
                </li>
                <li className="social-icons-item social-twitter m-0">
                  <Link className="social-icons-link w-auto ps-2" href="">
                    <i className="fab fa-twitter" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <nav className="navbar navbar-expand-lg">
        <Container>
          <Link className="navbar-brand" href="/">
            <Image className="navbar-brand-item" src={logo} alt="Logo" />
          </Link>
          <button
            onClick={toggle}
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <TopMenu isOpen={isOpen} />
          <div className="navbar-nav">
            <div className="nav-item search border-0 ps-3 pe-0 px-lg-2" id="search">
              <Link className="nav-link" onClick={searchToggle} data-bs-toggle="collapse" href="">
                <i className="ti-search"> </i>
              </Link>
            </div>
            <div className="nav-item border-0 d-none d-lg-inline-block align-self-center">
              <Button variant="grad" size="sm" className="text-white mb-0">
                Buy Now!
              </Button>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  )
}

export default TopNavbar
