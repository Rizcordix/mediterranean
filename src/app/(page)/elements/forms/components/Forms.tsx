import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Forms = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col md={6}>
            <div className="form-group">
              <label>Email</label>
              <input className="form-control" type="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <form>
              <label>Input Size</label>
              <input className="form-control form-control-lg" type="text" placeholder=".form-control-lg" />
              <input className="form-control" type="text" placeholder="Default input" />
              <input className="form-control form-control-sm" type="text" placeholder=".form-control-sm" />
            </form>
            <div className="form-group">
              <label>Textarea</label>
              <textarea className="form-control" rows={5} placeholder="Example textarea" />
            </div>
            <div className="form-group">
              <label>Select</label>
              <select className="form-select" aria-label="Default select example">
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
          </Col>
          <Col md={6}>
            <div className="form-group">
              <label>Multiple select</label>
              <select className="form-select" multiple aria-label="multiple select example">
                <option>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
            </div>
            <div className="input-group">
              <input type="file" className="form-control mb-0" id="inputGroupFile02" />
              <label className="input-group-text" htmlFor="inputGroupFile02">
                Upload
              </label>
            </div>
            <label className="mt-3">Checkbox</label>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="defaultCheck1" />
              <label className="form-check-label" htmlFor="defaultCheck1">
                Default checkbox
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="defaultCheck2" disabled />
              <label className="form-check-label" htmlFor="defaultCheck2">
                Disabled checkbox
              </label>
            </div>
            <label className="mt-3">Switches</label>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                Default switch checkbox input
              </label>
            </div>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" defaultChecked />
              <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
                Checked switch checkbox input
              </label>
            </div>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" disabled />
              <label className="form-check-label" htmlFor="flexSwitchCheckDisabled">
                Disabled switch checkbox input
              </label>
            </div>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled" defaultChecked disabled />
              <label className="form-check-label" htmlFor="flexSwitchCheckCheckedDisabled">
                Disabled checked switch checkbox input
              </label>
            </div>
            <label className="mt-3">Radio</label>
            <br />
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Default radio
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Default checked radio
              </label>
            </div>
            <label className="mt-3">Toggle buttons</label>
            <br />
            <input type="checkbox" className="btn-check" id="btn-check" />
            <label className="btn btn-primary" htmlFor="btn-check">
              Single toggle
            </label>
            <input type="checkbox" className="btn-check" id="btn-check-outlined" />
            &nbsp;
            <label className="btn btn-outline-primary" htmlFor="btn-check-outlined">
              Outline toggle
            </label>
            <br />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Forms
