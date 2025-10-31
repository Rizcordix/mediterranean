import AppProviders from '@/components/wrappers/AppProviders'
import { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import 'aos/dist/aos.css'
import '@/assets/scss/style.scss'
import { DEFAULT_PAGE_TITLE } from '@/context/constants'

const inter = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Larexa - NextJs | Creative Multipurpose Bootstrap Template',
    default: DEFAULT_PAGE_TITLE,
  },
  description: 'Creative Multipurpose Bootstrap Template',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style suppressHydrationWarning>{}</style>
      </head>
      <body className={inter.className}>
        <div id="__next_splash">
          <AppProviders>{children}</AppProviders>
        </div>
      </body>
    </html>
  )
}
