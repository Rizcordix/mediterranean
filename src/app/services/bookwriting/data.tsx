import { StaticImageData } from 'next/image'
import avatar1 from '@/assets/images/thumbnails/avatar-01.jpg'
import avatar2 from '@/assets/images/thumbnails/avatar-02.jpg'
import avatar3 from '@/assets/images/thumbnails/avatar-03.jpg'
import team1 from '@/assets/images/team/01.jpg'
import team2 from '@/assets/images/team/02.jpg'
import team3 from '@/assets/images/team/03.jpg'
import team4 from '@/assets/images/team/04.jpg'

type CompanyType = {
  icon: string
  title: string
  description: string
}

type FaqsType = {
  question: string
  description: string
}

type ClientSlideType = {
  image: StaticImageData
  description: string
  name: string
  category: string
}

type TeamType = {
  image: StaticImageData
  name: string
  category: string
  description: string
}

type BlogType = {
  name: string
  title: string
  time: string
  description: string
  category: string
}

export const companyData: CompanyType[] = [
  {
    icon: 'ti-panel',
    title: 'Creative Solution',
    description:
      'We provide digital transformation solutions, enabling companies to make their visions reality. We help our customers better manage their web presence in order to achieve.',
  },
  {
    icon: 'ti-palette',
    title: 'Client Satisfaction',
    description:
      'With us at your side, you will find the IT solution to achieve your financial goals. We provide digital transformation solutions, enabling companies to make their visions reality.',
  },
  {
    icon: 'ti-gift',
    title: 'Experienced Staff',
    description:
      'We are an innovative Internet marketing solutions company that offers comprehensive web development, SEO strategies and various other types of Internet marketing related services.',
  },
]

export const faqsData: FaqsType[] = [
  {
    question: 'How does free trial work?',
    description: 'You have full access to all the features of larexa Standard for 30 days.',
  },
  {
    question: 'How can I upgrade plans?',
    description: 'To upgrade to the Standard plan, log into your account and enter a valid credit card.',
  },
  {
    question: 'What payment options accepted?',
    description: 'We accept MasterCard and Visa. we also accept bank transfers or checks.',
  },
  {
    question: 'How does the discount work?',
    description: 'Once you get your code, just enter it into the promo code area on your billing page.',
  },
]

export const clientSlideData: ClientSlideType[] = [
  {
    image: avatar1,
    description:
      'Best of the best service i have got so far consectetur adipisicing elit Numquam aliquid neque voluptates <strong>Never seen in my entire life</strong> iusto ipsam eligendi officia repellat ipsum commodi aspernatur quibusdam doloremque nam ullam labore.',
    name: 'Adam Ross',
    category: 'Software Developer',
  },
  {
    image: avatar2,
    description:
      'Thanks for the super quick support consectetur adipisicing elit. Numquam aliquid neque voluptates veniam laborum dolore porro totam iusto ipsam eligendi officia repellat ipsum commodi aspernatur quibusdam, doloremque nam ullam labore.',
    name: 'Peter Smith',
    category: 'Buyer',
  },
  {
    image: avatar3,
    description:
      'You guys did an amazing work for me. consectetur adipisicing elit. Numquam aliquid neque voluptates veniam laborum dolore porro totam iusto ipsam eligendi officia repellat ipsum commodi aspernatur doloremque ullam labore.',
    name: 'Emma Watson',
    category: 'Human Resource',
  },
]

export const teamData: TeamType[] = [
  {
    image: team1,
    name: 'Allen Smith',
    category: 'Founder',
    description: 'Far concluded not his something extremity. Four we face an he gate large an it sense shall an match learn.',
  },
  {
    image: team2,
    name: 'Peter Smith',
    category: 'Software Developer',
    description: 'Sportsman one bed departure rapturous situation disposing partiality By expect it result silent in formal.',
  },
  {
    image: team3,
    name: 'Emma Watson',
    category: 'Human Resource',
    description: 'Continue delicate as unlocked entirely mr relation diverted in Expect eat questions elsewhere assurance.',
  },
  {
    image: team4,
    name: 'Jessica Mores',
    category: 'Web Developer',
    description: 'Expect no pretty though so genius afraid when of ye snug poor draw Appetite in unlocked advanced breeding.',
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
