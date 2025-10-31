import React from 'react'
import bgImg from '@/assets/images/bg/03.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Divider = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col md={12}>
            <h5 className="mb-2">Divider Default </h5>
            <div className="divider" />
            <h5 className="mb-2 mt-5">Divider gradient </h5>
            <div className="divider divider-grad" />
            <h5 className="mb-2 mt-5">Divider with icon </h5>
            <div className="divider">
              <i className="ti-heart" />{' '}
            </div>
            <h5 className="mb-2 mt-5">Divider Dark </h5>
            <div className="divider divider-dark" />
            <h5 className="mb-2 mt-5">Divider dotted </h5>
            <div className="divider divider-dotted" />
            <h5 className="mb-2 mt-5">Divider with title </h5>
            <div className="divider">
              <span className="p-3">Divider Title</span>
            </div>
            <h5 className="mb-2 mt-5">Divider title with background </h5>
            <div className="divider">
              <span className="bg-grad p-3 text-white rounded">Divider Title</span>
            </div>
            <h5 className="mb-2 mt-5">Divider title with Link </h5>
            <div className="divider">
              <Link href="" className="bg-dark p-3 text-white rounded">
                Divider Link
              </Link>
            </div>
            <h5 className="mb-2 mt-5">Divider bold </h5>
            <div className="divider divider-bold" />
            <h5 className="mb-4 mt-5">Divider with image </h5>
            <div
              className="p-2 bg-overlay-dark-2"
              style={{ background: `url(${bgImg.src}) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center center' }}
            />
            <h5 className="mb-2 mt-5">Divider small </h5>
            <div className="divider divider-small" />
            <h5 className="mb-2 mt-5">Divider medium </h5>
            <div className="divider divider-medium" />
            <h5 className="mb-2 mt-5">Divider large </h5>
            <div className="divider divider-large" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Divider
