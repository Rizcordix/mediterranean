import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Pagination = () => {
  return (
    <section className="pt-0">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <nav>
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                  {' '}
                  <span className="page-link">Prev</span>{' '}
                </li>
                <li className="page-item active">
                  {' '}
                  <span className="page-link bg-grad"> 1 </span>{' '}
                </li>
                <li className="page-item">
                  <Link className="page-link" href="">
                    2
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" href="">
                    3
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" href="">
                    Next
                  </Link>{' '}
                </li>
              </ul>
            </nav>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Pagination
