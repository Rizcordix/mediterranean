'use client'
// import TopMenu from '@/components/TopMenu'
import useScrollEvent from '@/hooks/useScrollEvent'
import Image from 'next/image'
import logo from '@/assets/images/medi_logo2.png'
import { Container } from 'react-bootstrap'
import Link from 'next/link'
// import useToggle from '@/hooks/useToggle'
import { usePopup } from '@/components/wrappers/PopupContext'

const TopNavbar = () => {
  const { scrollY } = useScrollEvent()
  // const { isOpen, toggle } = useToggle()
  const { openQuote } = usePopup()
  console.log("Popup context:", usePopup());
  return (
    <header className={`navbar-floating navbar-sticky navbar-light ${scrollY > 80 && 'navbar-sticky-on'}`}>
      <nav className="navbar navbar-expand-lg">
        <Container>
          <Link className="navbar-brand" href="/">
            <Image className="navbar-brand-item" src={logo} alt="Logo" />
          </Link>
          <div className="navbar-nav">
            <div className="nav-item border-0 d-none d-lg-inline-block align-self-center">
              <button onClick={openQuote} className=" btn btn-sm btn-grad text-white mb-0">
                Get Quote!
              </button>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  )
}

export default TopNavbar
