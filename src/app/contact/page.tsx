import React from 'react'
import Hero from './components/Hero'
import Contact from './components/Contact'
import MoreInfo from './components/MoreInfo'
import TopNavbar from '../home/components/TopNavbar'
import Footer from '../home/components/Footer'

export const metadata = {
  title: "Contact Us | Mediterranean Publishing – Get Professional Book Writing & Publishing Support",
  description: "Contact Mediterranean Publishing for expert eBook writing, editing, cover design, book publishing, and marketing services. Our team is ready to help turn your book ideas into reality.",
  keywords: [
    "contact Mediterranean Publishing",
    "book writing help",
    "hire ebook writer",
    "book publishing support",
    "editing services",
    "proofreading services",
    "cover design assistance"
  ],
  openGraph: {
    title: "Contact Mediterranean Publishing – Professional Book Writing & Publishing Support",
    description: "Get in touch with Mediterranean Publishing for eBook writing, editing, cover design, and book publishing services.",
    url: "https://www.mediterraneanpublishing.com/contact",
    siteName: "Mediterranean Publishing",
    images: [
      {
        url: "https://www.mediterraneanpublishing.com/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Mediterranean Publishing"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Mediterranean Publishing",
    description: "Reach out to Mediterranean Publishing for expert book writing, editing, publishing, and marketing services.",
    images: ["https://www.mediterraneanpublishing.com/og-contact.jpg"]
  }
};

const ContactPage = () => {
  return (
    <>
      <TopNavbar />
      <Hero />
      <Contact />
      <MoreInfo />
      <Footer />
    </>
  )
}

export default ContactPage
