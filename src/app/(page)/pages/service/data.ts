type ServiceType = {
  icon: string
  title: string
  description: string
}

type ProcessAdvanceType = {
  title: string
  description: string
}

type PricingType = {
  title: string
  price: number
  description: string
  isPopular?: boolean
}

export const serviceData: ServiceType[] = [
  {
    icon: 'ti-panel',
    title: 'Super-easy customizing',
    description:
      'We have vast collection of sed do eiusmod tempor incididunt ut labore et Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
  },
  {
    icon: 'ti-package',
    title: 'Premium Plugins',
    description:
      'With this template you can incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.',
  },
  {
    icon: 'ti-credit-card',
    title: 'Budget accounting',
    description:
      'Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. $255.00 pm Duis aute irure dolor in reprehenderit in voluptate velit.',
  },
  {
    icon: 'ti-layout-slider',
    title: 'Work flow automation',
    description:
      'We have vast collection of sed do eiusmod tempor incididunt ut labore et Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
  },
  {
    icon: 'ti-wallet',
    title: 'Solution Defining',
    description:
      'With this template you can incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.',
  },
  {
    icon: 'ti-share-alt',
    title: 'High Performance',
    description:
      'Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. $255.00 pm Duis aute irure dolor in reprehenderit in voluptate velit.',
  },
]

export const processAdvanceData: ProcessAdvanceType[] = [
  {
    title: 'Planning',
    description: 'The initial step after getting the project is to discuss and plan the skills',
  },
  {
    title: 'Designing',
    description: 'After getting the project requirement, we start working on design',
  },
  {
    title: 'Integration',
    description: 'We test each individual activity and integrate them all together in a process.',
  },
  {
    title: 'Delivery',
    description: 'We deliver the project and upload it to their web server after support maintenance.',
  },
]

export const pricingData: PricingType[] = [
  {
    title: 'Personal Plan',
    price: 20,
    description: 'Content Management System, Installation & Setup, Search engine friendly and Social media integration',
  },
  {
    title: 'Business Plan',
    price: 50,
    description: 'Search engine friendly, Contact form, Social media integration and Mobile and tablet friendly design',
    isPopular: true,
  },
  {
    title: 'Ultimate Plan',
    price: 99,
    description: 'Content integration, Slider Design, Social media integration and True 24 X 7 customer support',
  },
]
