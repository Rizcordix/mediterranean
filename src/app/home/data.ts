import { StaticImageData } from 'next/image'

import avatar1 from '@/assets/images/flags/fr.svg'
import avatar2 from '@/assets/images/flags/gr.svg'
import avatar3 from '@/assets/images/flags/uk.svg'
import avatar4 from '@/assets/images/flags/sp.svg'
import avatar5 from '@/assets/images/flag-main/us.svg'


type TestimonialsType = {
  image: StaticImageData
  name: string
  category: string
  description: string
}


export const testimonialsData: TestimonialsType[] = [
  {
  image: avatar5,
  name: 'Michael Smith',
  category: 'Author',
  description:
    'Mediterranean Publishing exceeded my expectations in every way. Their team was professional, communicative, and truly cared about bringing my vision to life. Highly recommend their services!',
},
  {
  image: avatar1,
  name: 'Liam Green',
  category: 'Author',
  description:
    'The best publishing support I’ve received so far. Mediterranean Publishing guided me through every step—professional, patient, and truly dedicated.  Exceptional experience from start to finish.',
},
{
  image: avatar2,
  name: 'John Doe',
  category: 'Client',
  description:
    'Super quick and efficient service! The team responded instantly and delivered beyond expectations. Their attention to detail and commitment to quality really stands out.',
},
{
  image: avatar3,
  name: 'Emma Johnson',
  category: 'Content Creator',
  description:
    'I’m incredibly happy with the final results. Mediterranean Publishing transformed my ideas into something powerful, the most reliable publishing team I’ve worked with!',
},
{
  image: avatar4,
  name: 'Sophia Miller',
  category: 'Author',
  description:
    'You guys did an amazing job on my book. From editing to design, everything was handled with care and professionalism. Truly grateful for the outstanding work.',
},
]
