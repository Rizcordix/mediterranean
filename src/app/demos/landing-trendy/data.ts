import { StaticImageData } from 'next/image'
import team1 from '@/assets/images/team/01.jpg'
import team2 from '@/assets/images/team/02.jpg'
import team3 from '@/assets/images/team/03.jpg'
import team4 from '@/assets/images/team/04.jpg'

type TeamType = {
  image: StaticImageData
  name: string
  category: string
}

type PricingType = {
  title: string
  price: number
  description: string
  isPopular?: boolean
}

export const teamData: TeamType[] = [
  {
    image: team1,
    name: 'Allen Smith',
    category: 'Founder',
  },
  {
    image: team2,
    name: 'Jessica Mores',
    category: 'Software Developer',
  },
  {
    image: team3,
    name: 'Emma Watson',
    category: 'Human Resource',
  },
  {
    image: team4,
    name: 'Peter Smith',
    category: 'Web Developer',
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
