import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const ListStyles = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col md={6} className="mb-4">
            <h5>List group default</h5>
            <ul className="list-group">
              <li className="list-group-item">Proven results as a recruitment consultant or strong sales experience</li>
              <li className="list-group-item">Knowledge of the staffing industry</li>
              <li className="list-group-item">Previous leadership experience, personally or professionally</li>
              <li className="list-group-item">A strong desire to be successful and inspire people</li>
            </ul>
          </Col>
          <Col md={6} className="mb-4">
            <h5>List group borderless </h5>
            <ul className="list-group list-group-borderless">
              <li className="list-group-item">Proven results as a recruitment consultant or strong sales experience</li>
              <li className="list-group-item">Knowledge of the staffing industry</li>
              <li className="list-group-item">Previous leadership experience, personally or professionally</li>
              <li className="list-group-item">A strong desire to be successful and inspire people</li>
            </ul>
          </Col>
          <Col md={6} className="mb-4">
            <h5>List group with link </h5>
            <div className="list-group list-group-borderless">
              <Link href="" className="list-group-item list-group-item-action">
                Creative Ideas{' '}
              </Link>
              <Link href="" className="list-group-item list-group-item-action">
                Super Responsive for all devices{' '}
              </Link>
              <Link href="" className="list-group-item list-group-item-action">
                Extensive documentation{' '}
              </Link>
              <Link href="" className="list-group-item list-group-item-action">
                Excellent features
              </Link>
            </div>
          </Col>
          <Col md={6} className="mb-4">
            <h5>List group inline </h5>
            <div className="list-group-inline list-group-number list-unstyled">
              <Link href="" className="list-group-item list-group-item-action">
                <span>01</span> Creative Ideas
              </Link>
              <Link href="" className="list-group-item list-group-item-action">
                <span>02</span> Super Responsive for all devices
              </Link>
              <Link href="" className="list-group-item list-group-item-action">
                <span>03</span> Extensive documentation
              </Link>
              <Link href="" className="list-group-item list-group-item-action">
                <span>04</span> Excellent features
              </Link>
            </div>
          </Col>
          <Col md={6} className="mb-4">
            <h5>List icon check</h5>
            <ul className="list-group list-group-borderless">
              <li className="list-group-item">
                <i className="fa fa-check" /> Proven results as a recruitment consultant or strong sales experience
              </li>
              <li className="list-group-item">
                <i className="fa fa-check" /> Knowledge of the staffing industry
              </li>
              <li className="list-group-item">
                <i className="fa fa-check" /> Previous leadership experience, personally or professionally
              </li>
              <li className="list-group-item">
                <i className="fa fa-check" /> A strong desire to be successful and inspire people
              </li>
            </ul>
          </Col>
          <Col md={6} className="mb-4">
            <h5>List icon check colored</h5>
            <ul className="list-group list-group-borderless">
              <li className="list-group-item">
                <i className="fa fa-check text-primary" /> Proven results as a recruitment consultant or strong sales experience
              </li>
              <li className="list-group-item">
                <i className="fa fa-check text-primary" /> Knowledge of the staffing industry
              </li>
              <li className="list-group-item">
                <i className="fa fa-check text-primary" /> Previous leadership experience, personally or professionally
              </li>
              <li className="list-group-item">
                <i className="fa fa-check text-primary" /> A strong desire to be successful and inspire people
              </li>
            </ul>
          </Col>
          <Col md={6} className="mb-4">
            <h5>List icon check with brand color </h5>
            <ul className="list-group list-group-borderless list-group-icon-primary-bg">
              <li className="list-group-item">
                <i className="fa fa-check" /> Proven results as a recruitment consultant or strong sales experience
              </li>
              <li className="list-group-item">
                <i className="fa fa-check" /> Knowledge of the staffing industry
              </li>
              <li className="list-group-item">
                <i className="fa fa-check" /> Previous leadership experience, personally or professionally
              </li>
              <li className="list-group-item">
                <i className="fa fa-check" /> A strong desire to be successful and inspire people
              </li>
            </ul>
          </Col>
          <Col md={6} className="mb-4">
            <h5>List Custom icons</h5>
            <ul className="list-group list-group-borderless">
              <li className="list-group-item">
                <i className="fa fa-info fa-fw text-info" /> Proven results as a recruitment consultant or strong sales experience
              </li>
              <li className="list-group-item">
                <i className="far fa-check-square text-success" /> Knowledge of the staffing industry
              </li>
              <li className="list-group-item">
                <i className="fas fa-exclamation-triangle text-danger" /> Previous leadership experience, personally or professionally
              </li>
              <li className="list-group-item">
                <i className="fas fa-graduation-cap text-warning" /> A strong desire to be successful and inspire people
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ListStyles
