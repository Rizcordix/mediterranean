import { StaticImageData } from 'next/image'
import clients3 from '@/assets/images/clients/03.png'
import clients2 from '@/assets/images/clients/02.png'
import clients1 from '@/assets/images/clients/01.png'
import clients4 from '@/assets/images/clients/04.png'
import portfolio1 from '@/assets/images/portfolio/01.jpg'
import portfolio2 from '@/assets/images/portfolio/02.jpg'
import portfolio3 from '@/assets/images/portfolio/03.jpg'
import portfolio4 from '@/assets/images/portfolio/04.jpg'
import portfolio11 from '@/assets/images/portfolio/11.jpg'
import portfolio12 from '@/assets/images/portfolio/12.jpg'

type ClientsType = {
  image: StaticImageData
  title: string
  description: string
}

type CompanyType = {
  image: StaticImageData
  title: string
  category: string
}

export const clientsData: ClientsType[] = [
  {
    image: clients3,
    title: 'Free access',
    description: 'Depending in newspaper an September do existence strangers. Total great saw water new relation diverted.',
  },
  {
    image: clients2,
    title: 'Awesome interface',
    description: 'Continue delicate as unlocked entirely mr relation diverted in. Known not end fully being totally of in chiefly.',
  },
  {
    image: clients1,
    title: 'Retina supported',
    description: 'Outlived it received he material. Took yourself joy moderate off repeated laughter screened spot soon size you.',
  },
  {
    image: clients4,
    title: 'User friendly',
    description: 'Continue delicate as unlocked entirely mr relation diverted in. Known not end fully being style house totally.',
  },
]

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
