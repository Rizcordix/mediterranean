'use client'
import React from 'react'
import bgImg from '@/assets/images/bg/04.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import TextFormInput from '@/components/form/TextFormInput'
import TextAreaFormInput from '@/components/form/TextAreaFormInput'

const Contact = () => {
  const contactSchema = yup.object({
    name: yup.string().required('Please enter name'),
    subject: yup.string().required('Please enter subject'),
    message: yup.string().required('Please enter message'),
    email: yup.string().email().required('Please enter email'),
  })

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(contactSchema),
  })
  return (
    <section className="contact-page">
      <Container>
        <Row>
          <Col xs={12} lg={8} className="mx-auto">
            <div className="title text-center">
              <h2>How can we assist you?</h2>
              <p>
                Larexa customer support is available free of charge. Connection charges can vary when calling from outside the area, abroad or from a
                mobile phone.
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
                <h5 className="mb-2">Address</h5>
                <p>1421 Coburn Hollow Road Metamora, Near Center Point, IL 61548.</p>
              </div>
              <div className="all-text-white mb-4">
                <div className="fs-4">
                  <i className="ti-email" />
                </div>
                <h5 className="mb-2">E-mail</h5>
                <p>help@larexa.com</p>
              </div>
              <div className="all-text-white">
                <div className="fs-4">
                  <i className="ti-panel" />
                </div>
                <h5 className="mb-2">Phone</h5>
                <p className="mb-0">
                  (+251) 854-6308
                  <br />
                  (+001) 564-2589
                </p>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div className="h-100">
              <iframe
                className="w-100 h-100 grayscale rounded"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sin!4v1586000412513!5m2!1sen!2sin"
                style={{ border: 0 }}
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
          </Col>
          <Col md={6}>
            <div className="h-100">
              <h3>Have a project? Let&apos;s make something great together!</h3>
              <p>Get in touch with us to see how we can help you with your project</p>
              <form
                onSubmit={handleSubmit(() => {})}
                className="contact-form needs-validation"
                id="contact-form"
                name="contactform"
                method="POST"
                action="assets/include/contact-action.php"
                noValidate>
                <Row>
                  <Col md={6}>
                    <div className="mb-3 position-relative">
                      <TextFormInput control={control} className="form-control" name="name" placeholder="Name" />
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="mb-3 position-relative">
                      <TextFormInput control={control} className="form-control" name="email" placeholder="E-mail" />
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className="mb-3 position-relative">
                      <TextFormInput control={control} className="form-control" name="subject" placeholder="Subject" />
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className="mb-3 position-relative">
                      <TextAreaFormInput name="message" control={control} rows={6} />
                    </div>
                  </Col>
                  <Col md={12} className="d-grid">
                    <button className="btn btn-dark m-0" type="submit">
                      Send Message
                    </button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
