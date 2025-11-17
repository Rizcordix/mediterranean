'use client'

import React from 'react'
import { Container } from 'react-bootstrap'

// Lucide Icons
import { Ghost, Dumbbell, Sparkles } from 'lucide-react'


const Categories = () => {
  const categories = [
    { icon: <Dumbbell size={48} color="#ffffff" />, title: 'Fitness' },
    { icon: <i className="ti-target" style={{ fontSize: 48, color: '#ffffff' }} />, title: 'Action & Adventure' },
    { icon: <i className="ti-map-alt" style={{ fontSize: 48, color: '#ffffff' }} />, title: 'Travel' },
    { icon: <i className="ti-video-camera" style={{ fontSize: 48, color: '#ffffff' }} />, title: 'Drama' },

    // ⭐ Replaced with Lucide Ghost
    { icon: <Ghost size={48} color="#ffffff" />, title: 'Horror' },

    { icon: <i className="ti-book" style={{ fontSize: 48, color: '#ffffff' }} />, title: 'Dictionary' },

    // ⭐ Replaced with FontAwesome Mask
    { icon: <Sparkles size={48} color="#ffffff" />, title: 'Comics' },

    { icon: <i className="ti-heart-broken" style={{ fontSize: 48, color: '#ffffff' }} />, title: 'Romance' },
  ]

  return (
    <section className="p-0 py-5 bg-grad2 pattern-overlay-3">
      <Container className="text-center">
        <h2 className="fw-bold mb-5" style={{ fontSize: '2rem', color: '#ffffff' }}>
          Are You Thinking About a <span style={{ color: '#0f252f' }}>Category?</span> We Cover Everything
        </h2>

        <div className="d-flex flex-wrap justify-content-center align-items-start gap-4" style={{ rowGap: '2rem' }}>
          {categories.map((cat, idx) => (
            <div key={idx} className="d-flex flex-column align-items-center text-center" style={{ width: '110px' }}>
              {cat.icon}
              <p className="mt-2 mb-0" style={{ fontSize: '16px', color: '#ffffff', lineHeight: '1.2' }}>
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
