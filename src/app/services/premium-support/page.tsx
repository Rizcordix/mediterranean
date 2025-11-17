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
  title: "Premium Support | Mediterranean Publishing – Dedicated Assistance for Authors",
  description: "Experience premium support with priority assistance, project management, and personalized guidance throughout your publishing journey.",
  keywords: [
    "premium support",
    "author support services",
    "publishing assistance",
    "priority author support",
    "Mediterranean Publishing support",
    "dedicated publishing help"
  ],
  openGraph: {
    title: "Premium Support | Mediterranean Publishing",
    description: "Dedicated support and assistance for authors and clients.",
    url: "https://www.mediterraneanpublishing.com/premium-support",
    siteName: "Mediterranean Publishing",
    images: [
      {
        url: "https://www.mediterraneanpublishing.com/og-premium-support.jpg",
        width: 1200,
        height: 630,
        alt: "Premium Support – Mediterranean Publishing"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Support | Mediterranean Publishing",
    description: "Priority publishing assistance and author support.",
    images: ["https://www.mediterraneanpublishing.com/og-premium-support.jpg"]
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
