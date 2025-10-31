'use client'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import React from 'react'
import { Button, Card, CardBody, CardHeader, Col, Container, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap'

const ServicePackages = () => {
  return (
    <section className="package pt-5">
      <Container>
        <Row>
          <TabContainer defaultActiveKey={1}>
            <Col md={7}>
              <div className="title text-start">
                <span className="pre-title">The service packages</span>
                <h2>Choose affordable and 100% premium package</h2>
                <p>
                  We are an insight and behaviour driven creative marketing agency. A Full package Digital Creative Agency Specializing in: Video
                  Production, Web Design, Branding, Brand Strategy, Content Marketing and Aerial Cinematography.{' '}
                </p>
                <p>
                  Our passion for customer excellence is just one reason why we are the market leader. We&apos;ve always worked very hard to give our
                  customers the best experience in dealing with our company.
                </p>
              </div>
              <Nav as={'ul'} className="nav-tabs tab-grad">
                <NavItem>
                  {' '}
                  <NavLink eventKey={1} data-bs-toggle="tab">
                    {' '}
                    Enterprise{' '}
                  </NavLink>
                </NavItem>
                <NavItem>
                  {' '}
                  <NavLink eventKey={2} data-bs-toggle="tab">
                    {' '}
                    Business{' '}
                  </NavLink>{' '}
                </NavItem>
              </Nav>
            </Col>
            <Col md={5} className="mt-4 mt-md-0">
              <TabContent className="tab-content p-0">
                <TabPane eventKey={1} id="price-1-tab">
                  <Card>
                    <CardHeader className="text-white bg-grad">
                      <div className="float-start">
                        <h2 className="text-white fw-bold mb-0 display-4">
                          <span>$</span>149.99
                        </h2>
                        <div>Enterprise Plan</div>
                      </div>
                    </CardHeader>
                    <CardBody className="bg-light ">
                      <ul className="list-group list-group-borderless my-3">
                        <li className="list-group-item">
                          <IconifyIcon icon="fa:check" width={14} height={14} />
                          &nbsp;Up to 10 users monthly
                        </li>
                        <li className="list-group-item">
                          <IconifyIcon icon="fa:check" width={14} height={14} />
                          &nbsp;Unlimited updates
                        </li>
                        <li className="list-group-item">
                          <IconifyIcon icon="fa:check" width={14} height={14} />
                          &nbsp;Free host &amp; domain included
                        </li>
                        <li className="list-group-item">
                          <IconifyIcon icon="fa:check" width={14} height={14} />
                          &nbsp;24/7 dedicated Support{' '}
                        </li>
                        <li className="list-group-item">
                          <IconifyIcon icon="fa:check" width={14} height={14} />
                          &nbsp;Unlimited Storage usage
                        </li>
                      </ul>
                      <Button variant="grad">Get it now!</Button>
                      <div className="offer">-40%</div>
                    </CardBody>
                  </Card>
                </TabPane>
                <TabPane eventKey={2} id="price-2-tab">
                  <Card>
                    <CardHeader className="text-white bg-grad">
                      <div className="float-start">
                        <h2 className="text-white fw-bold mb-0 display-4">
                          <span>$</span>129.99
                        </h2>
                        <div>Business Plan</div>
                      </div>
                    </CardHeader>
                    <CardBody className="bg-light ">
                      <ul className="list-group list-group-borderless my-3">
                        <li className="list-group-item">
                          <IconifyIcon icon="fa:check" width={14} height={14} />
                          &nbsp;Up to 5 users monthly
                        </li>
                        <li className="list-group-item">
                          <IconifyIcon icon="fa:check" width={14} height={14} />
                          &nbsp;Unlimited updates
                        </li>
                        <li className="list-group-item">
                          <IconifyIcon icon="fa:check" width={14} height={14} />
                          &nbsp;20% off on hosting &amp; domain
                        </li>
                        <li className="list-group-item">
                          <IconifyIcon icon="fa:check" width={14} height={14} />
                          &nbsp;24/7 dedicated Support{' '}
                        </li>
                        <li className="list-group-item">
                          <IconifyIcon icon="fa:check" width={14} height={14} />
                          &nbsp;500GB Storage usage
                        </li>
                      </ul>
                      <Button variant="grad">Get it now!</Button>
                      <div className="offer">-25%</div>
                    </CardBody>
                  </Card>
                </TabPane>
              </TabContent>
            </Col>
          </TabContainer>
        </Row>
      </Container>
    </section>
  )
}

export default ServicePackages
