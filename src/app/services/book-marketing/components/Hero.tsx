'use client'

// import Image from 'next/image'
import React from 'react'
// import blog1 from '@/assets/images/blog/01.jpg'
import { Button, Col, Container, Row } from 'react-bootstrap'
// import dynamic from 'next/dynamic'
import { usePopup } from '@/components/wrappers/PopupContext'
// const GlightBox = dynamic(() => import('@/components/GlightBox'), { ssr: false })
import Image from 'next/image'
import image1 from '@/assets/images/services/marketing1.png'

const Hero = () => {
  const { openQuote } = usePopup();
  return (
    <section className="p-0 py-5 position-relative" style={{ 
      background: 'linear-gradient(175deg, #eeeae7 0%, #364a52 25%, #0f252f 100%)',
    }}>
      <Container>
        <Row className="py-0 py-md-5 justify-content-between align-items-center">
          <Col sm={10} lg={6} className="all-text-white my-5 mt-md-0 position-relative">
            <div className="text-start py-0 py-md-5 my-5">
              <h6 style={{ color: '#eeeae7', opacity: 0.9 }}>You found it!</h6>
              <h2 className="display-4 fw-normal" style={{ color: '#eeeae7' }}>Promoting Your Authors.</h2>
              <p className="mb-4 display-8 lh-0 fw-normal" style={{ color: '#eeeae7', opacity: 0.85 }}>
                Writing a great book is only half the battle—getting it in front of readers is where real success happens. Our comprehensive book marketing services combine proven strategies with cutting-edge tactics to maximize your book&apos;s visibility, drive sales, and build your author brand. From launch campaigns to sustained promotion, we turn your book into a bestseller.
              </p>
              <Button onClick={openQuote} className="me-3" style={{ backgroundColor: '#364a52', border: 'none', color: '#eeeae7' }}>
                Get Your Instant Quote
              </Button>
            </div>
          </Col>
          <Col sm={10} md={6} className="d-none d-lg-block mb-5 position-relative">
            <div style={{
              position: 'relative',
              padding: '20px',
              background: 'linear-gradient(145deg, #364a52, #1a2f38)',
              borderRadius: '20px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(238, 234, 231, 0.1)',
            }}>
              <div style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: 'inset 0 0 0 1px rgba(238, 234, 231, 0.15)',
              }}>
                <Image 
                  className="rounded" 
                  src={image1} 
                  width={600} 
                  height={400} 
                  alt="bookmarketing"
                  style={{
                    display: 'block',
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </div>
              {/* Decorative corner accent */}
              <div style={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                width: '40px',
                height: '40px',
                borderTop: '3px solid #eeeae7',
                borderLeft: '3px solid #eeeae7',
                borderRadius: '20px 0 0 0',
                opacity: 0.3,
              }}></div>
              <div style={{
                position: 'absolute',
                bottom: '10px',
                right: '10px',
                width: '40px',
                height: '40px',
                borderBottom: '3px solid #eeeae7',
                borderRight: '3px solid #eeeae7',
                borderRadius: '0 0 20px 0',
                opacity: 0.3,
              }}></div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="position-absolute bottom-0 start-0 w-100 d-none d-md-block mb-n3">
        <svg width="100%" height={150} viewBox="0 0 500 150" preserveAspectRatio="none">
          <path d="M0,150 L0,40 Q250,150 500,40 L580,150 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
