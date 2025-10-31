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
import avatar1 from '@/assets/images/thumbnails/avatar-01.jpg'
import avatar2 from '@/assets/images/thumbnails/avatar-02.jpg'
import avatar3 from '@/assets/images/thumbnails/avatar-03.jpg'
import avatar4 from '@/assets/images/thumbnails/avatar-04.jpg'

type CompanyType = {
  image: StaticImageData
  title: string
  category: string
}

type TestimonialsType = {
  description: string
  name: string
  role: string
  avatar: StaticImageData
}

export const companyData: CompanyType[] = [
  {
    image: portfolio1,
    title: 'Fly in time',
    category: 'Branding, Watch',
  },
  {
    image: portfolio2,
    title: 'Waiting window',
    category: 'Photography',
  },
  {
    image: portfolio3,
    title: 'Green Book',
    category: 'Graphic',
  },
  {
    image: portfolio4,
    title: 'Reebok Sneakers',
    category: 'Sport, Running',
  },
  {
    image: portfolio5,
    title: 'Parking garage',
    category: 'Car, Building',
  },
  {
    image: portfolio6,
    title: 'The Pink Chair',
    category: 'Workspace',
  },
  {
    image: portfolio7,
    title: 'Black & white',
    category: 'Photography',
  },
  {
    image: portfolio8,
    title: 'Catch the plane',
    category: 'Graphic',
  },
  {
    image: portfolio9,
    title: 'Nature book',
    category: 'Book',
  },
  {
    image: portfolio10,
    title: 'Book on desk',
    category: 'Work Desk',
  },
  {
    image: portfolio11,
    title: 'Work desk',
    category: 'Workspace',
  },
  {
    image: portfolio12,
    title: 'Green Tree',
    category: 'Nature',
  },
]

export const testimonialsData: TestimonialsType[] = [
  {
    description:
      'Best of the best service I have got so far consectetur adipisicing elit Numquam aliquid neque voluptates Never seen in my entire life iusto ipsam eligendi officia repellat ipsum commodi aspernatur quibusdam doloremque nam ullam labore.',
    avatar: avatar1,
    name: 'Adam Ross',
    role: 'Software Developer',
  },
  {
    description:
      'Thanks for the super quick support consectetur adipisicing elit. Numquam aliquid neque voluptates veniam laborum dolore porro totam iusto ipsam eligendi officia repellat ipsum commodi aspernatur quibusdam doloremque nam ullam.',
    avatar: avatar2,
    name: 'Peter Smith',
    role: 'Customer',
  },
  {
    description:
      'So happy to buy this template consectetur adipisicing elit Numquam aliquid neque voluptates Never seen in my entire life iusto ipsam eligendi most amazing template out there!',
    avatar: avatar3,
    name: 'Emma Watson',
    role: 'Human Resource',
  },
  {
    description:
      'You guys did an amazing work for me. Numquam aliquid neque voluptates veniam laborum dolore porro totam iusto ipsam eligendi officia repellat ipsum commodi aspernatur quibusdam, doloremque nam ullam labore.',
    avatar: avatar4,
    name: 'Maria Smith',
    role: 'Web Developer',
  },
]
