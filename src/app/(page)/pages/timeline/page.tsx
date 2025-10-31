import React from 'react'
import Hero from './components/Hero'
import Timeline from './components/Timeline'
import { Button, Col, Container, Row } from 'react-bootstrap'

const TimelinePage = () => {
  return (
    <>
      <Hero />
      <Timeline />
      <section className="py-5">
        <Container>
          <Row>
            <Col sm={8} className="text-center mx-auto">
              <h4>Start a new project with us and start adventure together!</h4>
              <Button variant="outline-light" className="mb-0">
                Let&apos;s Discuss{' '}
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default TimelinePage
