import { StaticImageData } from 'next/image'
import portfolio1 from '@/assets/images/portfolio/01.jpg'
import portfolio2 from '@/assets/images/portfolio/02.jpg'
import portfolio3 from '@/assets/images/portfolio/03.jpg'
import portfolio4 from '@/assets/images/portfolio/04.jpg'
import portfolio5 from '@/assets/images/portfolio/05.jpg'
import portfolio6 from '@/assets/images/portfolio/06.jpg'

type ResultsType = {
  image: StaticImageData
  name: string
  category: string
}

type BlogType = {
  name: string
  title: string
  time: string
  description: string
  category: string
}

export const resultsData: ResultsType[] = [
  {
    image: portfolio1,
    name: 'Fly in time',
    category: 'Branding, Watch',
  },
  {
    image: portfolio2,
    name: 'Waiting window',
    category: 'Photography',
  },
  {
    image: portfolio3,
    name: 'Green Book',
    category: 'Graphic',
  },
  {
    image: portfolio4,
    name: 'Reebok Sneakers',
    category: 'Sport, Running',
  },
  {
    image: portfolio5,
    name: 'Parking garage',
    category: 'Car, Building',
  },
  {
    image: portfolio6,
    name: 'The Pink Chair',
    category: 'Workspace',
  },
]

export const blogData: BlogType[] = [
  {
    category: 'Trend',
    name: 'By Allen C',
    time: '2 Hours ago',
    title: 'The Stories Behind those Iconic Blogs, magazines and news',
    description: 'Two assure Edward whence the was. Who worthy yet ten boy denote wonder that!',
  },
  {
    category: 'Craft',
    name: 'By Mark C',
    time: '19 Hours ago',
    title: 'Right my front it wound cause fully am sorry',
    description: 'Weeks views her sight old tears sorry suspected its concealed put furnished',
  },
  {
    category: 'Business',
    name: 'By Stephen C',
    time: '1 day ago',
    title: 'Months had too ham cousin remove far spirit',
    description: 'Two assure Edward whence the was. Who worthy yet ten boy denote wonder that!',
  },
  {
    category: 'Creative',
    name: 'By Smith C',
    time: '2 Days ago',
    title: '7 Great Lessons You Can Learn From Business',
    description: 'Ample order up in of in ready timed blind had now those ought set often which',
  },
]
