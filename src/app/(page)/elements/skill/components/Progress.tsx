import { Col, Container, Row } from 'react-bootstrap'

const Progress = () => {
  return (
    <section>
      <Container className="h-100">
        <Row>
          <Col sm={6}>
            <h5 className="mb-2">Progress Default</h5>
            <div className="progress-item">
              <p>Web Design</p>
              <div className="progress">
                <div
                  className="progress-bar aos"
                  data-aos="slide-right"
                  data-aos-delay={200}
                  data-aos-duration={1000}
                  data-aos-easing="ease-in-out"
                  role="progressbar"
                  aria-valuenow={85}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: '85%' }}>
                  <span className="progress-percent">85%</span>
                </div>
              </div>
            </div>
            <div className="progress-item">
              <p>Web Development</p>
              <div className="progress">
                <div
                  className="progress-bar aos aos-init"
                  data-aos="slide-right"
                  data-aos-delay={300}
                  data-aos-duration={1000}
                  data-aos-easing="ease-in-out"
                  role="progressbar"
                  aria-valuenow={70}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: '70%' }}>
                  <span className="progress-percent">70%</span>
                </div>
              </div>
            </div>
            <div className="progress-item">
              <p>Graphic Design</p>
              <div className="progress">
                <div
                  className="progress-bar aos aos-init"
                  data-aos="slide-right"
                  data-aos-delay={400}
                  data-aos-duration={1000}
                  data-aos-easing="ease-in-out"
                  role="progressbar"
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: '90%' }}>
                  <span className="progress-percent">90%</span>
                </div>
              </div>
            </div>
            <div className="progress-item">
              <p>WordPress</p>
              <div className="progress">
                <div
                  className="progress-bar aos aos-init"
                  data-aos="slide-right"
                  data-aos-delay={500}
                  data-aos-duration={1000}
                  data-aos-easing="ease-in-out"
                  role="progressbar"
                  aria-valuenow={65}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: '65%' }}>
                  <span className="progress-percent">65%</span>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <h5 className="mb-2">Progress gradient</h5>
            <div className="progress-grad">
              <div className="progress-item">
                <p>Web Design</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={200}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={85}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '85%' }}>
                    <span className="progress-percent">85%</span>
                  </div>
                </div>
              </div>
              <div className="progress-item">
                <p>Web Development</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={200}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={70}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '70%' }}>
                    <span className="progress-percent">70%</span>
                  </div>
                </div>
              </div>
              <div className="progress-item">
                <p>Graphic Design</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={400}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '90%' }}>
                    <span className="progress-percent">90%</span>
                  </div>
                </div>
              </div>
              <div className="progress-item">
                <p>WordPress</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={500}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={65}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '65%' }}>
                    <span className="progress-percent">65%</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <h5 className="mb-2 mt-5">Progress dark gradient</h5>
            <div className="progress-dark-grad">
              <div className="progress-item">
                <p>Web Design</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={200}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={85}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '85%' }}>
                    <span className="progress-percent">85%</span>
                  </div>
                </div>
              </div>
              <div className="progress-item">
                <p>Web Development</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={200}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={70}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '70%' }}>
                    <span className="progress-percent">70%</span>
                  </div>
                </div>
              </div>
              <div className="progress-item">
                <p>Graphic Design</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={400}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '90%' }}>
                    <span className="progress-percent">90%</span>
                  </div>
                </div>
              </div>
              <div className="progress-item">
                <p>WordPress</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={500}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={65}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '65%' }}>
                    <span className="progress-percent">65%</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <h5 className="mb-2 mt-5">Progress text inside gradient</h5>
            <div className="progress-text-in progress-grad">
              <div className="progress-item">
                <p>Web Design</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={200}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={85}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '85%' }}>
                    <span className="progress-percent">85%</span>
                  </div>
                </div>
              </div>
              <div className="progress-item">
                <p>Web Development</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={200}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={70}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '70%' }}>
                    <span className="progress-percent">70%</span>
                  </div>
                </div>
              </div>
              <div className="progress-item">
                <p>Graphic Design</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={400}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '90%' }}>
                    <span className="progress-percent">90%</span>
                  </div>
                </div>
              </div>
              <div className="progress-item">
                <p>WordPress</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={500}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={65}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '65%' }}>
                    <span className="progress-percent">65%</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <h5 className="mb-2 mt-5">Progress text inside Dark gradient</h5>
            <div className="progress-text-in progress-dark-grad">
              <div className="progress-item">
                <p>Web Design</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={200}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={85}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '85%' }}>
                    <span className="progress-percent">85%</span>
                  </div>
                </div>
              </div>
              <div className="progress-item">
                <p>Web Development</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={200}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={70}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '70%' }}>
                    <span className="progress-percent">70%</span>
                  </div>
                </div>
              </div>
              <div className="progress-item">
                <p>Graphic Design</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={400}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '90%' }}>
                    <span className="progress-percent">90%</span>
                  </div>
                </div>
              </div>
              <div className="progress-item">
                <p>WordPress</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={500}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={65}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '65%' }}>
                    <span className="progress-percent">65%</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <h5 className="mb-2 mt-5">Progress text inside default</h5>
            <div className="progress-text-in">
              <div className="progress-item">
                <p>Web Design</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={200}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={85}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '85%' }}>
                    <span className="progress-percent">85%</span>
                  </div>
                </div>
              </div>
              <div className="progress-item">
                <p>Web Development</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={200}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={70}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '70%' }}>
                    <span className="progress-percent">70%</span>
                  </div>
                </div>
              </div>
              <div className="progress-item">
                <p>Graphic Design</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={400}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '90%' }}>
                    <span className="progress-percent">90%</span>
                  </div>
                </div>
              </div>
              <div className="progress-item">
                <p>WordPress</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={500}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={65}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '65%' }}>
                    <span className="progress-percent">65%</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <h5 className="mb-2 mt-5">Progress percent background</h5>
            <div className="percent-bg">
              <div className="progress-item">
                <p>Web Design</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={200}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={85}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '85%' }}>
                    <span className="progress-percent">85%</span>
                  </div>
                </div>
              </div>
              <div className="progress-item">
                <p>Web Development</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={200}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={70}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '70%' }}>
                    <span className="progress-percent">70%</span>
                  </div>
                </div>
              </div>
              <div className="progress-item">
                <p>Graphic Design</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={400}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '90%' }}>
                    <span className="progress-percent">90%</span>
                  </div>
                </div>
              </div>
              <div className="progress-item">
                <p>WordPress</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={500}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={65}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '65%' }}>
                    <span className="progress-percent">65%</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <h5 className="mb-2 mt-5">Progress percent light background</h5>
            <div className="percent-bg percent-light">
              <div className="progress-item">
                <p>Web Design</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={200}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={85}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '85%' }}>
                    <span className="progress-percent">85%</span>
                  </div>
                </div>
              </div>
              <div className="progress-item">
                <p>Web Development</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={200}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={70}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '70%' }}>
                    <span className="progress-percent">70%</span>
                  </div>
                </div>
              </div>
              <div className="progress-item">
                <p>Graphic Design</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={400}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '90%' }}>
                    <span className="progress-percent">90%</span>
                  </div>
                </div>
              </div>
              <div className="progress-item">
                <p>WordPress</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={500}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={65}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '65%' }}>
                    <span className="progress-percent">65%</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <h5 className="mb-2 mt-5">Progress dark</h5>
            <div className="progress-dark">
              <div className="progress-item">
                <p>Web Design</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={200}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={85}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '85%' }}>
                    <span className="progress-percent">85%</span>
                  </div>
                </div>
              </div>
              <div className="progress-item">
                <p>Web Development</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={200}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={70}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '70%' }}>
                    <span className="progress-percent">70%</span>
                  </div>
                </div>
              </div>
              <div className="progress-item">
                <p>Graphic Design</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={400}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '90%' }}>
                    <span className="progress-percent">90%</span>
                  </div>
                </div>
              </div>
              <div className="progress-item">
                <p>WordPress</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={500}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={65}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '65%' }}>
                    <span className="progress-percent">65%</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <h5 className="mb-2 mt-5">Progress Extra small</h5>
            <div className="progress-xs">
              <div className="progress-item">
                <p>Web Design</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={200}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={85}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '85%' }}>
                    <span className="progress-percent">85%</span>
                  </div>
                </div>
              </div>
              <div className="progress-item">
                <p>Web Development</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={200}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={70}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '70%' }}>
                    <span className="progress-percent">70%</span>
                  </div>
                </div>
              </div>
              <div className="progress-item">
                <p>Graphic Design</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={400}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '90%' }}>
                    <span className="progress-percent">90%</span>
                  </div>
                </div>
              </div>
              <div className="progress-item">
                <p>WordPress</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={500}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={65}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '65%' }}>
                    <span className="progress-percent">65%</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <h5 className="mb-2 mt-5">Progress small</h5>
            <div className="progress-sm">
              <div className="progress-item">
                <p>Web Design</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={200}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={85}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '85%' }}>
                    <span className="progress-percent">85%</span>
                  </div>
                </div>
              </div>
              <div className="progress-item">
                <p>Web Development</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={200}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={70}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '70%' }}>
                    <span className="progress-percent">70%</span>
                  </div>
                </div>
              </div>
              <div className="progress-item">
                <p>Graphic Design</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={400}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '90%' }}>
                    <span className="progress-percent">90%</span>
                  </div>
                </div>
              </div>
              <div className="progress-item">
                <p>WordPress</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={500}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={65}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '65%' }}>
                    <span className="progress-percent">65%</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <h5 className="mb-2 mt-5">Progress medium</h5>
            <div className="progress-md">
              <div className="progress-item">
                <p>Web Design</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={200}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={85}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '85%' }}>
                    <span className="progress-percent">85%</span>
                  </div>
                </div>
              </div>
              <div className="progress-item">
                <p>Web Development</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={200}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={70}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '70%' }}>
                    <span className="progress-percent">70%</span>
                  </div>
                </div>
              </div>
              <div className="progress-item">
                <p>Graphic Design</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={400}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '90%' }}>
                    <span className="progress-percent">90%</span>
                  </div>
                </div>
              </div>
              <div className="progress-item">
                <p>WordPress</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={500}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={65}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '65%' }}>
                    <span className="progress-percent">65%</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <h5 className="mb-2 mt-5">Progress large</h5>
            <div className="progress-lg">
              <div className="progress-item">
                <p>Web Design</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={200}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={85}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '85%' }}>
                    <span className="progress-percent">85%</span>
                  </div>
                </div>
              </div>
              <div className="progress-item">
                <p>Web Development</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={200}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={70}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '70%' }}>
                    <span className="progress-percent">70%</span>
                  </div>
                </div>
              </div>
              <div className="progress-item">
                <p>Graphic Design</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={400}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '90%' }}>
                    <span className="progress-percent">90%</span>
                  </div>
                </div>
              </div>
              <div className="progress-item">
                <p>WordPress</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={500}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={65}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '65%' }}>
                    <span className="progress-percent">65%</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <h5 className="mb-2 mt-5">Progress extra large</h5>
            <div className="progress-xl">
              <div className="progress-item">
                <p>Web Design</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={200}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={85}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '85%' }}>
                    <span className="progress-percent">85%</span>
                  </div>
                </div>
              </div>
              <div className="progress-item">
                <p>Web Development</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={200}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={70}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '70%' }}>
                    <span className="progress-percent">70%</span>
                  </div>
                </div>
              </div>
              <div className="progress-item">
                <p>Graphic Design</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={400}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '90%' }}>
                    <span className="progress-percent">90%</span>
                  </div>
                </div>
              </div>
              <div className="progress-item">
                <p>WordPress</p>
                <div className="progress">
                  <div
                    className="progress-bar aos aos-init"
                    data-aos="slide-right"
                    data-aos-delay={500}
                    data-aos-duration={1000}
                    data-aos-easing="ease-in-out"
                    role="progressbar"
                    aria-valuenow={65}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '65%' }}>
                    <span className="progress-percent">65%</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Progress
