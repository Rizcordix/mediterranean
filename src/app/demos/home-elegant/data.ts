import { StaticImageData } from 'next/image'
import markIcon from '@/assets/images/icons/check-mark.svg'
import editIcon from '@/assets/images/icons/edit.svg'
import envelopeIcon from '@/assets/images/icons/envelope.svg'

type StepsType = {
  icon: StaticImageData
  title: string
  description: string
}

type PricingType = {
  title: string
  price: number
  description: string
  isPopular?: boolean
}

export const stepsData: StepsType[] = [
  {
    icon: markIcon,
    title: 'Secure Payments',
    description: 'Depending in newspaper an September do existence strangers. Total great saw water had mirth happy new relation diverted in.',
  },
  {
    icon: editIcon,
    title: 'Payments choice',
    description: 'Continue delicate as unlocked entirely mr relation diverted in. Known not end fully being style house totally of in chiefly.',
  },
  {
    icon: envelopeIcon,
    title: 'Friendly Support',
    description: 'Outlived it received he material. Took yourself joy moderate off repeated laughter outweigh screened spot soon led size you.',
  },
]

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
