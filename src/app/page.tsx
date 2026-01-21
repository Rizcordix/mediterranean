import React from 'react'
import TopNavbar from './home/components/TopNavbar'
import Hero from './home/components/Hero'
// import About from './home/components/About'
import Service from './home/components/Service'
// import Testimonial from './home/components/Testimonial'
import CTA from './home/components/Features'
import Info from './home/components/Info'
// import Newsletter from './components/Newsletter'
import Footer from './home/components/Footer'
import AboutUs from './home/components/AboutUs'
import PricingComponent from './home/components/Pricing'
// import Services from '../demos/corporate-startUp/components/Services'
import Testimonials from './home/components/Testimonial'
import ActionBox from './about/components/ActionBox'
import Clients from './services/bookwriting/components/Clients'
import Categories from './home/components/Categories'
import FeaturedBooksSection from './home/components/portfolio'
import ProcedureSection from './home/components/procedure'
import EditingSamples from './home/components/editing'

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