import { StaticImageData } from 'next/image'
import checkIcon from '@/assets/images/icons/check-mark.svg'
import editorIcon from '@/assets/images/icons/editor.svg'
import envelopeIcon from '@/assets/images/icons/envelope.svg'

type AboutType = {
  image: StaticImageData
  title: string
  description: string
  isPopular?: boolean
}

type ServiceType = {
  icon: string
  title: string
}

export const aboutData: AboutType[] = [
  {
    image: checkIcon,
    title: 'Secure Payments',
    description: 'Depending in newspaper an September do existence strangers. Total great saw water had mirth happy new relation diverted in.',
  },
  {
    image: editorIcon,
    title: 'Payments choice',
    description: 'Continue delicate as unlocked entirely mr relation diverted in. Known not end fully being style house totally of in chiefly.',
    isPopular: true,
  },
  {
    image: envelopeIcon,
    title: 'Friendly Support',
    description: 'Outlived it received he material. Took yourself joy moderate off repeated laughter outweigh screened spot soon led size you.',
  },
]

export const serviceData: ServiceType[] = [
  {
    icon: 'ti-ruler-pencil',
    title: 'Graphic Design',
  },
  {
    icon: 'ti-image',
    title: 'Photography',
  },
  {
    icon: 'ti-announcement',
    title: 'Online Marketing',
  },
  {
    icon: 'ti-truck',
    title: 'Mobile Solutions',
  },
]
