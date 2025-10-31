import Link from 'next/link'
import React from 'react'
import { Alert, Col, Container, Row } from 'react-bootstrap'

const TopAlert = () => {
  return (
    <div className="bg-grad mb-3 all-text-white" role="alert">
      <Container>
        <Row>
          <Col xs={12}>
            <Alert dismissible className="bg-transparent border-0 mb-0" role="alert">
              <strong>Howdy!</strong> Follow me on Instagram!{' '}
              <strong>
                <Link href="">@mariasmith</Link>
              </strong>{' '}
              I post new photos, news and interesting facts every day.
              {/* <button type="button" className="btn-close mb-0" data-bs-dismiss="alert" aria-label="Close"> */}
              {/* </button> */}
            </Alert>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default TopAlert
