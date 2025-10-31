import React from 'react'
import { Col, Container } from 'react-bootstrap'

const ActionBox = () => {
  return (
    <section className="bg-dark all-text-white pattern-overlay-2">
      <Container>
        <Col md={12} lg={9} className="mx-auto p-4 p-sm-5 position-relative">
          <div className="text-center px-0 px-sm-5">
            <h2>Get started for free! You’ll Love it!</h2>
            <p className="mb-3 h6">One account for all Larexa apps 30 days free trial, no credit card required!</p>
            <form className="my-3">
              <div className="input-group px-0 px-md-5">
                <input
                  className="form-control text-muted rounded-start border-end-0 bg-transparent text-white mb-0"
                  type="text"
                  name="search"
                  placeholder="Enter your email..."
                />
                <button type="button" className="btn btn-grad">
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
      </Container>
    </section>
  )
}

export default ActionBox
