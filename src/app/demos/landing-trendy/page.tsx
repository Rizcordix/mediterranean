import ActionBox from './components/ActionBox'
import ActionBox2 from './components/ActionBox2'
import Client from './components/Client'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Partner from './components/Partner'
import Pricing from './components/Pricing'
import Services from './components/Services'
import Team from './components/Team'
import TopNavbar from './components/TopNavbar'

const LandingTrendyPage = () => {
  return (
    <>
      <TopNavbar />
      <Hero />
      <Client />
      <Services />
      <ActionBox />
      <Team />
      <ActionBox2 />
      <Pricing />
      <Partner />
      <Footer />
    </>
  )
}

export default LandingTrendyPage
