'use client'

import Image from 'next/image'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import dynamic from 'next/dynamic'
const GlightBox = dynamic(() => import('@/components/GlightBox'), { ssr: false })

// temporary icons (replace later)
import icon1 from '@/assets/images/icons/market.svg'
import icon2 from '@/assets/images/icons/design.svg'
import icon3 from '@/assets/images/icons/market.svg'
import icon4 from '@/assets/images/icons/market.svg'
import icon5 from '@/assets/images/icons/market.svg'
import icon6 from '@/assets/images/icons/market.svg'
import icon7 from '@/assets/images/icons/market.svg'
import icon8 from '@/assets/images/icons/market.svg'

const Categories = () => {
  const categories = [
    { icon: icon1, title: 'Action & Adventure' },
    { icon: icon2, title: 'Fitness' },
    { icon: icon3, title: 'Travel' },
    { icon: icon4, title: 'Drama' },
    { icon: icon5, title: 'Horror' },
    { icon: icon6, title: 'Dictionary' },
    { icon: icon7, title: 'Comics' },
    { icon: icon8, title: 'Romance' },
  ]

  return (
    <section className="p-0 py-5 bg-grad2 pattern-overlay-3">
      <Container className="text-center">
        {/* Heading */}
        <h2 className="fw-bold mb-5" style={{ fontSize: '2rem', color: '#ffffff' }}>
          Are You Thinking About a <span style={{ color: '#0f252f' }}>Category?</span> We Cover Everything
        </h2>

        {/* Single row of icons */}
        <div
          className="d-flex flex-wrap justify-content-center align-items-start gap-4"
          style={{ rowGap: '2rem' }}
        >
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="d-flex flex-column align-items-center text-center"
              style={{ width: '110px' }}
            >
              <Image src={cat.icon} alt={cat.title} width={70} height={70} />
              <p
                className="mt-2 mb-0"
                style={{ fontSize: '16px', color: '#ffffff', lineHeight: '1.2' }}
              >
                {cat.title}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Categories
