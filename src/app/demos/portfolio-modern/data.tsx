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

type CompanyType = {
  image: StaticImageData
  title: string
  category: string
  categories: string[]
}

export const companyData: CompanyType[] = [
  {
    image: portfolio1,
    title: 'Fly in time',
    category: 'Branding, Watch',
    categories: ['digital'],
  },
  {
    image: portfolio2,
    title: 'Waiting window',
    category: 'Photography',
    categories: ['photography'],
  },
  {
    image: portfolio3,
    title: 'Green Book',
    category: 'Graphic',
    categories: ['marketing', 'digital'],
  },
  {
    image: portfolio4,
    title: 'Reebok Sneakers',
    category: 'Sport, Running',
    categories: ['digital'],
  },
  {
    image: portfolio5,
    title: 'Parking garage',
    category: 'Car, Building',
    categories: ['digital'],
  },
  {
    image: portfolio6,
    title: 'The Pink Chair',
    category: 'Workspace',
    categories: ['marketing', 'digital', 'photography'],
  },
  {
    image: portfolio7,
    title: 'Black & white',
    category: 'Photography',
    categories: ['marketing', 'photography'],
  },
  {
    image: portfolio8,
    title: 'Catch the plane',
    category: 'Graphic',
    categories: ['marketing', 'digital'],
  },
  {
    image: portfolio9,
    title: 'Nature book',
    category: 'Book',
    categories: ['marketing', 'digital'],
  },
  {
    image: portfolio10,
    title: 'Book on desk',
    category: 'Work Desk',
    categories: ['marketing'],
  },
  {
    image: portfolio11,
    title: 'Work desk',
    category: 'Workspace',
    categories: ['digital'],
  },
  {
    image: portfolio12,
    title: 'Green Tree',
    category: 'Nature',
    categories: ['photography'],
  },
]
