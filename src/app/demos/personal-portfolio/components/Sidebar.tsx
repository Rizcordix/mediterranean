import Link from 'next/link'
import React from 'react'
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from 'react-bootstrap'
import logoImg from '@/assets/images/medi_logo2.png'
import Image from 'next/image'

type OpenMenuType = {
  isOpen: boolean
  toggle: () => void
}

const Sidebar = ({ isOpen, toggle }: OpenMenuType) => {
  return (
    <Offcanvas placement="end" show={isOpen} onHide={toggle} role="dialog">
      <OffcanvasHeader className="justify-content-end">
        <button type="button" className="btn-close text-reset" onClick={toggle} data-bs-dismiss="offcanvas" aria-label="Close" />
      </OffcanvasHeader>
      <OffcanvasBody className="d-flex flex-column pt-0 px-4">
        <div>
          <Link className="navbar-brand mb-3 pt-0 d-block" href="/">
            <Image src={logoImg} alt="logo" className="navbar-brand-item" />
          </Link>
          <ul className="nav d-block flex-column my-4">
            <li className=" text-primary-hover mb-3">
              <Link className="h4 active" href="/">
                Home
              </Link>
            </li>
            <li className=" text-primary-hover mb-3">
              <Link className="h4" href="">
                About
              </Link>
            </li>
            <li className=" text-primary-hover mb-3">
              <Link className="h4" href="">
                Service
              </Link>
            </li>
            <li className=" text-primary-hover mb-3">
              <Link className="h4" href="">
                Contact Us
              </Link>
            </li>
            <li className=" text-primary-hover mb-3">
              <Link className="h4" href="">
                Faqs
              </Link>
            </li>
          </ul>
        </div>
      </OffcanvasBody>
    </Offcanvas>
  )
}

export default Sidebar
