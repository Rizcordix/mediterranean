import React from 'react'
import Hero from './components/hero'
import TopNavbar from '../home/components/TopNavbar'
import Footer from '../home/components/Footer'
import TermsOfService from './components/terminfo'

export const metadata = {
  title: "Terms of Service | Mediterranean Publishing",
  description: "Review the Terms of Service for Mediterranean Publishing, outlining the guidelines, responsibilities, and policies for using our eBook writing, editing, design, publishing, and marketing services.",
  keywords: [
    "Mediterranean Publishing terms",
    "terms of service",
    "book publishing terms",
    "ebook writing service policies",
    "editing service terms",
    "user agreement"
  ],
  openGraph: {
    title: "Terms of Service | Mediterranean Publishing",
    description: "Read the Terms of Service for Mediterranean Publishing to understand the policies governing our writing, editing, publishing, and marketing services.",
    url: "https://www.mediterraneanpublishing.com/terms",
    siteName: "Mediterranean Publishing",
    images: [
      {
        url: "https://www.mediterraneanpublishing.com/og-terms.jpg",
        width: 1200,
        height: 630,
        alt: "Terms of Service – Mediterranean Publishing"
      }
    ],
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Mediterranean Publishing",
    description: "Learn about the guidelines and policies that govern Mediterranean Publishing’s services.",
    images: ["https://www.mediterraneanpublishing.com/og-terms.jpg"]
  }
};

const TermPage = () => {
  return (
    <>
      <TopNavbar />
      <Hero />
      <TermsOfService />
      <Footer />
    </>
  )
}

export default TermPage;
