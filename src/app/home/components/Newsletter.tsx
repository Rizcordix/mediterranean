import React from 'react'
import { Col, Container } from 'react-bootstrap'

const Newsletter = () => {
  return (
    <section className="bg-light pattern-overlay-1-dark">
      <Container>
        <Col md={12} lg={9} className="mx-auto p-4 p-sm-5 position-relative">
          <div className="text-center px-0 px-sm-5">
            <h2>Get started for free! You’ll Love it!</h2>
            <p className="mb-3 lead">One account for all Larexa apps 30 days free trial, no credit card required!</p>
            <form>
              <div className="input-group px-0 px-md-5">
                <input
                  className="form-control text-muted border-end-0 rounded-start bg-transparent text-white mb-0"
                  type="text"
                  name="search"
                  placeholder="Enter your email..."
                />
                <button type="button" className="btn btn-grad m-0">
                  <span className="d-none d-md-block">Get started now</span>
                  <span className="d-md-none">
                    <i className="far fa-paper-plane" />
                  </span>
                </button>
              </div>
            </form>
            <small className="mt-3 d-block">Free 30 day trial. Easy setup. Cancel any time</small>
          </div>
        </Col>
      </Container>
    </section>
  )
}

export default Newsletter
