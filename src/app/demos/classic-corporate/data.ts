import blog1 from '@/assets/images/blog/01.jpg'
import blog2 from '@/assets/images/blog/02.jpg'
import blog3 from '@/assets/images/blog/03.jpg'
import blog4 from '@/assets/images/blog/04.jpg'
import { StaticImageData } from 'next/image'

type TeamType = {
  title: string
  description: string
  subTitle: string[]
}

type NewsType = {
  image: StaticImageData
  name: string
  time: string
  title: string
  description: string
  category: string
}

export const teamData: TeamType[] = [
  {
    title: 'Solution Defining',
    description: 'We help our customers better manage their web presence in order to achieve greater success online.',
    subTitle: ['Secure client network', 'Manual updates', 'Installed new routing', 'Setup Windows updates'],
  },
  {
    title: 'Premium Plugins',
    description: "The real challenge before companies in today's world is to make their products appealing to everyone.",
    subTitle: ['Designed machines/server', 'Setup remote monitoring', 'Trained employees', 'Setup employee rotation'],
  },
  {
    title: 'High Performance',
    description: 'With us at your side, you will find the IT solution to achieve your strategic and financial goals.',
    subTitle: ['Setup anti-virus system', 'Responsible for updates', 'Remote support access', 'Troubleshoot issues'],
  },
  {
    title: 'Budget accounting',
    description: 'We are emerging as one of the most promising private talent sourcing and management firms in the world.',
    subTitle: ['Maintained Windows Servers', 'Supported Windows workstations', 'Configured backups', 'Setup a rotation schedule'],
  },
]

export const newsData: NewsType[] = [
  {
    image: blog1,
    name: 'By Allen C',
    time: '2 Hours ago',
    title: 'The Stories Behind those Iconic Blogs',
    description: 'Two assure Edward whence the was. Who worthy yet ten boy denote wonder that!',
    category: 'Trend',
  },
  {
    image: blog2,
    name: 'By Mark C',
    time: '19 Hours ago',
    title: 'Right my front it wound cause fully am sorry',
    description: 'Weeks views her sight old tears sorry suspected its concealed put furnished',
    category: 'Craft',
  },
  {
    image: blog3,
    name: 'By Stephen C',
    time: '1 day ago',
    title: 'Months had too ham cousin remove far spirit',
    description: 'Two assure Edward whence the was. Who worthy yet ten boy denote wonder that!',
    category: 'Business',
  },
  {
    image: blog4,
    name: 'By Smith C',
    time: '2 Days ago',
    title: '7 Great Lessons You Can Learn From Business',
    description: 'Ample order up in of in ready timed blind had now those ought set often which',
    category: 'Creative',
  },
]
