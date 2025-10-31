import { Button, Col, Container, Row } from 'react-bootstrap'

const Buttons = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col md={12}>
            <h5 className="mb-3">Button Default style</h5>
            <Button variant="primary">Primary</Button> &nbsp;
            <Button variant="grad">Gradient</Button> &nbsp;
            <Button variant="dark">Dark</Button> &nbsp;
            <Button variant="light">light</Button> &nbsp;
            <Button variant="white">white</Button> &nbsp;
            <Button variant="secondary">Secondary</Button> &nbsp;
            <Button variant="success">Success</Button> &nbsp;
            <Button variant="danger">Danger</Button> &nbsp;
            <Button variant="warning">Warning</Button> &nbsp;
            <Button variant="info">Info</Button> &nbsp;
            <Button variant="link">Link</Button> &nbsp;
            <h5 className="mt-5 mb-3"> Outline buttons </h5>
            <Button variant="outline-primary">Primary</Button> &nbsp;
            <Button variant="outline-grad">Gradient</Button> &nbsp;
            <Button variant="outline-dark">Dark</Button> &nbsp;
            <Button variant="outline-light">Light</Button> &nbsp;
            <Button variant="outline-white">white</Button> &nbsp;
            <Button variant="outline-secondary">Secondary</Button> &nbsp;
            <Button variant="outline-success">Success</Button> &nbsp;
            <Button variant="outline-danger">Danger</Button> &nbsp;
            <Button variant="outline-warning">Warning</Button> &nbsp;
            <Button variant="outline-info">Info</Button> &nbsp;
            <h5 className="mt-5 mb-3">Button with icons</h5>
            <Button variant="primary">
              <i className="fa fa-arrow-circle-right" />
              Primary
            </Button>{' '}
            &nbsp;
            <Button variant="grad">
              <i className="fa fa-arrow-right" />
              Gradient
            </Button>{' '}
            &nbsp;
            <Button variant="dark">
              <i className="fa fa-angle-right" />
              Dark
            </Button>{' '}
            &nbsp;
            <Button variant="light">
              <i className="fa fa-play" />
              light
            </Button>{' '}
            &nbsp;
            <Button variant="white">
              <i className="fa fa-caret-right" />
              white
            </Button>{' '}
            &nbsp;
            <Button variant="secondary">
              <i className="fa fa-check-circle" />
              Secondary
            </Button>{' '}
            &nbsp;
            <Button variant="success">
              <i className="far fa-check-circle" />
              Success
            </Button>{' '}
            &nbsp;
            <Button variant="danger">
              <i className="fa fa-chevron-right" />
              Danger
            </Button>{' '}
            &nbsp;
            <Button variant="warning">
              <i className="fas fa-times" />
              Warning
            </Button>{' '}
            &nbsp;
            <Button variant="info">
              <i className="far fa-envelope" />
              Info
            </Button>{' '}
            &nbsp;
            <h5 className="mt-5 mb-3">Button size</h5>
            <a href="" className="btn btn-primary btn-xs">
              Mini
            </a>
            &nbsp;
            <Button variant="primary" size="sm">
              Small
            </Button>
            &nbsp;
            <Button variant="primary">Default</Button>&nbsp;
            <Button variant="primary" size="lg">
              Large
            </Button>
            &nbsp;
            <h5 className="mt-5 mb-3">Button round</h5>
            <a className="btn btn-primary btn-sm btn-round zoom-on-hover me-3" href="">
              <i className="fa fa-play" />
            </a>
            &nbsp;
            <a className="btn btn-primary btn-round zoom-on-hover me-3" href="">
              <i className="fa fa-play" />
            </a>
            &nbsp;
            <a className="btn btn-primary btn-lg btn-round zoom-on-hover me-3" href="">
              <i className="fa fa-play" />
            </a>
            &nbsp;
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Buttons
