import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logoImg from '@/assets/images/logo-white.png'
import Image from 'next/image'

const PasswordRecovery = () => {
  return (
    <section className="p-0 d-flex align-items-center">
      <Container fluid>
        <Row>
          <Col xs={12} md={5} lg={4} className="d-md-flex align-items-center bg-grad vh-sm-100">
            <div className="w-100 p-3 p-lg-5 all-text-white">
              <div className="justify-content-center align-self-center">
                <Image src={logoImg} alt="logo" className="logo-auth mb-4" />
              </div>
              <h3 className="fw-light">We connect you with the world largest community</h3>
              <ul className="list-group list-group-borderless mt-4">
                <li className="list-group-item text-white">
                  <i className="fa fa-check" />
                  Connect with your community via Larexa
                </li>
                <li className="list-group-item text-white">
                  <i className="fa fa-check" />
                  Discover the best experience with fellowship
                </li>
                <li className="list-group-item text-white">
                  <i className="fa fa-check" />
                  Create your wishlist and enjoy to best experience
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} md={7} xl={8} className="mx-auto my-5">
            <Row className="h-100">
              <Col xs={12} md={10} lg={5} className="text-start mx-auto d-flex align-items-center">
                <div className="w-100">
                  <h2>Forgot Password?</h2>
                  <h5 className="fw-light">To receive a new password, enter your email address below.</h5>
                  <div className="form mt-4 ">
                    <div>
                      <p className="text-start mb-2">Email address</p>
                      <span className="form-group">
                        <input type="email" className="form-control" placeholder="E-mail" />
                      </span>
                    </div>
                    <Row className="align-items-center g-0 m-0">
                      <Col xs={6}>
                        <button className="btn btn-dark ">Recover your Password</button>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default PasswordRecovery
