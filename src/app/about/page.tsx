import React from 'react'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
// import WhyUs from './components/WhyUs'
// import Solutions from './components/Solutions'
import ActionBox from './components/ActionBox'
import TopNavbar from '../home/components/TopNavbar'
import Footer from '../home/components/Footer'
import ProcedureSection from '../home/components/procedure'
import FeaturedBooksSection from '../home/components/portfolio'

export const metadata = {
  title: "About Us | Mediterranean Publishing – Expert eBook Writing & Publishing Services",
  description: "Learn about Mediterranean Publishing, your trusted partner for eBook writing, editing, cover design, book publishing, and marketing. Discover our mission, team, and commitment to helping authors succeed.",
  keywords: [
    "Mediterranean Publishing",
    "about us",
    "eBook writing services",
    "book publishing company",
    "editing and proofreading",
    "cover design",
    "book marketing"
  ],
  openGraph: {
    title: "About Mediterranean Publishing – Expert eBook Writing & Publishing Services",
    description: "Mediterranean Publishing helps authors transform ideas into published books with professional writing, editing, cover design, and marketing services.",
    url: "https://www.mediterraneanpublishing.com/about",
    siteName: "Mediterranean Publishing",
    images: [
      {
        url: "https://www.mediterraneanpublishing.com/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About Mediterranean Publishing"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Mediterranean Publishing – Expert eBook Writing & Publishing Services",
    description: "Discover Mediterranean Publishing's mission, team, and services including eBook writing, editing, cover design, publishing, and marketing.",
    images: ["https://www.mediterraneanpublishing.com/og-about.jpg"]
  }
};

const AboutAdvancePage = () => {
  return (
    <>
      <TopNavbar />
      <Hero />
      <AboutUs />
      {/* <WhyUs /> */}
      {/* <Solutions /> */}
      <FeaturedBooksSection />
      <ProcedureSection />
       <ActionBox />
      <Footer />
    </>
  )
}

export default AboutAdvancePage
