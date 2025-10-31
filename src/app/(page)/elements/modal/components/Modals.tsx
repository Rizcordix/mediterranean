'use client'
import useToggle from '@/hooks/useToggle'
import React from 'react'
import { Col, Container, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'react-bootstrap'

const Modals = () => {
  const { isOpen, toggle } = useToggle()
  const { isOpen: open, toggle: isToggle } = useToggle()
  const { isOpen: opens, toggle: toggles } = useToggle()
  return (
    <section>
      <Container>
        <Row>
          <Col md={6} className="align-self-center">
            <div className="title text-start">
              <h2>
                We are a full service <span className="text-primary">Creative agency</span> that makes good ideas come to life.
              </h2>
              <p className="mb-0">
                We are an insight and behaviour driven creative marketing agency. A Full package Digital Creative Agency Specializing in: Video
                Production, Web Design, Branding, Brand Strategy, Content Marketing and Aerial Cinematography.{' '}
              </p>
            </div>
          </Col>
          <Col md={6} className="align-self-center text-center">
            <button onClick={toggle} type="button" className="btn btn-grad" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Launch demo modal
            </button>
            <small className="d-block mt-2">Modal Default</small>
            <Modal
              show={isOpen}
              onHide={toggle}
              className="fade"
              id="exampleModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <ModalHeader>
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={toggle} />
              </ModalHeader>
              <ModalBody>
                A Full Service Digital Creative Agency Specializing in: Video Production, Web Design, Branding, Brand Strategy, Content Marketing and
                Aerial Cinematography. We are an insight and behavior driven creative marketing agency.
              </ModalBody>
              <ModalFooter>
                <button type="button" className="btn btn-secondary" onClick={toggle} data-bs-dismiss="modal">
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </ModalFooter>
            </Modal>
          </Col>
        </Row>

        <Row className="mt-7">
          <Col md={6} className="align-self-center text-center">
            <button type="button" onClick={isToggle} className="btn btn-grad" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
              Launch demo modal
            </button>
            <small className="d-block mt-2">Modal Default</small>
            <Modal show={open} className="fade" id="exampleModalCenter" tabIndex={-1} aria-labelledby="exampleModalCenter" aria-hidden="true">
              <ModalHeader>
                <h5 className="modal-title" id="exampleModalLabel1">
                  Modal title
                </h5>
                <button type="button" onClick={isToggle} className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </ModalHeader>
              <ModalBody>
                A Full Service Digital Creative Agency Specializing in: Video Production, Web Design, Branding, Brand Strategy, Content Marketing and
                Aerial Cinematography. We are an insight and behavior driven creative marketing agency.
              </ModalBody>
              <ModalFooter>
                <button type="button" className="btn btn-secondary" onClick={isToggle} data-bs-dismiss="modal">
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </ModalFooter>
            </Modal>
          </Col>
          <Col md={6} className="align-self-center">
            <div className="title text-start">
              <h2>
                Larexa Provide best of <span className="text-primary">the best solutions </span> for any of your business needs!.
              </h2>
              <p className="mb-0">
                We are an insight and behaviour driven creative marketing agency. A Full package Digital Creative Agency Specializing in: Video
                Production, Web Design, Branding, Brand Strategy, Content Marketing and Aerial Cinematography.{' '}
              </p>
            </div>
          </Col>
        </Row>

        <Row className="mt-7">
          <Col md={6} className="align-self-center">
            <div className="title text-start">
              <h2>
                We are a full service <span className="text-primary">Creative agency</span> that makes good ideas come to life.
              </h2>
              <p className="mb-0">
                We are an insight and behaviour driven creative marketing agency. A Full package Digital Creative Agency Specializing in: Video
                Production, Web Design, Branding, Brand Strategy, Content Marketing and Aerial Cinematography.{' '}
              </p>
            </div>
          </Col>
          <Col md={6} className="align-self-center text-center">
            <button type="button" onClick={toggles} className="btn btn-grad" data-bs-toggle="modal" data-bs-target="#exampleModal-3">
              Launch demo modal
            </button>
            <small className="d-block mt-2">Modal Default</small>
            <Modal
              show={opens}
              onHide={toggles}
              className="fade"
              id="exampleModal-3"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel-3"
              aria-hidden="true">
              <ModalBody id="exampleModalLabel-3">
                <div className="ratio ratio-16x9">
                  <iframe
                    width={560}
                    height={315}
                    src="https://www.youtube.com/embed/9No-FiEInLA"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>
              </ModalBody>
            </Modal>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Modals
