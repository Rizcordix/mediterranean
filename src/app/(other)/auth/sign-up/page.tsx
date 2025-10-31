import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logoImg from '@/assets/images/logo-white.png'

const SignUpPage = () => {
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
                  <h2>Sign up for your account!</h2>
                  <h5 className="fw-light">Join us today! Create your account easy with less information.</h5>
                  <div className="form mt-4 ">
                    <div>
                      <p className="text-start mb-2">Email address</p>
                      <span className="form-group">
                        <input type="email" className="form-control" placeholder="E-mail" />
                      </span>
                    </div>
                    <div>
                      <div className="align-items-center">
                        <p className="text-start mb-2">Password</p>
                      </div>
                      <span className="form-group">
                        <input type="password" className="form-control" placeholder="*********" />
                      </span>
                    </div>
                    <div>
                      <div className="align-items-center">
                        <p className="text-start mb-2">Confirm Password</p>
                      </div>
                      <span className="form-group">
                        <input type="password" className="form-control" placeholder="*********" />
                      </span>
                    </div>
                    <div className="custom-control custom-checkbox me-sm-2 mb-4 d-flex">
                      <input type="checkbox" className="form-check-input mb-0" id="exampleCheck1" />
                      <label className="form-check-label ms-2" htmlFor="exampleCheck1">
                        By signing up, you agree to the <Link href="">terms of service</Link>
                      </label>
                    </div>
                    <Row className="align-items-center g-0 m-0">
                      <Col xs={6}>
                        <span className="text-muted">
                          Already on larexa? <Link href="/auth/sign-in">Sign in</Link>
                        </span>
                      </Col>
                      <Col xs={6} className="text-end">
                        <button className="btn btn-dark ">Sign me up!</button>
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

export default SignUpPage
