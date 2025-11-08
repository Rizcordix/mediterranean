import { StaticImageData } from 'next/image'
import avatar1 from '@/assets/images/thumbnails/avatar-01.jpg'
import avatar2 from '@/assets/images/thumbnails/avatar-02.jpg'
import avatar3 from '@/assets/images/thumbnails/avatar-03.jpg'

type AboutType = {
  title: string
  description: string
}

type WhyUsType = {
  image: StaticImageData
  name: string
  category: string
  description: string
}

export const aboutUsData: AboutType[] = [
  {
    title: 'Research',
    description: 'We start with Research consectetur adipisicing elit. Placeat alias optio repellendus recusandae odio praesentiu',
  },
  {
    title: 'Design',
    description: 'In this step Placeat alias optio repellendus recusandae odio praesentium consectetur adipisicing odio elit',
  },
  {
    title: 'Develop',
    description: 'We build with Developer consectetur adipisicing elit Placeat alias optio repellendus recusandae odio praesentium',
  },
  {
    title: 'Launch',
    description: 'Final step of success consectetur optio adipisicing elit Placeat alias optio repellendus recusandae odio done',
  },
]

export const whyUsData: WhyUsType[] = [
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
    category: 'Buyer',
    description:
      'Thanks for the super quick support consectetur adipisicing elit. Numquam aliquid neque voluptates veniam laborum dolore porro totam iusto ipsam eligendi officia repellat ipsum commodi aspernatur quibusdam, doloremque nam ullam labore.',
  },
  {
    image: avatar3,
    name: 'Emma Watson',
    category: 'Human Resource',
    description:
      'You guys did an amazing work for me. consectetur adipisicing elit. Numquam aliquid neque voluptates veniam laborum dolore porro totam iusto ipsam eligendi officia repellat ipsum commodi aspernatur doloremque ullam labore.',
  },
]
