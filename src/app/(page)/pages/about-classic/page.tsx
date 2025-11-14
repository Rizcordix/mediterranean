import { Container } from 'react-bootstrap'
import AboutUs from './components/AboutUs'
import Clients from './components/Clients'
import Counter from './components/Counter'
import Hero from './components/Hero'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import EditingSamples from './components/editing'
import ProcedureSection from './components/procedure'
import FeaturedBooksSection from './components/portfolio'

const AboutClassicPage = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Testimonials />
      <Counter />
      <FeaturedBooksSection />
      <ProcedureSection />
      <EditingSamples />
      <Team />
      <Container className="divider mb-4 mt-5"> </Container>
      <Clients />
    </>
  )
}

export default AboutClassicPage
