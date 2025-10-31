import { StaticImageData } from 'next/image'
import portfolio1 from '@/assets/images/portfolio/01.jpg'
import portfolio2 from '@/assets/images/portfolio/02.jpg'
import portfolio3 from '@/assets/images/portfolio/03.jpg'
import portfolio4 from '@/assets/images/portfolio/04.jpg'
import portfolio5 from '@/assets/images/portfolio/05.jpg'
import portfolio6 from '@/assets/images/portfolio/06.jpg'
import portfolio7 from '@/assets/images/portfolio/07.jpg'
import portfolio8 from '@/assets/images/portfolio/08.jpg'
import portfolio9 from '@/assets/images/portfolio/09.jpg'
import portfolio10 from '@/assets/images/portfolio/10.jpg'
import portfolio11 from '@/assets/images/portfolio/11.jpg'
import portfolio12 from '@/assets/images/portfolio/12.jpg'

type PortfolioType = {
  title: string
  category: string
  image: StaticImageData
  categories: string[]
}

export const portfolioData: PortfolioType[] = [
  {
    title: 'Fly in time',
    category: 'Branding, Watch',
    image: portfolio1,
    categories: ['digital'],
  },
  {
    title: 'Waiting window',
    category: 'Photography',
    image: portfolio2,
    categories: ['photography'],
  },
  {
    title: 'Green Book',
    category: 'Graphic',
    image: portfolio3,
    categories: ['marketing', 'digital'],
  },
  {
    title: 'Reebok Sneakers',
    category: 'Sport, Running',
    image: portfolio4,
    categories: ['digital'],
  },
  {
    title: 'Parking garage',
    category: 'Car, Building',
    image: portfolio5,
    categories: ['photography'],
  },
  {
    title: 'The Pink Chair',
    category: 'Workspace',
    image: portfolio6,
    categories: ['marketing', 'digital', 'photography'],
  },
  {
    title: 'Black & white',
    category: 'Photography',
    image: portfolio7,
    categories: ['marketing', 'photography'],
  },
  {
    title: 'Catch the plane',
    category: 'Graphic',
    image: portfolio8,
    categories: ['marketing', 'digital'],
  },
  {
    title: 'Nature book',
    category: 'Book',
    image: portfolio9,
    categories: ['marketing', 'digital'],
  },
  {
    title: 'Book on desk',
    category: 'Work Desk',
    image: portfolio10,
    categories: ['marketing'],
  },
  {
    title: 'Work desk',
    category: 'Workspace',
    image: portfolio11,
    categories: ['digital'],
  },
  {
    title: 'Waiting window',
    category: 'Photography',
    image: portfolio2,
    categories: ['photography'],
  },
  {
    title: 'Green Book',
    category: 'Graphic',
    image: portfolio3,
    categories: ['marketing', 'digital'],
  },
  {
    title: 'Green Tree',
    category: 'Nature',
    image: portfolio12,
    categories: ['photography'],
  },
  {
    title: 'Nature book',
    category: 'Book',
    image: portfolio9,
    categories: ['marketing', 'digital'],
  },
  {
    title: 'Book on desk',
    category: 'Work Desk',
    image: portfolio10,
    categories: ['marketing'],
  },
  {
    title: 'Work desk',
    category: 'Workspace',
    image: portfolio11,
    categories: ['digital'],
  },
  {
    title: 'Black & white',
    category: 'Photography',
    image: portfolio7,
    categories: ['marketing', 'photography'],
  },
]
