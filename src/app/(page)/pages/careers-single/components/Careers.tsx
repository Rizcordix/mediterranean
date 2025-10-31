import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'

const Careers = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col md={8}>
            <h2 className="mb-4">Job description</h2>
            <p>
              Are you currently in a Team Leader role looking for a new challenge or are you an experienced Consultant looking to make the next step
              into leadership? Well Larexa Business Support are recruiting and would love to hear from you if you are considering your next move.
            </p>
            <p>
              Ideally you will be from an agency background and preferably within the business support or accounting support sector. You’ll know the
              ins-and-outs of the recruitment process, from talent sourcing right through to business development, and are ready to pass on your
              knowledge by leading a team of consultants towards bigger and better goals.
            </p>
            <p>
              This is a billing leadership position, and as such you will be responsible for leading by example. Along with managing your own desk,
              you’ll provide support and coaching to the consultants within your team.
            </p>
            <h6 className="mb-2">What you’ll need:</h6>
            <ul>
              <li>Proven results as a recruitment consultant or strong sales experience</li>
              <li>Knowledge of the staffing industry</li>
              <li>Previous leadership experience, personally or professionally</li>
              <li>A strong desire to be successful and inspire people</li>
            </ul>
            <h6 className="mb-2 mt-3">What you’ll get in return:</h6>
            <ul>
              <li>A culture where success is celebrated</li>
              <li>Uncapped earnings potential</li>
              <li>A career where you can choose your path</li>
              <li>Company share purchase plan</li>
              <li>An internal rewards program</li>
            </ul>
            <h6 className="mt-4 mb-2">Skills</h6>
            <ul>
              <li>Involving The Team In Decisions That Affect Them</li>
              <li>Displays technical or professional expertise</li>
              <li>Communicates powerfully and prolifically</li>
              <li>Solves problems and analyzes issues</li>
              <li>Displays high integrity and honesty</li>
            </ul>
            <h6 className="mt-4 mb-2">Educational requirements</h6>
            <ul>
              <li>Bachelor Degree</li>
            </ul>
            <Row className="mt-5">
              <Col md={12}>
                <h2 className="mb-3">Apply for this Job</h2>
              </Col>
              <Col md={6}>
                <span className="form-group">
                  <input type="text" className="form-control" placeholder="Name" />
                </span>
              </Col>
              <Col md={6}>
                <span className="form-group">
                  <input type="email" className="form-control" placeholder="E-mail" />
                </span>
              </Col>
              <Col md={6}>
                <span className="form-group">
                  <input type="text" className="form-control" placeholder="Mobile number" />
                </span>
              </Col>
              <Col md={6} className="mb-4">
                <div className="input-group">
                  <input type="file" className="form-control mb-0" id="inputGroupFile01" />
                </div>
              </Col>
              <Col md={12}>
                <span className="form-group">
                  <textarea cols={40} rows={6} className="form-control" placeholder="Message" />
                </span>
              </Col>
              <Col md={12} className="text-center d-grid">
                <button className="btn btn-dark">Apply now</button>
              </Col>
            </Row>
          </Col>
          <Col md={4} className="sidebar">
            <div style={{ position: 'sticky', transition: '0.2s all linear', top: '80px' }}>
              <h2 className="mt-3 mt-md-0 mb-3">Job details</h2>
              <ul className="list-unstyled p-0">
                <li className="mb-3">
                  <strong>Posted:</strong> 3 July 2018{' '}
                </li>
                <li className="mb-3">
                  <strong>Location:</strong> London{' '}
                </li>
                <li className="mb-3">
                  <strong>Specialism:</strong> IT{' '}
                </li>
                <li className="mb-3">
                  <strong>Job type:</strong> Permanent{' '}
                </li>
                <li className="mb-3">
                  <strong>Reference number:</strong> CRR0001-18{' '}
                </li>
                <li className="mb-3">
                  <strong>Contact:</strong> Jessica Mores
                </li>
                <li className="mb-3">
                  <strong>Phone:</strong> (+251) 854-6308{' '}
                </li>
              </ul>
              <Link className="d-block mt-3" href="">
                <i className="fa fa-print me-2" /> Print
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Careers
