import React from 'react'
import { Alert, AlertLink, Col, Container, Row } from 'react-bootstrap'

const Alerts = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col sm={12}>
            <h5 className="mb-4 text-center">Classic Alerts</h5>
            <Alert className="alert alert-primary" role="alert">
              This is a primary alert with <AlertLink className="alert-link">an example link</AlertLink>. Give it a click if you like.
            </Alert>
            <Alert className="alert alert-secondary" role="alert">
              This is a secondary alert with <AlertLink className="alert-link">an example link</AlertLink>. Give it a click if you like.
            </Alert>
            <Alert className="alert alert-success" role="alert">
              This is a success alert with <AlertLink className="alert-link">an example link</AlertLink>. Give it a click if you like.
            </Alert>
            <Alert className="alert alert-danger" role="alert">
              This is a danger alert with <AlertLink className="alert-link">an example link</AlertLink>. Give it a click if you like.
            </Alert>
            <Alert className="alert alert-warning" role="alert">
              This is a warning alert with <AlertLink className="alert-link">an example link</AlertLink>. Give it a click if you like.
            </Alert>
            <Alert className="alert alert-info" role="alert">
              This is a info alert with <AlertLink className="alert-link">an example link</AlertLink>. Give it a click if you like.
            </Alert>
            <Alert className="alert alert-light" role="alert">
              This is a light alert with <AlertLink className="alert-link">an example link</AlertLink>. Give it a click if you like.
            </Alert>
            <Alert className="alert alert-dark" role="alert">
              This is a dark alert with <AlertLink className="alert-link">an example link</AlertLink>. Give it a click if you like.
            </Alert>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col sm={12}>
            <h5 className="my-4 text-center">Dismissible alerts with colors</h5>
            <Alert dismissible className="alert-primary  fade show" role="alert">
              <strong>Holy guacamole!</strong> You should check in on some of those fields below.
            </Alert>
            <Alert dismissible className="alert-secondary alert-dismissible fade show" role="alert">
              <strong>Holy guacamole!</strong> You should check in on some of those fields below.
            </Alert>
            <Alert dismissible className="alert-success alert-dismissible fade show" role="alert">
              <strong>Holy guacamole!</strong> You should check in on some of those fields below.
            </Alert>
            <Alert dismissible className="alert-danger alert-dismissible fade show" role="alert">
              <strong>Holy guacamole!</strong> You should check in on some of those fields below.
            </Alert>
            <Alert dismissible className="alert-warning alert-dismissible fade show" role="alert">
              <strong>Holy guacamole!</strong> You should check in on some of those fields below.
            </Alert>
            <Alert dismissible className="alert-info alert-dismissible fade show" role="alert">
              <strong>Holy guacamole!</strong> You should check in on some of those fields below.
            </Alert>
            <Alert dismissible className="alert-light alert-dismissible fade show" role="alert">
              <strong>Holy guacamole!</strong> You should check in on some of those fields below.
            </Alert>
            <Alert dismissible className="alert-dark alert-dismissible fade show" role="alert">
              <strong>Holy guacamole!</strong> You should check in on some of those fields below.
            </Alert>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col sm={12}>
            <h5 className="my-4 text-center">Alert with Additional content</h5>
            <div className="alert alert-success" role="alert">
              <h4 className="alert-heading">Well done!</h4>
              <p>
                Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how
                spacing within an alert works with this kind of content.
              </p>
              <hr />
              <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Alerts
