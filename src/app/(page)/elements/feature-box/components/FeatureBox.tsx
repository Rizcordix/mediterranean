import React from 'react'
import { featureBox1Data, featureBox2Data, featureBox3Data, featureBoxData } from '../data'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const FeatureBox = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col sm={12} className="text-center mb-4">
            <h2>Feature box default style</h2>
            <p>with left, center and right aligns</p>
          </Col>
          {featureBoxData.map((item, idx) => (
            <Col md={4} key={idx}>
              <div className={`feature-box h-100  ${item.class} icon-grad`}>
                <div className="feature-box-icon">
                  <i className={`${item.icon}`} />
                </div>
                <h3 className="feature-box-title">{item.title}</h3>
                <p className="feature-box-desc">{item.description}</p>
              </div>
            </Col>
          ))}
        </Row>
        <div className="divider mt-5 mb-0" />
        <Row>
          <Col sm={12} className="text-center mt-5 mb-4">
            <h2>Feature box style 1</h2>
            <p>with shadow and top line</p>
          </Col>
          {featureBox1Data.map((item, idx) => (
            <Col md={4} className="mt-4" key={idx}>
              <div className={`feature-box f-style-1 h-100 ${item.isPopular && 'active'} icon-primary`}>
                <div className="feature-box-icon">
                  <i className={`${item.icon}`} />
                </div>
                <h3 className="feature-box-title">{item.title}</h3>
                <p className="feature-box-desc">{item.description}</p>
              </div>
            </Col>
          ))}
        </Row>
        <div className="divider mt-5 mb-0" />
        <Row>
          <Col sm={12} className="text-center mt-5 mb-4">
            <h2>Feature box style 2</h2>
            <p>with shadow and hover animation</p>
          </Col>
          {featureBox2Data.map((item, idx) => (
            <Col md={4} className="mt-30" key={idx}>
              <div className="feature-box f-style-2 h-100 icon-grad">
                <div className="feature-box-icon">
                  <i className={`${item.icon}`} />
                </div>
                <h3 className="feature-box-title">{item.title}</h3>
                <p className="feature-box-desc">{item.description}</p>
                <Link className="mt-3" href="">
                  Know more!
                </Link>
              </div>
            </Col>
          ))}
        </Row>
        <div className="divider mt-5 mb-0" />
        <Row>
          <Col sm={12} className="text-center mt-5 mb-4">
            <h2>Feature box style 3</h2>
            <p>with left icon border</p>
          </Col>
          {featureBox3Data.map((item, idx) => (
            <Col lg={4} className="mt-4" key={idx}>
              <div className="feature-box f-style-3 h-100 icon-grad">
                <div className="feature-box-icon">
                  <i className={`${item.icon}`} />
                </div>
                <h3 className="feature-box-title">{item.title}</h3>
                <p className="feature-box-desc">{item.description} </p>
              </div>
            </Col>
          ))}
        </Row>
        <div className="divider mt-5 mb-0" />
        <Row>
          <Col sm={12} className="text-center mt-5 mb-4">
            <h2>Feature box style 4</h2>
            <p>with left icon</p>
          </Col>
          {featureBox3Data.map((item, idx) => (
            <Col md={4} className="mt-4" key={idx}>
              <div className="feature-box f-style-4 h-100 icon-grad">
                <div className="feature-box-icon">
                  <i className={`${item.icon}`} />
                </div>
                <h3 className="feature-box-title">{item.title}</h3>
                <p className="feature-box-desc">{item.description} </p>
              </div>
            </Col>
          ))}
        </Row>
        <div className="divider mt-5 mb-0" />
        <Row>
          <Col sm={12} className="text-center mt-5 mb-4">
            <h2>Feature box style 5</h2>
            <p>with left top icon shadow</p>
          </Col>
          {featureBox3Data.map((item, idx) => (
            <Col md={4} className="mt-4" key={idx}>
              <div className="feature-box f-style-5 h-100 icon-grad">
                <div className="feature-box-icon">
                  <i className="ti-panel" />
                </div>
                <h3 className="feature-box-title">{item.title}</h3>
                <p className="feature-box-desc">{item.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default FeatureBox
