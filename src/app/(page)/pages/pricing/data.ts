import { StaticImageData } from 'next/image'

import avatar1 from '@/assets/images/thumbnails/avatar-01.jpg'
import avatar2 from '@/assets/images/thumbnails/avatar-02.jpg'
import avatar3 from '@/assets/images/thumbnails/avatar-03.jpg'
import avatar4 from '@/assets/images/thumbnails/avatar-04.jpg'

type PricingType = {
  title: string
  price: number
  description: string
  isPopular?: boolean
}

type TestimonialsType = {
  image: StaticImageData
  name: string
  category: string
  description: string
}

type FaqType = {
  title: string
  description: string
}

export const pricingData: PricingType[] = [
  {
    title: 'Personal Plan',
    price: 20,
    description: 'Content Management System, Installation & Setup, Search engine friendly and Social media integration',
  },
  {
    title: 'Business Plan',
    price: 50,
    description: 'Search engine friendly, Contact form, Social media integration and Mobile and tablet friendly design',
    isPopular: true,
  },
  {
    title: 'Ultimate Plan',
    price: 99,
    description: 'Content integration, Slider Design, Social media integration and True 24 X 7 customer support',
  },
]

export const testimonialsData: TestimonialsType[] = [
  {
    image: avatar1,
    name: 'Adam Ross',
    category: 'Software Developer',
    description:
      'Best of the best service i have got so far consectetur adipisicing elit Numquam aliquid neque voluptates <strong>Never seen in my entire life</strong> iusto ipsam eligendi officia repellat ipsum commodi aspernatur quibusdam doloremque nam ullam labore.',
  },
  {
    image: avatar2,
    name: 'Peter Smith',
    category: 'Customer',
    description:
      'Thanks for the super quick support consectetur adipisicing elit. Numquam aliquid neque voluptates veniam laborum dolore porro totam iusto ipsam eligendi officia repellat ipsum commodi aspernatur quibusdam, doloremque nam ullam labore.',
  },
  {
    image: avatar3,
    name: 'Emma Watson',
    category: 'Human Resource',
    description:
      'So happy to by this template consectetur adipisicing elit Numquam aliquid neque voluptates Never seen in my entire life iusto ipsam eligendi <strong> most amazing template out there!',
  },
  {
    image: avatar4,
    name: 'Emma Watson',
    category: 'Human Resource',
    description:
      'You guys did an amazing work for me. consectetur adipisicing elit. Numquam aliquid neque voluptates veniam laborum dolore porro totam iusto ipsam eligendi officia repellat ipsum commodi aspernatur doloremque ullam labore.',
  },
]

export const faqData: FaqType[] = [
  {
    title: 'How does the 30-day free trial work?',
    description:
      'Go ahead, kick the tires. You have full access to all the features of larexa Standard for 30 days. After 30 days you will need to provide a credit card to continue using the Standard features.',
  },
  {
    title: 'How can I upgrade from Free to Premium plans?',
    description:
      "Larexa's Free plan is free for unlimited users. To upgrade to the Standard plan, log into your account and enter a valid credit card.",
  },
  {
    title: 'What payment options do you accept?',
    description:
      'We accept MasterCard, Visa, and American Express. For customers purchasing an annual subscription, we also accept bank transfers or checks.',
  },
  {
    title: 'What should I do if I miss my delivery?',
    description:
      'We make 3 attempts on 3 continuing business days. In case you miss the delivery, give us a call on (251) 854-6308 or contact us at help@larexa.com',
  },
  {
    title: 'How can I get a refund in case I cancel my plan?',
    description:
      'The refund is provided as per with our cancellation policy. The refund can be credited to the source of payment (Example: debit card, credit card, net banking).',
  },
  {
    title: 'How does the discount work?',
    description:
      'We email you a discount code for 300% off any subscription for one year once you verify your email. Once you get your code, just enter it into the promo code area on your billing page.',
  },
]
