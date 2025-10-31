import React from 'react'
import { processAdvanceData } from '../data'
import { Col, Container, Row } from 'react-bootstrap'

const ProcessAdvance = () => {
  return (
    <section className="process-advance bg-light">
      <Container>
        <Row>
          {processAdvanceData.map((item, idx) => (
            <Col sm={6} lg={3} className="text-center mb-4" key={idx}>
              <div className="process-border">
                <span className={`process-number bg-grad  ${idx != 0 && 'border-start'}  ${processAdvanceData.length - 1 != idx && 'border-end'} `}>
                  0{idx + 1}
                </span>
              </div>
              <h5 className="my-3">{item.title}</h5>
              <p>{item.description}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default ProcessAdvance
