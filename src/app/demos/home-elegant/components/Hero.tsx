'use client'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Typist from 'react-text-typist'

const Hero = () => {
  return (
    <section className=" h-500 h-lg-700 p-0 bg-grad pattern-overlay-4">
      <Container className="h-100">
        <Row className="d-flex h-100">
          <Col
            sm={10}
            md={8}
            className="justify-content-center align-self-center align-items-start mx-auto all-text-white mt-5 mt-md-0 position-relative">
            <div className="text-center">
              <h5 className="display-5 p-0 cd-headline clip big-clip is-full-width fw-bold text-primary">
                <span className="pt-0">Let&apos;s start your</span>&nbsp;
                <span className="typed" data-type-text="Business&&Journey&&Project">
                  <Typist
                    showCursor={true}
                    hideCursorOnFinish={true}
                    sentences={['Business', 'Journey', 'Project']}
                    typingSpeed={1500}
                    deletingSpeed={700}
                    startDelay={100}
                    cursorSmooth
                    pauseTime={2500}
                  />
                </span>
              </h5>
              <p className="mb-4 display-8 fw-normal ">
                Our friendly team members are always willing to help you understand your present technology requirements and provide suggestions on
                your future needs.
              </p>
              <form className="bg-white my-2 my-md-4 mx-5 p-2 rounded shadow">
                <div className="input-group">
                  <input className="form-control rounded-start border-0 mb-0" type="text" name="search" placeholder="What are you looking for?" />
                  <button type="button" className="btn btn-grad mb-0 rounded m-0">
                    <span className="d-none d-md-block">Get started for free</span>
                    <span className="d-md-none">
                      <i className="far fa-paper-plane m-0" />
                    </span>
                  </button>
                </div>
              </form>
              <small>Free 30 day trial. Easy setup. Cancel any time</small>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
