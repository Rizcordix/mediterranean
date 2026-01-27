import React from 'react'
import TopNavbar from '../global-premium/components/TopNavbar'
import Footer from '../../home/components/Footer'
import ThankYou from './components/ThankYou'

export const metadata = {
  title: "Thank You | Mediterranean Publishing",
  description: "Thank you for contacting Mediterranean Publishing! We've received your inquiry and will get back to you shortly with your complimentary report and publishing options.",
  keywords: [
    "book publishing",
    "thank you",
    "Mediterranean Publishing",
    "publishing services",
    "author support",
  ],
  authors: [{ name: "Mediterranean Publishing" }],
  creator: "Mediterranean Publishing",
  publisher: "Mediterranean Publishing",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mediterraneanpublishing.com/landing-page/thanks"),
  alternates: {
    canonical: "/landing-page/thanks",
  },
  openGraph: {
    title: "Thank You | Mediterranean Publishing",
    description: "Thank you for contacting Mediterranean Publishing! We've received your inquiry.",
    url: "https://mediterraneanpublishing.com/landing-page/thanks",
    siteName: "Mediterranean Publishing",
    images: [
      {
        url: "/favicon.ico",
        width: 50,
        height: 50,
        alt: "Mediterranean Publishing - Thank You",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thank You | Mediterranean Publishing",
    description: "Thank you for contacting Mediterranean Publishing! We've received your inquiry.",
    creator: "@MediterraneanPub",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const ThanksPage = () => {
  return (
    <>
      <TopNavbar />
      <ThankYou />
      <Footer />
    </>
  )
}

export default ThanksPage
