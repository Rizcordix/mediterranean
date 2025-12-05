'use client'
import React from 'react'
import banner8 from '@/assets/images/banner/Herobg6.png'
import { Container, Button } from 'react-bootstrap'
import trustedplatforms from '@/assets/images/banner/trusted-platforms.png'
import bookImage from '@/assets/images/banner/bookhero.png'
import dynamic from 'next/dynamic'
import Image from 'next/image'

const Jarallax = dynamic(() => import('@/components/Jarallax'), { ssr: false })

const Hero = () => {
  return (
    <Jarallax
      tag={'section'}
      className="position-relative p-0 h-500 h-lg-700 bg-overlay-darkk-1 bg-grad3 bg-parallax"
      style={{
        background: `url(${banner8.src}) no-repeat 65% 0%`,
        backgroundSize: 'cover'
      }}
    >

      {/* LEFT CONTENT */}
      <Container className="position-relative z-2 py-6" style={{ maxWidth: '1200px' }}>
        <div className="col-12 col-lg-6 text-start text-white mt-5 pt-4">

          <h1 className="fw-bold display-5" style={{color: '#0f252f'}}>
            Transform Your Story Into a Published Masterpiece
          </h1>

          <p className="mt-3 fs-7" style={{color: '#364a52'}}>
            Whether you&apos;re an aspiring author with a brilliant idea, a business professional wanting to share your expertise, or a creative mind ready to publish your masterpiece, we handle everything from manuscript to marketing. Join thousands of successful authors who trusted Mediterranean Publishing to turn their dreams into reality.
          </p>

          <div className="mt-4 d-flex gap-3">
            <Button className="btn btn-primary px-4 py-2 rounded-pill" style={{ color:'#eeeae7' }}>
              Get Started
            </Button>

            <Button className="btn btn-outline-light px-4 py-2 rounded-pill" style={{borderColor: '#ffffff', color: '#0f252f'}}>
              Learn More
            </Button>
          </div>
        </div>
      </Container>


      {/* RIGHT SIDE IMAGE (HIDES ON MOBILE) */}
      <div
        className="d-none d-lg-block position-absolute end-0 pe-8"
        style={{
          zIndex: 1,
          top: '10%'
        }}
      >
        <img
          src={bookImage.src}
          alt="Hero Graphic"
          width={550}
          className="img-fluid"
          style={{
        objectFit: 'contain',
        maxWidth: '100%',
        height: 'auto'
          }}
        />
      </div>


      {/* EXISTING BOTTOM RIGHT BLACK BAR */}
      <div className="position-absolute bottom-0 all-text-white w-45">
        <div
          className="py-4 px-6 d-inline-block d-none d-lg-block"
          style={{
            backgroundColor: '#0f252f',
            borderBottomRightRadius: '60px',
            borderTopRightRadius: '60px'
          }}
        >
          <Container className="d-inline block justify-content-left align-items-center py-2">
            <Image
              src={trustedplatforms}
              alt="Trusted by leading platforms"
              className="img-fluid"
            />
          </Container>
        </div>
      </div>

    </Jarallax>
  )
}

export default Hero
