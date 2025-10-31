import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Blockquote = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col md={6} className="mb-4">
            <h5 className="mb-5">Blockquote</h5>
            <blockquote className="blockquote" cite="#">
              <h5 className="mb-2 text-light-gray">
                Design everything on the assumption that people are not heartless or stupid but marvelously capable, given the chance.
              </h5>
              <cite>–John Chris Jones</cite>
            </blockquote>
          </Col>
          <Col md={6} className="mb-4">
            <h5 className="mb-4">Blockquote light</h5>
            <blockquote className="blockquote bg-light" cite="#">
              <h5 className="mb-2 text-light-gray">
                Design everything on the assumption that people are not heartless or stupid but marvelously capable, given the chance.
              </h5>
              <cite>–John Chris Jones</cite>
            </blockquote>
          </Col>
          <Col md={6} className="mb-4">
            <h5 className="mb-4">Blockquote brand</h5>
            <blockquote className="blockquote bg-primary" cite="#">
              <h5 className="mb-2">
                Design everything on the assumption that people are not heartless or stupid but marvelously capable, given the chance.
              </h5>
              <cite>–John Chris Jones</cite>
            </blockquote>
          </Col>
          <Col md={6} className="mb-4">
            <h5 className="mb-4">Blockquote dark</h5>
            <blockquote className="blockquote bg-dark" cite="#">
              <h5 className="mb-2 ">
                Design everything on the assumption that people are not heartless or stupid but marvelously capable, given the chance.
              </h5>
              <cite>–John Chris Jones</cite>
            </blockquote>
          </Col>
          <Col md={6} className="mb-4">
            <h5 className="mb-4">Blockquote gradient background</h5>
            <blockquote className="blockquote bg-grad" cite="#">
              <h5 className="mb-2 ">
                Design everything on the assumption that people are not heartless or stupid but marvelously capable, given the chance.
              </h5>
              <cite>–John Chris Jones</cite>
            </blockquote>
          </Col>
          <Col md={6} className="mb-4">
            <h5 className="mb-4">Blockquote line gradient </h5>
            <blockquote className="blockquote grad-line" cite="#">
              <h5 className="mb-2 ">
                Design everything on the assumption that people are not heartless or stupid but marvelously capable, given the chance.
              </h5>
              <cite>–John Chris Jones</cite>
            </blockquote>
          </Col>
          <Col md={6} className="mb-4">
            <h5 className="mb-4">Blockquote line brand </h5>
            <blockquote className="blockquote primary-line" cite="#">
              <h5 className="mb-2 ">
                Design everything on the assumption that people are not heartless or stupid but marvelously capable, given the chance.
              </h5>
              <cite>–John Chris Jones</cite>
            </blockquote>
          </Col>
          <Col md={6} className="mb-4">
            <h5 className="mb-4">Blockquote line gray </h5>
            <blockquote className="blockquote gray-line" cite="#">
              <h5 className="mb-2 ">
                Design everything on the assumption that people are not heartless or stupid but marvelously capable, given the chance.
              </h5>
              <cite>–John Chris Jones</cite>
            </blockquote>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Blockquote
