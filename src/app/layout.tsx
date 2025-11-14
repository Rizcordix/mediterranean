import AppProviders from '@/components/wrappers/AppProviders'
import { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import WidgetClientWrapper from '@/components/wrappers/WidgetWrapper'
import { PopupProvider } from '@/components/wrappers/PopupContext'

import 'aos/dist/aos.css'
import '@/assets/scss/style.scss'
// import { DEFAULT_PAGE_TITLE } from '@/context/constants'

const inter = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mediterranean Publishing',
  description:
    'Discover Mediterranean Publishing - Your gateway to captivating stories, expert insights, and vibrant culture. Explore our diverse collection of books and resources today!',
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
          <PopupProvider>
            <AppProviders>{children}</AppProviders>
          </PopupProvider>
        </div>
        <WidgetClientWrapper />
      </body>
    </html>
  )
}
