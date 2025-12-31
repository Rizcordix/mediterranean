import AppProviders from '@/components/wrappers/AppProviders'
import { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import WidgetClientWrapper from '@/components/wrappers/WidgetWrapper'
import { PopupProvider } from '@/components/wrappers/PopupContext'
import PopupClientWrapper from "@/components/popup/popupclient";
import Script from 'next/script'
import { DiscountPopupProvider } from '@/components/popup/DiscountPopupContext'

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
          <DiscountPopupProvider>
          <PopupProvider>
            <AppProviders>{children}</AppProviders>
            <Script
          src="https://embed.tawk.to/6954e038d5d3bd197b4d818f/1jdponnti"
          strategy="afterInteractive"
          async
        />
          </PopupProvider>
          </DiscountPopupProvider>
        </div>
          <PopupClientWrapper />
        <WidgetClientWrapper />
      </body>
    </html>
  )
}

