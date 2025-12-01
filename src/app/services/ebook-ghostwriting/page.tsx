import React from 'react'
import TopNavbar from '../../home/components/TopNavbar'
import Hero from './components/Hero'
import Clients from '../bookwriting/components/Clients'
import ActionBox from '../../about/components/ActionBox'
import Testimonials from '../../home/components/Testimonial'
import Footer from '../../home/components/Footer'
import PricingComponent from '../bookwriting/components/Pricing'
import AboutUs from './components/AboutSection'
import Categories from '@/app/home/components/Categories'
import CTA from '@/app/home/components/Features'
import ProcedureSection from '@/app/home/components/procedure'
import Component0 from '../bookwriting/components/Special'

export const metadata = {
  title: "eBook Ghostwriting | Mediterranean Publishing – Your Ideas, Our Words",
  description: "Transform your ideas into professionally written eBooks with our expert ghostwriting services. Mediterranean Publishing delivers polished, publish-ready content.",
  keywords: [
    "ebook ghostwriting",
    "hire ebook writer",
    "ghostwriting services",
    "ebook writing services",
    "Mediterranean Publishing ebook",
    "professional ghostwriter"
  ],
  openGraph: {
    title: "eBook Ghostwriting | Mediterranean Publishing",
    description: "Get a professionally written, ready-to-publish eBook.",
    url: "https://www.mediterraneanpublishing.com/ebook-ghostwriting",
    siteName: "Mediterranean Publishing",
    images: [
      {
        url: "https://www.mediterraneanpublishing.com/og-ebook-ghostwriting.jpg",
        width: 1200,
        height: 630,
        alt: "eBook Ghostwriting – Mediterranean Publishing"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "eBook Ghostwriting | Mediterranean Publishing",
    description: "Professional eBook ghostwriting for all genres.",
    images: ["https://www.mediterraneanpublishing.com/og-ebook-ghostwriting.jpg"]
  }
};

const AgencyStartUpPage = () => {
  return (
    <>
      <TopNavbar />
      <Hero />
      <Clients />
      <div className="divider mt-5" />
      <AboutUs />
      <Component0 id={4} />
      <CTA />
      <PricingComponent defaultTab={1} />
      <ProcedureSection />
      <Categories />
      <Testimonials />
      <ActionBox />
      <Footer />
    </>
  )
}

export default AgencyStartUpPage
