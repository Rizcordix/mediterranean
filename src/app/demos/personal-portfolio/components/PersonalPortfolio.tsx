'use client'
import React from 'react'
import Sidebar from './Sidebar'
import Link from 'next/link'
import PortfolioHome from './PortfolioHome'
import useToggle from '@/hooks/useToggle'

const PersonalPortfolio = () => {
  const { isOpen: isOffCanvasMenuOpen, toggle: toggleOffCanvasMenu } = useToggle()
  return (
    <>
      <Sidebar isOpen={isOffCanvasMenuOpen} toggle={toggleOffCanvasMenu} />
      <div className="hamburger-menu">
        <span className="hamburger-inner display-7 text-dark">
          <Link
            className="hamburger-icon"
            data-bs-toggle="offcanvas"
            onClick={toggleOffCanvasMenu}
            href=""
            role="button"
            aria-controls="offcanvasMenu">
            <i className="text-dark bg-white p-1 rounded fas fa-fw fa-bars" data-bs-target="#offcanvasMenu"></i>
          </Link>
        </span>
      </div>
      <PortfolioHome />
    </>
  )
}

export default PersonalPortfolio
