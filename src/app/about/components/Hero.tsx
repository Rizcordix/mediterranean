'use client'
import dynamic from 'next/dynamic'
const Jarallax = dynamic(() => import('@/components/Jarallax'), { ssr: false })
import React, { useEffect, useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Hero = () => {
  const canvasRef = useRef<any>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const resizeCanvas = () => {
      canvas.width = canvas.parentNode.offsetWidth
      canvas.height = canvas.parentNode.offsetHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    let step = 0
    const lines = 4
    let animationFrameId: number

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      step++
      for (let i = 0; i < lines; i++) {
        ctx.fillStyle = 'rgba(255,255,255,.8)'
        const angle = ((step + (i * 180) / lines) * Math.PI) / 180
        const deltaHeight = Math.sin(angle) * 90
        const deltaHeightRight = Math.cos(angle) * 50

        ctx.beginPath()
        ctx.moveTo(0, canvas.height / 2 + deltaHeight)
        ctx.bezierCurveTo(
          canvas.width / 2,
          canvas.height / 2 + deltaHeight - 50,
          canvas.width / 2,
          canvas.height / 2 + deltaHeightRight - 50,
          canvas.width,
          canvas.height / 2 + deltaHeightRight,
        )
        ctx.lineTo(canvas.width, canvas.height)
        ctx.lineTo(0, canvas.height)
        ctx.lineTo(0, canvas.height / 2 + deltaHeight)
        ctx.closePath()
        ctx.fill()
      }
      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])
  return (
    <Jarallax
      tag={'div'}
      options={{ videoSrc: 'https://www.youtube.com/watch?v=dRj5Xfjh7Dk' }}
      className="innerpage-banner position-relative left bg-overlay-dark-5 py-7 bg-parallax overflow-hidden"
      data-jarallax-video="https://www.youtube.com/watch?v=dRj5Xfjh7Dk">
      <Container className="py-7">
        <Row className="all-text-white">
          <Col xs={12} lg={8} className="position-relative">
            <h1 className="fw-bold">We are a creative agency specializing in all your branding needs</h1>
            <h6 className="subtitle mb-4">We are a creative studio focusing on branding &amp; web design</h6>
          </Col>
        </Row>
      </Container>
      <canvas ref={canvasRef} className="position-absolute top-100 start-50 translate-middle mb-6" id="waveCanvas" />
    </Jarallax>
  )
}

export default Hero
