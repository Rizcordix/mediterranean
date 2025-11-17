import React from 'react'
import TopNavbar from './components/TopNavbar'
import Hero from './components/Hero'
// import About from './components/About'
import Service from './components/Service'
// import Testimonial from './components/Testimonial'
import CTA from './components/Features'
import Info from './components/Info'
// import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import PricingComponent from './components/Pricing'
// import Services from '../demos/corporate-startUp/components/Services'
import Testimonials from './components/Testimonial'
import ActionBox from '../about/components/ActionBox'
import Clients from '../services/bookwriting/components/Clients'
import Categories from './components/Categories'
import FeaturedBooksSection from './components/portfolio'
import ProcedureSection from './components/procedure'
import EditingSamples from './components/editing'

export const metadata = {
  title: "Mediterranean Publishing | Professional eBook Writing, Publishing & Marketing Services",
  description: "Mediterranean Publishing offers expert eBook writing, editing, cover design, book publishing, and marketing services. Transform your ideas into published books with professional support.",
  keywords: [
    "eBook writing",
    "book publishing",
    "book marketing",
    "cover design",
    "proofreading",
    "ghostwriting",
    "audio books",
    "book video trailer",
    "Mediterranean Publishing"
  ],
  openGraph: {
    title: "Mediterranean Publishing | Professional eBook Writing & Publishing",
    description: "Expert eBook writing, editing, cover design, book publishing, and marketing services to bring your book ideas to life.",
    url: "https://www.mediterraneanpublishing.com/",
    siteName: "Mediterranean Publishing",
    images: [
      {
        url: "https://www.mediterraneanpublishing.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mediterranean Publishing Services"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Mediterranean Publishing | Professional eBook Writing & Publishing",
    description: "Expert eBook writing, editing, cover design, book publishing, and marketing services.",
    images: ["https://www.mediterraneanpublishing.com/og-image.jpg"]
  }
};


const CreativeAgencyPage = () => {

  return (
    <>

      <TopNavbar />
      <Hero />
      <AboutUs />
      <div className="divider mb-3" />
      <Clients />
      <div className="divider mt-2" />
      <Service />
      {/* <EditingSamples /> */}
      <FeaturedBooksSection />
      <EditingSamples />
      <CTA />
      <PricingComponent />
      <ProcedureSection />
      <Info />
      <Categories />
      <Testimonials />
      <ActionBox />
      <Footer />
    </>
  )
}

export default CreativeAgencyPage
