'use client'
import TopMenu from '@/components/TopMenu'
import useScrollEvent from '@/hooks/useScrollEvent'
import Image from 'next/image'
import logo from '@/assets/images/logo.png'
import { Container } from 'react-bootstrap'
import Link from 'next/link'
import useToggle from '@/hooks/useToggle'

const TopNavbar = () => {
  const { scrollY } = useScrollEvent()
  const { isOpen, toggle } = useToggle()
  return (
    <header className={`navbar-floating navbar-sticky navbar-light ${scrollY > 80 && 'navbar-sticky-on'}`}>
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
          <TopMenu isOpen={isOpen} menuCenter />
          <div className="navbar-nav">
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
