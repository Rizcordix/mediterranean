'use client'
import { Col, Container, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap'

const Tabs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <h5 className="mb-4">Tab default</h5>
            <TabContainer defaultActiveKey={'tab-1-1'}>
              <Nav className="nav-tabs">
                <NavItem>
                  {' '}
                  <NavLink eventKey={'tab-1-1'} data-bs-toggle="tab">
                    {' '}
                    Research{' '}
                  </NavLink>{' '}
                </NavItem>
                <NavItem>
                  {' '}
                  <NavLink eventKey={'tab-1-2'} data-bs-toggle="tab">
                    {' '}
                    Design{' '}
                  </NavLink>{' '}
                </NavItem>
                <NavItem>
                  {' '}
                  <NavLink eventKey={'tab-1-3'} data-bs-toggle="tab">
                    {' '}
                    Develop{' '}
                  </NavLink>{' '}
                </NavItem>
              </Nav>
              <TabContent>
                <TabPane eventKey={'tab-1-1'}>
                  We have a strong foundation built on legacy and emerging technologies, including excellent track record of on-time deliveries. We
                  are emerging as one of the most promising private talent sourcing and management firms in the world. The real challenge before
                  companies in today&apos;s world is to make their products and services appealing to everyone.
                </TabPane>
                <TabPane eventKey={'tab-1-2'}>
                  We pride ourselves on the service we give to our clients. Our friendly team members are always willing to help you understand your
                  present technology requirements and provide suggestions on your future needs. It can be the packaging of an item or the design of
                  its website and Applications.
                </TabPane>
                <TabPane eventKey={'tab-1-3'}>
                  Larexa; an innovative Internet marketing solutions company that offers comprehensive web development, SMO services, SEO strategies
                  and various other types of Internet marketing related services. With us at your side, you will find the IT solution to achieve your
                  strategic and financial goals.
                </TabPane>
              </TabContent>
            </TabContainer>
          </Col>
          <Col sm={12} md={6}>
            <h5 className="mb-4">Tab default Justified</h5>
            <TabContainer defaultActiveKey={'tab-2-1'}>
              <Nav className="nav-tabs nav-justified">
                <NavItem>
                  {' '}
                  <NavLink data-bs-toggle="tab" eventKey="tab-2-1">
                    {' '}
                    Research{' '}
                  </NavLink>{' '}
                </NavItem>
                <NavItem>
                  {' '}
                  <NavLink data-bs-toggle="tab" eventKey="tab-2-2">
                    {' '}
                    Design{' '}
                  </NavLink>{' '}
                </NavItem>
                <NavItem>
                  {' '}
                  <NavLink data-bs-toggle="tab" eventKey="tab-2-3">
                    {' '}
                    Develop{' '}
                  </NavLink>{' '}
                </NavItem>
              </Nav>
              <TabContent>
                <TabPane eventKey="tab-2-1">
                  We have a strong foundation built on legacy and emerging technologies, including excellent track record of on-time deliveries. We
                  are emerging as one of the most promising private talent sourcing and management firms in the world. The real challenge before
                  companies in today&apos;s world is to make their products and services appealing to everyone.
                </TabPane>
                <TabPane eventKey="tab-2-2">
                  We pride ourselves on the service we give to our clients. Our friendly team members are always willing to help you understand your
                  present technology requirements and provide suggestions on your future needs. It can be the packaging of an item or the design of
                  its website and Applications.
                </TabPane>
                <TabPane eventKey="tab-2-3">
                  Larexa; an innovative Internet marketing solutions company that offers comprehensive web development, SMO services, SEO strategies
                  and various other types of Internet marketing related services. With us at your side, you will find the IT solution to achieve your
                  strategic and financial goals.
                </TabPane>
              </TabContent>
            </TabContainer>
          </Col>
          <Col sm={12} md={6}>
            <h5 className="mb-4">Tab line</h5>
            <TabContainer defaultActiveKey={'tab-3-1'}>
              <Nav className="nav-tabs tab-line">
                <NavItem>
                  {' '}
                  <NavLink data-bs-toggle="tab" eventKey="tab-3-1">
                    {' '}
                    Research{' '}
                  </NavLink>{' '}
                </NavItem>
                <NavItem>
                  {' '}
                  <NavLink data-bs-toggle="tab" eventKey="tab-3-2">
                    {' '}
                    Design{' '}
                  </NavLink>{' '}
                </NavItem>
                <NavItem>
                  {' '}
                  <NavLink data-bs-toggle="tab" eventKey="tab-3-3">
                    {' '}
                    Develop{' '}
                  </NavLink>{' '}
                </NavItem>
              </Nav>
              <TabContent>
                <TabPane eventKey="tab-3-1">
                  We have a strong foundation built on legacy and emerging technologies, including excellent track record of on-time deliveries. We
                  are emerging as one of the most promising private talent sourcing and management firms in the world. The real challenge before
                  companies in today&apos;s world is to make their products and services appealing to everyone.
                </TabPane>
                <TabPane eventKey="tab-3-2">
                  We pride ourselves on the service we give to our clients. Our friendly team members are always willing to help you understand your
                  present technology requirements and provide suggestions on your future needs. It can be the packaging of an item or the design of
                  its website and Applications.
                </TabPane>
                <TabPane eventKey="tab-3-3">
                  Larexa; an innovative Internet marketing solutions company that offers comprehensive web development, SMO services, SEO strategies
                  and various other types of Internet marketing related services. With us at your side, you will find the IT solution to achieve your
                  strategic and financial goals.
                </TabPane>
              </TabContent>
            </TabContainer>
          </Col>
          <Col sm={12} md={6}>
            <h5 className="mb-4">Tab bordered</h5>
            <TabContainer defaultActiveKey={'tab-4-1'}>
              <Nav className="nav-tabs tab-bordered">
                <NavItem>
                  {' '}
                  <NavLink data-bs-toggle="tab" eventKey="tab-4-1">
                    {' '}
                    Research{' '}
                  </NavLink>{' '}
                </NavItem>
                <NavItem>
                  {' '}
                  <NavLink data-bs-toggle="tab" eventKey="tab-4-2">
                    {' '}
                    Design{' '}
                  </NavLink>{' '}
                </NavItem>
                <NavItem>
                  {' '}
                  <NavLink data-bs-toggle="tab" eventKey="tab-4-3">
                    {' '}
                    Develop{' '}
                  </NavLink>{' '}
                </NavItem>
              </Nav>
              <TabContent>
                <TabPane eventKey="tab-4-1">
                  We have a strong foundation built on legacy and emerging technologies, including excellent track record of on-time deliveries. We
                  are emerging as one of the most promising private talent sourcing and management firms in the world. The real challenge before
                  companies in today&apos;s world is to make their products and services appealing to everyone.
                </TabPane>
                <TabPane eventKey="tab-4-2">
                  We pride ourselves on the service we give to our clients. Our friendly team members are always willing to help you understand your
                  present technology requirements and provide suggestions on your future needs. It can be the packaging of an item or the design of
                  its website and Applications.
                </TabPane>
                <TabPane eventKey="tab-4-3">
                  Larexa; an innovative Internet marketing solutions company that offers comprehensive web development, SMO services, SEO strategies
                  and various other types of Internet marketing related services. With us at your side, you will find the IT solution to achieve your
                  strategic and financial goals.
                </TabPane>
              </TabContent>
            </TabContainer>
          </Col>
          <Col sm={12} md={6}>
            <h5 className="mb-4">Tab gradient</h5>
            <TabContainer defaultActiveKey={'tab-5-1'}>
              <Nav className="nav-tabs tab-grad">
                <NavItem>
                  {' '}
                  <NavLink data-bs-toggle="tab" eventKey="tab-5-1">
                    {' '}
                    Research{' '}
                  </NavLink>{' '}
                </NavItem>
                <NavItem>
                  {' '}
                  <NavLink data-bs-toggle="tab" eventKey="tab-5-2">
                    {' '}
                    Design{' '}
                  </NavLink>{' '}
                </NavItem>
                <NavItem>
                  {' '}
                  <NavLink data-bs-toggle="tab" eventKey="tab-5-3">
                    {' '}
                    Develop{' '}
                  </NavLink>{' '}
                </NavItem>
              </Nav>
              <TabContent>
                <TabPane eventKey="tab-5-1">
                  We have a strong foundation built on legacy and emerging technologies, including excellent track record of on-time deliveries. We
                  are emerging as one of the most promising private talent sourcing and management firms in the world. The real challenge before
                  companies in today&apos;s world is to make their products and services appealing to everyone.
                </TabPane>
                <TabPane eventKey="tab-5-2">
                  We pride ourselves on the service we give to our clients. Our friendly team members are always willing to help you understand your
                  present technology requirements and provide suggestions on your future needs. It can be the packaging of an item or the design of
                  its website and Applications.
                </TabPane>
                <TabPane eventKey="tab-5-3">
                  Larexa; an innovative Internet marketing solutions company that offers comprehensive web development, SMO services, SEO strategies
                  and various other types of Internet marketing related services. With us at your side, you will find the IT solution to achieve your
                  strategic and financial goals.
                </TabPane>
              </TabContent>
            </TabContainer>
          </Col>
          <Col sm={12} md={6}>
            <h5 className="mb-4">Tab Dark</h5>
            <TabContainer defaultActiveKey={'tab-6-1'}>
              <Nav className="nav-tabs tab-dark">
                <NavItem>
                  {' '}
                  <NavLink data-bs-toggle="tab" eventKey="tab-6-1">
                    {' '}
                    Research{' '}
                  </NavLink>{' '}
                </NavItem>
                <NavItem>
                  {' '}
                  <NavLink data-bs-toggle="tab" eventKey="tab-6-2">
                    {' '}
                    Design{' '}
                  </NavLink>{' '}
                </NavItem>
                <NavItem>
                  {' '}
                  <NavLink data-bs-toggle="tab" eventKey="tab-6-3">
                    {' '}
                    Develop{' '}
                  </NavLink>{' '}
                </NavItem>
              </Nav>
              <TabContent>
                <TabPane eventKey="tab-6-1">
                  We have a strong foundation built on legacy and emerging technologies, including excellent track record of on-time deliveries. We
                  are emerging as one of the most promising private talent sourcing and management firms in the world. The real challenge before
                  companies in today&apos;s world is to make their products and services appealing to everyone.
                </TabPane>
                <TabPane eventKey="tab-6-2">
                  We pride ourselves on the service we give to our clients. Our friendly team members are always willing to help you understand your
                  present technology requirements and provide suggestions on your future needs. It can be the packaging of an item or the design of
                  its website and Applications.
                </TabPane>
                <TabPane eventKey="tab-6-3">
                  Larexa; an innovative Internet marketing solutions company that offers comprehensive web development, SMO services, SEO strategies
                  and various other types of Internet marketing related services. With us at your side, you will find the IT solution to achieve your
                  strategic and financial goals.
                </TabPane>
              </TabContent>
            </TabContainer>
          </Col>
          <Col sm={12} md={6}>
            <h5 className="mb-4">Tab with icon</h5>
            <TabContainer defaultActiveKey={'tab-7-1'}>
              <Nav className="nav-tabs tab-with-icon">
                <NavItem>
                  <NavLink data-bs-toggle="tab" eventKey="tab-7-1">
                    {' '}
                    <i className="ti-panel" /> Research{' '}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink data-bs-toggle="tab" eventKey="tab-7-2">
                    {' '}
                    <i className="ti-palette" /> Design{' '}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink data-bs-toggle="tab" eventKey="tab-7-3">
                    {' '}
                    <i className="ti-gift" /> Develop{' '}
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent>
                <TabPane eventKey="tab-7-1">
                  We have a strong foundation built on legacy and emerging technologies, including excellent track record of on-time deliveries. We
                  are emerging as one of the most promising private talent sourcing and management firms in the world. The real challenge before
                  companies in today&apos;s world is to make their products and services appealing to everyone.
                </TabPane>
                <TabPane eventKey="tab-7-2">
                  We pride ourselves on the service we give to our clients. Our friendly team members are always willing to help you understand your
                  present technology requirements and provide suggestions on your future needs. It can be the packaging of an item or the design of
                  its website and Applications.
                </TabPane>
                <TabPane eventKey="tab-7-3">
                  Larexa; an innovative Internet marketing solutions company that offers comprehensive web development, SMO services, SEO strategies
                  and various other types of Internet marketing related services. With us at your side, you will find the IT solution to achieve your
                  strategic and financial goals.
                </TabPane>
              </TabContent>
            </TabContainer>
          </Col>
          <Col sm={12} md={6}>
            <h5 className="mb-4">Tab with icon center</h5>
            <TabContainer defaultActiveKey={'tab-8-1'}>
              <Nav className="nav-tabs tab-with-center-icon justify-content-center nav-justified">
                <NavItem>
                  <NavLink data-bs-toggle="tab" eventKey="tab-8-1">
                    {' '}
                    <i className="ti-panel" /> Research{' '}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink data-bs-toggle="tab" eventKey="tab-8-2">
                    {' '}
                    <i className="ti-palette" /> Design{' '}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink data-bs-toggle="tab" eventKey="tab-8-3">
                    {' '}
                    <i className="ti-gift" /> Develop{' '}
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent>
                <TabPane eventKey="tab-8-1">
                  We have a strong foundation built on legacy and emerging technologies, including excellent track record of on-time deliveries. We
                  are emerging as one of the most promising private talent sourcing and management firms in the world. The real challenge before
                  companies in today&apos;s world is to make their products and services appealing to everyone.
                </TabPane>
                <TabPane eventKey="tab-8-2">
                  We pride ourselves on the service we give to our clients. Our friendly team members are always willing to help you understand your
                  present technology requirements and provide suggestions on your future needs. It can be the packaging of an item or the design of
                  its website and Applications.
                </TabPane>
                <TabPane eventKey="tab-8-3">
                  Larexa; an innovative Internet marketing solutions company that offers comprehensive web development, SMO services, SEO strategies
                  and various other types of Internet marketing related services. With us at your side, you will find the IT solution to achieve your
                  strategic and financial goals.
                </TabPane>
              </TabContent>
            </TabContainer>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Tabs
