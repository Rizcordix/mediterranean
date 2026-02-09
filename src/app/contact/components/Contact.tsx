'use client'
import React, { useState, useEffect } from 'react'
import bgImg from '@/assets/images/bg/04.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import TextFormInput from '@/components/form/TextFormInput'
import TextAreaFormInput from '@/components/form/TextAreaFormInput'
import SuccessPopup from '@/components/SuccessPopup'

type ContactFormValues = {
  name: string
  subject: string
  message: string
  email: string
}

const Contact = () => {
  const contactSchema = yup.object({
    name: yup.string().required('Please enter name'),
    subject: yup.string().required('Please enter subject'),
    message: yup.string().required('Please enter message'),
    email: yup.string().email().required('Please enter email'),
  })

  const { handleSubmit, control, reset } = useForm<ContactFormValues>({
    resolver: yupResolver(contactSchema),
    defaultValues: { name: '', subject: '', message: '', email: '' },
  })

  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)

  // auto-hide toast
  useEffect(() => {
    if (!toast) return
    const t = window.setTimeout(() => setToast(null), 3500)
    return () => clearTimeout(t)
  }, [toast])

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type })
  }

  const onSubmit = async (values: ContactFormValues) => {
    // values validated by yup
    setSubmitting(true)

    try {
      const payload = {
        name: values.name,
        email: values.email,
        message: values.message,
        subject: values.subject,
      }

      const res = await fetch('/api/sendEmail/contactpage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await res.json().catch(() => ({}))

      if (res.ok) {
        setShowSuccessPopup(true)
        reset()
      } else {
        console.error('Contact API failed:', data?.message ?? data)
        showToast('❌ Unsuccessful — please try again later.', 'error')
      }
    } catch (err) {
      console.error('Contact submit error:', err)
      showToast('❌ Unsuccessful — please try again later.', 'error')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <SuccessPopup
        isOpen={showSuccessPopup}
        onClose={() => setShowSuccessPopup(false)}
        formType="contact"
      />

      <section className="contact-page">
        {/* toast */}
        {toast && (
          <div
            style={{
              position: 'fixed',
              top: 20,
              left: '50%',
              transform: 'translateX(-50%)',
              padding: '12px 18px',
              borderRadius: 10,
              zIndex: 11000,
              fontWeight: 600,
              boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
              background: toast.type === 'success' ? '#d9fdd3' : '#f8d7da',
              color: toast.type === 'success' ? '#0f5132' : '#842029'
            }}
            role="status"
            aria-live="polite"
          >
            {toast.message}
          </div>
        )}

        <Container>
          <Row>
            <Col xs={12} lg={8} className="mx-auto">
              <div className="title text-center">
                <h2>Ready to Bring Your Story to Life?</h2>
                <p>
                  Our dedicated team at Mediterranean Publishing is here to answer your questions and guide you through every step of your publishing journey. Reach out today and let&apos;s turn your vision into a published masterpiece.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={3}>
              <div
                className="contact-box d-flex flex-column h-100 bg-overlay-dark-7 px-3 py-4"
                style={{ background: `url(${bgImg.src}) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center center' }}>
                <div className="all-text-white mb-4">
                  <div className="fs-4">
                    <i className="ti-map-alt" />
                  </div>
                  <h5 className="mb-2">Our Location</h5>
                  <p>6340 N Eldridge Pkwy suite N, Houston, Texas 77041, United States</p>
                </div>
                <div className="all-text-white mb-4">
                  <div className="fs-4">
                    <i className="ti-email" />
                  </div>
                  <h5 className="mb-2">Email Us</h5>
                  <p>info@mediterraneanpublishing.com</p>
                </div>
                <div className="all-text-white">
                  <div className="fs-4">
                    <i className="ti-panel" />
                  </div>
                  <h5 className="mb-2">Call Us</h5>
                  <p className="mb-0">
                    +1 281-247-0786
                  </p>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="h-100">
                <iframe
                  className="w-100 h-100 grayscale rounded"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.7578704188604!2d-0.06938302312052916!3d51.517658009953465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ccba805424d%3A0x86c7bb9e6e7121f1!2sc125%2C%204-6%20Greatorex%20St%2C%20Greater%2C%20London%20E1%205NF%2C%20UK!5e0!3m2!1sen!2s!4v1761922111344!5m2!1sen!2s"
                  style={{ border: 0 }}
                  aria-hidden="false"
                  tabIndex={0}
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="h-100">
                <h3>Let&apos;s Start Your Publishing Journey Together</h3>
                <p>Share your ideas with us and discover how Mediterranean Publishing can help bring your book to readers worldwide</p>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="contact-form needs-validation"
                  id="contact-form"
                  name="contactform"
                  noValidate>
                  <Row>
                    <Col md={6}>
                      <div className="mb-3 position-relative">
                        <TextFormInput control={control} className="form-control" name="name" placeholder="Your Name" />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="mb-3 position-relative">
                        <TextFormInput control={control} className="form-control" name="email" placeholder="Your Email" />
                      </div>
                    </Col>
                    <Col md={12}>
                      <div className="mb-3 position-relative">
                        <TextFormInput control={control} className="form-control" name="subject" placeholder="What can we help you with?" />
                      </div>
                    </Col>
                    <Col md={12}>
                      <div className="mb-3 position-relative">
                        <TextAreaFormInput name="message" control={control} rows={6} placeholder="Tell us about your project..." />
                      </div>
                    </Col>
                    <Col md={12} className="d-grid">
                      <button className="btn btn-dark m-0" type="submit" disabled={submitting}>
                        {submitting ? 'Sending...' : 'Get Started'}
                      </button>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Contact
