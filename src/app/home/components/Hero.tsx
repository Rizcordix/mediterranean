'use client'
import React from 'react'
import banner8 from '@/assets/images/banner/mainhero.png'
// import Typist from 'react-text-typist'
import { Container } from 'react-bootstrap'
// import Jarallax from '@/components/Jarallax';
import trustedplatforms from '@/assets/images/banner/trusted-platforms.png'
import dynamic from 'next/dynamic'
import Image from 'next/image'

const Jarallax = dynamic(() => import('@/components/Jarallax'), { ssr: false })

const Hero = () => {
  return (
    <Jarallax
      tag={'section'}
      className="p-0  h-500 h-lg-700 bg-overlay-dark-2 bg-parallax"
      style={{ background: `url(${banner8.src}) no-repeat 65% 0%`, backgroundSize: 'cover' }}>
      <div className="position-absolute bottom-0 all-text-white w-45">
      {/* FULL WIDTH BLACK BAR */}
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
