'use client'
import React, { useState, useEffect } from 'react'
import bgImg from '@/assets/images/banner/newsletterbg.png'
import { Col, Container, Row } from 'react-bootstrap'

const ActionBox: React.FC = () => {
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  useEffect(() => {
    if (!message) return
    const t = setTimeout(() => setMessage(null), 4000)
    return () => clearTimeout(t)
  }, [message])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!email || !email.includes('@')) {
      setMessage({ type: 'error', text: 'Please enter a valid email.' })
      return
    }

    setSubmitting(true)

    try {
      const res = await fetch('/api/sendEmail/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (res.ok) {
        setMessage({ type: 'success', text: 'Successfully subscribed!' })
        setEmail('')
      } else {
        setMessage({ type: 'error', text: 'Try again later.' })
      }
    } catch (err) {
      console.error(err)
      setMessage({ type: 'error', text: 'Try again later.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section
      className="about-newsletter bg-overlay-dark-8 bg-parallax"
      style={{ background: `url(${bgImg.src}) center center`, backgroundSize: 'cover' }}
    >
      <Container>
        <Row>
          <Col xs={12} lg={8} className="mx-auto">
            <div className="title title-light text-center">
              <span className="pre-title">Stay connected </span>
              <h2>Subscribe to our newsletter to receive exclusive offers</h2>
            </div>
          </Col>

          <Col xs={12} lg={5} md={8} className="mx-auto text-center">
            <form onSubmit={handleSubmit}>
              <div className="input-group mb-2">
                <input
                  className="form-control rounded-start border-end-0 bg-transparent text-white m-0"
                  type="email"
                  name="email"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{ minHeight: 44 }}
                />

                <button
                  type="submit"
                  className="btn btn-grad m-0"
                  disabled={submitting}
                  style={{ cursor: submitting ? 'wait' : 'pointer' }}
                >
                  {submitting ? 'Sending...' : 'Subscribe now!'}
                </button>
              </div>

              {message && (
                <div
                  style={{
                    color: message.type === 'success' ? '#d4f8d4' : '#f8d4d4',
                    fontSize: '14px',
                    fontWeight: 500,
                    marginTop: '4px',
                    textAlign: 'left',
                  }}
                >
                  {message.text}
                </div>
              )}
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ActionBox
