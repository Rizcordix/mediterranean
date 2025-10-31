'use client'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Typist from 'react-text-typist'

const Animation = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col xs={12}>
            <h4 className="my-4">Example 1</h4>
            <div className="display-4 font-heading fw-bold text-dark">
              <span className="d-block d-sm-inline-block">Our</span>&nbsp;
              <Typist
                className="typed text-end text-primary"
                sentences={['Creativity', 'Portfolio', 'Stories']}
                typingSpeed={100}
                cursorColor="dark"
                deletingSpeed={700}
                showCursor={true}
                startDelay={100}
                cursorSmooth
                pauseTime={2500}
              />
            </div>
            <h4 className="mb-4 mt-6">Example 2</h4>
            <div className="h4">
              <span>A Full Service Digital Creative Agency Specializing in:</span>&nbsp;
              <Typist
                className="typed text-primary"
                sentences={['Video Production', 'Web Design', 'Branding', 'Brand Strategy']}
                typingSpeed={100}
                deletingSpeed={700}
                showCursor={true}
                startDelay={100}
                cursorSmooth
                pauseTime={2500}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Animation
