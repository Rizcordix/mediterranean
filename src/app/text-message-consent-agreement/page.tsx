import React from 'react'
import TopNavbar from '../home/components/TopNavbar'
import Footer from '../home/components/Footer'
import TextMessageConsentAgreement from './components/section';

export const metadata = {
  title: "Text Message Consent Agreement | Mediterranean Publishing",
  description: "Read the Text Message Consent Agreement for Mediterranean Publishing to understand how we communicate important updates and offers via text messages.",
  keywords: [
    "Text Message Consent Agreement",
    "Mediterranean Publishing",
    "Publishing Services",
    "Author Communication",
    "Text Message Policies",
    "Publishing Updates",
    "Author Offers",
    "Communication Consent"
  ],
  openGraph: {
    title: "Text Message Consent Agreement | Mediterranean Publishing",
    description: "Read the Text Message Consent Agreement for Mediterranean Publishing to understand how we communicate important updates and offers via text messages.",
    url: "https://www.mediterraneanpublishing.com/text-message-consent-agreement",
    siteName: "Mediterranean Publishing",
    images: [
      {
        url: "https://www.mediterraneanpublishing.com/og-terms.jpg",
        width: 1200,
        height: 630,
        alt: "Text Message Consent Agreement – Mediterranean Publishing"
      }
    ],
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "Text Message Consent Agreement | Mediterranean Publishing",
    description: "Read the Text Message Consent Agreement for Mediterranean Publishing to understand how we communicate important updates and offers via text messages.",
    images: ["https://www.mediterraneanpublishing.com/og-terms.jpg"]
  }
};

const TermPage = () => {
  return (
    <>
      <TopNavbar />
      <TextMessageConsentAgreement />
      <Footer />
    </>
  )
}

export default TermPage;
