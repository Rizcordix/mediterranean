import Footer from '@/components/Blog/Footer'
import TopNavbar from '@/components/Blog/TopNavbar'
import ActionBox from './components/ActionBox'
import ActionBox2 from './components/ActionBox2'
import ActionBox3 from './components/ActionBox3'
import Blog from './components/Blog'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Results from './components/Results'
import ServicePackages from './components/ServicePackages'
import Services from './components/Services'
import VideoSlider from './components/VideoSlider'

const HomePage = () => {
  return (
    <>
      <TopNavbar />
      <Hero />
      <Contact />
      <ActionBox />
      <Services />
      <ActionBox2 />
      <Results />
      <ServicePackages />
      <Clients />
      <VideoSlider />
      <Blog />
      <ActionBox3 />
      <Footer />
    </>
  )
}

export default HomePage
