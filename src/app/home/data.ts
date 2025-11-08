import { StaticImageData } from 'next/image'
import checkIcon from '@/assets/images/icons/check-mark.svg'
import editorIcon from '@/assets/images/icons/editor.svg'
import envelopeIcon from '@/assets/images/icons/envelope.svg'

import avatar1 from '@/assets/images/thumbnails/avatar-01.jpg'
import avatar2 from '@/assets/images/thumbnails/avatar-02.jpg'
import avatar3 from '@/assets/images/thumbnails/avatar-03.jpg'
import avatar4 from '@/assets/images/thumbnails/avatar-04.jpg'

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

type TestimonialsType = {
  image: StaticImageData
  name: string
  category: string
  description: string
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
