import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Grid = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col md={12}>
              <div className="bg-light py-4 mb-4">
                <h6 className="m-0 text-center">Full width</h6>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className="bg-light py-4 mb-4">
                <h6 className="m-0 text-center">Two columns</h6>
              </div>
            </Col>
            <Col md={6}>
              <div className="bg-light py-4 mb-4">
                <h6 className="m-0 text-center">Two columns</h6>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <div className="bg-light py-4 mb-4">
                <h6 className="m-0 text-center">Three columns</h6>
              </div>
            </Col>
            <Col md={4}>
              <div className="bg-light py-4 mb-4">
                <h6 className="m-0 text-center">Three columns</h6>
              </div>
            </Col>
            <Col md={4}>
              <div className="bg-light py-4 mb-4">
                <h6 className="m-0 text-center">Three columns</h6>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <div className="bg-light py-4 mb-4">
                <h6 className="m-0 text-center">Four columns</h6>
              </div>
            </Col>
            <Col md={3}>
              <div className="bg-light py-4 mb-4">
                <h6 className="m-0 text-center">Four columns</h6>
              </div>
            </Col>
            <Col md={3}>
              <div className="bg-light py-4 mb-4">
                <h6 className="m-0 text-center">Four columns</h6>
              </div>
            </Col>
            <Col md={3}>
              <div className="bg-light py-4 mb-4">
                <h6 className="m-0 text-center">Four columns</h6>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            <Col md={12}>
              <div className="text-center">
                <h4>Grid options</h4>
                <p>
                  See how aspects of the Bootstrap grid system work across multiple devices with a handy table. For more{' '}
                  <Link target="_blank" href="https://getbootstrap.com/docs/4.0/layout/grid/">
                    Visit Bootstrap 5 official website grid page.
                  </Link>
                </p>
              </div>
              <div className="table-responsive-md">
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th />
                      <th className="text-center">
                        Extra small
                        <br />
                        <small>&lt;576px</small>
                      </th>
                      <th className="text-center">
                        Small
                        <br />
                        <small>≥576px</small>
                      </th>
                      <th className="text-center">
                        Medium
                        <br />
                        <small>≥768px</small>
                      </th>
                      <th className="text-center">
                        Large
                        <br />
                        <small>≥992px</small>
                      </th>
                      <th className="text-center">
                        Extra large
                        <br />
                        <small>≥1200px</small>
                      </th>
                      <th className="text-center">
                        Extra extra large
                        <br />
                        <small>≥1400px</small>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="text-nowrap" scope="row">
                        Max container width
                      </th>
                      <td>None (auto)</td>
                      <td>540px</td>
                      <td>720px</td>
                      <td>960px</td>
                      <td>1140px</td>
                      <td>1320px</td>
                    </tr>
                    <tr>
                      <th className="text-nowrap" scope="row">
                        Class prefix
                      </th>
                      <td>
                        <code>.col-</code>
                      </td>
                      <td>
                        <code>.col-sm-</code>
                      </td>
                      <td>
                        <code>.col-md-</code>
                      </td>
                      <td>
                        <code>.col-lg-</code>
                      </td>
                      <td>
                        <code>.col-xl-</code>
                      </td>
                      <td>
                        <code>.col-xxl-</code>
                      </td>
                    </tr>
                    <tr>
                      <th className="text-nowrap" scope="row">
                        # of columns
                      </th>
                      <td colSpan={6}>12</td>
                    </tr>
                    <tr>
                      <th className="text-nowrap" scope="row">
                        Gutter width
                      </th>
                      <td colSpan={6}>1.5rem (.75rem on each side of a column)</td>
                    </tr>
                    <tr>
                      <th className="text-nowrap" scope="row">
                        Custom gutters
                      </th>
                      <td colSpan={6}>Yes</td>
                    </tr>
                    <tr>
                      <th className="text-nowrap" scope="row">
                        Nestable
                      </th>
                      <td colSpan={6}>Yes</td>
                    </tr>
                    <tr>
                      <th className="text-nowrap" scope="row">
                        Column ordering
                      </th>
                      <td colSpan={6}>Yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Grid
