import { currentYear } from '@/context/constants'
import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className="footer bg-light py-5">
      <div className="footer-content">
        <Container>
          <Row>
            <Col md={5} className="mx-auto text-center pt-5">
              <h3>Stories in your inbox.</h3>
              <form className="my-4">
                <div className="input-group shadow">
                  <input
                    className="form-control form-control-lg text-muted border-end-0 rounded-0 border-0 bg-white mb-0"
                    type="text"
                    name="search"
                    placeholder="Enter your email..."
                  />
                  <button type="button" className="btn btn-grad btn-lg rounded-0 m-0">
                    <span>
                      <i className="far fa-paper-plane m-0" />
                    </span>
                  </button>
                </div>
              </form>
              <div className="copyright-text">
                ©{currentYear} All Rights Reserved by <Link href=""> Larexa.</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
