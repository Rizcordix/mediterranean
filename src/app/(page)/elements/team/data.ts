import { StaticImageData } from 'next/image'
import team1 from '@/assets/images/team/01.jpg'
import team2 from '@/assets/images/team/02.jpg'
import team3 from '@/assets/images/team/03.jpg'
import team4 from '@/assets/images/team/04.jpg'

type TeamType = {
  image: StaticImageData
  name: string
  category: string
  description: string
}

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
