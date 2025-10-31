'use client'
import React from 'react'
import bgImg from '@/assets/images/bg/05.jpg'
import dynamic from 'next/dynamic'
const GlightBox = dynamic(() => import('@/components/GlightBox'), { ssr: false })
import { Container } from 'react-bootstrap'

const ActionBox = () => {
  return (
    <section
      className="bg-overlay-dark-5"
      style={{ background: `url(${bgImg.src}) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center center' }}>
      <Container>
        <div className="d-block d-md-flex py-4 py-sm-5 ">
          <div className="align-self-center text-center text-md-start">
            <h3 className="display-5 fw-bold text-white">
              Crafting visually stunning memorable <span className="text-primary">experiences</span> for web.
            </h3>
            <p className="m-0 lead text-white">We provide digital transformation solutions, enabling companies to make their visions reality.</p>
          </div>
          <div className="mt-3 mt-md-0 ps-0 ps-md-5 text-center text-md-end ms-md-auto align-self-center">
            <GlightBox className="btn btn-round btn-lg zoom-on-hover btn-outline-white mb-0" data-glightbox href="https://youtu.be/n_Cn8eFo7u8">
              {' '}
              <i className="fa fa-play" />
            </GlightBox>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ActionBox
