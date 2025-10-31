import Image from 'next/image'
import React from 'react'
import flyScreen from '@/assets/images/mockups/fly-screen.png'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Welcome = () => {
  return (
    <section className="pt-5">
      <Container>
        <Row>
          <Col md={7}>
            <div className="mb-lg-n8 mb-0">
              <Image src={flyScreen} alt="flyScreen" />
            </div>
          </Col>
          <Col md={5} className="mt-5">
            <h2 className="h1">Get it done with a Larexa</h2>
            <p className="lead">
              Partnering with 500+ Fortune companies and mid-sized firms across enterprises, uniquely customized and{' '}
              <abbr title="title">scalable workforce solutions.</abbr>
            </p>
            <p>
              There is nothing that can stop you from achieving what you want, except yourself. If you devote yourself to it you will achieve your
              goal.
            </p>
            <div>
              <Button variant="grad">Post your job</Button>
              <Button variant="link">View job list</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Welcome
