import React from 'react'

type CareersType = {
  title: string
  description: React.ReactNode
}

export const careersData: CareersType[] = [
  {
    title: 'How many book samples can I view?',
    description: (
      <>
        Every visitor can explore a variety of published work on our Book Samples page. To see the full collection, visit{' '}
        <a href="/book-samples" className="primary-hover">our samples showcase</a>. If you need a personalized sample or preview, feel free to reach out through our{' '}
        <a href="/contact" className="primary-hover">contact page</a>.
      </>
    ),
  },
  {
    title: 'What payment methods do you accept?',
    description: (
      <>
        We currently accept major Credit/Debit Cards and PayPal. All payments are securely processed. You may review our{' '}
        <a href="/terms" className="primary-hover">Terms & Conditions</a> and{' '}
        <a href="/privacy" className="primary-hover">Privacy Policy</a> for more information about secure transactions.
      </>
    ),
  },
  {
    title: 'Can I place an order without a PayPal account?',
    description: (
      <>
        Absolutely. You do not need a PayPal account to complete payment through PayPal’s gateway. You can simply pay using any supported Credit or Debit card.
      </>
    ),
  },
  {
    title: 'How does your revision or trial policy work?',
    description: (
      <>
        Most of our services include complimentary revisions depending on the chosen package. For full transparency, please check our detailed policies on the{' '}
        <a href="/terms" className="primary-hover">Terms & Conditions</a> page.
      </>
    ),
  },
  {
    title: 'What should I do if I miss an update or delivery?',
    description: (
      <>
        If you missed an email update, draft submission, or delivery file, simply contact our support team through the{' '}
        <a href="/contact" className="primary-hover">contact page</a>. We respond quickly and ensure your files are re-sent promptly.
      </>
    ),
  },
  {
    title: 'How do refunds or cancellations work?',
    description: (
      <>
        Refunds are handled as per our official policy. You may review all details under our{' '}
        <a href="/terms" className="primary-hover">Refund & Cancellation Policy</a>. Our team is always here to help if you need assistance.
      </>
    ),
  },
  {
    title: 'How can I contact customer support?',
    description: (
      <>
        You can reach us anytime via our contact form at{' '}
        <a href="/contact" className="primary-hover">/contact</a>. Our support team is available 24/7 to assist with publishing, writing, design, or marketing inquiries.
      </>
    ),
  },
  {
    title: 'Do you offer discounts on multiple services?',
    description: (
      <>
        Yes, we offer bundled discounts when you purchase more than one service such as{' '}
        <a href="/services/book-writing" className="primary-hover">Book Writing</a>,{' '}
        <a href="/services/book-marketing" className="primary-hover">Book Marketing</a>,{' '}
        <a href="/services/cover-design" className="primary-hover">Cover Design</a>, or others. Contact us through{' '}
        <a href="/contact" className="primary-hover">/contact</a> for a custom quote.
      </>
    ),
  },
]
