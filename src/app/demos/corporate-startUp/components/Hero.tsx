'use client'
import React, { useEffect, useRef } from 'react'
import banner10 from '@/assets/images/banner/10.jpg'
import { Button, Col, Container, Row } from 'react-bootstrap'

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
    <section className="p-0 position-relative h-500 h-md-600 h-xl-900 bg-grad pattern-overlay-1 overflow-hidden">
      <Container className="d-flex h-100">
        <Row className="align-self-center w-100">
          <Col md={6} className="mt-md-0 all-text-white position-relative">
            <h2 className="display-4 fw-normal">A complete technology solution provider</h2>
            <p className="h6 mb-4 fw-normal d-none d-sm-block">
              We help our customers better manage their web presence in order to achieve greater success online.
            </p>
            <Button variant="dark" className="mb-7" href="#">
              Request demo!
            </Button>
          </Col>
          <Col md={6} className="d-none d-md-block p-0 position-absolute top-0 end-0 align-top align-text-top">
            <figure className="w-100 ie-height-750">
              <svg
                version="1.1"
                id="Layer_2"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 1290 1024"
                xmlSpace="preserve">
                <g id="XMLID_81_">
                  <defs>
                    <path id="XMLID_3_" d="M1290,0v1024c0,0-229.8-152.2-550-52.9C467.3,1055.7-22.5,927.6,47.8,540C120.4,139.6,17,0,17,0H1290z" />
                  </defs>
                  <clipPath id="XMLID_83_">
                    <use xlinkHref="#XMLID_3_" style={{ overflow: 'visible' }} />
                  </clipPath>
                  <g style={{ clipPath: 'url(#XMLID_83_)' }}>
                    <image
                      style={{ overflow: 'visible' }}
                      width={1290}
                      height={1024}
                      id="XMLID_82_"
                      xlinkHref={banner10.src}
                      transform="matrix(0.9999 0 0 0.9999 8.063897e-002 6.401104e-002)"></image>
                  </g>
                </g>
              </svg>
            </figure>
          </Col>
        </Row>
      </Container>
      <canvas ref={canvasRef} className="position-absolute bottom-0 start-50 translate-middle-x mb-n9" id="waveCanvas" />
    </section>
  )
}

export default Hero
