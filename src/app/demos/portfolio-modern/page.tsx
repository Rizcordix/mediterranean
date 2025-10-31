import Clients from './components/Clients'
import CompanyPortfolio from './components/CompanyPortfolio'
import Hero from './components/Hero'
import Services from './components/Services'
import TopAlert from './components/TopAlert'
import TopNavbar from './components/TopNavbar'

const PortfolioModernPage = () => {
  return (
    <>
      <TopAlert />
      <TopNavbar />
      <Hero />
      <CompanyPortfolio />
      <Clients />
      <Services />
    </>
  )
}

export default PortfolioModernPage
