import React from 'react'
import Hero from './components/hero'
import TopNavbar from '../home/components/TopNavbar'
import Footer from '../home/components/Footer'
import PrivacyPolicy from './components/policy'

export const metadata = {
  title: "Privacy Policy | Mediterranean Publishing",
  description: "Read the Privacy Policy of Mediterranean Publishing to learn how we collect, protect, and use your personal information when providing eBook writing, editing, publishing, design, and marketing services.",
  keywords: [
    "privacy policy",
    "Mediterranean Publishing privacy",
    "data protection",
    "information privacy",
    "book publishing privacy policy",
    "ebook writing service privacy"
  ],
  openGraph: {
    title: "Privacy Policy | Mediterranean Publishing",
    description: "Understand how Mediterranean Publishing handles and protects your personal information across all our writing, editing, publishing, and marketing services.",
    url: "https://www.mediterraneanpublishing.com/privacy",
    siteName: "Mediterranean Publishing",
    images: [
      {
        url: "https://www.mediterraneanpublishing.com/og-privacy.jpg",
        width: 1200,
        height: 630,
        alt: "Privacy Policy – Mediterranean Publishing"
      }
    ],
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Mediterranean Publishing",
    description: "Learn how Mediterranean Publishing collects, stores, and protects your data.",
    images: ["https://www.mediterraneanpublishing.com/og-privacy.jpg"]
  }
};

const PrivacyPage = () => {
  return (
    <>
      <TopNavbar />
      <Hero />
      <PrivacyPolicy />
      <Footer />
    </>
  )
}

export default PrivacyPage
