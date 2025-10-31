'use client'
import React from 'react'
import banner8 from '@/assets/images/banner/mainhero.png'
import Typist from 'react-text-typist'
import { Container } from 'react-bootstrap'
// import Jarallax from '@/components/Jarallax';
import dynamic from 'next/dynamic'

const Jarallax = dynamic(() => import('@/components/Jarallax'), { ssr: false })

const Hero = () => {
  return (
    <Jarallax
      tag={'section'}
      className="p-0  h-500 h-lg-700 bg-overlay-dark-2 bg-parallax"
      style={{ background: `url(${banner8.src}) no-repeat 65% 0%`, backgroundSize: 'cover' }}>
      <div className="position-absolute bottom-0 all-text-white w-100">
        <Container>
          <p className="lead alt-font fst-italic mb-n4">The most important things are not things, so we’ll design experiences.</p>
          <h5 className="fw-bold display-1 mt-3 p-0 cd-headline clip big-clip is-full-width">
            <span className="pt-0">We luv </span>
            <span className="typed text-end" data-type-text="Design&&our Clients&&Dedication">
              <Typist
                showCursor={true}
                sentences={['Design', 'Clients', 'Dedication']}
                typingSpeed={1500}
                deletingSpeed={700}
                startDelay={100}
                cursorSmooth
                pauseTime={2500}
              />
            </span>
          </h5>
        </Container>
      </div>
    </Jarallax>
  )
}

export default Hero
