'use client'
import TopMenu from '@/components/TopMenu'
import Image from 'next/image'
import React from 'react'
import logo from '@/assets/images/logo.png'
import useScrollEvent from '@/hooks/useScrollEvent'
import { Col, Collapse, Container, Row } from 'react-bootstrap'
import Link from 'next/link'
import useToggle from '@/hooks/useToggle'

const TopNavbar = () => {
  const { scrollY } = useScrollEvent()
  const { isOpen, toggle } = useToggle()
  const { isOpen: isOpenSearch, toggle: searchToggle } = useToggle()
  return (
    <header className={`header-static navbar-sticky navbar-light shadow ${scrollY > 80 && 'navbar-sticky-on'}`}>
      <Collapse in={isOpenSearch} className="top-search collapse bg-light" data-bs-parent="#search">
        <div>
          <Container>
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
              <Link className="position-absolute top-0 end-0 mt-3 me-3 text-end" data-bs-toggle="collapse" href="">
                <i className="fa fa-window-close" />
              </Link>
            </Row>
          </Container>
        </div>
      </Collapse>
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
              <Link href="" className=" btn btn-sm btn-grad text-white mb-0">
                Buy Now!
              </Link>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  )
}

export default TopNavbar
