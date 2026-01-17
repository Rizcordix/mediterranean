'use client'

import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { Container, Button } from 'react-bootstrap'

import banner8 from '@/assets/images/banner/mainbg.webp'
import trustedplatforms from '@/assets/images/banner/trusted-platforms.png'
import bookImage from '@/assets/images/banner/herobook1.webp'

// Load Jarallax ONLY after LCP
const Jarallax = dynamic(() => import('@/components/Jarallax'), {
  ssr: false
})

const Hero = () => {
  const [enableParallax, setEnableParallax] = useState(false)

  useEffect(() => {
    // Allow browser to paint first (critical for Lighthouse)
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => setEnableParallax(true))
    } else {
      setTimeout(() => setEnableParallax(true), 1200)
    }
  }, [])

  const Wrapper: any = enableParallax ? Jarallax : 'section'

  return (
    <Wrapper
      tag={enableParallax ? 'section' : undefined}
      className="position-relative p-0 h-600 h-lg-700 bg-overlay-darkk-1 bg-grad3 bg-parallax overflow-hidden"
    >
      {/* ✅ LCP IMAGE (ONLY priority image) */}
      <Image
        src={banner8}
        alt="Hero Background"
        fill
        priority
        fetchPriority="high"
        placeholder="blur"
        sizes="100vw"
        style={{
          objectFit: 'cover',
          objectPosition: '65% 0%',
          zIndex: 0
        }}
      />

      {/* LEFT CONTENT */}
      <Container className="position-relative z-2 py-6" style={{ maxWidth: '1200px' }}>
        <div className="col-12 col-lg-6 text-start mt-5 pt-4">
          <h1 className="fw-bold display-5" style={{ color: '#0f252f' }}>
            Transform Your Story Into a Published Masterpiece
          </h1>

          <p className="mt-3 fs-6" style={{ color: '#0f252f'  }}>
            Whether you&apos;re an aspiring author with a brilliant idea, a business
            professional wanting to share your expertise, or a creative mind ready
            to publish your masterpiece, we handle everything from manuscript to
            marketing. Join thousands of successful authors who trusted
            Mediterranean Publishing to turn their dreams into reality.
          </p>

          <div className="mt-4 d-flex gap-3">
            <Button
              href="/calendly"
              target="_blank"
              className="btn btn-primary px-4 py-2 rounded-pill"
              style={{ color: '#eeeae7' }}
            >
              Get Started
            </Button>

            <Button
              href="/contact"
              className="btn btn-outline-light px-4 py-2 rounded-pill"
              style={{ borderColor: '#ffffff', color: '#0f252f' }}
            >
              Learn More
            </Button>
          </div>
        </div>
      </Container>

      {/* RIGHT BOOK IMAGE (NO priority) */}
      <div
        className="d-none d-lg-block position-absolute end-0 pe-6"
        style={{ zIndex: 1, top: '0%' }}
      >
        <Image
          src={bookImage}
          alt="Hero Graphic"
          width={660}
          height={840}
          style={{
            objectFit: 'contain',
            maxWidth: '100%',
            height: 'auto'
          }}
        />
      </div>

      {/* TRUSTED PLATFORMS BAR */}
      <div className="position-absolute bottom-0 all-text-white w-45 z-2">
        <div
          className="py-4 px-6 d-inline-block d-none d-lg-block"
          style={{
            backgroundColor: '#0f252f',
            borderBottomRightRadius: '60px',
            borderTopRightRadius: '60px'
          }}
        >
          <Container className="d-inline-block justify-content-left align-items-center py-2">
            <Image
              src={trustedplatforms}
              alt="Trusted by leading platforms"
              width={420}
              height={80}
            />
          </Container>
        </div>
      </div>
    </Wrapper>
  )
}

export default Hero
