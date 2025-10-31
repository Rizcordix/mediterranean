import team1 from '@/assets/images/team/01.jpg'
import team2 from '@/assets/images/team/02.jpg'
import team3 from '@/assets/images/team/03.jpg'
import team4 from '@/assets/images/team/04.jpg'
import team5 from '@/assets/images/team/05.jpg'
import team6 from '@/assets/images/team/06.jpg'
import team7 from '@/assets/images/team/07.jpg'
import team8 from '@/assets/images/team/08.jpg'
import { StaticImageData } from 'next/image'

type TeamType = {
  name: string
  position: string
  description: string
  image: StaticImageData
}

export const teamData: TeamType[] = [
  {
    name: 'Allen Smith',
    position: 'Founder',
    description: 'I am temporibus voluptatem odio odit ratione perferendis explicabo!',
    image: team1,
  },
  {
    name: 'Jessica Mores',
    position: 'Software Developer',
    description: 'Expert in temporibus voluptatem odio odit ratione perferendis explicabo!',
    image: team2,
  },
  {
    name: 'Emma Watson',
    position: 'Human Resource',
    description: 'Have more then 8 years temporibus voluptatem odio odit ratione perfere!',
    image: team3,
  },
  {
    name: 'Peter Smith',
    position: 'Web Developer',
    description: 'With more then temporibus voluptatem odio odit ratione perferendis!',
    image: team4,
  },
  {
    name: 'Nix Maxwell',
    position: 'Founder',
    description: 'I am voluptatem odio odit ratione perferendis explicabo!',
    image: team5,
  },
  {
    name: 'Mike Ehrmantraut',
    position: 'Software Developer',
    description: "Let's get temporibus voluptatem odio odit ratione perferendis explicabo!",
    image: team6,
  },
  {
    name: 'Walther White',
    position: 'Human Resource',
    description: 'We can voluptatem odit perferendis explicabo ratione!',
    image: team7,
  },
  {
    name: 'Maria Smith',
    position: 'Web Developer',
    description: 'I will temporibus voluptatem odio ratione perferendis explicabo!',
    image: team8,
  },
]
