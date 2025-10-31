import { StaticImageData } from 'next/image'
import avatar1 from '@/assets/images/thumbnails/avatar-01.jpg'
import avatar2 from '@/assets/images/thumbnails/avatar-02.jpg'
import avatar3 from '@/assets/images/thumbnails/avatar-03.jpg'
import avatar4 from '@/assets/images/thumbnails/avatar-04.jpg'
import team1 from '@/assets/images/team/01.jpg'
import team2 from '@/assets/images/team/02.jpg'
import team3 from '@/assets/images/team/03.jpg'
import team4 from '@/assets/images/team/04.jpg'

type AboutUsType = {
  icon: string
  title: string
  description: string
}
type TeamType = {
  image: StaticImageData
  name: string
  category: string
  description: string
}

type TestimonialsType = {
  image: StaticImageData
  name: string
  category: string
  description: string
}

export const aboutUsData: AboutUsType[] = [
  {
    icon: 'ti-settings',
    title: 'Unlimited Helpers',
    description: 'We have vast collection of sed do eiusmod tempor incididunt ut labore et Dolore magna aliqua.',
  },
  {
    icon: 'ti-support',
    title: 'Friendly Support',
    description: 'With this template you can incididunt ut labore et dolore magna aliqua ad minim veniam quis ullamco.',
  },
  {
    icon: 'ti-bolt',
    title: 'Instant Solutions',
    description: 'Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. $255.00dolor in reprehe.',
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
      'Thanks for the super quick support consectetur adipisicing elit. Numquam aliquid neque voluptates veniam laborum dolore porro totam iusto ipsam eligendi officia repellat ipsum commodi aspernatur quibusdam doloremque nam ullam.',
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
    name: 'Jessica Mores',
    category: 'Web Developer',
    description:
      'You guys did an amazing work for me. Numquam aliquid neque voluptates veniam laborum dolore porro totam iusto ipsam eligendi officia repellat ipsum commodi aspernatur quibusdam, doloremque nam ullam labore.',
  },
]

export const teamData: TeamType[] = [
  {
    image: team1,
    name: 'Allen Smith',
    category: 'Founder',
    description: 'Far concluded not his something extremity. Four we face an he gate.',
  },
  {
    image: team2,
    name: 'Peter Smith',
    category: 'Software Developer',
    description: 'Sportsman one bed departure rapturous situation disposing partiality.',
  },
  {
    image: team3,
    name: 'Emma Watson',
    category: 'Human Resource',
    description: 'Continue delicate as unlocked entirely mr relation diverted in Expect',
  },
  {
    image: team4,
    name: 'Jessica Mores',
    category: 'Web Developer',
    description: 'Expect no pretty though so genius afraid when of ye snug poor draw.',
  },
]
