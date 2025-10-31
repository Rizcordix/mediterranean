import React from 'react'
import { Container } from 'react-bootstrap'

const ActionBox = () => {
  return (
    <section className="py-4">
      <Container>
        <div className="p-4 p-sm-5">
          <div className="text-center px-0 px-sm-5">
            <h2>A web communications practice.</h2>
            <p className="m-0 px-0 px-md-5">
              A thing that looks beautiful and attractive always grabs eyeballs. The real challenge before companies in today&apos;s world is to make
              their products and services appealing to everyone.
            </p>
          </div>
          <div className="mt-3 text-center">
            <button className="btn btn-grad mb-0 me-3">Sign up for free!</button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ActionBox
