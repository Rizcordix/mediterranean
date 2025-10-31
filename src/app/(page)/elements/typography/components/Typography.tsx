import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Typography = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg={6} className="mb-4">
            <h4 className="mb-2">Heading Size</h4>
            <p>
              Use <code>h1</code> to <code>h6</code> tags to get desire heading.
            </p>
            <h1>h1. heading</h1>
            <h2>h2. heading</h2>
            <h3>h3. heading</h3>
            <h4>h4. heading</h4>
            <h5>h5. heading</h5>
            <h6>h6. heading</h6>
          </Col>
          <Col lg={6} className="mb-4">
            <h4 className="mb-2">Heading with sub heading</h4>
            <p>
              Use <code>small</code> tag to get desire sub heading.
            </p>
            <h1>
              h1. heading <small> Sub heading</small>
            </h1>
            <h2>
              h2. heading <small> Sub heading</small>
            </h2>
            <h3>
              h3. heading <small> Sub heading</small>
            </h3>
            <h4>
              h4. heading <small> Sub heading</small>
            </h4>
            <h5>
              h5. heading <small> Sub heading</small>
            </h5>
            <h6>
              h6. heading <small> Sub heading</small>
            </h6>
          </Col>
          <Col lg={6} className="mb-4">
            <h4 className="mb-2">Paragraph with justify</h4>
            <p>
              Use <code>.text-justify</code> class to get justify text.
            </p>
            <p className="text-justify">
              We have a strong foundation built on legacy and emerging technologies, including excellent track record of on-time deliveries. We are
              emerging as one of the most promising private talent sourcing and management firms in the world. We provide digital transformation
              solutions, enabling companies to make their visions reality. With us at your side, you will find the IT solution to achieve your
              strategic and financial goals. Partnering with 100+ Fortune 500 companies and mid-sized firms across industries, experience the best in
              class, uniquely customized and scalable workforce solutions.!
            </p>
          </Col>
          <Col lg={6} className="mb-4">
            <h4 className="mb-2">Text Alignments </h4>
            <p>
              Use <code>.text-start</code> <code>.text-center</code> <code>.text-end</code> class to get Text Alignments .
            </p>
            <p className="mb-1 text-start">Left aligned text on all viewport sizes.</p>
            <p className="mb-1 text-center">Center aligned text on all viewport sizes.</p>
            <p className="mb-1 text-end">Right aligned text on all viewport sizes.</p>
            <p className="mb-1 text-sm-start">Left aligned text on viewports sized SM (small) or wider.</p>
            <p className="mb-1 text-md-start">Left aligned text on viewports sized MD (medium) or wider.</p>
            <p className="mb-1 text-lg-start">Left aligned text on viewports sized LG (large) or wider.</p>
            <p className="mb-1 text-xl-start">Left aligned text on viewports sized XL (extra-large) or wider.</p>
          </Col>
          <Col lg={6} className="mb-4">
            <h4 className="mb-2">Text transform</h4>
            <p>
              Use <code>.text-lowercase .text-uppercase .text-capitalize </code> class to get Text transform .
            </p>
            <p className="text-lowercase">Lowercased text.</p>
            <p className="text-uppercase">Uppercased text.</p>
            <p className="text-capitalize">CapiTaliZed text.</p>
          </Col>
          <Col lg={6} className="mb-4">
            <h4 className="mb-2">Font weight and italics</h4>
            <p>
              Use <code>.fw-bold .fw-normal .fw-light .fst-italic </code> class to get font weight and italics .
            </p>
            <p className="mb-1 fw-bold">Bold text.</p>
            <p className="mb-1 fw-normal">Normal weight text.</p>
            <p className="mb-1 fw-light">Light weight text.</p>
            <p className="mb-1 fst-italic">Italic text.</p>
          </Col>
          <Col lg={6} className="mb-4">
            <h4 className="mb-2">Text Colors</h4>
            <p>Use color utility classes for text Colors.</p>
            <Row>
              <Col xs={6}>
                <p className="text-primary">.text-primary</p>
                <p className="text-grad">.text-grad (Gradient color text)</p>
                <p className="text-secondary">.text-secondary</p>
                <p className="text-success">.text-success</p>
                <p className="text-danger">.text-danger</p>
                <p className="text-warning">.text-warning</p>
              </Col>
              <Col xs={6}>
                <p className="text-info">.text-info</p>
                <p className="text-light bg-dark">.text-light</p>
                <p className="text-dark">.text-dark</p>
                <p className="text-muted">.text-muted</p>
                <p className="text-white bg-dark">.text-white</p>
                <p className="all-text-white bg-dark"> .all-text-white </p>
              </Col>
            </Row>
          </Col>
          <Col lg={6} className="mb-4">
            <h4 className="mb-2">Background color</h4>
            <p>Use color utility classes for Background Colors.</p>
            <Row>
              <Col xs={6}>
                <div className="p-2 mb-2 bg-primary text-white">.bg-primary</div>
                <div className="p-2 mb-2 bg-grad text-white">.bg-grad (gradient background color)</div>
                <div className="p-2 mb-2 bg-dark-grad text-white">.bg-dark-grad (Dark gradient BG color)</div>
                <div className="p-2 mb-2 bg-secondary text-white">.bg-secondary</div>
                <div className="p-2 mb-2 bg-success text-white">.bg-success</div>
                <div className="p-2 mb-2 bg-danger text-white">.bg-danger</div>
              </Col>
              <Col xs={6}>
                <div className="p-2 mb-2 bg-warning text-dark">.bg-warning</div>
                <div className="p-2 mb-2 bg-info text-white">.bg-info</div>
                <div className="p-2 mb-2 bg-light text-dark">.bg-light</div>
                <div className="p-2 mb-2 bg-dark text-white">.bg-dark</div>
                <div className="p-2 mb-2 bg-white text-dark">.bg-white</div>
                <div className="p-2 mb-2 bg-transparent text-dark">.bg-transparent</div>
              </Col>
            </Row>
          </Col>
          <Col lg={6} className="mb-4">
            <h4 className="mb-2">Address</h4>
            <p>
              Use <code>address</code> tag to get address styles.
            </p>
            <address>
              <strong>Twitter, Inc.</strong>
              <br />
              1355 Market St, Suite 900
              <br />
              San Francisco, CA 94103
              <br />
              <abbr title="Phone">P:</abbr> (123) 456-7890
            </address>
            <address>
              <strong>Full Name</strong>
              <br />
              <a href="mailto:#">first.last@example.com</a>
            </address>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Typography
