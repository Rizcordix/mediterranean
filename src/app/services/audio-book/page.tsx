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
  title: "Audiobook Production | Mediterranean Publishing – Professional Narration & Editing",
  description: "Premium audiobook production services including narration, editing, mixing, and mastering for all genres. Let Mediterranean Publishing bring your story to life.",
  keywords: [
    "audiobook production",
    "audiobook narration",
    "hire audiobook narrator",
    "Mediterranean Publishing audiobooks",
    "audiobook editing",
    "audiobook recording"
  ],
  openGraph: {
    title: "Audiobook Production | Mediterranean Publishing",
    description: "High-quality audiobook narration and production services for authors.",
    url: "https://www.mediterraneanpublishing.com/audio-book",
    siteName: "Mediterranean Publishing",
    images: [
      {
        url: "https://www.mediterraneanpublishing.com/og-audiobooks.jpg",
        width: 1200,
        height: 630,
        alt: "Audiobook Services – Mediterranean Publishing"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Audiobook Production | Mediterranean Publishing",
    description: "Professional audiobook narration and editing.",
    images: ["https://www.mediterraneanpublishing.com/og-audiobooks.jpg"]
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
