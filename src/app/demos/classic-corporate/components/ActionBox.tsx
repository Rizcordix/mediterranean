import React from 'react'
import { Container } from 'react-bootstrap'

const ActionBox = () => {
  return (
    <section className="mt-n6 p-0 position-relative">
      <Container>
        <div className="d-block d-md-flex bg-primary p-4 p-sm-5 all-text-white rounded">
          <div className="align-self-center text-center text-md-start">
            <h3 className="mb-0">Crafting visually stunning memorable experiences for web.</h3>
          </div>
          <div className="mt-3 mt-md-0 text-center text-md-end ms-md-auto align-self-center">
            <button className="btn btn-white mb-0">Learn more!</button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ActionBox
