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

export const metadata = {
  title: "Publishing Packages | Mediterranean Publishing – Complete Author Solutions",
  description: "Choose from fully customized publishing packages tailored for authors. Mediterranean Publishing provides end-to-end solutions including writing, editing, design, printing, and marketing.",
  keywords: [
    "publishing packages",
    "book publishing packages",
    "full-service publishing",
    "self-publishing packages",
    "Mediterranean Publishing plans",
    "author publishing solutions"
  ],
  openGraph: {
    title: "Publishing Packages | Mediterranean Publishing",
    description: "All-in-one publishing packages designed to meet your needs.",
    url: "https://www.mediterraneanpublishing.com/publishing-packages",
    siteName: "Mediterranean Publishing",
    images: [
      {
        url: "https://www.mediterraneanpublishing.com/og-publishing-packages.jpg",
        width: 1200,
        height: 630,
        alt: "Publishing Packages – Mediterranean Publishing"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Publishing Packages | Mediterranean Publishing",
    description: "Complete publishing solutions for authors at every stage.",
    images: ["https://www.mediterraneanpublishing.com/og-publishing-packages.jpg"]
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
      <CTA />
      <PricingComponent defaultTab={3} />
      <ProcedureSection />
      <Categories />
      <Testimonials />
      <ActionBox />
      <Footer />
    </>
  )
}

export default AgencyStartUpPage
