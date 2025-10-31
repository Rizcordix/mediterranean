import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const ActionBox = () => {
  return (
    <section className="py-5">
      <Container>
        <Row>
          <Col md={9} className="text-center text-md-start align-self-center">
            <h4 className="m-0">Start a new project with us and start adventure together!</h4>
          </Col>
          <Col md={3} className="text-center text-md-end mt-3 mt-md-0 align-self-center ">
            <Button variant="outline-light" className="mb-0">
              Let&apos;s Discuss{' '}
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ActionBox
