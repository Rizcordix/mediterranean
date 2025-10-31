import React from 'react'
import { careersData } from '../data'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

const Careers = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col md={8}>
            <h2 className="mb-2">Job positions</h2>
            <p>like what you saw? If you&apos;re ready to test your earning potential, join us today and become the latest member of team Larexa.</p>
            <Accordion defaultActiveKey={'0'} className="accordion-line toggle-icon-left toggle-icon-round" id="accordionExample4">
              {careersData.map((item, idx) => (
                <AccordionItem eventKey={`${idx}`} className="" key={idx}>
                  <AccordionHeader className="" id="heading10">
                    {item.title}
                  </AccordionHeader>
                  <AccordionBody>
                    <p> {item.description}</p>
                    <h6 className="mb-2">Location: {item.location}</h6>
                    <a className="d-block" href="/pages/careers-single">
                      Read More
                    </a>
                  </AccordionBody>
                </AccordionItem>
              ))}
            </Accordion>
          </Col>
          <Col md={4} className="sidebar">
            <h2>Refine your search</h2>
            <div className="widget widget-newsletter border-0 p-0">
              <ul className="list-group border-0 mb-4">
                <li className="d-flex align-items-center fw-bold text-light-gray">
                  Available jobs <span className="badge bg-light text-body rounded-pill ms-2">14</span>
                </li>
              </ul>
              <form>
                <div className="input-group mb-0">
                  <input className="form-control border-end-0 rounded-start" type="text" name="search" placeholder="Search" />
                  <span className="input-group-btn m-0">
                    <button type="button" className="btn btn-grad m-0">
                      <i className="ti-search m-0" />
                    </button>
                  </span>
                </div>
              </form>
              <select className="form-select mb-3">
                <option>All locations</option>
                <option value="location1">Chicago, US</option>
                <option value="location2">New York, US</option>
                <option value="location3">Seattle/Kirkland, US</option>
                <option value="location4">Los Angles, US</option>
                <option value="location5">Moscow, Russia</option>
                <option value="location6">Sydney, Australia</option>
                <option value="location7">Birmingham, UK</option>
                <option value="location7">Manchester, UK</option>
                <option value="location8">Beijing, China</option>
              </select>
              <select className="form-select">
                <option>All locations</option>
                <option value="location1">Chicago, US</option>
                <option value="location2">New York, US</option>
                <option value="location3">Seattle/Kirkland, US</option>
                <option value="location4">Los Angles, US</option>
                <option value="location5">Moscow, Russia</option>
                <option value="location6">Sydney, Australia</option>
                <option value="location7">Birmingham, UK</option>
                <option value="location7">Manchester, UK</option>
                <option value="location8">Beijing, China</option>
              </select>
            </div>
            <div className="widget bg-light border-0 p-3 rounded">
              <h4>Have any question? </h4>
              <p>
                If you need to send us mail regarding job opportunities, please write to us at{' '}
                <Link className="text-primary" href="mailto:contact@example.com">
                  career@larexa.com
                </Link>{' '}
                for more information.
              </p>{' '}
              or call us{' '}
              <Link className="display-8 text-dark primary-hover" href="">
                @(251) 854-6308
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Careers
